import React from "react";

const items = [
  {
    image: "./Work1.png",
    date: "Nov 9, 2023",
    title: "How UX works in web",
    buttons: ["Ui", "Ux"],
  },
  {
    image: "./Work2.png",
    date: "Aug 18, 2023",
    title: "Case study - Analysis Application.",
    buttons: ["Design", "Print"],
  },
  {
    image: "./Work3.png",
    date: "Feb 16, 2023",
    title: "3 ways to develop your skill",
    buttons: ["Figma", "Web"],
  },
];

function Blog() {
  return (
    <div className="px-[100px] py-16 space-y-8">
      {/* Section Header */}
      <div className="flex flex-row gap-2 items-center justify-between">
        <div className="flex flex-row gap-2 items-center">
          <img src="./Expertise.png" className="w-8 h-8" alt="Expertise" />
          <div className="font-[Syne] font-bold text-[40px] leading-[100%] text-white">
            Blog
          </div>
        </div>
        <div className="border-b-2 text-white cursor-pointer">View All</div>
      </div>

      {/* Blog Items */}
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="flex flex-row gap-8 pt-8 items-center">
            {/* Image */}
            <img
              src={item.image}
              className="w-[286px] h-[214.5px] object-cover rounded-lg"
              alt={item.title}
            />

            {/* Content */}

            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-col justify-center gap-4 w-full">
                {/* Date */}
                <p className="font-[Poppins] font-normal text-[18px] leading-[100%] tracking-[0%] text-[#CBCBCB]">
                  {item.date}
                </p>

                {/* Title */}
                <h2 className="font-[Syne] font-semibold text-[40px] leading-[100%] tracking-[0%] text-white">
                  {item.title}
                </h2>

                {/* Buttons */}
                <div className="flex gap-2">
                  {item.buttons.map((button, btnIndex) => (
                    <button
                      key={btnIndex}
                      className="text-white border font-semibold text-[12px] leading-[100%] tracking-[0%] uppercase px-6 py-2 rounded-[100px] font-[Syne]"
                    >
                      {button}
                    </button>
                  ))}
                </div>
              </div>
              <button className="text-[#010208] bg-white font-[Syne] font-semibold text-[14px] leading-[24px] tracking-[0%] h-fit px-8 py-4 rounded-[100px]">
                Read
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
