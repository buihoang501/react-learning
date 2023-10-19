import React from 'react';
import { getPosts } from '../store.js/posts';
import { useDispatch, useSelector } from 'react-redux';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const isLoading = useSelector((state) => state.posts.isLoading);

  const getPostsHandler = () => {
    dispatch(getPosts());
  };

  return (
    <div>
      Posts
      <button onClick={getPostsHandler}>Get posts!</button>
      <ul>
        {!isLoading &&
          posts.length > 0 &&
          posts.map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
};

export default Posts;
