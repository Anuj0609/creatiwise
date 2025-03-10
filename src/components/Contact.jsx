import React from "react";
import { MdOutlineNorthEast } from "react-icons/md";

function Contact() {
  return (
    <div className="flex flex-col gap-4 items-center justify-between py-16 text-white text-center px-4">
      <div className="font-[Syne] font-extrabold text-[40px] md:text-[64px] leading-[50px] md:leading-[80px] uppercase">
        LET’S TALK!
      </div>
      <a
        href="mailto:rehanurraihan@gmail.com"
        className="font-[Poppins] font-normal text-[16px] md:text-[18px] leading-[100%] flex flex-row gap-1 items-center justify-center hover:underline cursor-pointer"
      >
        rehanurraihan@gmail.com <MdOutlineNorthEast />
      </a>
    </div>
  );
}

export default Contact;
