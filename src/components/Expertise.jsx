import React from 'react'

const items = [
  {
    title: "Branding",
    description:
      "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
  },
  {
    title: "UI Design",
    description:
      "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
  },
  {
    title: "UX Design",
    description:
      "I comprehend and resolve digital product issues using a user-focused methodology. Investigation. compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements",
  },
  {
    title: "Development",
    description:
      "I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome. complex coding. Webflow forms the foundation of my web development approach, I employ it to produce safe, top-notch personalized websites.",
  },
];

function Expertise() {
  return (
    <div className="text-white px-[100px] py-16 gap-8">
      <div className="flex flex-row gap-2 items-center">
        <img src="./Expertise.png" className='w-8 h-8'/>
        <div className="font-[Syne] font-bold text-[40px] leading-[100%] tracking-[0%] text-white">
          Expertise
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <div key={index} className="flex flex-row gap-4 pt-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-[7px] bg-white"></div>
                <h2 className="font-[Syne] font-semibold text-[24px] leading-[32px] tracking-[0%] text-white">
                  {item.title}
                </h2>
              </div>
              <p className="font-[Poppins] font-normal text-[16px] leading-[100%] tracking-[0%] text-[#CBCBCB]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Expertise