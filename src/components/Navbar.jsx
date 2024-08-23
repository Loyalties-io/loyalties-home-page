import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
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
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav.Link
          as={Link}
          to="/business"
          className="navbar-link business-link"
        >
          For Businesses
        </Nav.Link>
        <Nav className="ms-auto">
          <Nav.Link
            href="https://www.instagram.com/loyalties.io/"
            className="instagram-logo"
          >
            <img src={InstagramLogo} alt="Instagram" width="24" />
          </Nav.Link>
          <button
            className="primary-button nav-button"
            onClick={props.handleModalClick}
          >
            Join now
          </button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default navbar;
