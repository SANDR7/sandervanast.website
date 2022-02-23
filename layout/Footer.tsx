import matter from 'gray-matter';
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import { NowPlaying } from '../components/NowPlaying';
import { postFilePaths, getSources } from '../utils/mdx';

interface LinkProps {
  href: string;
  children: ReactNode;
}

const ExternalLink: FC<LinkProps> = ({ href, children }) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
);

const Status: FC<{ title: string; iconStyle: string; text: string }> = ({
  title,
  iconStyle,
  text
}) => {
  return (
    <div className="gap-2 flex">
      <i className={iconStyle}></i>
      <div className="hidden sm:flex flex-col">
        <span className="font-semibold text-xl">{title}</span>
        <span className="font-thin">{text}</span>
      </div>
    </div>
  );
};

export const Footer = () => {
  const isAvailable = true;

  return (
    <>
      <hr className="w-full border-1 mb-2 mt-24" />

      <div className="my-10 flex justify-between">
        <div>
          {isAvailable ? (
            <Status
              title="Available to create!"
              iconStyle="fa-solid fa-square-check text-2xl pt-1 text-green"
              text="For everyone"
            />
          ) : (
            <Status
              title="Currently creating"
              text="For @someone"
              iconStyle="fa-solid fa-square-xmark text-2xl pt-1 text-red"
            />
          )}
        </div>
        <div>
          <NowPlaying />
        </div>
      </div>

      <div className="grid sm:grid-cols-4 sm:text-center pb-20">
        <div className="flex flex-col my-2 space-y-4">
          <Link passHref href="/">
            <a>Home</a>
          </Link>
          <Link passHref href="/about">
            <a>About</a>
          </Link>
          <Link passHref href="/journal">
            <a>Journal</a>
          </Link>
        </div>
        <div className="flex flex-col my-2 space-y-4">
          <ExternalLink href="https://github.com/SANDR7">Github</ExternalLink>
          <ExternalLink href="https://www.instagram.com/sander.ast/">
            Instagram
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/sander-van-ast/">
            LinkedIn
          </ExternalLink>
          <ExternalLink href="https://dribbble.com/SANDR7">
            Dribbble
          </ExternalLink>
        </div>
        <div className="flex flex-col my-2 space-y-4">
          <ExternalLink href="https://cdn.sanity.io/files/pjowr1ws/sanity-data/aaaf80fadcb0ada28f1ace442f92f3e3d2480edd.pdf">
            CV
          </ExternalLink>
          <ExternalLink href="https://www.paypal.com/paypalme/SndrOfficial">
            Donate
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-6">
          <Link href={'/journal/secret'}>
            <a>Secret</a>
          </Link>
          <Link href={'/journal/hello'}>
            <a>Hello</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
