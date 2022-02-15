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
      <a href={html_url} className='Card w-1/3' target="_blank" rel="noreferrer">
        <h3>{full_name}</h3>

        <div>
          <div>{stars} stars</div>
          <div>{language}</div>
          <div>{topics.join(', ')}</div>
        </div>
      </a>
  );
};
export default RepositoryCard;
