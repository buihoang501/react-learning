import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    toggleAuth(state) {
      state.isAuthenticated = !state.isAuthenticated;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
