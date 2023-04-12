import "@code-hike/mdx/dist/index.css";
import { Analytics } from "@vercel/analytics/react";

// @ts-ignore
import { HelpWidget } from "components/HelpWidget";
import { AppProps } from "next/app";
import "../styles/custom-ch.css";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HelpWidget />
      <Component {...pageProps} />
      <Analytics debug={false} />
    </>
  );
}
