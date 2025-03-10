import React from "react";

const experiences = [
  {
    title: "Lead Product Designer",
    companyName: "Fortknox",
    date: "Mar 2022 - Oct 2023",
  },
  {
    title: "Intern Designer",
    companyName: "OmniSafe",
    date: "Mar 2022 - Oct 2023",
  },
  {
    title: "UI Designer",
    companyName: "Doradesign",
    date: "Mar 2022 - Oct 2023",
  },
  {
    title: "Frontend Developer",
    companyName: "OpacityAuthor",
    date: "Mar 2022 - Oct 2023",
  },
];

function Experience() {
  return (
    <div className="text-white px-4 md:px-[100px] py-16 gap-8">
      <div className="flex flex-row gap-2 items-center justify-center md:justify-start">
        <img src="./Expertise.png" className="w-8 h-8" alt="Expertise" />
        <div className="font-[Syne] font-bold text-[32px] md:text-[40px] leading-[100%] text-white">
          Experience
        </div>
      </div>

      <div>
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-4 pt-8 text-center md:text-left"
          >
            <div className="flex flex-col md:flex-row justify-between gap-4 w-full border-b-[1.5px] border-white/50 pb-4">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <h2 className="font-[Syne] font-medium text-[24px] md:text-[32px] leading-[40px] text-white">
                  {experience.title}
                </h2>
              </div>

              <div className="space-y-2">
                <p className="font-[Syne] font-semibold text-[20px] md:text-[24px] leading-[32px] text-[#CBCBCB] text-center md:text-right">
                  {experience.companyName}
                </p>
                <p className="font-[Poppins] font-normal text-[14px] md:text-[16px] text-[#CBCBCB] text-center md:text-right">
                  {experience.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
