import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  return (
    <section className="bg-[#fbf6f1] pt-10">
      <div className="container mx-auto px-4 pb-2">
        <div className="w-full flex items-center gap-16">
          <div className="w-128.25 overflow-hidden rounded-t-full">
            <Image
              src="/images/live-your-life-in-full-bloom.webp"
              width={513}
              height={770}
              alt="Live your life in full bloom"
              className="w-full object-cover"
            />
          </div>
          <div className="w-1/2 overflow-hidden text-center text-[#223614]">
            <h2 className="text-[73.372px] leading-[75.7199px] font-medium mt-6">
              Live your life <br />
              in full bloom
            </h2>
            <p className="text-[19.2784px] mt-4">
              Therapy for Adults in Minneapolis, MN.
            </p>
            <button className="flex items-center gap-2 mx-auto text-[14.3608px] font-medium uppercase hover:text-white px-[28.7216px] py-[14.3608px] border border-[#223614] mt-6 bg-transparent hover:bg-[#223614] transition-colors duration-1000">
              Connect with me
              <span>
                <IoIosArrowRoundForward size={18} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
