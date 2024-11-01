import React from "react";
import { awsUrl } from "./constant";
function App() {
  return (
    <div className="body">
      <header
        className="header
      "
      >
        <div className="left-nav">
          <img src={`${awsUrl}/logo.png`} /> <span>Ludo Umphu</span>
        </div>
        <span>Help</span>
      </header>
      <div className="title">
        <h2>Welcome to Ludo Umphu</h2>
        <span>
          Play offline and online ludo without interruption, win coins
          participate in event and get a chance to win exciting prizes.
        </span>
      </div>
      <div className="vertical-center">
        <h1>Download Our Ludo Umphu App</h1>
        <a href={`${awsUrl}/app-release.apk`} target="_blank" download>
          Download Link
        </a>
      </div>
    </div>
  );
}

export default App;
