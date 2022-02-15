import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
    
  return (
    <Html lang="en">
      <Head>
      </Head>
      <body className="transition-colors bg-gray-light dark:bg-gray-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;