import React, { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const teamMembers = [
  {
    image: "./Say1.png",
    name: "Floyd Miles",
    company: "eBay",
    description:
      "S1 Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
  },
  {
    image: "./Say1.png",
    name: "Jane Cooper",
    company: "Amazon",
    description:
      "S2 Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
  },
  {
    image: "./Say1.png",
    name: "Ronald Richards",
    company: "Google",
    description:
      "S3 Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
  },
  {
    image: "./Say1.png",
    name: "Esther Howard",
    company: "Microsoft",
    description:
      "S4 Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
  },
];

function Say() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="px-6 md:px-[100px] py-16">
      <div className="flex flex-col gap-8">
        <div className="flex flex-row gap-2 items-center justify-center md:justify-start">
          <img src="./Expertise.png" className="w-8 h-8" alt="Expertise" />
          <h2 className="font-[Syne] font-bold text-[32px] md:text-[40px] leading-[100%] text-white">
            What they say
          </h2>
        </div>

        <div className="space-y-6 pt-10">
          <div className="flex flex-col md:flex-row gap-8 py-6 items-center md:items-start justify-center md:justify-between">
            <div className="flex flex-col md:flex-row gap-4 items-center text-center md:text-left">
              <img
                src={teamMembers[currentIndex].image}
                className="w-16 h-16 rounded-lg"
                alt={teamMembers[currentIndex].name}
              />
              <div className="flex flex-col justify-center gap-1">
                <h3 className="font-[Syne] font-semibold text-[20px] md:text-[24px] text-white">
                  {teamMembers[currentIndex].name}
                </h3>
                <p className="font-[Poppins] text-[16px] md:text-[18px] text-[#CBCBCB]">
                  {teamMembers[currentIndex].company}
                </p>
              </div>
            </div>
            <div className="text-center md:text-left px-4 md:px-0">
              <p className="text-white font-[Syne] font-medium text-[24px] md:text-[32px] leading-[140%] max-w-[710px] flex-wrap relative">
                {teamMembers[currentIndex].description}
                <img
                  src="./Say2.png"
                  className="absolute left-[2px] top-[-46px] hidden md:block"
                  alt="Decorative Icon"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="space-x-4 mx-auto flex">
          <button
            onClick={handlePrev}
            className="bg-white rounded-full p-3 md:p-4"
          >
            <FaArrowLeftLong />
          </button>
          <button
            onClick={handleNext}
            className="bg-white rounded-full p-3 md:p-4"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Say;
