import fsPromises from "fs/promises";
import Link from "next/link";
import path from "path";
import { RedocStandalone } from "redoc";

export default function ApiReference(props) {
  return (
    <div>
      <div className="custom-nav-container sticky top-0 z-20 w-full bg-transparent">
        <nav className="h-12 bg-[#111] p-4 border-b-[2px] border-b-[#212121] text-[#d1d1d1] text-sm flex flex-row items-center">
          <Link href="/"> Back </Link>
        </nav>
      </div>

      <main className="relative bg-[#111]">
        <RedocStandalone
          spec={props.openApiSpec}
          options={{
            hideLoading: true,
            theme: {
              colors: {
                primary: { main: "#6E26EC" },
                http: {},
                responses: {},
                text: {
                  primary: "#d1d1d1",
                  secondary: "#ffffff52",
                },
              },
              sidebar: {
                backgroundColor: "#111",
                textColor: "#737373",
                activeTextColor: "#6E26EC",
              },
              rightPanel: { backgroundColor: "#2f2338", textColor: "#737373" },
              fab: { backgroundColor: "#d1d1d1" },
              schema: {
                typeTitleColor: "#ffffff52",
                requireLabelColor: "#E35755",
              },
              typography: { code: { color: "#ffff10" } },
            },
          }}
        />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "./redoc/y42_openapi.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());

  return {
    props: { openApiSpec: objectData },
  };
}
