import * as duckdb from "@duckdb/duckdb-wasm";
import { useEffect, useState } from "react";
// import { Table } from "./Table";

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
      await connection.query(`
        CREATE TABLE mytable (id INTEGER, name VARCHAR, height integer);
        INSERT INTO mytable VALUES (1, 'John', 170);
        INSERT INTO mytable VALUES (2, 'Jane', 165);
        INSERT INTO mytable VALUES (3, 'Bob', 180);
      `);
    };

    initDb();
  }, []);

  const handleQuery = async () => {
    if (!db) return;
    const connection = await db.connect();
    const result = await connection.query(
      "SELECT height*20 as super_height, name, id FROM mytable"
    );
    setTableData(result.toArray());
  };

  return (
    <div>
      <button onClick={handleQuery}>Run Query</button>

      {tableData?.length > 0 && <Table data={tableData} />}
    </div>
  );
};
