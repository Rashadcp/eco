"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TIER1_PARTNERS } from "@/data/content";
import { HavellsLogoSvg } from "@/components/ui/HavellsLogo";

function PartnerLogo({ partner }: { partner: (typeof TIER1_PARTNERS)[number] }) {
  const [hasError, setHasError] = useState(false);
  const initial = partner.name.charAt(0).toUpperCase();

  if (partner.name.includes("Havells")) {
    return <HavellsLogoSvg className="h-7 w-auto max-w-[130px]" />;
  }

  if (hasError) {
    return (
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d9ef9a] text-sm font-bold text-[#17352e]">
        {initial}
      </span>
    );
  }

  if (partner.logoUrl) {
    return (
      <img
        src={partner.logoUrl}
        alt={`${partner.name} logo`}
        loading="lazy"
        onError={() => setHasError(true)}
        className="h-9 w-auto max-w-[150px] object-contain object-left"
      />
    );
  }

  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white p-2">
      <img
        src={`https://icon.horse/icon/${partner.logoDomain}`}
        alt={`${partner.name} logo`}
        loading="lazy"
        onError={() => setHasError(true)}
        className="h-full w-full object-contain"
      />
    </span>
  );
}

export function PartnerBanner() {
  const [isHovered, setIsHovered] = useState(false);
  const marqueePartners = [...TIER1_PARTNERS, ...TIER1_PARTNERS];

  return (
    <section
      aria-labelledby="partner-title"
      className="relative overflow-hidden border-y border-[#244b3d] bg-[#0d2b24] py-20 text-[#eef7df] sm:py-24"
    >
      <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#b8db71]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-48 w-96 rounded-full bg-[#4b9180]/10 blur-3xl" />

      <div className="relative">
        <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
          <p className="mb-5 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b9d28a]">
            <span className="h-px w-8 bg-[#7eaa57]" />
            Trusted ecosystem
            <span className="h-px w-8 bg-[#7eaa57]" />
          </p>
          <h2
            id="partner-title"
            className="text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#f4f9df] sm:text-5xl"
          >
            Built with partners you can rely on.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-[#afc4b5]">
            We work with proven technology and service partners to deliver dependable solar systems from roof to grid.
          </p>
        </div>

        <div
          className="relative mt-12 overflow-hidden py-3"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0d2b24] to-transparent sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0d2b24] to-transparent sm:w-32" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: isHovered ? 42 : 28,
                ease: "linear",
              },
            }}
            className="flex w-max shrink-0 gap-4 px-4 sm:gap-5 sm:px-6"
          >
            {marqueePartners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 350, damping: 24 }}
                className="group flex min-h-[72px] shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-3.5 backdrop-blur-sm transition-colors duration-300 hover:border-[#b8db71]/45 hover:bg-white/[0.11] sm:px-6"
              >
                <PartnerLogo partner={partner} />
                {!partner.logoUrl && (
                  <span className="whitespace-nowrap text-sm font-semibold text-[#e8f1df] transition-colors group-hover:text-[#d9ef9a]">
                    {partner.name}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mx-auto mt-9 flex max-w-6xl items-center gap-3 px-5 sm:px-8">
          <span className="h-px flex-1 bg-white/10" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#779889]">
            One connected standard
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </div>
      </div>
    </section>
  );
}

export default PartnerBanner;
