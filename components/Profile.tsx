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
        <img src={portrait} className="md:w-64 w-48" alt={`${name} portrait`} />
        <img
          src={avatar}
          className="absolute bottom-0 left-0 md:w-24 w-20"
          alt={`${name} avatar `}
        />
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
