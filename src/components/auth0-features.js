import React from "react";
import { Auth0Feature } from "./auth0-feature";

export const Auth0Features = () => {
  const featuresList = [
    {
      title: "NVIDIA Data Science Course",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper eleifend. Donec vitae dui eget dolor sollicitudin auctor. Mauris in erat nec arcu gravida auctor. Integer nec venenatis ligula. Vestibulum consequat odio non ex dictum, in fermentum turpis fermentum.",
      resourceUrl: "https://auth0.com/docs/connections",
      icon: "https://cdn.auth0.com/blog/hello-auth0/identity-providers-logo.svg",
    },
    {
      title: "NVIDIA Deep Learning Course",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper eleifend. Donec vitae dui eget dolor sollicitudin auctor. Mauris in erat nec arcu gravida auctor. Integer nec venenatis ligula. Vestibulum consequat odio non ex dictum, in fermentum turpis fermentum.",
      resourceUrl: "https://auth0.com/docs/multifactor-authentication",
      icon: "https://cdn.auth0.com/blog/hello-auth0/mfa-logo.svg",
    },
    {
      title: "Edge AI and Robotics Course",
      description: "Insert Intro Blurb",
      resourceUrl: "https://auth0.com/docs/attack-protection",
      icon: "https://cdn.auth0.com/blog/hello-auth0/advanced-protection-logo.svg",
    },
    {
      title: "Accelerated Computing Course",
      description: "Insert Intro Blurb",
      resourceUrl: "https://auth0.com/docs/actions",
      icon: "https://cdn.auth0.com/blog/hello-auth0/private-cloud-logo.svg",
    },
  ];

  return (
    <div className="auth0-features">
      <h2 className="auth0-features__title">Explore Auth0 Features</h2>
      <div className="auth0-features__grid">
        {featuresList.map((feature) => (
          <Auth0Feature
            key={feature.resourceUrl}
            title={feature.title}
            description={feature.description}
            resourceUrl={feature.resourceUrl}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};
