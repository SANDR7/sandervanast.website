import React, { FC } from 'react';

interface QuoteProps {
  text: string;
  author: string;
}

const QuoteCard: FC<QuoteProps> = ({ text, author }) => {
  return (
    <div>
      <p className="italic text-4xl font-thin pb-4">&quot;{text}&quot;</p>
      <span className="textMidGray">&#126; {author}</span>
    </div>
  );
};
export default QuoteCard;
