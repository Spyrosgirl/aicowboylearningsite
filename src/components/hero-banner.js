import React from "react";

export const HeroBanner = () => {
  const logo = "https://cdn.auth0.com/blog/developer-hub/react-logo.svg";

  return (
    <div className="hero-banner hero-banner--pink-yellow">
      <div className="hero-banner__logo">
        <img className="hero-banner__image" src={logo} alt="React logo" />
      </div>
      <h1 className="hero-banner__headline">Howdy!</h1>
      <p className="hero-banner__description">
        Welcome to the <strong>Quantum Cowboys</strong> Deep Learning hub
      </p>
      <a
        id="code-sample-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://theaicowboys.com/about-us"
        className="button button--secondary"
      >
        Check out the Quantum Cowboys Team →
      </a>
    </div>
  );
};
