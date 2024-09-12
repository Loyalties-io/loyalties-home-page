import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Pages.css";
import "./Business.css";

const Home = (props) => (
  <Container>
    <Row className="align-items-center page-section">
      <Col lg={6} className="justify-content-center">
        <div className="text-wrapper">
          <h1>Loyalties for businesses</h1>
          <h2>The Ultimate Solution for Building Customer Loyalty</h2>
          <p>
            Are you looking for a simple and effective way to keep your
            customers coming back? Loyalties is here to help you do just that,
            without the hassle of managing multiple loyalty programs or juggling
            paper cards.
          </p>
          {/* <button className="primary-button" onClick={props.handleModalClick}>
            Join the community!
          </button> */}
        </div>
      </Col>
      <Col lg={6} className="d-none d-lg-block d-sm-none">
        <img
          src="https://test-public-bucket-loy.s3.eu-central-1.amazonaws.com/bg-1.png"
          alt="placeholder"
          className="img-fluid"
        />
      </Col>
    </Row>
    <Row className="align-items-center page-section">
      <Col lg={6}>
        <img
          src="https://test-public-bucket-loy.s3.eu-central-1.amazonaws.com/bg-2.png"
          alt="placeholder"
          className="img-fluid middle-img"
        />
      </Col>
      <Col lg={6} className="justify-content-center">
        <div className="text-wrapper">
          <h2>What is Loyalties?</h2>
          <p>
            Loyalties is an all-in-one app that allows businesses like yours to
            create and manage loyalty programs, offer exclusive discounts, and
            promote special deals—all within a single platform that your
            customers will love.
          </p>
        </div>
      </Col>
    </Row>
    <Row className="page-section no-margin">
      <h1 className="secondary-heading">Why Choose Loyalties?</h1>
      <Col className="why-item mx-auto" lg={4} md={8} xs={12}>
        <h2>Customizable Loyalty Programs</h2>
        <p>
          Tailor your loyalty programs to fit your business. Offer discounts,
          free items, or exclusive deals that resonate with your customers and
          encourage repeat visits.
        </p>
      </Col>
      <Col className="why-item mx-auto" lg={4} md={8} xs={12}>
        <h2>
          Promote <br />
          Special Offers
        </h2>
        <p>
          Easily push targeted offers to your customers to drive traffic during
          slower times or highlight new products and services.
        </p>
      </Col>
      <Col className="why-item mx-auto" lg={4} md={8} xs={12}>
        <h2>
          Gain <br />
          Valuable Insights
        </h2>
        <p>
          Our analytics tools provide you with detailed data on customer
          behavior, helping you make informed decisions that boost your
          business.
        </p>
      </Col>
    </Row>
    <Row className="page-section">
      <Col
        className="why-item mx-auto"
        lg={{ span: 5, offset: 1 }}
        md={8}
        xs={12}
      >
        <h2>
          Join a <br />
          Growing Network
        </h2>
        <p>
          Loyalties connects you with a community of local businesses that are
          committed to enhancing customer experiences and supporting each other.
        </p>
      </Col>
      <Col className="why-item mx-auto" lg={5} md={8} xs={12}>
        <h2>
          One App, <br />
          Multiple Benefits
        </h2>
        <p>
          With Loyalties, your customers only need one app to access loyalty
          programs and offers from all participating businesses. No matter what
          type of business you run, Loyalties makes it easy to reward your
          customers and keep them coming back.
        </p>
      </Col>
    </Row>

    <Row className="page-section align-items-center">
      <Col lg={6} className="justify-content-center">
        <div className="text-wrapper">
          <h2>Get Started with Loyalties</h2>
          <p>
            We’re currently offering Loyalties for free for the first three
            months to businesses that join our testing phase. This is a unique
            opportunity to influence the development of a tool that meets your
            specific needs, while also benefiting from early access to a
            powerful customer retention platform.
          </p>
        </div>
      </Col>
      <Col lg={6}>
        <img
          src="https://test-public-bucket-loy.s3.eu-central-1.amazonaws.com/bg-3.png"
          alt="placeholder"
          className="img-fluid"
        />
      </Col>
    </Row>

    <Row className="page-section align-items-center">
      <Col lg={12} className="justify-content-center">
        <div className="text-wrapper">
          <h2>Interested in learning more?</h2>
          <p>
            We’d love to chat about how Loyalties can benefit your business.
            Reach out to us at contact@loyalties.io, and let’s start a
            conversation about how we can help you build stronger customer
            relationships.
          </p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Home;
