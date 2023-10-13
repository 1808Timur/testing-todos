import React from 'react';
import Users from "./components/Users";
import { IUser } from '../../models';

const Main = ({ data }: { data: IUser[]}) => {
  return (
    <div className="users">
      <div className="container users__inner">
        <h1 className="users__title">Users</h1>
        <div className="users__items">
          <Users data={data} />
        </div>
      </div>
    </div>
  );
};

export default Main;
