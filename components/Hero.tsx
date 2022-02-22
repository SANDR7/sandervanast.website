import Image from 'next/image';
import React, { FC } from 'react';

interface ProfileProps {
  name: string;
  title?: string;
  description: string;
  avatar?: any;
  portrait?: string;
}

const Hero: FC<ProfileProps> = ({
  name,
  title,
  description,
  avatar,
  portrait
}) => (
  <div className="hero">
    {portrait && (
      <div className="relative md:col-span-1">
        <a
          href="https://www.linkedin.com/in/sander-van-ast/"
          target={'_blank'}
          rel="noreferrer"
        >
          <div className="md:w-64 w-80">
            <Image
              src={portrait}
              height={256}
              width={256}
              priority
              title={`Portrait of ${name}`}
              alt={`${name} portrait`}
              objectFit="cover"
              objectPosition="center -1.5rem"
              className='rounded-full'

            />
          </div>
        </a>
        <a href="https://github.com/SANDR7" target={'_blank'} rel="noreferrer">
          <div className="absolute bottom-0 left-0 md:w-24 w-20">
            <Image
              src={avatar}
              title={`Avatar of ${name}`}
              height={128}
              width={128}
              alt={`${name} avatar`}
            />
          </div>
        </a>
      </div>
    )}
    <div className="md:col-span-2">
      <div className="mb-2">
        <h1 className="header">{name}</h1>
        <span>{title}</span>
      </div>
      <p className="textMidGray">{description}</p>
    </div>
  </div>
);
export default Hero;
