import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Pages.css";
import { Link } from "react-router-dom";
import { AnimatedText, AnimatedImage } from "../components/AnimatedComponents";

const Home = (props) => (
  <Container>
    <Row className="align-items-center page-section">
      <Col lg={6} className="justify-content-center">
        <div className="text-wrapper">
          <AnimatedText>
            <h1>
              Connect.
              <br /> Reward. Repeat.
            </h1>
          </AnimatedText>
          <AnimatedText delay={150}>
            <h2>
              Loyalties is about creating a community where businesses and
              customers thrive together.
            </h2>
          </AnimatedText>
          <AnimatedText delay={300}>
            <p>
              Together, they create a vibrant ecosystem where loyalty is
              rewarded, engagement is heightened, and every transaction becomes
              an opportunity for a deeper connection.
            </p>
          </AnimatedText>
          <AnimatedText delay={450}>
            <button className="primary-button" onClick={props.handleModalClick}>
              Join the community!
            </button>
          </AnimatedText>
        </div>
      </Col>
      <Col lg={6} className="d-none d-lg-block d-sm-none">
        <AnimatedImage
          src="https://test-public-bucket-loy.s3.eu-central-1.amazonaws.com/bg-1.png"
          alt="placeholder"
          delay={200}
          direction="right"
        />
      </Col>
    </Row>
    <Row className="align-items-center page-section">
      <Col lg={6}>
        <AnimatedImage
          src="https://test-public-bucket-loy.s3.eu-central-1.amazonaws.com/bg-2.png"
          alt="placeholder"
          className="middle-img"
          delay={0}
          direction="left"
        />
      </Col>
      <Col lg={6} className="justify-content-center">
        <div className="text-wrapper">
          <AnimatedText>
            <h2>
              Grow your business,
              <br /> one Loyal Customer at a Time
            </h2>
          </AnimatedText>
          <AnimatedText delay={150}>
            <p>
              Gain tools to build and maintain a loyal customer base, including
              targeted marketing campaigns and direct offers. Access analytics
              for informed decisions, improving program effectiveness.
            </p>
          </AnimatedText>
          <AnimatedText delay={300}>
            <Link className="primary-button" to="/business">
              Learn more
            </Link>
          </AnimatedText>
        </div>
      </Col>
    </Row>
    <Row className="align-items-center">
      <Col lg={6} className="justify-content-center">
        <div className="text-wrapper">
          <AnimatedText>
            <h2>Stay Loyal, Get Rewarded</h2>
          </AnimatedText>
          <AnimatedText delay={150}>
            <p>
              Enjoy hassle-free rewards and personalized shopping. No more paper
              cards that you always forget, it's all on your phone!
            </p>
          </AnimatedText>
        </div>
      </Col>
      <Col lg={6}>
        <AnimatedImage
          src="https://test-public-bucket-loy.s3.eu-central-1.amazonaws.com/bg-3.png"
          alt="placeholder"
          delay={200}
          direction="right"
        />
      </Col>
    </Row>
  </Container>
);

export default Home;
