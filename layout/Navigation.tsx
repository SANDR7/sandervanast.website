import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';

interface NavItemProps {
  href: string;
  text: string;
}

const NavItem: FC<NavItemProps> = ({ href, text }) => {
  const router = useRouter();

  const isActive = router.asPath === href;

  return (
    <Link href={href} passHref>
      <a
        className={`py-2 px-4  hover:Card rounded-lg ${
          isActive ? 'font-semibold' : 'textMidGray'
        }`}
      >
        {text}
      </a>
    </Link>
  );
};

const Navigation: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <>
      <a href="#skip" className="skip">
        Skip to content
      </a>
      <div className="flex justify-between py-4 items-center">
        <button
          className="p-2 Card rounded-lg"
          aria-label="Toggle Dark Mode"
          type="button"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
          {resolvedTheme === 'dark' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 24 24"
              aria-labelledby="sunIconTitle"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="square"
              strokeLinejoin="miter"
              fill="none"
            >
              {' '}
              <circle cx="12" cy="12" r="4" />{' '}
              <path d="M12 5L12 3M12 21L12 19M5 12L2 12 5 12zM22 12L19 12 22 12zM16.9497475 7.05025253L19.0710678 4.92893219 16.9497475 7.05025253zM4.92893219 19.0710678L7.05025253 16.9497475 4.92893219 19.0710678zM16.9497475 16.9497475L19.0710678 19.0710678 16.9497475 16.9497475zM4.92893219 4.92893219L7.05025253 7.05025253 4.92893219 4.92893219z" />{' '}
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 24 24"
              aria-labelledby="moonIconTitle"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="square"
              strokeLinejoin="miter"
              fill="none"
            >
              {' '}
              <path d="M10.423839,3 C10.1490474,3.80837289 10,4.67486099 10,5.57616098 C10,9.99443898 13.581722,13.576161 18,13.576161 C18.9013,13.576161 19.7677881,13.4271135 20.576161,13.152322 C19.5038921,16.3066875 16.516978,18.576161 13,18.576161 C8.581722,18.576161 5,14.994439 5,10.576161 C5,7.05918297 7.26947343,4.07226889 10.423839,3 Z" />{' '}
            </svg>
          )}
        </button>

        <nav className="flex gap-x-1">
          <NavItem href="/" text="Home" />
          <NavItem href="/journal" text="Journal" />
        </nav>
      </div>
    </>
  );
};
export default Navigation;
