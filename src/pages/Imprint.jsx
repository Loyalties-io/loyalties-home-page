import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Imprint = () => (
  <Container>
    <Row>
      <h1 className="page-heading">Imprint</h1>
      <div className="page-text-container">
        <div className="page-section">
          <p className="page-section-heading">mmmh AG</p>
          <p>Fledhof 12</p>
          <p>6300 Zug</p>
          <p>Switzerland</p>
          <p>CHE-201.571.803 MWST</p>
          <p>Email: contact@loyalties.io</p>
        </div>
      </div>
    </Row>
  </Container>
);

export default Imprint;
