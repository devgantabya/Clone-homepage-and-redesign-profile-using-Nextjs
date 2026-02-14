"use client";

import React from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

const BalanceLife = () => {
  return (
    <section className="bg-[#e5e0da]">
      <div className="flex flex-col-reverse md:flex-row h-auto md:h-[650px]">
        <div className="w-full md:w-1/2 flex flex-col text-primary">
          <div className="flex-1 flex items-center justify-center md:justify-start px-6 md:px-20 py-12 md:py-0">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight">
                Live a fulfilling life.
              </h2>

              <p className="mt-6 text-base sm:text-lg max-w-md">
                Life can be challenging—especially when you're trying to balance
                your personal and professional life.
              </p>

              <p className="mt-4 text-base sm:text-lg max-w-md">
                It's easy to feel like you're alone in facing these challenges,
                but I want you to know that I'm here to help.
              </p>
            </div>
          </div>

          <div className="border-t border-[#223614]">
            <button className="w-full flex items-center justify-center px-6 md:px-20 py-4 md:py-6 uppercase text-sm tracking-wide hover:bg-[#223614] hover:text-white transition-all duration-500">
              <span>Get in touch</span>
              <IoIosArrowRoundForward size={20} className="ml-2" />
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-[300px] md:h-auto relative">
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
