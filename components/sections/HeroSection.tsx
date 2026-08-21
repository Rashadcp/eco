"use client";

import React from "react";
import { Zap } from "lucide-react";
import SideRays from "@/components/ui/SideRays";

export interface HeroSectionProps {
  onScrollToContact?: () => void;
  onScrollToImpact?: () => void;
}

export function HeroSection({
  onScrollToContact,
  onScrollToImpact,
}: HeroSectionProps) {
  return (
    <>
      {/* Import serif font for the elegant italic 'Solutions' word */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,600&display=swap');
        .serif-italic-accent {
          font-family: 'Playfair Display', serif;
          font-style: italic;
        }
      `}</style>

      <section
        id="hero"
        aria-labelledby="hero-title"
        className="relative isolate min-h-[90vh] lg:min-h-screen w-full flex flex-col justify-center overflow-hidden text-white pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20"
      >
        {/* Layer 1: Full-bleed Background Landscape */}
        <div className="absolute inset-0 -z-30">
          <img
            src="/images/hero-solar-landscape.jpg"
            alt="Next-Generation Solar Energy Landscape"
            className="h-full w-full object-cover object-center"
            loading="eager"
          />
        </div>

        {/* Layer 2: iOS Wallpaper Depth Effect Text (Tucked behind mountain ridge) */}
        <div className="pointer-events-none absolute inset-x-0 top-24 sm:top-28 md:top-32 lg:top-36 -z-20 flex justify-center overflow-hidden select-none">
          <span className="font-display text-[10vw] sm:text-[11vw] font-black uppercase tracking-[0.2em] text-white/50 drop-shadow-[0_2px_15px_rgba(0,0,0,0.35)] whitespace-nowrap leading-none">
            SOLAR ENERGY
          </span>
        </div>

        {/* SideRays: Atmospheric cinematic solar sunbeams from top right */}
        <div className="pointer-events-none absolute inset-0 -z-15 overflow-hidden mix-blend-screen opacity-75">
          <SideRays
            speed={1.8}
            rayColor1="#fae178"
            rayColor2="#b8db71"
            intensity={1.8}
            spread={1.9}
            origin="top-right"
            tilt={-6}
            saturation={1.3}
            blend={0.65}
            falloff={1.7}
            opacity={0.8}
          />
        </div>

        {/* Layer 3: Foreground Cutout (Mountain Ridge & Solar Panels overlapping the text and rays) */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <img
            src="/images/hero-solar-foreground.png"
            alt="Foreground mountain landscape mask"
            className="h-full w-full object-cover object-center"
            loading="eager"
          />
          {/* Subtle cinematic gradient scrims for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#04130f]/90 via-[#04130f]/25 to-[#04130f]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#04130f]/75 via-[#04130f]/20 to-[#04130f]/60" />
        </div>

        {/* Layer 4: Main Content (Headline, Subtitle & CTA) */}
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-14">
          <div className="max-w-3xl">
            
            {/* Main Headline */}
            <h1
              id="hero-title"
              className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.12] sm:leading-[1.05] tracking-tight text-white drop-shadow-md"
            >
              Next-Generation <br />
              Solar Energy <span className="serif-italic-accent font-normal text-[#efffd7] drop-shadow-lg">Solutions</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-3.5 sm:mt-5 max-w-xl text-xs sm:text-base md:text-lg leading-relaxed sm:leading-relaxed text-white/95 drop-shadow-sm font-sans">
              Power your home and business with Kerala&apos;s trusted rooftop solar systems. Cut up to 90% of your KSEB electricity bill with Tier-1 panels and PM Surya Ghar subsidy.
            </p>

            {/* Lime CTA Button */}
            <div className="mt-5 sm:mt-8 flex items-center gap-4">
              <button
                type="button"
                onClick={onScrollToContact}
                className="group inline-flex items-center gap-2 rounded-full bg-[#b4e67e] px-6 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-base font-bold text-[#13322b] shadow-[0_10px_30px_rgba(180,230,126,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#c4f092] hover:shadow-[0_15px_35px_rgba(180,230,126,0.45)] cursor-pointer outline-none focus:outline-none"
              >
                <span>Get Free Solar Quote</span>
                <Zap className="h-4 w-4 fill-current transition-transform duration-200 group-hover:scale-110" />
              </button>
            </div>

          </div>
        </div>

      </section>
    </>
  );
}

export default HeroSection;
