import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";

import styles from "./PostDetails.module.css";

const PostDetails = () => {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={styles.details}>
          <h1>Could no find post</h1>
          <p>The requested post could not be found.</p>
          <p>
            <Link to="..." className={styles.btn}>
              Return
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={styles.details}>
        <p className={styles.author}>{post.author}</p>
        <p className={styles.text}>{post.body}</p>
      </main>
    </Modal>
  );
};

export default PostDetails;

export const loader = async ({ params }) => {
  const response = await fetch("http://localhost:8080/posts/" + params.id);
  const data = await response.json();
  return data.post;
};
