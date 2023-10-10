import { Link } from "react-router-dom";

const Users = ({ data }) => {
  const users = data;

  return (
    <div className="users">
      <div className="container users__inner">
        <h1 className="users__title">Users</h1>
        <div className="users__items">
          {users.map((user) => (
              <Link className="users__item" to={`/user/${user.id}`} key={user.id}>
                <p className="users__name">{user.name}</p>
              </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
