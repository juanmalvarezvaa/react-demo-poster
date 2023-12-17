import { Outlet } from "react-router-dom";

import PostsList from "../components/PostsList";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/posts");
  const data = await response.json();
  return data.posts;
};
