import { RedocStandalone } from "redoc";

export const Redoc = (props) => {
  return (
    <main className="bg-[rgb(23, 24, 28)]">
      <RedocStandalone
        spec={props.spec}
        options={{
          hideLoading: true,
          theme: {
            colors: {
              primary: { main: "rgb(23, 24, 28)" },
              http: { get: "#209661", post: "#0f8cc6", patch: "#d74cb6" },
              responses: {
                error: {},
              },

              text: {
                primary: "#d1d1d1",
                secondary: "rgba(255, 255, 255, 0.32)",
              },
            },
            sidebar: {
              backgroundColor: "rgb(23, 24, 28)",
              textColor: "rgba(255, 255, 255, 0.64)",
              activeTextColor: "rgba(255, 255, 255, 0.94)",
            },
            rightPanel: {
              backgroundColor: "rgb(23, 24, 28)",
              textColor: "rgba(255, 255, 255, 0.64)",
            },
            fab: { backgroundColor: "#846dff" },
            schema: {
              typeTitleColor: "rgba(255, 255, 255, 0.64)",
              requireLabelColor: "#ca6a31",
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
