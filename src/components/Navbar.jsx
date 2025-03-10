import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-white px-4 md:px-[100px] py-[20px] md:py-[34px] bg-black">
      <div className="flex justify-between items-center">
        <div>
          <img src="./Brand.png" alt="Brand Logo" />
        </div>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className="hidden md:flex gap-4 md:gap-8 items-center">
          {["Home", "About", "Projects", "Contact"].map((link, index) => (
            <button
              key={index}
              className="px-6 py-2 hover:bg-white hover:text-black rounded-3xl font-[Syne] font-medium text-[14px] leading-[24px] tracking-[0%] cursor-pointer"
            >
              {link}
            </button>
          ))}
        </div>

        <a
          href="mailto:rehanurraihan@gmail.com"
          className="hidden md:block px-6 py-2 rounded-3xl border border-white font-[Syne] font-medium text-[14px] leading-[24px] tracking-[0%] hover:bg-white hover:text-black cursor-pointer"
        >
          HIRE ME
        </a>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4">
          {["Home", "About", "Projects", "Contact"].map((link, index) => (
            <button
              key={index}
              className="px-6 py-2 w-full text-left hover:bg-white hover:text-black rounded-3xl font-[Syne] font-medium text-[14px] leading-[24px] tracking-[0%] cursor-pointer"
            >
              {link}
            </button>
          ))}

          <a
            href="mailto:rehanurraihan@gmail.com"
            className="px-6 py-2 rounded-3xl border border-white font-[Syne] font-medium text-[14px] leading-[24px] tracking-[0%] hover:bg-white hover:text-black cursor-pointer"
          >
            HIRE ME
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
