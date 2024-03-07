import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost({ onCancel, onAddPost }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    console.log(postData);
    onAddPost(postData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor='name'>Your name</label>
        <input type='text' id='name' required onChange={authorChangeHandler} />
      </p>
      <p>
        <label htmlFor='body'>Text</label>
        <textarea id='body' required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type='submit'>Add Post</button>
        <button onClick={onCancel}>Cancel</button>
      </p>
    </form>
  );
}

export default NewPost;
