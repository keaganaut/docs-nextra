const { remarkCodeHike } = require("@code-hike/mdx");
const theme = require("shiki/themes/slack-dark.json");

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  mdxOptions: {
    remarkPlugins: [
      [
        remarkCodeHike,
        { theme: theme, lineNumbers: true, showCopyButton: true },
      ],
    ],
  },
});

const redirectIndexPage = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/docs",
        permanent: true,
      },
    ];
  },
};

module.exports = withNextra(redirectIndexPage);

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
