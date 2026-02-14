import React from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

const TrustBuilding = () => {
  return (
    <section className="bg-[#e5e0da] py-12 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-14 md:gap-24 relative">
          <div className="relative flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-[200px] h-[300px] sm:w-[260px] sm:h-[360px] md:w-115 md:h-155 overflow-hidden rounded-t-[140px] sm:rounded-t-[180px] md:rounded-t-[260px]">
              <Image
                src="/images/trust-building.webp"
                alt="Trust Building"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 260px, 460px"
              />
            </div>

            <div className="absolute bottom-[10px] right-[30px] sm:right-[40px] md:-bottom-10 md:-right-10 w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] md:w-55 md:h-55 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/images/white-lilac.webp"
                alt="Decorative Lilac"
                fill
                className="object-cover"
                sizes="(max-width:768px) 130px, 220px"
              />
            </div>
          </div>

          <div className="text-primary max-w-xl order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
              Hi, I'm Lilac.
            </h2>

            <p className="mt-6 font-bold text-base md:text-lg leading-relaxed text-primary">
              I'm committed to providing a safe and supportive environment where
              we can explore your thoughts, feelings, and behaviors. With
              empathy and guidance, we'll work together to navigate the
              challenges life throws your way.
            </p>

            <button className="mt-12 mx-auto flex items-center gap-2 text-base md:text-[14.3608px] font-bold uppercase px-6 py-3 md:px-[28.7216px] md:py-[14.3608px] border border-[#223614] bg-transparent hover:bg-[#223614] hover:text-white transition-colors duration-1000">
              Let's chat
              <IoIosArrowRoundForward size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBuilding;
