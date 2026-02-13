import React from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

const BalanceLife = () => {
  return (
    <section className="bg-[#e5e0da]">
      <div className="flex h-[650px]">
        {/* LEFT SIDE */}
        <div className="w-1/2 flex flex-col text-[#223614]">
          {/* Center Content */}
          <div className="flex-1 flex items-center">
            <div className="px-20">
              <h2 className="text-4xl lg:text-5xl font-medium leading-tight">
                Live a fulfilling life.
              </h2>

              <p className="mt-8 text-lg max-w-md">
                Life can be challenging—especially when you're trying to balance
                your personal and professional life.
              </p>

              <p className="mt-6 text-lg max-w-md">
                It's easy to feel like you're alone in facing these challenges,
                but I want you to know that I'm here to help.
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="border-t border-[#223614]">
            <button className="w-full flex items-center justify-center px-20 py-6 uppercase text-sm tracking-wide hover:bg-[#223614] hover:text-white transition-all duration-500">
              <span>Get in touch</span>
              <IoIosArrowRoundForward size={20} />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="w-1/2 relative">
          <Image
            src="/images/live-a-fulfilling-life.webp"
            alt="Live a fulfilling life"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BalanceLife;
