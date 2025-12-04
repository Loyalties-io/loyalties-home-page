import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { AnimatedText } from "../components/AnimatedComponents";
import "./Pages.css";

const Imprint = () => (
  <Container className="imprint-page">
    <Row>
      <AnimatedText>
        <h1 className="page-heading">Imprint</h1>
      </AnimatedText>
      <div className="page-text-container">
        <AnimatedText delay={150}>
          <div className="page-section">
            <p className="page-section-heading">mmmh AG</p>
            <p>Fledhof 12</p>
            <p>6300 Zug</p>
            <p>Switzerland</p>
            <p>CHE-201.571.803 MWST</p>
            <p>Email: contact@loyalties.io</p>
          </div>
        </AnimatedText>
      </div>
    </Row>
  </Container>
);

export default Imprint;
