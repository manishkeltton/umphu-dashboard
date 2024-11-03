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
          <img src={`https://phume.s3.ap-south-1.amazonaws.com/logo.png`} />{" "}
          <span>Ludo Umphu</span>
        </div>
        <span>Help</span>
      </header>
      <div className="title">
        <div>Welcome to Ludo Umphu</div>
        <span>
          Play offline and online ludo without interruption, win coins
          participate in event and get a chance to win exciting prizes.
        </span>
      </div>
      <div className="vertical-center">
        <div className="btn-title">Download Our Ludo Umphu App</div>
        <a
          href={`https://phume.s3.ap-south-1.amazonaws.com/app-release.apk`}
          target="_blank"
          download
        >
          Download App
        </a>
      </div>
    </div>
  );
}

export default App;
