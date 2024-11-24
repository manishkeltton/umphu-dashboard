import React from "react";
import SimpleSlider from "./Slider";

const awsUrl = "https://phume.s3.ap-south-1.amazonaws.com";

export default function HomePage() {
  return (
    <>
      <div className="w-full aspect-w-16 aspect-h-9 bg-gray-100 pb-[3%]">
        <header className="bg-[#2d78a1] shadow-md shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] text-[#ffffff] lg:text-[30px] md:text-[25px] max-sm:text-[22px] font-extrabold lg:leading-8 md:leading-6 max-sm:leading-6 flex justify-between items-center text-white lg:py-4 md:py-3 max-sm:py-2 lg:px-[4rem] md:px-[3rem] max-sm:px-[1rem]">
          <div className="flex items-center">
            <img
              src={`${awsUrl}/logo.png`}
              className="w-[5%] max-sm:w-[12%] mr-[1%] max-sm:mr-[1%] rounded-full"
            />
            <span>Somwall</span>
          </div>
          <span className="lg:text-[20px] lg:leading-[22px] font-normal max-sm:text-[18px] max-sm:leading-[20px]">
            Help
          </span>
        </header>
        <main className="w-full flex max-sm:flex-col justify-between items-center mx-auto lg:py-4 md:py-3 max-sm:py-2 mt-[2rem] lg:px-[4rem] md:px-[2rem] max-sm:px-[1rem]">
          <div className="w-[50%] max-sm:w-full flex flex-col justify-center items-center max-sm:mb-[2rem]">
            <div className="flex flex-col text-center px-[1rem] mb-[3rem] max-sm:mb-[1rem]">
              <h1 className="text-nowrap lg:text-[32px] max-md:text-[30px] max-sm:text-[26px] lg:leading-8 md:leading-6 max-sm:leading-6 font-bold mb-[1rem] max-sm:mb-1">
                Introducing Somwall Ludo
              </h1>
              <h2 className="text-[15px] leading-[18px] font-[400px] text-[#000000]/[.6]">
                Play offline and online ludo without interruption, win coins
                participate in event and get a chance to win exciting prizes.
              </h2>
            </div>
            <div className="max-lg:px-[1rem] max-md:px-2.5 max-sm:px-2 text-nowrap flex rounded-full bg-[#2d78a1] border-none w-[50%] justify-center items-center text-[#ffffff] space-2 hover:bg-[#2d78a1]/[0.8] ">
              <a
                href={`${awsUrl}/app-release.apk`}
                target="_blank"
                download
                className="flex w-full justify-center items-center lg:text-[18px] max-md:text-[15px] max-sm:text-[12px] max-lg:leading-[20px] max-md:leading-[16px] max-sm:leading-[13px]  px-3 py-2 rounded-full text-sm font-medium"
              >
                Download App
              </a>
            </div>
          </div>
          <div className="w-[50%] max-sm:w-full flex justify-center items-center max-sm:px-2">
            <SimpleSlider />
          </div>
        </main>
        <div className="lg:py-4 md:py-3 max-sm:py-2 lg:px-[4rem] md:px-[3rem] max-sm:px-[1rem] mt-[1rem]">
          <h1 className="text-2xl font-bold text-center text-[#2d78a1] mb-4">
            How to Play Ludo
          </h1>
          <div className="pl-3 text-gray-800 mb-2">
            Learn the basics of this classic board game and start playing!
          </div>
          <ol className="list-decimal pl-6 space-y-2 ml-6 mb-2 text-gray-800">
            <li>
              Each player will be having one color and four tokens of that
              color.{" "}
            </li>
            <li>Red color determine the starting player.</li>
            <li>
              Players must roll a 6 to move their tokens out of the starting
              area and onto the board.
            </li>
            <li>
              On each turn, roll the dice and move one of your tokens forward by
              the number shown.
            </li>
            <li>
              If a token lands on a space occupied by an opponent's token, the
              opponent's token is sent back to their starting area.
            </li>
            <li>
              If a token lands on a safe space (marked with a star), it cannot
              be captured.
            </li>
            <li>
              The first player to move all four tokens into the home area wins
              the game.
            </li>
          </ol>
        </div>
        <div className="lg:py-4 md:py-3 max-sm:py-2 lg:px-[4rem] md:px-[3rem] max-sm:px-[1rem] mt-[1rem]">
          <h1 className="text-2xl font-bold text-center text-[#2d78a1] mb-4">
            How to Install Somwall App
          </h1>
          <div className="pl-3 text-gray-800 mb-2">
            Steps to install the Somwall app and start playing
          </div>
          <ol className="list-decimal pl-6 space-y-2 ml-6 mb-2 text-gray-800">
            <li>Click “Download App” to access Somwall App for Android. </li>
            <li>
              Tap “Download Anyway” on the general warning message. Somwall is
              100% secure.
            </li>
            <li>
              Locate the app on your device (check phone notifications or
              Downloads folder).
            </li>
            <li>Open the downloaded file to start the app installation</li>
            <li>
              Go to settings and Allow from this source. All files from our
              source are safe.
            </li>
          </ol>
          <div className="pl-3 space-y-2 text-gray-800">
            On completion of these steps, You can start playing Ludo without
            interruption.
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 lg:h-[300px] md:h-[300px] max-sm:h-[300px] flex items-center  font-extrabold lg:py-4 md:py-3 max-sm:py-2 lg:px-[4rem] md:px-[3rem] max-sm:px-[1.5rem] text-[100px] leading-[110px] text-white text-start">
        Enjoy it up!
      </footer>
    </>
  );
}
