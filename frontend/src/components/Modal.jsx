import React from "react";
import classes from "./Modal.module.css";

function Modal({children, onClose}) {
  return (
    <>
      <div onClick={onClose} className={classes.backdrop} />
      <dialog open className={classes.modal}>{children}</dialog>
    </>
  );
}

export default Modal;
