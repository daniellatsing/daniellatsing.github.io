import React, { useState } from "react";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { Collapse } from "@mui/material";

interface AccordionItem {
  title: string;
  company: string;
  date: string;
  content: string;
}

const Experience: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const experienceItems: AccordionItem[] = [
    {
      title: "Full Stack Developer @ ",
      company: "Web Impact",
      date: "SEPT 2022 - JULY 2024",
      content:
        "Developed adaptive websites to revamp online presence for local businesses, enhancing user engagement and improving accessibility while aligning with consistent branding, user-friendly layouts, and seamless interactions",
    },
    {
      title: "Digital Marketing and Communications Manager @ ",
      company: "Hey Mentor",
      date: "JUNE 2022 - JULY 2023",
      content: "Oversaw social media initiatives, managed growth channels on Facebook, Instagram, and LinkedIn, resulting in increased engagement and brand visibility",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto text-night mt-4 px-8 md:px-10 lg:w-full">
      <div className="border-b border-french-gray"></div>
      {experienceItems.map((item, index) => (
        <div className="border-b border-french-gray" key={index}>
          <button
            className="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-lg text-paynes-gray font-bold">
              {item.title}<span className="text-base md:text-lg text-night font-bold">{item.company}</span>
            </span>
            <ExpandMoreRoundedIcon
              className={`text-french-gray w-6 h-6 transition-transform duration-800 ease-in-out ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          <div className="ml-4 px-4">
            <Collapse in={openIndex === index}>
              <div className="text-davys-grey font-bold pb-1 text-sm md:text-base">{item.date}</div>
              <div className="pb-4 text-night text-sm md:text-base">{item.content}</div>
            </Collapse>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
