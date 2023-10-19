import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../store.js/users';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const isLoading = useSelector((state) => state.users.isLoading);

  const getUsersHandler = () => {
    dispatch(getUsers());
  };

  return (
    <div>
      Users
      <button onClick={getUsersHandler}>Get users!</button>
      <ul>
        {!isLoading &&
          users.length > 0 &&
          users.map((user) => <li key={user}>{user}</li>)}
      </ul>
    </div>
  );
};

export default Users;
