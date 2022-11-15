import React from "react";
import LinkedInLogo from "../images/LinkedInLogo.png";

export const SiteLinks = () => {
  return (
    <div className="link-wrapper">
      <a
        href="https://www.linkedin.com/in/kyle-bennett-pittsburgh-pa/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="linkedin"
          height="32"
          width="32"
          src="/images/LinkedInLogo.png"
        />
      </a>
      <a href="https://codepen.io/coderkyle" target="_blank" rel="noreferrer">
        <img
          alt="codepen"
          height="32"
          width="32"
          src="images/codepen-logo.png"
        />
      </a>
      <a
        href="https://github.com/BennEntterprise"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github" height="32" width="32" src="images/github.png" />
      </a>
      <a
        href="https://www.twitch.tv/physicsphreak"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitch" height="32" width="32" src="images/twitch.png" />
      </a>
    </div>
  );
};
