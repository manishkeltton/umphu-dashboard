import React from "react";
import SimpleSlider from "./Slider";
import { awsUrl } from "../constant";

export default function HomePage() {
  return (
    <div className="w-full">
      <header className="bg-[#2d78a1] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] text-[#ffffff] lg:text-[30px] md:text-[25px] max-sm:text-[22px] font-extrabold lg:leading-8 md:leading-6 max-sm:leading-6 flex justify-between items-center text-white lg:py-4 md:py-3 max-sm:py-2 lg:px-[4rem] md:px-[3rem] max-sm:px-[1rem]">
        <div className="flex items-center">
          <img
            src={`${awsUrl}/logo.png`}
            className="w-[15%] max-sm:w-[12%] mr-[4%] max-sm:mr-[2%] rounded-full"
          />
          <span>Somwall</span>
        </div>
        <span className="max-sm:text-[18px] max-sm:leading-[20px]">Help</span>
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
        <div className="w-[50%] max-sm:w-full flex justify-center items-center py-0 px-[4rem] max-sm:px-2">
          <SimpleSlider />
        </div>
      </main>

      {/* <footer className="bg-gray-800 text-white text-center p-4">
          &copy; {new Date().getFullYear()} APK Download Center. All Rights
          Reserved.
        </footer> */}
    </div>
  );
}
