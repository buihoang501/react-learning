import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const getPosts = createAsyncThunk('posts/getPostsData', async () => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts`
  );

  return response.data;
});

const initialPostsState = {
  isLoading: false,
  posts: [],
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialPostsState,
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
      state.error = null;
    },
    [getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.posts = [];
      state.error = action.payload;
    },
  },
});

export default postsSlice.reducer;
