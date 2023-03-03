import React from 'react';

export const SiteLinks = () => {
  const links = [
    {
      href: 'https://www.linkedin.com/in/kyle-bennett-pittsburgh-pa/',
      target: '_blank',
      rel: 'noreferrer',
      imgSrc: '/images/LinkedInLogo.png',
      imgAlt: 'linkedin',
    },
    {
      href: 'https://codepen.io/coderkyle',
      target: '_blank',
      rel: 'noreferrer',
      imgSrc: 'images/codepen-logo.png',
      imgAlt: 'codepen',
    },
    {
      href: 'https://github.com/BennEntterprise',
      target: '_blank',
      rel: 'noreferrer',
      imgSrc: 'images/github.png',
      imgAlt: 'github',
    },
    {
      href: 'https://www.twitch.tv/physicsphreak',
      target: '_blank',
      rel: 'noreferrer',
      imgSrc: 'images/twitch.png',
      imgAlt: 'twitch',
    },
  ];

  return (
    <div className="link-wrapper">
      {links.map((link) => (
        <a href={link.href} target={link.target} rel={link.rel}>
          <img alt={link.imgAlt} height="32" width="32" src={link.imgSrc} />
        </a>
      ))}
    </div>
  );
};
