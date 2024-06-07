import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { Link } from "react-router-dom";
import InstagramLogo from "../assets/instagram.svg";

const navbar = (props) => (
  <Navbar collapseOnSelect expand="lg" sticky="top" className="top-nav">
    <Container>
      <Navbar.Brand as={Link} to="/">
        <img
          src="https://test-public-bucket-loy.s3.eu-central-1.amazonaws.com/logo_large_black.png"
          width="115"
          className="d-inline-block align-top"
          alt="Loyalties logo"
        />
      </Navbar.Brand>
      <div>
        <a
          href="https://www.instagram.com/loyalties.io/"
          target="_blank"
          rel="noreferrer"
          className="instagram-logo"
        >
          <img src={InstagramLogo} alt="Instagram" width="24" />
        </a>
        <button
          className="primary-button nav-button"
          onClick={props.handleModalClick}
        >
          Join now
        </button>
      </div>
      {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
        <Nav>
          <Nav.Link as={Link} to="/about" className="navbar-link">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/" className="navbar-link">
            Businesses
          </Nav.Link>
          <button
            className="primary-button nav-button"
            onClick={props.handleModalClick}
          >
            Join now
          </button>
        </Nav>
      </Navbar.Collapse> */}
    </Container>
  </Navbar>
);

export default navbar;
