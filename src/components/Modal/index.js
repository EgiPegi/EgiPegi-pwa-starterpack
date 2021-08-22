import React from "react";

const Modal = ({ isOpen, closeModal, title, children }) => {
  console.log(isOpen)
  if (isOpen) {
    return (
      <div className="modal-wrap">
        <div className="modal-card">
          <div className="closeModal" onClick={()=> closeModal(false)}>
            x
          </div>
          <div className="title">{title}</div>
          <main className="body">{children}</main>
        </div>
      </div>
    );
  }
  return <></>;
};

export default Modal;
