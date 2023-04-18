import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mahmod Ghnaj</title>
        <meta name="title" content="Mahmod Ghnaj"></meta>
        <meta
          name="description"
          content="Mahmod Ghnaj Software Engineer für ReactJS, TypeScript, NodeJS"
        ></meta>
        <link rel="icon" href="/logo.jpeg" type="image/icon type" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
