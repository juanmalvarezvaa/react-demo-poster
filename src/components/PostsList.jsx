import { useState, useEffect } from "react";

import Post from "./Post";
import styles from "./PostsList.module.css";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const data = await response.json();
      console.log(data.posts);
      setPosts(data.posts);
      setIsFetching(false);
    };

    fetchPosts();
  }, []);

  const addPostHandler = (post) => {
    setPosts((prevPosts) => [post, ...prevPosts]);
  };

  return (
    <>
      {!isFetching && posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post key={Math.random()} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet!</h2>
          <p>Start adding some...</p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading posts...</p>
        </div>
      )}
    </>
  );
};

export default PostsList;
