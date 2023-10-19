import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth';
import counterSlice from './counter';
import userSlice from './users';
import postsSlice from './posts';

const store = configureStore({
  reducer: {
    auth: authSlice,
    counter: counterSlice,
    users: userSlice,
    posts: postsSlice,
  },
});

export default store;
