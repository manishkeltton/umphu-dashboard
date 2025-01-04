import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 lg:h-[300px] md:h-[300px] max-sm:h-[300px] lg:py-4 md:py-3 max-sm:py-2 lg:px-[4rem] md:px-[3rem] max-sm:px-[1.5rem]">
      <div className="flex items-center font-extrabold text-[100px] leading-[110px] text-white text-start">
        Enjoy it up!
      </div>
      <div className="text-white flex items-center justify-center lg:mt-[8rem] md:mt-[8rem] max-sm:mt-[2rem]">
        <span className="hover:text-[#2d78a1]">
          <Link href="/privacy-policy">Privacy Policy </Link>
        </span>
        <span className="mx-[0.375rem]">and</span>
        <span className="hover:text-[#2d78a1]">
          <Link href="/term-conditions"> Term &amp; Conditions</Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
