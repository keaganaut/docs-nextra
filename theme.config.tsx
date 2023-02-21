import { DocsThemeConfig, Navbar } from "nextra-theme-docs";

const Logo = ({ height, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 18}
      height={height || 18}
      fill="none"
      viewBox="0 0 608 128"
    >
      <path
        fill="#742BF2"
        d="M42.152 82.533C54.36 93.857 62 110.036 62 128h58c0-37.993-17.657-71.863-45.212-93.85L42.152 82.533zM59.917 24.006C42.286 13.826 21.823 8 0 8v58c9.806 0 19.08 2.276 27.323 6.33l32.594-48.324z"
      ></path>
      <path
        fill="#EB864D"
        d="M96 24c0 13.255 10.745 24 24 24s24-10.745 24-24-10.745-24-24-24-24 10.745-24 24z"
      ></path>
      <path
        fill="#fff"
        d="M492 8h84c17.673 0 32 14.327 32 32v8c0 17.673-14.327 32-32 32h-64v24h96v24H488V88c0-17.673 14.327-32 32-32h64V32h-92V8zM312 8h-24v48h-72V8h-24v40c0 17.673 14.327 32 32 32h16v48h24V80h16c17.673 0 32-14.327 32-32V8zM456 8h-24v48h-72V8h-24v40c0 17.673 14.327 32 32 32h64v48h24V80h16V56h-16V8z"
      ></path>
    </svg>
  );
};

const config: DocsThemeConfig = {
  logo: <Logo height={64} width={96} />,
  logoLink: "/docs",
  project: {
    link: "https://github.com/keaganaut/docs-nextra",
  },

  docsRepositoryBase: "https://github.com/keaganaut/docs-nextra",
  footer: {
    text: "Docs MVP using Nextra",
  },
  primaryHue: 269,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent({ title, type }) {
      // if (title === "Ingest") {
      //   return (
      //     <>
      //       <IntegrationIcon /> {title}
      //     </>
      //   );
      // }

      // if (title === "Transform") {
      //   return (
      //     <>
      //       <ModelIcon />
      //       {title}
      //     </>
      //   );
      // }
      return <>{title}</>;
    },
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: "dark",
  },
  navbar: {
    component: Navbar,
  },

  i18n: [],
};

export default config;
