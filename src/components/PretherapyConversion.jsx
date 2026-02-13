import React from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

const PretherapyConversion = () => {
  return (
    <section className="bg-[#c2bfcb]">
      <div className="flex h-[650px]">
        {/* LEFT SIDE IMAGE */}
        <div className="w-1/2 relative">
          <Image
            src="/images/pretherapy-conversation.webp"
            alt="Live a fulfilling life"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT SIDE */}

        <div className="w-1/2 flex flex-col text-[#223614]">
          {/* Center Content */}
          <div className="flex-1 flex items-center">
            <div className="px-20">
              <h2 className="text-4xl lg:text-5xl font-medium leading-tight">
                You don't have to do this all alone.
              </h2>

              <p className="mt-8 text-lg max-w-md">
                If you are facing any of these, there's hope:
              </p>
              <ul className="list-disc list-inside mt-4 text-lg max-w-md space-y-3 pl-5">
                <li>Persistent feelings of sadness or hopelessness</li>
                <li>Trouble focusing or making decisions</li>
                <li>Difficulty maintaining relationships</li>
                <li>Feeling constantly exhausted or unmotivated</li>
                <li>A pervasive sense of being overwhelmed</li>
              </ul>

              <p className="mt-6 text-lg max-w-md">
                With empathy and guidance, we'll work together to navigate the
                challenges life throws your way.
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="border-t border-[#223614]">
            <button className="w-full flex items-center justify-center px-20 py-6 uppercase text-sm tracking-wide hover:bg-[#223614] hover:text-white transition-all duration-500">
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
