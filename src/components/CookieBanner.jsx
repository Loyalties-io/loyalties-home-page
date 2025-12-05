import React from "react";
import { Link } from "react-router-dom";
import { useCookieConsent } from "../contexts/CookieConsentContext";
import "./CookieBanner.css";

const CookieBanner = () => {
  const { showBanner, acceptAll, rejectAll } = useCookieConsent();

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-container">
        <div className="cookie-banner-content">
          <div className="cookie-banner-text">
            <h3 className="cookie-banner-title">We use cookies</h3>
            <p className="cookie-banner-description">
              We use cookies to analyze website traffic and optimize your
              experience. By accepting, you agree to our use of cookies.{" "}
              <Link to="/privacy" className="cookie-banner-link">
                Privacy Policy
              </Link>
            </p>
          </div>
          <div className="cookie-banner-buttons">
            <button
              onClick={rejectAll}
              className="cookie-banner-button cookie-banner-button-reject"
            >
              Reject All
            </button>
            <button
              onClick={acceptAll}
              className="cookie-banner-button cookie-banner-button-accept"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

