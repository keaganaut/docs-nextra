import { RedocStandalone } from "redoc";

export const Redoc = (props) => {
  return (
    <main className="bg-gray-100">
      <RedocStandalone
        spec={props.spec}
        options={{
          hideLoading: true,
          theme: {
            colors: {
              primary: { main: "#6E26EC" },
              http: { get: "#1F8253", post: "#0C79B1", patch: "#AD5D2A" },
              responses: {
                error: {},
              },
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
            typography: {
              code: { backgroundColor: "#1E2025", color: "#CC6C32" },
            },
          },
        }}
      />
    </main>
  );
};

// export async function getStaticProps() {
//   const res = await fetch("https://api.dev.y42.dev/gateway/openapi.json");
//   const spec = await res.json();

//   // fallback to read openapispec from filesystem
//   // const filePath = path.join(process.cwd(), "./redoc/y42_openapi.json");
//   // const jsonData = await fsPromises.readFile(filePath);
//   // const objectData = JSON.parse(jsonData.toString());

//   return {
//     props: { openApiSpec: spec },
//     revalidate: 3600,
//   };
// }
