import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import { Link } from "react-router-dom";
import InstagramLogo from "../assets/instagram.svg";

const navbar = (props) => (
  <Navbar collapseOnSelect expand="lg" sticky="top" className="top-nav">
    <Container>
      <div className="brand-wrapper">
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://test-public-bucket-loy.s3.eu-central-1.amazonaws.com/logo_large_black.png"
            width="115"
            className="d-inline-block align-top"
            alt="Loyalties logo"
          />
        </Navbar.Brand>
        <Nav.Link
          as={Link}
          to="/business"
          className="navbar-link business-link"
        >
          For Business
        </Nav.Link>
      </div>
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
    </Container>
  </Navbar>
);

export default navbar;
