import React from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

const TrustBuilding = () => {
  return (
    <section className="bg-[#e5e0da] py-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 items-center gap-24 relative">
          {/* LEFT */}
          <div className="text-[#223614] max-w-xl">
            <h2 className="text-6xl font-medium leading-tight">
              Hi, I'm Lilac.
            </h2>

            <p className="mt-6 text-base leading-relaxed text-[#223614]/90">
              I'm committed to providing a safe and supportive environment where
              we can explore your thoughts, feelings, and behaviors. With
              empathy and guidance, we'll work together to navigate the
              challenges life throws your way.
            </p>

            <button className="flex items-center gap-2 mx-auto text-[14.3608px] font-medium uppercase hover:text-white px-[28.7216px] py-[14.3608px] border border-[#223614] mt-6 bg-transparent hover:bg-[#223614] transition-colors duration-1000">
              Let's chat
              <span>
                <IoIosArrowRoundForward size={18} />
              </span>
            </button>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-end">
            <div className="relative w-115 h-155 overflow-hidden rounded-t-[260px]">
              <Image
                src="/images/trust-building.webp"
                alt="Trust Building"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 460px"
              />
            </div>

            <div className="absolute -bottom-10 -right-10 w-55 h-55 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/images/white-lilac.webp"
                alt="Decorative Lilac"
                fill
                className="object-cover"
                sizes="220px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBuilding;
