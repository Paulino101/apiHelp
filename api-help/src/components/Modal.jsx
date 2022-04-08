import React from "react";

function Modal({ modalContentTheme, modalTextTheme, modalCloseBackground }) {
  return (
    <div className="d-flex justify-content-center">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Info
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className={`modal-content ${modalContentTheme}`}>
            <div className="modal-header">
              <h5
                className={`modal-title ${modalTextTheme}`}
                id="exampleModalLabel"
              >
                Employee Directory
              </h5>
              <button
                type="button"
                className={`btn-close ${modalCloseBackground}`}
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className={`modal-body ${modalTextTheme}`}>
              <ul>
                <li>This project makes an api request to randomuser.api and maps
              through the info to display it as a mock employee directory.</li>
                <li>It also makes use of if statements if the name or email is too
              long for the container and to toggle between light and dark mode.</li>
                <li>Optimized for 3 breakpoints (320px, 768px, 1200px)</li>
              </ul>
              
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
