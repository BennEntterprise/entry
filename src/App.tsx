import "./styles.css";
import { SiteLinks } from "./components/SiteLinks";

// USING ICONS FROM A CDN
export const App = () => {
  return (
    <div className="App">
      <div className="card">
        <h1>Kyle Bennett</h1>
        <SiteLinks />
      </div>
    </div>
  );
};
