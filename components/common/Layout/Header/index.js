import { useRouter } from "next/router";
import React from "react";

const awsUrl = "https://phume.s3.ap-south-1.amazonaws.com";

const Header = () => {
  const router = useRouter();
  return (
    <header className="bg-[#2d78a1] shadow-md shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] text-[#ffffff] lg:text-[30px] md:text-[25px] max-sm:text-[22px] font-extrabold lg:leading-8 md:leading-6 max-sm:leading-6 flex justify-between items-center text-white lg:py-4 md:py-3 max-sm:py-2 lg:px-[4rem] md:px-[3rem] max-sm:px-[1rem]">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => router.push("/")}
      >
        <img
          src={`${awsUrl}/logo.png`}
          className="w-[5%] max-sm:w-[12%] mr-[1%] max-sm:mr-[1%] rounded-full"
        />
        <span>Zysom</span>
      </div>
      <span className="lg:text-[20px] lg:leading-[22px] font-normal max-sm:text-[18px] max-sm:leading-[20px]">
        Help
      </span>
    </header>
  );
};

export default Header;
