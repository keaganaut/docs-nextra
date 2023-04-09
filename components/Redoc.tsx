import { RedocStandalone } from "redoc";

export const Redoc = (props) => {
  return (
    <main className="bg-[rgb(23, 24, 28)]">
      <RedocStandalone
        spec={props.spec}
        options={{
          nativeScrollbars: false,
          //temp-fix for sticky redoc sidebar top offset
          disableSearch: false,
          hideLoading: false,
          hideDownloadButton: true,
          hideHostname: true,
          hideSchemaPattern: false,
          pathInMiddlePanel: true,
          theme: {
            colors: {
              error: { main: "#e25353" },
              success: { main: "#209661" },
              gray: {},
              primary: { main: "rgb(23, 24, 28)" },
              http: {
                get: "#209661",
                post: "#0f8cc6",
                patch: "#d74cb6",
                delete: "#e25353",
              },
              responses: {
                error: { tabTextColor: "#e25353" },
                success: { tabTextColor: "#209661" },
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
            spacing: { sectionVertical: 24 },
            rightPanel: {
              backgroundColor: "rgb(23, 24, 28)",
              textColor: "rgba(255, 255, 255, 0.64)",
              width: "50%",
            },

            fab: {
              backgroundColor: "#5720bc",
              color: "rgba(255, 255, 255, 0.94)",
            },
            schema: {
              typeTitleColor: "rgba(255, 255, 255, 0.64)",
              requireLabelColor: "#ca6a31",
              typeNameColor: "rgba(255, 255, 255, 0.32)",
              linesColor: "#6f25ec",
              arrow: { color: "#6f25ec" },
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
