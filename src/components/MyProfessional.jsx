"use client";

import React, { useState } from "react";

const professionalFaqs = [
  {
    question: "Education",
    answer:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
  {
    question: "Licensure",
    answer:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
  {
    question: "Certifications",
    answer:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
];

const MyProfessional = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#e5e0da] text-primary py-16 md:py-28 px-5">
      <h2 className="text-3xl md:text-[41px] font-bold text-center">
        My Professional Background
      </h2>

      <div className="max-w-xl mx-auto mt-10 border-t border-[#223614]">
        {professionalFaqs.map((faq, index) => (
          <div key={index} className="border-b border-[#223614]">
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between py-3 text-left text-lg md:text-2xl"
            >
              <span>{faq.question}</span>

              <div className="relative w-5 h-5">
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="block w-5 h-[2px] bg-[#223614]"></span>
                </span>

                <span
                  className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out ${
                    openIndex === index ? "rotate-180" : "rotate-90"
                  }`}
                >
                  <span className="block w-5 h-[2px] bg-[#223614]"></span>
                </span>
              </div>
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-base md:text-[19px] text-primary/80 leading-relaxed pb-6 px-3 md:px-20">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyProfessional;
