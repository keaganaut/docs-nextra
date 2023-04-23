import * as duckdb from "@duckdb/duckdb-wasm";
import Editor from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";

//TODO: error handling for invalid queries
//TODO: add data using parquet: https://github.com/duckdb/duckdb-wasm/tree/master/packages/duckdb-wasm
//TODO: preview query table
//TODO: test answer check

export const Table = ({ data }) => {
  // Extract the keys from the first object in the data array
  const tableHeader = Object.keys(data[0]);

  return (
    <table>
      <thead>
        <tr>
          {tableHeader.map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {tableHeader.map((key) => (
              <td key={key}>{row[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const Ducky = () => {
  const [db, setDb] = useState<duckdb.AsyncDuckDB>();
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const initDb = async () => {
      const JSDELIVR_BUNDLES = duckdb.getJsDelivrBundles();
      const bundle = await duckdb.selectBundle(JSDELIVR_BUNDLES);
      const worker_url = URL.createObjectURL(
        new Blob([`importScripts("${bundle.mainWorker!}");`], {
          type: "text/javascript",
        })
      );
      const worker = new Worker(worker_url);
      const logger = new duckdb.ConsoleLogger();
      const db = new duckdb.AsyncDuckDB(logger, worker);
      await db.instantiate(bundle.mainModule, bundle.pthreadWorker);
      URL.revokeObjectURL(worker_url);
      setDb(db);

      // Connect to the database and load data into a table
      const connection = await db.connect();

      const foo = "INSERT INTO my_table VALUES (3, 'Bob', 180); ".repeat(10);

      await connection.query(`
          CREATE TABLE my_table (id INTEGER, name VARCHAR, height integer);
          INSERT INTO my_table VALUES (1, 'John', 170);
          INSERT INTO my_table VALUES (2, 'Jane', 165);
          INSERT INTO my_table VALUES (3, 'Bob', 180);
          ${foo}
        `);

      connection.close();
    };

    initDb();
  }, []);

  const handleQuery = async () => {
    if (!db) return;

    const queryString = editorRef.current.getValue();

    const connection = await db.connect();
    const result = await connection.query(
      //   "SELECT id, name, sum(height) FROM my_table group by id, name"
      queryString
    );
    connection.close();
    setTableData(result.toArray());
  };

  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  return (
    <div className="p-4">
      <main className="flex flex-row">
        <Editor
          className="h-96 w-48 overflow-hidden rounded-md"
          width="80vh"
          defaultLanguage="sql"
          defaultValue="SELECT * from my_table"
          language="sql"
          theme="vs-dark"
          onMount={handleEditorDidMount}
          options={{
            autoClosingBrackets: "always",
            padding: { top: 25 },
            minimap: { enabled: false },
            wordWrap: "on",
          }}
        />

        <section className="ml-16">
          <button
            className="border border-purple-500 py-2 px-4"
            onClick={handleQuery}
          >
            Run Query
          </button>
          {tableData?.length > 0 && <Table data={tableData} />}
        </section>
      </main>
    </div>
  );
};
