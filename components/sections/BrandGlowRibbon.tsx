"use client";

import React from "react";
import GradientText from "@/components/ui/GradientText";

export function BrandGlowRibbon() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');

        .font-michroma {
          font-family: 'Michroma', sans-serif;
        }

        @keyframes raySweep {
          0% {
            transform: translate3d(-150%, 0, 0) skewX(-25deg);
            opacity: 0;
          }
          20% {
            opacity: 0.6;
          }
          80% {
            opacity: 0.6;
          }
          100% {
            transform: translate3d(250%, 0, 0) skewX(-25deg);
            opacity: 0;
          }
        }

        .light-ray-sweep {
          animation: raySweep 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          will-change: transform, opacity;
          contain: layout paint;
        }
      `}</style>

      <section
        aria-label="Brand Banner"
        className="relative isolate w-full overflow-hidden bg-[#0c201b] py-8 sm:py-12 md:py-14 border-y border-[#174a40] select-none flex items-center justify-center"
      >
        {/* Subtle sweeping light flare overlay */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="light-ray-sweep absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md" />
        </div>

        <div className="relative z-10 mx-auto px-4 sm:px-8 text-center flex items-center justify-center">
          <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-normal uppercase tracking-[0.16em] sm:tracking-[0.24em] md:tracking-[0.28em] leading-tight">
            <GradientText
              colors={["#b8db71", "#ffffff", "#62e6b5", "#d9ef9a", "#ffffff", "#b8db71"]}
              animationSpeed={4}
              showBorder={false}
              className="font-michroma cursor-default"
            >
              ENNERTY SOLAR
            </GradientText>
          </h2>
        </div>
      </section>
    </>
  );
}

export default BrandGlowRibbon;

