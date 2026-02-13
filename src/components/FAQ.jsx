"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "Do you take insurance?",
    answer:
      "Yes, I accept select insurance providers. Please contact me to verify coverage.",
  },
  {
    question: "What are your rates?",
    answer:
      "Session rates vary depending on service type. Reach out for detailed pricing.",
  },
  {
    question: "Do you have any openings?",
    answer:
      "Availability changes frequently. Please get in touch to check current openings.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[#fbf6f1] py-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-28 items-center">
          {/* LEFT ARCH IMAGE */}
          <div className="flex justify-center">
            <div className="relative w-[340px] h-[520px] overflow-hidden rounded-t-[180px]">
              <Image
                src="/images/faq.webp"
                alt="FAQ"
                fill
                className="object-cover"
                sizes="340px"
                priority
              />
            </div>
          </div>

          {/* RIGHT FAQ CONTENT */}
          <div className="max-w-xl text-[#223614]">
            <h2 className="text-6xl font-medium leading-tight">FAQs</h2>

            <div className="space-y-0 border-t mt-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-[#223614] py-4">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex items-center gap-5 text-left text-4xl"
                  >
                    <span className="text-4xl leading-none">
                      {openIndex === index ? <FiMinus /> : <FiPlus />}
                    </span>
                    <span>{faq.question}</span>
                  </button>

                  {openIndex === index && (
                    <p className="mt-4 text-xl text-[#223614]/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
