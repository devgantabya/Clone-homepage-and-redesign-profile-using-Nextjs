import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  return (
    <section className="bg-[#fbf6f1] pt-10">
      <div className="container mx-auto px-4 pb-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Image */}
          <div className="w-full max-w-[320px] md:max-w-none md:w-[513px] overflow-hidden rounded-t-[200px] md:rounded-t-full mx-auto">
            <Image
              src="/images/live-your-life-in-full-bloom.webp"
              width={513}
              height={750}
              alt="Live your life in full bloom"
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center text-[#223614]">
            <h2 className="text-[36px] leading-tight md:text-[73px] md:leading-[75px] font-bold">
              Live your life <br />
              in full bloom
            </h2>

            <p className="text-[16px] md:text-[19px] mt-4">
              Therapy for Adults in Minneapolis, MN.
            </p>

            <button
              className="flex items-center gap-2 mx-auto text-[14px] font-medium uppercase 
            px-6 py-3 border border-[#223614] mt-6 
            bg-transparent hover:bg-[#223614] hover:text-white 
            transition-all duration-500"
            >
              Connect with me
              <IoIosArrowRoundForward size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
