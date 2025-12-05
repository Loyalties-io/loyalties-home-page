const GA_MEASUREMENT_ID = "G-K9WR3NKTCP";

export const initGA = () => {
  if (
    typeof window !== "undefined" &&
    typeof document !== "undefined" &&
    GA_MEASUREMENT_ID &&
    GA_MEASUREMENT_ID !== "G-XXXXXXXXXX"
  ) {
    console.log("🔍 Initializing Google Analytics with ID:", GA_MEASUREMENT_ID);
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script1.onload = () => {
      console.log("✅ Google Analytics script loaded successfully");
    };
    script1.onerror = () => {
      console.error("❌ Failed to load Google Analytics script");
    };
    if (document.head) {
      document.head.appendChild(script1);
    }

    window.dataLayer = window.dataLayer || [];
    function gtag(...args) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID, {
      page_path: window.location ? window.location.pathname : "/",
    });
    console.log("✅ Google Analytics initialized");
  } else {
    console.warn(
      "⚠️ Google Analytics not initialized. Check REACT_APP_GA_MEASUREMENT_ID environment variable."
    );
  }
};

export const trackPageView = (path) => {
  if (
    typeof window !== "undefined" &&
    window.gtag &&
    GA_MEASUREMENT_ID &&
    GA_MEASUREMENT_ID !== "G-XXXXXXXXXX"
  ) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: path,
    });
    console.log("📊 Page view tracked:", path);
  }
};

export const trackEvent = (eventName, eventParams = {}) => {
  if (
    typeof window !== "undefined" &&
    window.gtag &&
    GA_MEASUREMENT_ID &&
    GA_MEASUREMENT_ID !== "G-XXXXXXXXXX"
  ) {
    window.gtag("event", eventName, eventParams);
  }
};
