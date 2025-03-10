import React, { useState } from "react";

const faqData = [
  {
    question: "What is your design process?",
    answer:
      "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
  },
  {
    question: "What tools and software do you use for UX design?",
    answer:
      "I use tools like Figma, Adobe XD, Sketch, and InVision for designing and prototyping. For user research and collaboration, I leverage Miro, Notion, and Google Workspace.",
  },
  {
    question: "How do you measure the success of your UX designs?",
    answer:
      "Success is measured through user feedback, usability testing, engagement metrics, and business goals. A successful UX design improves user satisfaction, reduces friction, and meets project objectives.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-6 md:px-[100px] py-16">
      <div className="flex flex-col md:flex-row gap-4 md:gap-2 items-center text-center md:text-left">
        <img
          src="./Expertise.png"
          className="w-6 md:w-8 h-6 md:h-8"
          alt="Expertise"
        />
        <h2 className="font-[Syne] font-bold text-[28px] md:text-[40px] leading-[100%] text-white">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="pt-8 md:pt-10 space-y-6 md:space-y-8">
        {faqData.map((faq, index) => (
          <div key={index} className="pb-4">
            <button
              className="flex flex-row gap-2 items-center w-full text-left"
              onClick={() => toggleFaq(index)}
            >
              <h3 className="font-[Syne] font-medium text-[24px] md:text-[32px] leading-[36px] md:leading-[40px] tracking-[0%] text-white">
                {faq.question}
              </h3>
            </button>

            {openIndex === index && (
              <p className="font-[Poppins] font-normal text-[16px] md:text-[18px] leading-[100%] tracking-[0%] text-[#CBCBCB] mt-4">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
