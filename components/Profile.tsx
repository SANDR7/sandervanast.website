import React, { FC } from 'react';

interface ProfileProps {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  portrait: string;
}

const Profile: FC<ProfileProps> = ({ name, title, bio, avatar, portrait }) => {
  return (
    <div className="profile">
      <div className="relative">
        <a
          href="https://www.linkedin.com/in/sander-van-ast/"
          target={'_blank'}
          rel="noreferrer"
        >
          <img
            src={portrait}
            className="md:w-64 w-48"
            title={`Portrait of ${name}`}
            alt={`${name} portrait`}
          />
        </a>
        <a href="https://github.com/SANDR7" target={'_blank'} rel="noreferrer">
          <img
            src={avatar}
            className="absolute bottom-0 left-0 md:w-24 w-20"
            title={`Avatar of ${name}`}
            alt={`${name} avatar `}
          />
        </a>
      </div>
      <div>
        <div className="mb-2">
          <h1 className="header">{name}</h1>
          <span>{title}</span>
        </div>
        <p className="text-gray-mid">{bio}</p>
      </div>
    </div>
  );
};
export default Profile;
