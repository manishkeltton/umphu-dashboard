import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="w-full aspect-w-16 aspect-h-9 bg-gray-100 pb-[3%]">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
