import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
    
  return (
    <Html lang="en" className='dark'>
      <Head>
      </Head>
      <body className="bg-white dark:bg-black text-white dark:text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;