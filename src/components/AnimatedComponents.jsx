import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export const AnimatedText = ({ children, delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`animated-text ${isVisible ? "animate-in" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const AnimatedImage = ({ src, alt, className = "", delay = 0, direction = "left" }) => {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`animated-image animated-image-${direction} ${isVisible ? "animate-in" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <img src={src} alt={alt} className={`img-fluid ${className}`} />
    </div>
  );
};

export const AnimatedWhyItem = ({ children, delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`animated-why-item ${isVisible ? "animate-in" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

