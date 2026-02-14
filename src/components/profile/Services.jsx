import React from "react";

const services = [
  {
    title: "Anxiety, Panic, Trauma, and Burnout",
    description:
      "My work often focuses on anxiety, panic, trauma, and burnout. Clients frequently come to me feeling “functional” on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they’re always bracing for something to go wrong.",
  },
  {
    title: "Trauma Work",
    description:
      "Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress.",
  },
  {
    title: "Professional Burnout, Perfectionism, and High Internal Pressure",
    description:
      "In addition to trauma and anxiety, I frequently support clients dealing with professional burnout, perfectionism, and high internal pressure. Many are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress.",
  },
];

const Services = () => {
  return (
    <section className="bg-[#F5EBDD] py-12 md:py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-playfair text-3xl md:text-5xl font-semibold">
          Services Offered
        </h2>

        <div className="mt-10 md:mt-16 grid gap-10 md:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-left"
            >
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-lg md:text-xl leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
