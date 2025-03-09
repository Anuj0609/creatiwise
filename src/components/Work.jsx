import React from "react";

const cards = [
  {
    image: "./Work1.png",
    title: "Analysis Application",
    description:
      "With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
    buttons: ["figma", "ux"],
  },
  {
    image: "./Work2.png",
    title: "Fortknox Application",
    description:
      "With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
    buttons: ["mobile", "web"],
  },
  {
    image: "./Work3.png",
    title: "Zenocide Application",
    description:
      "With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
    buttons: ["app", "web"],
  },
];

function Work() {
  return (
    <div className="px-[100px] py-16 space-y-8">
      {/* Section Header */}
      <div className="flex flex-row gap-2 items-center justify-between">
        <div className="flex flex-row gap-2 items-center">
          <img src="./Expertise.png" className="w-8 h-8" alt="Expertise" />
          <div className="font-[Syne] font-bold text-[40px] leading-[100%] text-white">
            Works
          </div>
        </div>
        <div className="border-b-2 text-white cursor-pointer">View All</div>
      </div>

      {/* Work Cards */}
      <div className="flex flex-col gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-row gap-8 pt-8 bg-[rgba(203,203,203,0.48)] p-8 rounded-[40px]"
          >
            {/* Image */}
            <img
              src={card.image}
              className="w-[572px] h-[429px] object-cover"
              alt={card.title}
            />

            {/* Card Content */}
            <div className="flex flex-col justify-between gap-4">
              <div className="space-y-4">
                {/* Title */}
                <h2 className="font-[Syne] font-semibold text-[40px] leading-[100%] text-white">
                  {card.title}
                </h2>

                {/* Description */}
                <p className="font-[Poppins] font-normal text-[18px] leading-[100%] text-[#CBCBCB]">
                  {card.description}
                </p>

                {/* Buttons Section */}
                {/* Row of Small Buttons */}
                <div className="flex flex-row gap-2">
                  {card.buttons.map((button, idx) => (
                    <div
                      key={idx}
                      className="text-white border-2 rounded-[100px] px-6 py-2"
                    >
                      {button}
                    </div>
                  ))}
                </div>
              </div>

              {/* View Case Study Button Below */}
              <button className="bg-white text-black font-[Syne] font-semibold text-[14px] leading-[24px] px-8 py-4 rounded-[100px] w-fit">
                View case study
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
