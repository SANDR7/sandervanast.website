import Link from 'next/link';
import React, { FC } from 'react';
import { repoProps } from '../types/repos';
import { ExternalLink } from '../utils/externalLink';

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
            <ExternalLink href={homepage}>{name}</ExternalLink>
          ) : (
            name
          )}
        </h3>
        {description && <p className="textMidGray text-base">{description}</p>}
      </div>

      <div className="flex justify-between">
        <div>{language}</div>
        <div>{stars} stars</div>
      </div>
    </a>
  );
};
export default RepositoryCard;
