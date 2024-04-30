import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import styles from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import Post from "./Post";

/**
 * Displays a list of posts and a modal to add new posts.
 * @param {Object} props
 * @param {boolean} props.modalIsVisible - Controls the visibility of the modal.
 * @param {Function} props.onClose - Function to call when closing the modal.
 */
function PostsList({ modalIsVisible, onClose }) {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  // Effect to fetch posts from the server on component mount
  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  /**
   * Handles adding a new post by sending it to the server and updating the local state.
   * @param {Object} postData - The data for the new post to add.
   */
  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={onClose}>
          <NewPost onCancel={onClose} onAddPost={addPostHandler} />
        </Modal>
      )}
      {!isFetching && posts.length === 0 ? (
        <p>No posts yet!</p>
      ) : (
        <ul className={styles.posts}>
          {!isFetching && posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {isFetching && <p>Loading posts...</p>}
    </>
  );
}

// PropTypes for type checking
PostsList.propTypes = {
  modalIsVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PostsList;
