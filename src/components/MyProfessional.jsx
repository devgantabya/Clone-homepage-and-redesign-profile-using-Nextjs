"use client";

import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

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

  return (
    <section className="bg-[#e5e0da] text-[#223614] py-28">
      <h2 className="text-4xl font-medium leading-tight text-center">
        My Professional Background
      </h2>
      <div className="w-[622px] mx-auto space-y-0 border-t mt-8">
        {professionalFaqs.map((faq, index) => (
          <div key={index} className="border-b border-[#223614]">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between gap-5 py-3 text-left text-2xl"
            >
              <span>{faq.question}</span>
              <span className="text-2xl leading-none">
                {openIndex === index ? <FiMinus /> : <FiPlus />}
              </span>
            </button>
            {openIndex === index && (
              <p className="text-xl text-[#223614]/80 leading-relaxed pb-5 px-22">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyProfessional;
