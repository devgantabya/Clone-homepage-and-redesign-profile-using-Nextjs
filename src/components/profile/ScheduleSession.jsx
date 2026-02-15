import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { headingFont } from "@/app/fonts";

const ScheduleSession = () => {
  return (
    <section className="bg-[#4DB6AC] py-16 md:py-32 px-4">
      <div className="max-w-3xl mx-auto text-center text-white">
        <h2
          className={`${headingFont.className} text-3xl md:text-5xl font-semibold`}
        >
          Schedule Your Session
        </h2>

        <p className="mt-6 text-lg md:text-xl leading-relaxed">
          Therapy can help you manage anxiety, recover from burnout, and build
          resilience. Contact Dr. Maya Reynolds today to begin your journey
          toward balance and clarity.
        </p>

        <a
          href="https://lilac-template.squarespace.com/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center 
             w-2/3 md:w-auto 
             px-8 py-4 
             mt-12 md:mt-16
             border border-white 
             text-sm tracking-wider uppercase font-medium
             bg-transparent 
             overflow-hidden
             transition-all duration-300 ease-out
             hover:bg-white hover:text-[#4DB6AC]"
        >
          <span className="relative z-10 flex items-center gap-2">
            Book a Consultation
            <IoIosArrowRoundForward
              size={22}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </a>
      </div>
    </section>
  );
};

export default ScheduleSession;
