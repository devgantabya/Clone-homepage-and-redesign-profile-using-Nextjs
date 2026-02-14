"use client";

import React from "react";
import About from "@/components/profile/About";
import Services from "@/components/profile/Services";
import FAQs from "@/components/profile/FAQs";
import ScheduleSession from "@/components/profile/ScheduleSession";
import Office from "@/components/profile/Office";
import AboutInMobile from "@/components/profile/AboutInMobile";
import Hero from "@/components/profile/Hero";

export default function ProfilePage() {
  return (
    <main className="text-primary">
      <Hero />
      <div className="hidden md:block">
        <About />
      </div>
      <div className="block md:hidden">
        <AboutInMobile />
      </div>
      <Office />
      <Services />
      <FAQs />
      <ScheduleSession />
    </main>
  );
}
