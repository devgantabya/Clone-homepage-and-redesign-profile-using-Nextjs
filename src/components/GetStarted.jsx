import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const GetStarted = () => {
  return (
    <section className="bg-[#7e7b46] py-28">
      <div className="w-[622px] text-white text-center mx-auto">
        <h2 className="text-4xl font-medium leading-tight">
          Get started today.
        </h2>
        <p className="mt-4 text-xl leading-relaxed">
          Ready to take the first step towards a happier, healthier you? Contact
          me to book your first session. I look forward to starting this
          therapeutic journey with you.
              </p>
              <button className="flex items-center gap-2 mx-auto text-[14.3608px] font-medium uppercase hover:text-[#7e7b46] px-[28.7216px] py-[14.3608px] border border-white mt-6 bg-transparent hover:bg-white transition-colors duration-1000">
                            Get in touch
                            <span>
                              <IoIosArrowRoundForward size={18} />
                            </span>
                          </button>
      </div>
    </section>
  );
};

export default GetStarted;
