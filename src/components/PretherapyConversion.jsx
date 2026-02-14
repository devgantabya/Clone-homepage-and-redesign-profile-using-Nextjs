import React from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

const PretherapyConversion = () => {
  return (
    <section className="bg-[#c2bfcb]">
      <div className="flex flex-col md:flex-row h-auto md:h-[675px]">
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <Image
            src="/images/pretherapy-conversation.webp"
            alt="Live a fulfilling life"
            fill
            className="object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col text-[#223614] font-bold">
          <div className="flex-1 flex items-center">
            <div className="px-6 sm:px-10 md:px-20 py-8 md:py-0">
              <h2 className="text-[34px] lg:text-5xl leading-snug sm:leading-tight lg:leading-tight">
                You don't have to do this all <em>alone</em>.
              </h2>

              <p className="mt-4 sm:mt-6 text-lg max-w-full md:max-w-md">
                If you are facing any of these, there's hope:
              </p>
              <ul className="list-disc list-inside mt-3 sm:mt-4 text-lg max-w-full md:max-w-md space-y-2 sm:space-y-3 pl-3">
                <li>Persistent feelings of sadness or hopelessness</li>
                <li>Trouble focusing or making decisions</li>
                <li>Difficulty maintaining relationships</li>
                <li>Feeling constantly exhausted or unmotivated</li>
                <li>A pervasive sense of being overwhelmed</li>
              </ul>

              <p className="mt-4 sm:mt-6 text-lg max-w-full md:max-w-md">
                With empathy and guidance, we'll work together to navigate the
                challenges life throws your way.
              </p>
            </div>
          </div>

          <div className="border-t border-[#223614]">
            <button className="w-full flex items-center justify-center px-6 sm:px-20 py-4 sm:py-6 uppercase text-base tracking-wide hover:bg-[#223614] hover:text-white transition-all duration-500">
              <span>Work with me</span>
              <IoIosArrowRoundForward size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PretherapyConversion;
