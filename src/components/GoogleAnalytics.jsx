import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCookieConsent } from "../contexts/CookieConsentContext";
import { initGA, trackPageView } from "../utils/analytics";

const GoogleAnalytics = () => {
  const location = useLocation();
  let consent = null;

  try {
    const context = useCookieConsent();
    consent = context?.consent;
  } catch (error) {
    // Context not available, consent remains null
    consent = null;
  }

  useEffect(() => {
    // Only initialize GA if consent is given
    if (consent === true) {
      initGA();
    }
  }, [consent]);

  useEffect(() => {
    // Only track page views if consent is given
    if (consent === true && location) {
      trackPageView(location.pathname + location.search);
    }
  }, [location, consent]);

  return null;
};

export default GoogleAnalytics;
