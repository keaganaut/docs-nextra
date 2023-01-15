import Document, { Head, Html, Main, NextScript } from "next/document";
import { SkipNavLink } from "nextra-theme-docs/.";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <SkipNavLink />
          <Main />
          <NextScript />
          <script
            src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"
            async
            defer
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
