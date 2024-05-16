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
import Modal from "./components/Modal";

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  const handleModalClick = () => setModalShow(!modalShow);

  return (
    <Router>
      <Navbar handleModalClick={handleModalClick} />
      <Routes>
        <Route
          path="/"
          element={<Home handleModalClick={handleModalClick} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      <Modal show={modalShow} onHide={() => setModalShow(false)} />
      <Footer />
    </Router>
  );
}

export default App;
