import classes from "./NewPost.module.css";

function NewPost({ onAuthorChange, onBodyChange, onCancel }) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor='name'>Your name</label>
        <input type='text' id='name' required onChange={onAuthorChange} />
      </p>
      <p>
        <label htmlFor='body'>Text</label>
        <textarea id='body' required rows={3} onChange={onBodyChange} />
      </p>
      <p className={classes.actions}>
        <button type='submit'>Add Post</button>
        <button type='submit' onClick={onCancel}>Cancel</button>
      </p>
    </form>
  );
}

export default NewPost;
