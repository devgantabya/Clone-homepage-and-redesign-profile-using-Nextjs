import React from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const ScheduleSession = () => {
  return (
    <section className="bg-[#7e7b46] py-16 md:py-32 px-4">
      <div className="max-w-3xl mx-auto text-center text-white">
        <h2 className="font-playfair text-3xl md:text-5xl font-semibold">
          Schedule Your Session
        </h2>

        <p className="mt-6 text-lg md:text-xl leading-relaxed">
          Therapy can help you manage anxiety, recover from burnout, and build
          resilience. Contact Dr. Maya Reynolds today to begin your journey
          toward balance and clarity.
        </p>

        <Link
          href="/contact"
          className="flex items-center justify-center w-2/3 md:w-1/3 gap-2 mx-auto text-sm font-medium uppercase px-4 py-4 md:py-3 border border-white mt-12 md:mt-16 bg-transparent hover:bg-white hover:text-[#7e7b46] transition-all duration-500"
        >
          Book a Consultation
          <IoIosArrowRoundForward size={20} />
        </Link>
      </div>
    </section>
  );
};

export default ScheduleSession;
