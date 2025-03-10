import React from "react";

function Hero() {
  return (
    <div className="px-4 md:px-[100px] text-center py-[80px] md:py-[176px]">

      <h1 className="font-[Syne] font-extrabold text-white uppercase text-[32px] md:text-[64px] leading-[40px] md:leading-[80px] tracking-[0%] px-2 md:px-[49px]">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
          <span className="flex flex-row items-center">
            I AM A
            <img
              src="./Hero1.png"
              alt="Designer Icon"
              className="h-[40px] w-[80px] md:h-[64px] md:w-[128px]"
            />
          </span>
          <span>FREELANCE</span>{" "}
          <span className="flex flex-row items-center">
            DESIGNER
            <img
              src="./Hero2.png"
              alt="San Francisco Icon"
              className="h-[40px] w-[80px] md:h-[64px] md:w-[128px]"
            />
          </span>
          <span>FROM</span> San Francisco
        </div>
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-[136px] pt-16 md:pt-28">
        <div className="flex gap-4 md:gap-8">
          <img
            src="./Hero3.png"
            className="h-[40px] w-[40px] md:h-auto md:w-auto"
          />
          <img
            src="./Hero4.png"
            className="h-[40px] w-[40px] md:h-auto md:w-auto"
          />
          <img
            src="./Hero5.png"
            className="h-[40px] w-[40px] md:h-auto md:w-auto"
          />
        </div>

        <div className="font-[Poppins] font-normal text-[14px] md:text-[16px] leading-[150%] md:leading-[100%] tracking-[0%] text-gray-500 text-center md:text-start max-w-[400px]">
          Welcome to my portfolio. Here, artistry meets functionality. Dive into
          a curated showcase of distinctive branding and web designs, each
          crafted to captivate and inspire.
        </div>
      </div>
    </div>
  );
}

export default Hero;
