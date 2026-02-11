import Title from "@/components/ui/Title";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-[#fbf6f1] py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Image */}
          <div>
            <Image
              src="/images/live-your-life-in-full-bloom.webp"
              alt="Live your life in full bloom"
              width={600}
              height={800}
              className="w-full max-w-md md:max-w-lg rounded-t-full object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="text-center md:text-left">
            <Title as="h1">
              Live your life
              <br />
              in full bloom
            </Title>

            <p className="mt-4 text-sm uppercase tracking-wide text-[#223614]">
              Therapy for Adults in Minneapolis, MN.
            </p>

            <button
              className="mt-8 px-6 py-3 border border-[#223614] text-[#223614] 
                         uppercase text-sm tracking-wider 
                         hover:bg-[#223614] hover:text-white 
                         transition duration-300"
              aria-label="Connect with me"
            >
              Connect with me →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
