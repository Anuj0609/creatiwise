import React from "react";

function Navbar() {
  return (
    <div className="text-white px-4 md:px-[100px] py-[20px] md:py-[34px] bg-black">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <img src="./Brand.png" alt="Brand Logo" />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          <button className="px-6 py-2 hover:bg-white hover:text-black rounded-3xl font-[Syne] font-medium text-[14px] leading-[24px] tracking-[0%] cursor-pointer">
            Home
          </button>
          <button className="px-6 py-2 hover:bg-white hover:text-black rounded-3xl font-[Syne] font-medium text-[14px] leading-[24px] tracking-[0%] cursor-pointer">
            About
          </button>
          <button className="px-6 py-2 hover:bg-white hover:text-black rounded-3xl font-[Syne] font-medium text-[14px] leading-[24px] tracking-[0%] cursor-pointer">
            Projects
          </button>
          <button className="px-6 py-2 hover:bg-white hover:text-black rounded-3xl font-[Syne] font-medium text-[14px] leading-[24px] tracking-[0%] cursor-pointer">
            Contact
          </button>
        </div>

        {/* Hire Me Button */}
        <button className="mt-4 md:mt-0 px-6 py-2 rounded-3xl border border-white font-[Syne] font-medium text-[14px] leading-[24px] tracking-[0%] hover:bg-white hover:text-black cursor-pointer">
          HIRE ME
        </button>
      </div>
    </div>
  );
}

export default Navbar;
