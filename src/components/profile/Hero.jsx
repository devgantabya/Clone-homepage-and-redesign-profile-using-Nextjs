import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#F5EBDD] py-12 md:py-24">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="font-playfair text-4xl md:text-6xl font-semibold leading-tight">
            Dr. Maya Reynolds, PsyD
          </h1>
          <p className="mt-4 text-lg md:text-xl leading-relaxed">
            Licensed Clinical Psychologist based in Santa Monica, California.
            offering therapy for adults who feel overwhelmed by anxiety, stress,
            or the lingering effects of past experiences.
          </p>
          <p className="mt-4 text-lg md:text-xl leading-relaxed">
            Many of the people I work with are high-achieving, thoughtful, and
            self-aware—but internally feel exhausted, stuck in overthinking, or
            emotionally on edge.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-[300px] h-[450px] md:w-[400px] md:h-[600px] overflow-hidden rounded-t-[180px] md:shadow-lg">
            <Image
              src="/images/dr-maya-reynolds.png"
              alt="Dr. Maya Reynolds"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
