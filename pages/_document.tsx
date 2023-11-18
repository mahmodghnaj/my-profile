import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="font-sans bg-neutral-50 dark:text-white dark:bg-[url('/bg.png')]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
