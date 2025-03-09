import React from "react";

const teamMembers = [
  {
    image: "./Say1.png",
    name: "Floyd Miles",
    company: "eBay",
    description:
      "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
  },
];

function Say() {
  return (
    <div className="px-[20px] md:px-[100px] py-16">
      <div className="flex flex-col gap-8">
        {/* Section Title */}
        <div className="flex flex-row gap-2 items-center">
          <img src="./Expertise.png" className="w-8 h-8" alt="Expertise" />
          <h2 className="font-[Syne] font-bold text-[32px] md:text-[40px] leading-[100%] text-white">
            What they say
          </h2>
        </div>

        {/* Team Members Section */}
        <div className="space-y-6 ">
          {teamMembers.map((teamMember, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-8 py-6 items-start md:items-center justify-between"
            >
              {/* Profile Section */}
              <div className="flex flex-row gap-4 items-center">
                <img
                  src={teamMember.image}
                  className="w-16 h-16 rounded-lg"
                  alt={teamMember.name}
                />
                <div className="flex flex-col justify-center gap-1">
                  <h3 className="font-[Syne] font-semibold text-[20px] md:text-[24px] text-white">
                    {teamMember.name}
                  </h3>
                  <p className="font-[Poppins] text-[16px] md:text-[18px] text-[#CBCBCB]">
                    {teamMember.company}
                  </p>
                </div>
              </div>

              {/* Description Section */}
              <p className="text-white font-[Syne] font-medium text-[32px] md:text-[18px] leading-[140%] max-w-[600px]">
                {teamMember.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Say;
