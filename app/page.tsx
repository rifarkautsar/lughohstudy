import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AudienceSection from "@/components/AudienceSection";
import ProgramSection from "@/components/ProgramSection";
import BenefitsSection from "@/components/BenefitsSection";
import ScheduleSection from "@/components/ScheduleSection";
import CertificateSection from "@/components/CertificateSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="divider-dash rounded-full" />
        </div>
        <AudienceSection />
        <ProgramSection />
        <BenefitsSection />
        <ScheduleSection />
        <CertificateSection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
