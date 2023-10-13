import React from 'react';
import { Link } from "react-router-dom";
import { IUser } from '../../../models';

const Users = ({ data }: { data: IUser[]}) => (
  <>
    {data.map((user) => (
      <Link className="users__item" to={`/user/${user.id}`} key={user.id}>
        <p className="users__name">{user.name}</p>
      </Link>
    ))}
  </>
);

export default Users;
