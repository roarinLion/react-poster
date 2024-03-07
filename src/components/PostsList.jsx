import React, { useState } from "react";
import styles from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import Post from "./Post";

function PostsList({ modalIsVisible, onClose }) {
  const [posts, setPosts] = useState([]); // [state, function to update state
  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  return (
    <>
      {modalIsVisible && (
        <Modal onClose={onClose}>
          <NewPost onCancel={onClose} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length === 0 ? (
        <p>No posts yet!</p>
      ) : (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
    </>
  );
}

export default PostsList;
