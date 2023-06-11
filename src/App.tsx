import React from 'react';
import './styles.css';
import { SiteLinks } from './components/SiteLinks';
import { LetterHead } from './components/LetterHead';
import { StickyFooter } from './components/StickyFooter';
import { Stacks } from './components/Stacks';
import { OpenSourceHacking } from './components/OpenSourceHacking';
import { WordCloud } from './components/WordCloud';
import  { MyProperties } from './components/MyProperties'

export type IDomain = {name: string, url: string, description: string}

// USING ICONS FROM A CDN
const domains: Array<IDomain> = [
  {
    name: 'b59.dev',
    url: 'https://b59.dev',
    description: 'A website exploring the concepts of work-life balance and productivity.',
  },
  {
    name: 'bennentterprise.com',
    url: 'https://bennentterprise.com',
    description: 'The holding company for all of my projects and businesses.',
  },
  {
    name: 'betweenfiveandnine.com',
    url: 'https://betweenfiveandnine.com',
    description: 'The LLC that I have done small business projects under. Mostly wordpress and React Deployed on various providers.',
  },
  {
    name: 'factbook.news',
    url: 'https://factbook.news',
    description: 'A reliable source crowd sourced fact-checked news and information.',
  },
  {
    name: 'kylebennett.design',
    url: 'https://kylebennett.design',
    description: 'DEPRECATED: The portfolio website of Kyle Bennett, showcasing design projects. (This is being phased out in favor of a subdomain on kylebennett.io',
  },
  {
    name: 'kylebennett.io',
    url: 'https://kylebennett.io',
    description: 'This website. My portfolio, blog and links to hiring me.',
  },
  {
    name: 'ssh-it.dev',
    url: 'https://ssh-it.dev',
    description: 'A domain for secure shell (SSH) resources and guides that was inspired by OHSHITGIT.com .',
  },
  {
    name: 'wussickcontracting.com',
    url: 'https://wussickcontracting.com',
    description: 'DEPRECATED: The official website for Wussick Contracting, specializing in construction services.',
  },
  {
    name: 'z2fs.dev',
    url: 'https://z2fs.dev',
    description: 'An adventure from being a zero to a full-stack developer by a choose your own adventure curriculum.',
  },
  {
    name: 'zerotofullstack.dev',
    url: 'https://zerotofullstack.dev',
    description: 'Alias for above.',
  },
];

// Form the domains into a list of objects that has 
// a name, a url and a description 


export const App = () => {
  return (
    <div className="App">
      <div className="card">
        <LetterHead />
        <SiteLinks />
      </div>
      {/* <Stacks /> */}
      {/* <OpenSourceHacking /> */}
      {/* <WordCloud /> */}
      <MyProperties domainNames={domains}/>
      <StickyFooter />
    </div>
  );
};
