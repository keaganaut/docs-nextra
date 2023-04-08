import "@code-hike/mdx/dist/index.css";
import { Analytics } from "@vercel/analytics/react";
import { AppProps } from "next/app";
import "../styles/custom-ch.css";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics debug={false} />
    </>
  );
}
