import React from 'react';
import './styles.css';
import { SiteLinks } from './components/SiteLinks';
import { LetterHead } from './components/LetterHead';
import { StickyFooter } from './components/StickyFooter';
import { Stacks } from './components/Stacks';
import { OpenSourceHacking } from './components/OpenSourceHacking';
import { WordCloud } from './components/WordCloud';
import  { MyProperties } from './components/MyProperties'

// USING ICONS FROM A CDN
const domains = [
  'b59.dev',
  'bennentterprise.com',
  'betweenfiveandnine.com',
  'factbook.news',
  'kylebennett.design',
  'kylebennett.io',
  `ssh-it.dev`,
  'wussickcontracting.com',
  'z2fs.dev',
  'zerotofullstack.dev',
];

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
