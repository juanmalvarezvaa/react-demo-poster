import { useLoaderData } from "react-router-dom";

import Post from "./Post";
import styles from "./PostsList.module.css";

const PostsList = () => {
  const posts = useLoaderData();

  const addPostHandler = (post) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setPosts((prevPosts) => [post, ...prevPosts]);
  };

  return (
    <>
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post key={Math.random()} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet!</h2>
          <p>Start adding some...</p>
        </div>
      )}
    </>
  );
};

export default PostsList;
