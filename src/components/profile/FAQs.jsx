import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What issues do you focus on?",
    answer: "My work often focuses on anxiety, panic, trauma, and burnout.",
  },
  {
    question: "Do you work with trauma?",
    answer:
      "Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress.",
  },
  {
    question: "Do you offer telehealth sessions?",
    answer:
      "I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California.",
  },
  {
    question: "What is your approach to therapy?",
    answer:
      "I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-12 md:py-24">
      <div className="container mx-auto px-6 md:max-w-4xl">
        <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-center">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left text-xl md:text-2xl font-semibold"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.question}</span>
                <span className="ml-4 transition-transform duration-300">
                  {openIndex === index ? <FiMinus /> : <FiPlus />}
                </span>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-96 mt-4" : "max-h-0"
                }`}
              >
                <p className="text-lg md:text-xl leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
