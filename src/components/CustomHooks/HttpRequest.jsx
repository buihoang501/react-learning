import React, { useState, useEffect } from 'react';
import useHttp from './useHttp';

const HttpRequest = () => {
  const { isLoading, error, sendRequest: fetchPosts } = useHttp();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const handleData = (data) => {
      setPosts(data);
    };

    fetchPosts(
      {
        url: 'https://jsonplaceholder.typicode.com/posts',
      },

      handleData
    );
  }, [fetchPosts]);

  console.log(isLoading, error);
  console.log(posts);

  return (
    <div>
      HttpRequest
      {posts &&
        posts.length > 0 &&
        posts.map((post) => <p key={post.id}>{post.title}</p>)}
    </div>
  );
};

export default HttpRequest;
