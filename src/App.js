import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Imprint from "./pages/Imprint";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Business from "./pages/Business";
import Modal from "./components/Modal";
import ScrollToTop from "./components/ScrollToTop";
// import GoogleAnalytics from "./components/GoogleAnalytics";
import CookieBanner from "./components/CookieBanner";

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  const handleModalClick = () => setModalShow(!modalShow);

  return (
    <Router>
      {/* <GoogleAnalytics /> */}
      <ScrollToTop />
      <Navbar handleModalClick={handleModalClick} />
      <Routes>
        <Route
          path="/"
          element={<Home handleModalClick={handleModalClick} />}
        />
        <Route
          path="/loyalties-home-page"
          element={<Home handleModalClick={handleModalClick} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route
          path="/business"
          element={<Business handleModalClick={handleModalClick} />}
        />
      </Routes>
      <Modal show={modalShow} onHide={() => setModalShow(false)} />
      <Footer />
      <CookieBanner />
    </Router>
  );
}

export default App;
