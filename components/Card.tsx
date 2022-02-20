import React, { FC } from 'react';
import Image from 'next/image';
import { catColor, category } from '../utils/catColor';
import Link from 'next/link';

interface CardProps {
  title: category;
  postCount?: number;
  image: {
    url: string;
    alt: string;
  };
}

const Card: FC<CardProps> = ({ title, image, postCount }) => {
  const color = catColor(title);

  return (
    <Link passHref href={`/journal?cat=${title}`}>
      <a className={`rounded-lg border-l-4 ${color} p-3`}>
        <div>
          <div className="flex justify-between">
            <h3 className="header pb-2">{title}</h3>
            <span>{postCount || '0'} Posts</span>
          </div>
          {image && (
            <div className="h-48 w-full relative">
              <Image
                src={image.url}
                alt={image.alt}
                className="rounded-lg"
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
        </div>
      </a>
    </Link>
  );
};

export default Card;
