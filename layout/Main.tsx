import Head from 'next/head';
import React, { FC, ReactNode } from 'react';
import Navigation from './Navigation';

interface MainProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const PageContainer: FC<MainProps> = ({ children, ...customMeta }) => {

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
      </Head>

<div className='Container'>
      <Navigation/>
</div>
    

      <main id='skip' className='Container'>{children}</main>
    </>
  );
};

export default PageContainer;
