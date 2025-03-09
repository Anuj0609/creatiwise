import React from 'react'

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
    <div className="text-white px-[100px] py-16 gap-8">
      <div className="flex flex-row gap-2 items-center">
        <img src="./Expertise.png" className="w-8 h-8" alt="Expertise" />
        <div className="font-[Syne] font-bold text-[40px] leading-[100%] text-white">
          Experience
        </div>
      </div>

      <div>
        {experiences.map((experience, index) => (
          <div key={index} className="flex flex-row gap-4 pt-8">
            <div className="flex flex-row justify-between gap-4 w-full border-b-[1.5px] border-white/50 pb-4">
              <div className="flex items-center gap-2">
                <h2 className="font-[Syne] font-medium text-[32px] leading-[40px] tracking-[0%] text-white">
                  {experience.title}
                </h2>
              </div>

              <div className="space-y-2">
                <p className="font-[Syne] font-semibold text-[24px] leading-[32px] tracking-[0%] text-[#CBCBCB] text-right">
                  {experience.companyName}
                </p>
                <p className="font-[Poppins] font-normal text-[16px] leading-[100%] tracking-[0%] text-[#CBCBCB] text-right">
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

export default Experience