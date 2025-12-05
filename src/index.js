import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { CookieConsentProvider } from "./contexts/CookieConsentContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <CookieConsentProvider> */}
    <App />
    {/* </CookieConsentProvider> */}
  </React.StrictMode>
);

reportWebVitals();
