import React from "react";

const cards = [
  {
    image: "./Work1.png",
    title: "Analysis Application",
    description:
      "With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
    buttons: ["figma", "ux"],
    link: "https://example.com/analysis-case-study", 
  },
  {
    image: "./Work2.png",
    title: "Fortknox Application",
    description:
      "With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
    buttons: ["mobile", "web"],
    link: "https://example.com/fortknox-case-study",
  },
  {
    image: "./Work3.png",
    title: "Zenocide Application",
    description:
      "With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
    buttons: ["app", "web"],
    link: "https://example.com/zenocide-case-study",
  },
];

function Work() {
  return (
    <div className="px-4 md:px-[100px] py-16 space-y-8">
      <div className="flex flex-col md:flex-row gap-4 md:gap-2 items-center md:items-start justify-between text-center md:text-left">
        <div className="flex flex-row gap-2 items-center">
          <img src="./Expertise.png" className="w-8 h-8" alt="Expertise" />
          <div className="font-[Syne] font-bold text-[32px] md:text-[40px] leading-[100%] text-white">
            Works
          </div>
        </div>
        <div className="border-b-2 text-white cursor-pointer">View All</div>
      </div>

      <div className="flex flex-col gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-8 pt-8 bg-[rgba(203,203,203,0.48)] p-6 md:p-8 rounded-[40px] items-center md:items-start"
          >
            <img
              src={card.image}
              className="w-full md:w-[572px] h-auto object-cover rounded-lg"
              alt={card.title}
            />

            <div className="flex flex-col justify-between gap-4 text-center md:text-left">
              <div className="space-y-4">
                <h2 className="font-[Syne] font-semibold text-[28px] md:text-[40px] leading-[100%] text-white">
                  {card.title}
                </h2>

                <p className="font-[Poppins] font-normal text-[16px] md:text-[18px] leading-[100%] text-[#CBCBCB]">
                  {card.description}
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-2">
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

              <div className="flex justify-center md:justify-start">
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black font-[Syne] font-semibold text-[14px] leading-[24px] px-8 py-4 rounded-[100px] w-fit transition hover:bg-gray-300"
                >
                  View case study
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
