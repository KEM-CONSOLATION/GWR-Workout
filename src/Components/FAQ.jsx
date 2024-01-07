import React, { useState } from "react";

const FAQ = () => {
  const faqData = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Orci.",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Nibh eget id egestas donec. Arcu gravida quam arcu lacinia. Maecenas tristique id vestibulum et adipiscing etiam. Nibh amet tincidunt amet elit nunc lorem nunc. Nisi purus cras eu id ipsum odio ultricies tortor viverra. Nulla pulvinar ornare ante ac et ac feugiat pharetra ac. Nunc nullam fringilla dui habitant morbi sed mauris ac blandit. Ullamcorper nunc morbi proin ultricies suscipit mi. At egestas nunc fermentum viverra ultrices interdum vitae. Lectus amet sodales at vel adipiscing nisl. Ut ele  ",
    },
    {
      question: "How can I contribute to the project?",
      answer:
        "You can contribute by following the guidelines in the project's README file and submitting pull requests on GitHub.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" mx-10 2xl:mx-40 mt-8">
      <p className="text-[24px] text-[#333333] font-[600] text-center py-5 mb-4">
        PushUp-<span className="text-[#FE4D01]">Mania24</span> Community Wall
      </p>

      {faqData.map((faq, index) => (
        <div
          key={index}
          className="mb-4 px-5 border-2 border-[#FE4D01] py-3 rounded"
        >
          <div
            className="flex items-center justify-between cursor-pointer  font-bold my-5"
            onClick={() => toggleAnswer(index)}
          >
            <div className="flex items-center">
              <div className="font-[500] text-[#333333] text-[14px] lg:text-[20px]">
                {` ${faq.question}`}
              </div>
            </div>
            <div className="font-[500] text-[#333333] text-[40px]">
              {openIndex === index ? "-" : "+"}
            </div>
          </div>
          {openIndex === index && (
            <div className="text-[#757575] text-[12px] lg:text-[18px] font-[400]">
              {` ${faq.answer}`}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
