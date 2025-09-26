import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Preload CSS without blocking render */}
        <link
          rel="preload"
          href="/css/7175bac3853c790e.css"
          as="style"
          onLoad={(e) => {
            const link = e.currentTarget as HTMLLinkElement;
            link.onload = null;
            link.rel = "stylesheet";
          }}
        />
        <link
          rel="preload"
          href="/css/97358ac400c785a3.css"
          as="style"
          onLoad={(e) => {
            const link = e.currentTarget as HTMLLinkElement;
            link.onload = null;
            link.rel = "stylesheet";
          }}
        />

        {/* ✅ Fallback for no-JS */}
        <noscript>
          <link rel="stylesheet" href="/css/7175bac3853c790e.css" />
          <link rel="stylesheet" href="/css/97358ac400c785a3.css" />
        </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
