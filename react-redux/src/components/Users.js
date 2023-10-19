import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getUsers } from '../store/userReducer';

const Users = () => {
  const users = useSelector((state) => state.users.users);
  const isLoading = useSelector((state) => state.users.isLoading);
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getUsers());
  //   }, []);
  const fetchUsersHandler = () => {
    dispatch(getUsers());
  };

  return (
    <div>
      Users
      <button onClick={fetchUsersHandler}>Get users</button>
      {!isLoading && users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
