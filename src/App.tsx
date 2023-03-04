import './styles.css';
import { SiteLinks } from './components/SiteLinks';
import { LetterHead } from './components/LetterHead';
import { StickyFooter } from './components/StickyFooter';

import { OpenSourceHacking } from './components/OpenSourceHacking';
//import { Stacks } from "./components/Stacks";

import { Stacks } from './components/Stacks';
import { WordCloud } from './components/WordCloud';

// USING ICONS FROM A CDN
export const App = () => {
  return (
    <div className="App">
      <div className="card">
        <LetterHead />
        <SiteLinks />
      </div>
      {/* <Stacks />*/}
      {/* <OpenSourceHacking /> */}
      {/* <Stacks /> */}
      <WordCloud />

      <StickyFooter />
    </div>
  );
};
