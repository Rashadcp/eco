"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { BrandGlowRibbon } from "@/components/sections/BrandGlowRibbon";
import { ProcessWorkflow } from "@/components/sections/ProcessWorkflow";
import { PartnerBanner } from "@/components/sections/PartnerBanner";
import { MetricSwitcher } from "@/components/sections/MetricSwitcher";
import { AnnualImpact } from "@/components/sections/AnnualImpact";
import TestimonialsSlider, { TestimonialsSliderAward } from "@/components/sections/TestimonialsSlider";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Home() {
  const router = useRouter();

  const handleRouteToContact = () => {
    router.push("/contact");
  };

  const handleRouteToImpact = () => {
    router.push("/about");
  };

  return (
    <main className="min-h-screen flex flex-col">
      <HeroSection
        onScrollToContact={handleRouteToContact}
        onScrollToImpact={handleRouteToImpact}
      />

      <BrandGlowRibbon />

      <ProcessWorkflow onScrollToContact={handleRouteToContact} />

      <PartnerBanner />

      <MetricSwitcher />

      <AnnualImpact onScrollToContact={handleRouteToContact} />

      <TestimonialsSlider />

      <CtaBanner onScrollToContact={handleRouteToContact} />
    </main>
  );
}
