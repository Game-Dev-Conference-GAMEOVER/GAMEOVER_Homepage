import { AboutSection } from "@/components/AboutSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { PartnersSection } from "@/components/PartnersSection";
import { ProgramSection } from "@/components/ProgramSection";
import { VenueSection } from "@/components/VenueSection";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ProgramSection />
        <VenueSection />
        <FaqSection />
        <PartnersSection />
      </main>
      <Footer />
    </>
  );
}
