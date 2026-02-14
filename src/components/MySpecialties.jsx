import Image from "next/image";
import React from "react";

const MySpecialties = () => {
  return (
    <section className="bg-[#fbf6f1] py-10 font-bold">
      <h2 className="text-center text-4xl lg:text-5xl leading-tight text-[#223614] py-16">
        My Specialties
      </h2>
      <div className="container mx-auto px-4 pb-2 flex flex-col md:flex-row justify-between gap-4">
        <div className="text-[#223614] leading-5 bg-[#e5e0da] border p-4 space-y-8">
          <h4 className="text-xl">Self-Esteem</h4>
          <p className="text-sm leading-relaxed">
            Building a strong sense of self-worth is key to living a fulfilled
            life. Let's work together to bolster your self-esteem.
          </p>
          <div className="relative w-70 h-70 md:w-65 md:h-65 mx-auto rounded-full overflow-hidden mb-3 md:mb-0">
            <Image
              src="/images/Self-Esteem.webp"
              alt="Self-Esteem"
              fill
              className="object-cover object-left"
            />
          </div>
        </div>

        <div className="text-[#223614] leading-5 bg-[#e5e0da] border p-4 space-y-8">
          <h4 className="text-xl">Relationships</h4>
          <p className="text-sm leading-relaxed">
            Navigating relationships can be complex. I'm here to guide you
            through these complexities to help you form healthier connections.
          </p>
          <div className="relative w-70 h-70 md:w-65 md:h-65 mx-auto rounded-full overflow-hidden mb-3 md:mb-0">
            <Image
              src="/images/relationships.webp"
              alt="Relationships"
              fill
              className="object-cover object-bottom-left"
            />
          </div>
        </div>

        <div className="text-[#223614] leading-5 bg-[#e5e0da] border p-4 space-y-8">
          <h4 className="text-xl">Burnout</h4>
          <p className="text-sm leading-relaxed">
            Feeling overwhelmed by your career is more common than you think.
            Together, we'll identify strategies to manage and prevent burnout.
          </p>
          <div className="relative w-70 h-70 md:w-65 md:h-65 mx-auto rounded-full overflow-hidden mb-3 md:mb-0">
            <Image
              src="/images/burnout.webp"
              alt="Burnout"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySpecialties;
