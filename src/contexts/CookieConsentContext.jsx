import React, { createContext, useContext, useState, useEffect } from "react";

const CookieConsentContext = createContext();

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return context;
};

export const CookieConsentProvider = ({ children }) => {
  const [consent, setConsent] = useState(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if consent has been given
    if (typeof window !== "undefined" && window.localStorage) {
      const savedConsent = localStorage.getItem("cookieConsent");
      if (savedConsent === null) {
        setShowBanner(true);
      } else {
        setConsent(savedConsent === "accepted");
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    setConsent(true);
    setShowBanner(false);
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("cookieConsent", "accepted");
    }
  };

  const rejectAll = () => {
    setConsent(false);
    setShowBanner(false);
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("cookieConsent", "rejected");
    }
  };

  return (
    <CookieConsentContext.Provider
      value={{ consent, showBanner, acceptAll, rejectAll }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};


