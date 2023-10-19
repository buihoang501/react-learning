import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store.js/auth';

const Auth = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const toggleAuth = () => {
    dispatch(authActions.toggleAuth());
  };

  return (
    <div>
      Auth
      <button onClick={toggleAuth}>Toggle Show Secret!</button>
      {isAuthenticated && <p>I'm out of money!</p>}
    </div>
  );
};

export default Auth;
