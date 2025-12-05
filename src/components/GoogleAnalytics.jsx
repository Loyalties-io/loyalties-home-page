import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCookieConsent } from "../contexts/CookieConsentContext";
import { initGA, trackPageView } from "../utils/analytics";

const GoogleAnalytics = () => {
  const location = useLocation();
  const { consent } = useCookieConsent();

  useEffect(() => {
    // Only initialize GA if consent is given
    if (consent === true) {
      initGA();
    }
  }, [consent]);

  useEffect(() => {
    // Only track page views if consent is given
    if (consent === true) {
      trackPageView(location.pathname + location.search);
    }
  }, [location, consent]);

  return null;
};

export default GoogleAnalytics;
