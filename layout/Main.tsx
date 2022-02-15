import Head from 'next/head';
import { useTheme } from 'next-themes';
import React, { FC, ReactNode, useEffect, useState } from 'react';

interface MainProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const PageContainer: FC<MainProps> = ({ children, ...customMeta }) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

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
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        {resolvedTheme === 'dark' ? <span>light</span> : <span>dark</span>}
      </button>

      <main className='Container'>{children}</main>
    </>
  );
};

export default PageContainer;