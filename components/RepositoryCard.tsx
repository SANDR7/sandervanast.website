import Link from 'next/link';
import React, { FC } from 'react';
import { repoProps } from '../types/repos';

const RepositoryCard: FC<repoProps> = ({
  name,
  description,
  language,
  stargazers_count: stars,
  html_url,
  full_name,
  topics,
  homepage
}) => {
  return (
    <a href={html_url} className="Card" target="_blank" rel="noreferrer">
      <div>
        <h3 className="header">
          {homepage ? (
            <Link href={homepage} passHref>
              <a target="_blank" rel="noreferrer">{name}</a>
            </Link>
          ) : (
            name
          )}
        </h3>
        {description && (
          <p className="text-gray-mid text-base">{description}</p>
        )}
      </div>

      <div className="flex justify-between">
        <div>{language}</div>
        <div>{stars} stars</div>
      </div>
    </a>
  );
};
export default RepositoryCard;
