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
    <a href={html_url} className="Card w-1/3" target="_blank" rel="noreferrer">
      <div>
        <h3>{name}</h3>
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
