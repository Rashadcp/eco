"use client";

import React, { useState } from "react";
import { TIER1_PARTNERS } from "@/data/content";
import { HavellsLogoSvg } from "@/components/ui/HavellsLogo";
import LogoLoop, { LogoItem } from "@/components/ui/LogoLoop";

function PartnerLogo({ partner }: { partner: (typeof TIER1_PARTNERS)[number] }) {
  const [hasError, setHasError] = useState(false);
  const initial = partner.name.charAt(0).toUpperCase();

  if (partner.name.includes("Havells")) {
    return (
      <div className="flex h-11 w-32 items-center justify-center rounded-xl bg-white px-3 py-1.5 shadow-sm">
        <HavellsLogoSvg className="h-6 w-auto max-w-[110px]" />
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="flex h-11 min-w-[120px] items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#d9ef9a] to-[#a6c66d] px-3 py-1.5 shadow-sm">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#17352e] text-xs font-bold text-[#d9ef9a]">
          {initial}
        </span>
        <span className="text-xs font-bold text-[#17352e]">{partner.name}</span>
      </div>
    );
  }

  if (partner.logoUrl) {
    return (
      <div className="flex h-11 w-32 items-center justify-center rounded-xl bg-white px-3 py-1.5 shadow-sm">
        <img
          src={partner.logoUrl}
          alt={`${partner.name} logo`}
          loading="lazy"
          onError={() => setHasError(true)}
          className="max-h-6 w-auto max-w-[115px] object-contain"
        />
      </div>
    );
  }

  return (
    <div className="flex h-11 min-w-[120px] items-center justify-center gap-2 rounded-xl bg-white px-3 py-1.5 shadow-sm">
      <img
        src={`https://icon.horse/icon/${partner.logoDomain}`}
        alt={`${partner.name} logo`}
        loading="lazy"
        onError={() => setHasError(true)}
        className="h-5 w-5 object-contain"
      />
      <span className="text-xs font-bold text-[#17352e]">{partner.name}</span>
    </div>
  );
}

export function PartnerBanner() {
  const partnerLogos: LogoItem[] = TIER1_PARTNERS.map((partner) => ({
    node: (
      <div className="group flex min-h-[68px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] p-2.5 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.12)] transition-all duration-300 hover:border-[#b8db71]/50 hover:bg-white/[0.1] hover:shadow-[0_8px_28px_rgba(184,219,113,0.15)]">
        <PartnerLogo partner={partner} />
      </div>
    ),
    title: partner.name,
  }));

  return (
    <section
      aria-labelledby="partner-title"
      className="relative isolate overflow-hidden border-y border-[#244b3d] bg-gradient-to-b from-[#09221b] via-[#0d2b24] to-[#071914] py-14 text-[#eef7df] sm:py-18"
    >
      {/* Premium ambient light effects & fine grid texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-72 w-[550px] rounded-full bg-[#b8db71]/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-[#4b9180]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full bg-[#b8db71]/10 blur-3xl" />

      <div className="relative z-10">
        {/* Only Partners Heading */}
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8 mb-8 sm:mb-10">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#b8db71]/30 bg-[#b8db71]/10 px-3.5 py-1 shadow-[0_0_18px_rgba(184,219,113,0.12)] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#cbee82] shadow-[0_0_8px_#cbee82]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d6ef9a]">
              Trusted ecosystem
            </p>
          </div>

          <h2
            id="partner-title"
            className="text-2xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl"
          >
            <span className="bg-gradient-to-b from-white via-[#f4f9df] to-[#bed8b4] bg-clip-text text-transparent">
              Built with partners you can rely on.
            </span>
          </h2>
        </div>

        {/* LogoLoop from React Bits */}
        <div className="relative py-2">
          <LogoLoop
            logos={partnerLogos}
            speed={75}
            direction="left"
            logoHeight={68}
            gap={24}
            hoverSpeed={15}
            scaleOnHover
            fadeOut
            fadeOutColor="#09221b"
            ariaLabel="Trusted solar partners"
          />
        </div>
      </div>
    </section>
  );
}

export default PartnerBanner;


