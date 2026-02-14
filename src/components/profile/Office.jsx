import Image from "next/image";
import React from "react";

const Office = () => {
  return (
    <section className="bg-white py-12 md:py-24">
      <div className="container mx-auto px-6 md:flex md:gap-12 items-center">
        <div className="md:w-1/2">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold">
            Office Location
          </h2>
          <p className="mt-4 text-lg md:text-xl leading-relaxed">
            123th Street 45 W, Santa Monica, CA 90401
          </p>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative w-full h-60 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/office1.jpeg"
              alt="Therapy Office 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-60 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/office2.jpeg"
              alt="Therapy Office 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Office;
