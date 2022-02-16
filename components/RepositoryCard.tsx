import React, { FC } from 'react';
import { repoProps } from '../types/repos';

const RepositoryCard: FC<repoProps> = ({
  name,
  description,
  language,
  stargazers_count: stars,
  html_url,
  full_name,
  topics
}) => {
  return (
    <a href={html_url} className="Card" target="_blank" rel="noreferrer">
      <div>
        <h3>{full_name}</h3>
      {description && <p className="text-gray-mid">{description}</p>}
      </div>

      <div className='flex justify-between'>
        <div>{language}</div>
        <div>{stars} stars</div>
      </div>
    </a>
  );
};
export default RepositoryCard;
