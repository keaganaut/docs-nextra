import { Analytics } from "@vercel/analytics/react";
import { AppProps } from "next/app";
import "../styles/globals.css";
import "@code-hike/mdx/dist/index.css";
import "../styles/custom-ch.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
