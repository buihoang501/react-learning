import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialUsersState = {
  isLoading: false,
  users: [],
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState: initialUsersState,
  reducers: {
    fetchRequests(state, action) {
      state.isLoading = true;
    },
    fetchSuccess(state, action) {
      state.isLoading = false;
      state.users = action.payload;
      state.error = null;
    },
    fetchFailed(state, action) {
      state.isLoading = false;
      state.users = [];
      state.error = action.payload;
    },
  },
});

export const getUsers = () => {
  return async function (dispatch) {
    dispatch(fetchRequests());
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );

      const users = response.data.map((user) => user.username);

      dispatch(fetchSuccess(users));
    } catch (error) {
      dispatch(fetchFailed(error));
    }
  };
};

export const { fetchRequests, fetchSuccess, fetchFailed } = usersSlice.actions;

export default usersSlice.reducer;
