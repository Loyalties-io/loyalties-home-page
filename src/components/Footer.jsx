import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <Navbar expand="lg" className="footer">
    {/* add fixed="bottom" and add margin to the bottom of each page */}
    <Container>
      {/* <Navbar.Brand as={Link} to="/">
        <img
          src="https://test-public-bucket-loy.s3.eu-central-1.amazonaws.com/logo_large_black.png"
          width="115"
          className="d-inline-block align-top"
          alt="Loyalties logo"
        />
      </Navbar.Brand> */}
      <Nav className="footer-content">
        <div className="flex-wrapper">
          <div className="links-wrapper">
            <Nav.Link as={Link} to="/imprint" className="footer-link">
              Imprint
            </Nav.Link>
            <Nav.Link as={Link} to="/terms" className="footer-link">
              Terms & Conditions
            </Nav.Link>
            <Nav.Link as={Link} to="/privacy" className="footer-link">
              Privacy Policy
            </Nav.Link>
          </div>
          <div>
            <p className="copyright">2024 Loyalties</p>
          </div>
        </div>
      </Nav>
      {/* <Nav></Nav> */}
    </Container>
  </Navbar>
);

export default Footer;
