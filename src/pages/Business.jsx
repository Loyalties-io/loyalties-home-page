import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Pages.css";
import "./Business.css";
import {
  AnimatedText,
  AnimatedImage,
  AnimatedWhyItem,
} from "../components/AnimatedComponents";
import { FaCog, FaBullhorn, FaChartLine, FaNetworkWired, FaMobileAlt } from "react-icons/fa";

const Business = (props) => (
  <Container>
    <Row className="align-items-center page-section">
      <Col lg={6} className="justify-content-center">
        <div className="text-wrapper">
          <AnimatedText>
            <h1>Loyalties for businesses</h1>
          </AnimatedText>
          <AnimatedText delay={150}>
            <h2>The Ultimate Solution for Building Customer Loyalty</h2>
          </AnimatedText>
          <AnimatedText delay={300}>
            <p>
              Are you looking for a simple and effective way to keep your
              customers coming back? Loyalties is here to help you do just that,
              without the hassle of managing multiple loyalty programs or
              juggling paper cards.
            </p>
          </AnimatedText>
          <AnimatedText delay={450}>
            <button className="primary-button" onClick={props.handleModalClick}>
              Get in touch
            </button>
          </AnimatedText>
        </div>
      </Col>
      <Col lg={6} className="d-none d-lg-block d-sm-none">
        <AnimatedImage
          src="https://test-public-bucket-loy.s3.eu-central-1.amazonaws.com/bg-2.png"
          alt="placeholder"
          delay={200}
          direction="right"
        />
      </Col>
    </Row>
    <Row className="align-items-center page-section">
      <Col lg={6}>
        <AnimatedImage
          src="https://test-public-bucket-loy.s3.eu-central-1.amazonaws.com/business-bg-2.jpg"
          alt="placeholder"
          className="middle-img"
          delay={0}
          direction="left"
        />
      </Col>
      <Col lg={6} className="justify-content-center">
        <div className="text-wrapper">
          <AnimatedText>
            <h2>What is Loyalties?</h2>
          </AnimatedText>
          <AnimatedText delay={150}>
            <p>
              Loyalties is an all-in-one app that allows businesses like yours
              to create and manage loyalty programs, offer exclusive discounts,
              and promote special deals—all within a single platform that your
              customers will love.
            </p>
          </AnimatedText>
        </div>
      </Col>
    </Row>
    <Row className="page-section no-margin why-items-row">
      <AnimatedText>
        <h1 className="secondary-heading">Why Choose Loyalties?</h1>
      </AnimatedText>
      <Col className="why-item" lg={4} md={8} xs={12}>
        <AnimatedWhyItem delay={0}>
          <div className="why-item-content">
            <div className="why-item-icon">
              <FaCog />
            </div>
            <h2>Customizable Loyalty Programs</h2>
            <p>
              Tailor your loyalty programs to fit your business. Offer discounts,
              free items, or exclusive deals that resonate with your customers and
              encourage repeat visits.
            </p>
          </div>
        </AnimatedWhyItem>
      </Col>
      <Col className="why-item" lg={4} md={8} xs={12}>
        <AnimatedWhyItem delay={150}>
          <div className="why-item-content">
            <div className="why-item-icon">
              <FaBullhorn />
            </div>
            <h2>
              Promote <br />
              Special Offers
            </h2>
            <p>
              Easily push targeted offers to your customers to drive traffic
              during slower times or highlight new products and services.
            </p>
          </div>
        </AnimatedWhyItem>
      </Col>
      <Col className="why-item" lg={4} md={8} xs={12}>
        <AnimatedWhyItem delay={300}>
          <div className="why-item-content">
            <div className="why-item-icon">
              <FaChartLine />
            </div>
            <h2>
              Gain <br />
              Valuable Insights
            </h2>
            <p>
              Our analytics tools provide you with detailed data on customer
              behavior, helping you make informed decisions that boost your
              business.
            </p>
          </div>
        </AnimatedWhyItem>
      </Col>
    </Row>
    <Row className="page-section why-items-row">
      <Col
        className="why-item"
        lg={{ span: 4, offset: 2 }}
        md={8}
        xs={12}
      >
        <AnimatedWhyItem delay={0}>
          <div className="why-item-content">
            <div className="why-item-icon">
              <FaNetworkWired />
            </div>
            <h2>
              Join a <br />
              Growing Network
            </h2>
            <p>
              Loyalties connects you with a community of local businesses that are
              committed to enhancing customer experiences and supporting each
              other.
            </p>
          </div>
        </AnimatedWhyItem>
      </Col>
      <Col className="why-item" lg={4} md={8} xs={12}>
        <AnimatedWhyItem delay={200}>
          <div className="why-item-content">
            <div className="why-item-icon">
              <FaMobileAlt />
            </div>
            <h2>
              One App, <br />
              Multiple Benefits
            </h2>
            <p>
              With Loyalties, your customers only need one app to access loyalty
              programs and offers from all participating businesses. No matter
              what type of business you run, Loyalties makes it easy to reward
              your customers and keep them coming back.
            </p>
          </div>
        </AnimatedWhyItem>
      </Col>
    </Row>

    <Row className="page-section align-items-center">
      <Col lg={6} className="justify-content-center">
        <div className="text-wrapper">
          <AnimatedText>
            <h2>Get Started with Loyalties</h2>
          </AnimatedText>
          <AnimatedText delay={150}>
            <p>
              We're currently offering Loyalties at no cost for a limited time
              to businesses that join our testing phase. This is a unique
              opportunity to shape a tool that meets your specific needs, while
              also gaining early access to a powerful customer retention
              platform.
            </p>
          </AnimatedText>
        </div>
      </Col>
      <Col lg={6}>
        <AnimatedImage
          src="https://test-public-bucket-loy.s3.eu-central-1.amazonaws.com/business-bg-3.jpg"
          alt="placeholder"
          delay={200}
          direction="right"
        />
      </Col>
    </Row>

    <Row className="page-section align-items-center">
      <Col lg={12} className="justify-content-center">
        <div className="text-wrapper">
          <AnimatedText>
            <h2>Interested in learning more?</h2>
          </AnimatedText>
          <AnimatedText delay={150}>
            <p>
              We'd love to chat about how Loyalties can benefit your business.
              Reach out to us at <b>contact@loyalties.io</b>, and let's start a
              conversation about how we can help you build stronger customer
              relationships.
            </p>
          </AnimatedText>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Business;
