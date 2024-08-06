import React from "react";
import Modal from "react-bootstrap/Modal";
import "./Modal.css";

const modal = (props) => {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered={true}
    >
      <Modal.Body className="modal-content">
        <h2>Join the community!</h2>
        <div className="download-wrapper">
          <a href="https://apps.apple.com/us/app/loyalties-io/id6587571478">
            <img
              src="https://test-public-bucket-loy.s3.eu-central-1.amazonaws.com/app-store.png"
              alt="apple app store icon"
              width="140"
            />
          </a>
          <a href="hhttps://play.google.com/store/apps/details?id=com.cato.benjaminsen.loyaltyfrontend">
            <img
              src="https://test-public-bucket-loy.s3.eu-central-1.amazonaws.com/google-play-store-icon.svg"
              alt="google play store icon"
              width="160"
            />
          </a>
        </div>
        <p>
          Are you a business looking to use Loyalties? <br />
          Email us{" "}
          <a href="mailto:contact@loyalties.io">contact@loyalties.io</a>
        </p>
        <button className="primary-button" onClick={props.onHide}>
          Close
        </button>
      </Modal.Body>
    </Modal>
  );
};

export default modal;
