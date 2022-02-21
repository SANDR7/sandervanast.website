import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Script src="https://kit.fontawesome.com/e48f77a7cf.js" strategy='afterInteractive'></Script>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
