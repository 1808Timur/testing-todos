import React from 'react';
import { IUser } from '../../../models';

const Header = ({ user }: { user: IUser}) => {
  return (
    <div className="user__header">
      <h2 className="user__header-title">{user.name}</h2>
      <p className="user__header-subtitle">Username: {user.username}</p>
      <p className="user__email">Email: {user.email}</p>
      <p className="user__phone">Phone number: {user.phone}</p>
    </div>
  );
};

export default Header;
