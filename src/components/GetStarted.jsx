import React from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const GetStarted = () => {
  return (
    <section className="bg-[#7e7b46] py-16 md:py-32 px-4">
      <div className="max-w-xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-[41px] font-medium leading-tight">
          Get started today.
        </h2>

        <p className="mt-5 text-base md:text-[19px] leading-relaxed">
          Ready to take the first step towards a happier, healthier you? Contact
          me to book your first session. I look forward to starting this
          therapeutic journey with you.
        </p>

        <Link
          href="/contact"
          className="flex items-center justify-center w-1/2 md:w-1/3 gap-2 mx-auto text-sm font-medium uppercase px-4 py-3 border border-white mt-16 bg-transparent hover:bg-white hover:text-[#7e7b46] transition-all duration-500"
        >
          Get in touch
          <IoIosArrowRoundForward size={20} />
        </Link>
      </div>
    </section>
  );
};

export default GetStarted;
