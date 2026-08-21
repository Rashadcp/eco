"use client";

import React from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Cpu, Sparkles, Award } from "lucide-react";
import { useRouter } from "next/navigation";
import { SystemArchitecture } from "@/components/sections/SystemArchitecture";
import { MetricSwitcher } from "@/components/sections/MetricSwitcher";
import { TIER1_PARTNERS } from "@/data/content";
import { HavellsLogoSvg } from "@/components/ui/HavellsLogo";

function HardwareBrandLogo({ partner }: { partner: (typeof TIER1_PARTNERS)[number] }) {
  const [hasError, setHasError] = React.useState(false);
  const initial = partner.name.charAt(0).toUpperCase();

  // Instant vector render for Havells
  if (partner.name.includes("Havells")) {
    return (
      <div className="flex h-10 items-center">
        <HavellsLogoSvg className="h-6 w-auto max-w-[130px]" />
      </div>
    );
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
      <div className="flex h-10 items-center">
        <img
          src={partner.logoUrl}
          alt={`${partner.name} logo`}
          loading="eager"
          onError={() => setHasError(true)}
          className="max-h-8 w-auto max-w-[130px] object-contain object-left"
        />
      </div>
    );
  }

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white p-2 shadow-xs ring-1 ring-[#d6e0d2]">
      <img
        src={`https://icon.horse/icon/${partner.logoDomain}`}
        alt={`${partner.name} logo`}
        loading="lazy"
        onError={() => setHasError(true)}
        className="h-full w-full object-contain"
      />
    </div>
  );
}

export default function ProductsPage() {
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8f1] text-[#17352e]">
      {/* 1. Hero Section */}
      <section className="relative border-b border-[#dce4d6] px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-44 lg:px-12">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#d9ef9a]/35 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#4b9180]/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(23,53,46,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(23,53,46,0.03)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="relative mx-auto grid max-w-6xl items-end gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#578172]">
              <span className="h-px w-9 bg-[#a6c66d]" />
              Products & Technology
            </p>
            <h1 className="max-w-xl text-4xl font-bold leading-[1.12] tracking-tight text-[#17352e] sm:text-5xl lg:text-6xl">
              Hardware built for 25-year performance.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-[#6b8178] sm:text-lg">
              We exclusively install certified Tier-1 photovoltaic modules, high-efficiency smart inverters, and corrosion-resistant mounting systems engineered for Kerala&apos;s tropical climate.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleContactClick}
                className="inline-flex items-center gap-3 rounded-full bg-[#17352e] px-6 py-3.5 text-sm font-semibold text-[#f4f9df] shadow-[0_12px_26px_rgba(23,53,46,0.14)] transition hover:-translate-y-0.5 hover:bg-[#285c4c] outline-none focus:outline-none"
              >
                Request Hardware Specs
                <ArrowRight className="h-4 w-4 text-[#d9ef9a]" strokeWidth={1.8} />
              </button>
            </div>
          </div>

          <div className="group relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-[2rem] border border-[#cbdac6] bg-[#17352e] p-7 shadow-[0_24px_58px_rgba(23,53,46,0.14)] sm:min-h-[440px] sm:p-9">
            <img
              src="/images/solar-home-sunset.jpg"
              alt="Modern Solar Residence with Battery Storage and Tier-1 PV Modules"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07241e]/95 via-[#07241e]/50 to-black/30" />

            <div className="relative z-10 flex h-full flex-col justify-between gap-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d6f36a] backdrop-blur-md">
                  Tier-1 Architecture
                </span>
                <span className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
                  <ShieldCheck className="h-4 w-4 text-[#d6f36a]" />
                  25-Yr Performance
                </span>
              </div>
              <blockquote className="text-xl font-medium leading-snug tracking-tight text-[#f4f9df] sm:text-2xl">
                “Every solar panel and battery system we commission carries an unconditional 25-year linear performance guarantee.”
              </blockquote>
              <div className="grid grid-cols-2 gap-4 rounded-xl border border-white/15 bg-black/40 p-4 backdrop-blur-md text-xs text-[#efffd7]">
                <div>
                  <span className="block text-lg font-bold text-[#d6f36a]">21.8%+</span>
                  <span className="text-[10px] uppercase tracking-wider text-white/80">Cell Efficiency</span>
                </div>
                <div>
                  <span className="block text-lg font-bold text-[#d6f36a]">100%</span>
                  <span className="text-[10px] uppercase tracking-wider text-white/80">KSEB Approved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. System Architecture Section (Featuring the animated card) */}
      <section className="border-b border-[#dce4d6] bg-white/60 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#578172]">
                <span className="h-px w-8 bg-[#a6c66d]" />
                Integration by design
              </p>
              <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-[#17352e] sm:text-4xl lg:text-5xl">
                Precision engineering from cell to cloud.
              </h2>
              <p className="mt-6 text-sm leading-7 text-[#6b8178] sm:text-base">
                Great solar systems perform consistently because every component is chosen to complement the whole. We never mix mismatched hardware or cut corners on balance-of-system cabling.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5 rounded-2xl border border-[#d6e0d2] bg-[#f7f8f1] p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#17352e] text-[#d9ef9a]">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#17352e]">Ultra-High Output Solar PV</h4>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#71877d]">
                      N-Type TOPCon &amp; Mono PERC bifacial modules for superior generation even during monsoon cloud cover.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-2xl border border-[#d6e0d2] bg-[#f7f8f1] p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#17352e] text-[#d9ef9a]">
                    <Cpu className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#17352e]">Intelligent String Inverters</h4>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#71877d]">
                      Dual MPPT tracking, IP65 weatherproof casings, and built-in Wi-Fi telemetry for real-time mobile app tracking.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Animated System Architecture Visual */}
            <div className="flex justify-center">
              <SystemArchitecture />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Tier-1 Hardware Brands */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#578172]">
              <span className="h-px w-8 bg-[#a6c66d]" />
              Authorized Partners
              <span className="h-px w-8 bg-[#a6c66d]" />
            </p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#17352e] sm:text-4xl lg:text-5xl">
              Tier-1 hardware you can trust.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#6b8178] sm:text-base">
              Direct partnerships with India&apos;s premier solar manufacturers ensure authentic warranties and official subsidy portal approvals.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TIER1_PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#d6e0d2] bg-white/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#a8c69a] hover:bg-white hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 border-b border-[#e2ebd9] pb-4">
                    <HardwareBrandLogo partner={partner} />
                    <span className="rounded-full bg-[#edf4e8] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#48735f]">
                      {partner.category}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold tracking-tight text-[#17352e]">
                    {partner.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#71877d]">
                    {partner.subtitle}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-[#e2ebd9] pt-4 text-xs font-semibold text-[#17352e]">
                  <span className="text-[#578172]">{partner.highlight}</span>
                  <CheckCircle2 className="h-4 w-4 text-[#7eaa57]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Yield & Performance Metric Switcher */}
      <MetricSwitcher />

      {/* 5. Bottom Call to Action */}
      <section className="bg-[#17352e] px-5 py-20 text-center sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b9d28a]">
            Custom Sizing Available
          </p>
          <h2 className="mt-5 text-3xl font-bold leading-[1.1] tracking-[-0.035em] text-[#f4f9df] sm:text-4xl lg:text-5xl">
            Get a tailored hardware recommendation for your roof.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#b8cbc0] sm:text-base">
            Share your monthly KSEB power consumption and our solar engineers will calculate the exact panel capacity and inverter sizing for zero bills.
          </p>
          <button
            type="button"
            onClick={handleContactClick}
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#d9ef9a] px-6 py-3.5 text-sm font-semibold text-[#17352e] transition hover:-translate-y-0.5 hover:bg-[#e7f6b7] focus:outline-none focus:ring-2 focus:ring-[#d9ef9a] focus:ring-offset-2 focus:ring-offset-[#17352e]"
          >
            Schedule Free Rooftop Audit
            <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
          </button>
        </div>
      </section>
    </main>
  );
}
