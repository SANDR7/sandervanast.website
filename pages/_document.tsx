import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
        <link href="/static/favicons/site.webmanifest" rel="manifest" />
        <link
          href="/static/favicons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/static/favicons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/static/favicons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          color="#FF7B47"
          href="/static/favicons/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <meta content="#F9F9F9" name="theme-color" />
        <meta content="#F9F9F9" name="msapplication-TileColor" />
        <script
          async
          src="https://kit.fontawesome.com/e48f77a7cf.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body className="transition-colors bg-gray-light dark:bg-gray-dark text-gray-dark dark:text-gray-light">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
