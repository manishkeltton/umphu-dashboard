import React from "react";
function App() {
  return (
    <div className="body">
      <header
        className="header
      "
      >
        <div className="left-nav">
          <img src={"https://phume.s3.ap-south-1.amazonaws.com/logo.png"} />{" "}
          <span>Umphu App</span>
        </div>
        <a href={`mailto: manish@yopmail.com`}>Help</a>
      </header>
      {/* <div>
        <img src={"./dice.png"} /> */}
      {/* <img src={diceImag} />
        <img src={diceImag} /> */}
      {/* </div> */}
      <div className="title">
        <h2>Welcome to Umphu Ludo</h2>
        <span>
          Play offline and online ludo without interruption, win coins
          participate in event and get a chance to win exciting prizes
        </span>
      </div>
      <div className="vertical-center">
        <h1>Download Our Umphu App</h1>
        <a
          href={"https://phume.s3.ap-south-1.amazonaws.com/app-release.apk"}
          target="_blank"
          download
        >
          Download APK
        </a>
      </div>
    </div>
  );
}

export default App;
