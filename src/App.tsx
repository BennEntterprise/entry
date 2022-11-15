import "./styles.css";
import { SiteLinks } from "./components/SiteLinks";
import { LetterHead } from "./components/LetterHead";
import { StickyFooter } from "./components/StickyFooter";

// USING ICONS FROM A CDN
export const App = () => {
  return (
    <div className="App">
      <div className="card">
        <LetterHead />
        <SiteLinks />
      </div>
      <StickyFooter />
    </div>
  );
};
