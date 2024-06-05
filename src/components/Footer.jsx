import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Footer.css";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <Navbar
      expand="lg"
      fixed={pathname === "/imprint" ? "bottom" : undefined}
      className="footer"
    >
      <Container>
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
      </Container>
    </Navbar>
  );
};

export default Footer;
