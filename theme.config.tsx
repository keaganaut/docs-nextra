import { DocsThemeConfig } from "nextra-theme-docs";
import { Footer } from "./components/Footer";
import Y42Logo from "./components/Y42Logo";

const config: DocsThemeConfig = {
  logo: <Y42Logo height={22} />,
  logoLink: "/docs",
  project: {
    link: "https://github.com/keaganaut/docs-nextra",
  },

  docsRepositoryBase: "https://github.com/keaganaut/docs-nextra/tree/dev",
  footer: {
    component: <Footer />,
  },
  primaryHue: 269,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  darkMode: true, //display dark mode selector component
  nextThemes: {
    defaultTheme: "dark",
    // forcedTheme: "dark",
  },
  feedback: {
    content: null,
  },
  editLink: {
    text: "Edit this page",
  },
};

export default config;
