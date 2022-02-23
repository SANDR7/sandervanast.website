import { FC, ReactNode } from "react";

interface LinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}


export const ExternalLink: FC<LinkProps> = ({ href, className, children }) => (
  <a target="_blank" rel="noopener noreferrer" className={className} href={href}>
    {children}
  </a>
);
