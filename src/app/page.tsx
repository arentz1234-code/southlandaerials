import Link from "next/link";
import Image from "next/image";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProcessSection />
      <ServicesSection />
      <PortfolioPreview />
      <ServiceAreas />
      <CTASection />
    </>
  );
}
