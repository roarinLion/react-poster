import React, { useState } from "react";
import Post from "./Post";
import styles from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostsList({modalIsVisible, onClose}) {
  const [enteredBody, setEnteredBody] = useState(""); // [state, function to update state
  const [enteredAuthor, setEnteredAuthor] = useState("");



  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={onClose}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
            onCancel={onClose}
          />
        </Modal>
      )}
      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author='joe' body='body text 33' />
        <Post author='sue' body='body text 2' />
      </ul>
    </>
  );
}

export default PostsList;
