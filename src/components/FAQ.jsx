"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FiPlus, FiMinus } from "react-icons/fi";

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
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#fbf6f1] py-14 md:py-28 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-28 items-center">
          <div className="flex justify-center">
            <div className="relative w-[130px] md:w-[340px] h-[200px] md:h-[520px] overflow-hidden rounded-t-[180px]">
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

          <div className="max-w-xl text-primary">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              FAQs
            </h2>

            <div className="space-y-0 border-t mt-8">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-[#223614] py-4 transition-all duration-500"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(50px)",
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex items-center gap-5 text-left text-2xl md:text-4xl font-semibold"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="text-3xl md:text-4xl leading-none">
                      {openIndex === index ? <FiMinus /> : <FiPlus />}
                    </span>
                    <span>{faq.question}</span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className={`overflow-hidden transition-all duration-500 ${
                      openIndex === index ? "max-h-96 mt-4" : "max-h-0"
                    }`}
                  >
                    <p className="text-xl text-primary/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
