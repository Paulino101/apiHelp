import React from "react";

function Modal({ name }) {
  return (
    <div className={`modal `}>
      <button className="btn">close modal</button>
      <p>t{name.first}</p>
    </div>
  );
}

export default Modal;
