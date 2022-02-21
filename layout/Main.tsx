import Head from 'next/head';
import React, { FC, ReactNode } from 'react';
import Footer from './Footer';
import Navigation from './Navigation';

interface MainProps {
  children: ReactNode;
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  date?: string;
}

const PageContainer: FC<MainProps> = (props) => {
  const { children, ...customMeta } = props;
  const meta = {
    title: 'Sander van Ast — Developer & Designer',
    description: `Typescript enthusiast, Graphic Designer, and open minded.`,
    image: './static/images/banner.png',
    type: 'website',
    ...customMeta
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        {/* default */}
        <meta property="og:site_name" content="Sander van Ast" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:image" content={meta.image} />
        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@SANDR7" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <header className="Container">
        <Navigation />
      </header>

      <main id="skip" className="Container">
        {children}
      </main>

      <footer className='Container'>
        <Footer/>
      </footer>
    </>
  );
};

export default PageContainer;
