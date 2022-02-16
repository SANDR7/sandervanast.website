import Link from 'next/link';
import React, { FC, ReactNode } from 'react';

interface RowProps {
  title: string;
  description?: string;
  link?: {
    url: string;
    name: string;
  };
  linkNewTab?: boolean;
  children: ReactNode;
}

const Row: FC<RowProps> = ({
  title,
  description,
  link,
  children,
  linkNewTab = false
}) => {
  return (
    <div className="Row">
      <h2 className="header">{title}...</h2>
      {description && <p className="text-gray-mid">{description}</p>}
      {link && (
        <span className="group flex items-center">
          <Link href={link.url} passHref>
            <a target={linkNewTab ? '_blank' : '_self'}>{link.name}</a>
          </Link>
          <i className="fa-solid fa-arrow-right ml-1 mt-[3px] transition-[transform] translate-x-1 group-hover:-rotate-45 group-hover:translate-x-3"></i>
        </span>
      )}
      <div className='mt-6'>{children}</div>
    </div>
  );
};

export default Row;
