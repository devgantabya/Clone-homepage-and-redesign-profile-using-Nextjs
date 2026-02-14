import React from "react";
import Image from "next/image";

const OurOffice = () => {
  return (
    <section className="bg-[#fbf6f1] py-12 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-primary order-2 md:order-1">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Our Office
            </h2>

            <p className="mt-8 font-bold text-base md:text-lg leading-relaxed text-primary">
              Located in Santa Monica, California, my office is intentionally
              designed to feel calm, private, and grounding. The space is quiet,
              filled with natural light, and thoughtfully arranged to support
              reflection and meaningful conversation.
            </p>

            <p className="mt-6 font-bold text-base md:text-lg leading-relaxed text-primary">
              Clients often share that simply walking into the room helps them
              slow down. In-person sessions are available at 123th Street 45 W,
              Santa Monica, CA 90401, along with secure telehealth options for
              clients across California.
            </p>

            <div className="mt-10 border-l-2 border-[#223614] pl-6">
              <p className="text-sm uppercase tracking-wider text-primary">
                In-Person & Telehealth Available
              </p>
              <p className="mt-2 text-sm text-primary">
                A quiet, private, and comfortable space designed for safety and
                care.
              </p>
            </div>
          </div>

          <div className="relative order-1 md:order-2">
            <div className="relative w-[180px] md:w-auto h-[280px] md:h-[520px] rounded-t-[260px] overflow-hidden mx-auto md:mx-0">
              <Image
                src="/images/office1.jpeg"
                alt="Therapy Office Interior"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-12 -left-12 w-[220px] h-[260px] rounded-t-[160px] overflow-hidden shadow-xl hidden md:block">
              <Image
                src="/images/office2.jpeg"
                alt="Therapy Seating Area"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOffice;
