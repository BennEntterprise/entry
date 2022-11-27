import "./styles.css";
import { SiteLinks } from "./components/SiteLinks";
import { LetterHead } from "./components/LetterHead";
import { StickyFooter } from "./components/StickyFooter";
import { Stacks } from "./components/Stacks";
import { WordCloud } from "./components/WordCloud";

// USING ICONS FROM A CDN
export const App = () => {
  return (
    <div className="App">
      <WordCloud />
      {/*  <div className="card">
        <LetterHead />
        <SiteLinks />
      </div>
      */}
      {/* <Stacks />*/}
      <StickyFooter />
    </div>
  );
};
