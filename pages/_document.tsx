import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en">
      <body className="transition-colors bg-gray-light dark:bg-gray-dark  text-gray-dark dark:text-gray-light">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
