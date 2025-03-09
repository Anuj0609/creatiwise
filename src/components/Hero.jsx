import React from "react";

function Hero() {
  return (
    <div className="px-[100px] text-center py-[176px]">
      <h1 className="font-[Syne] font-extrabold text-white uppercase text-[64px] leading-[80px] tracking-[0%] px-[49px]">
        <div className="flex items-center justify-center flex-wrap gap-2">
          I AM A
          <img
            src="./Hero1.png"
            alt="Designer Icon"
            className="h-[64px] w-[128px]"
          />
          FREELANCE DESIGNER
          <img
            src="./Hero2.png"
            alt="San Francisco Icon"
            className="h-[64px] w-[128px]"
          />
          FROM San Francisco
        </div>
      </h1>
      <div className="flex flex-row justify-between items-center gap-[136px] pt-28">
        <img src="./Hero3.png" />
        <img src="./Hero4.png" />
        <img src="./Hero5.png" />
        <div
          className="font-[Poppins] font-normal text-[16px] leading-[100%] tracking-[0%] text-gray-500 text-start"
        >
          Welcome to my portfolio. Here, artistry meets functionality. Dive into
          a curated showcase of distinctive branding and web designs, each
          crafted to captivate and inspire.
        </div>
      </div>
    </div>
  );
}

export default Hero;
