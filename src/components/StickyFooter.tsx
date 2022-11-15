import React from "react";

export const StickyFooter = () => {
  const options = [
    "Made with ❤️ Using Git/Github",
    "Watchdog Services Provided by Snyk",
    // "Error and Exception handling gracefully traiged using Sentry.io"
    "Loosely follows https://www.conventionalcommits.org/en/v1.0.0/",
    "Has a change log inspired by keepachangelog.com",
  ];
  const randomNum = Math.floor(Math.random() * options.length);
  return (
    <div id="footer-right">
      <p>{options[randomNum]}</p>
    </div>
  );
};
