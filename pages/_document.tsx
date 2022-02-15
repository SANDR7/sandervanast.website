import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        {/* <link href="/static/favicons/favicon.ico" rel="shortcut icon" /> */}
        {/* <link href="/static/favicons/site.webmanifest" rel="manifest" /> */}
        <meta content="#F9F9F9" name="theme-color" />
        <meta content="#F9F9F9" name="msapplication-TileColor" />
        <script
          async
          src="https://kit.fontawesome.com/e48f77a7cf.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body className="transition-colors bg-gray-light dark:bg-gray-dark  text-gray-dark dark:text-gray-light">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
