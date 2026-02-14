import BalanceLife from "@/components/BalanceLife";
import FAQSection from "@/components/FAQ";
import GetStarted from "@/components/GetStarted";
import HeroSection from "@/components/Hero";
import MyProfessional from "@/components/MyProfessional";
import MySpecialties from "@/components/MySpecialties";
import OurOffice from "@/components/OurOffice";
import PretherapyConversion from "@/components/PretherapyConversion";
import TrustBuilding from "@/components/TrustBuilding";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BalanceLife />
      <MySpecialties />
      <PretherapyConversion />
      <TrustBuilding />
      <OurOffice />
      <FAQSection />
      <MyProfessional />
      <GetStarted />
    </main>
  );
}
