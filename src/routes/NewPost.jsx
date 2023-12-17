import { useState } from "react";

import styles from "./NewPost.module.css";
import Modal from "../components/Modal";

const NewPost = ({ onCancel, onAddPost }) => {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredName, setEnteredName] = useState("");

  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredName,
    };
    onAddPost(postData);
    onCancel();
  };
  return (
    <Modal>
      <form className={styles.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
        </p>
        <p>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" onChange={nameChangeHandler} />
        </p>
        <p className={styles.actions}>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button>Post</button>
        </p>
      </form>
    </Modal>
  );
};

export default NewPost;
