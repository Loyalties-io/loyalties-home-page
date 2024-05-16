import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Imprint = () => (
  <Container>
    <Row>
      <h1 className="page-heading">Imprint</h1>
      <div className="page-text-container">
        <div className="page-section">
          <p className="page-section-heading">Address:</p>
          <p>Address here</p>
        </div>
      </div>
    </Row>
  </Container>
);

export default Imprint;
