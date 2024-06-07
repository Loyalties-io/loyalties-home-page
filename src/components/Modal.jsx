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
        <h3>App coming soon...</h3>
        {/* <a href="#">
          <img
            src="https://test-public-bucket-loy.s3.eu-central-1.amazonaws.com/app-store.png"
            alt="app store"
            width="140"
          />
        </a> */}
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
