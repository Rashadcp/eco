"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Leaf,
  ShieldCheck,
  Sun,
  TrendingUp,
} from "lucide-react";
import { ANNUAL_IMPACT_STATS } from "@/data/content";

export interface AnnualImpactProps {
  onScrollToContact: () => void;
}

const impactIcons = [Sun, TrendingUp, Leaf, Award];
const impactAccents = [
  {
    icon: "text-[#db9a42]",
    wash: "bg-[#fff4df]",
    line: "bg-[#e5b56d]",
  },
  {
    icon: "text-[#4b9180]",
    wash: "bg-[#e8f4ef]",
    line: "bg-[#83b9a8]",
  },
  {
    icon: "text-[#6f984d]",
    wash: "bg-[#eef6df]",
    line: "bg-[#a9c67a]",
  },
  {
    icon: "text-[#4b9180]",
    wash: "bg-[#e8f4ef]",
    line: "bg-[#83b9a8]",
  },
];

export function AnnualImpact({ onScrollToContact }: AnnualImpactProps) {
  return (
    <section
      id="impact"
      aria-labelledby="impact-title"
      className="relative overflow-hidden border-b border-[#dce4d6] bg-[#f7f8f1] py-20 text-[#17352e] sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(23,53,46,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(23,53,46,0.03)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full bg-[#d9ef9a]/25 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-5 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#578172]">
            <span className="h-px w-8 bg-[#a6c66d]" />
            The impact, measured
            <span className="h-px w-8 bg-[#a6c66d]" />
          </p>
          <h2
            id="impact-title"
            className="font-display max-w-2xl mx-auto text-3xl font-bold leading-tight tracking-tight text-[#17352e] sm:text-4xl lg:text-5xl"
          >
            Clean energy with a measurable return.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#6b8178] sm:text-base font-sans">
            We make solar power easier to adopt while helping homes and businesses reduce costs with dependable long-term performance.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5 font-sans">
          {ANNUAL_IMPACT_STATS.map((stat, index) => {
            const Icon = impactIcons[index] || Sun;
            const accent = impactAccents[index] || impactAccents[0];
            return (
              <motion.article
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-2xl border border-[#d6e0d2] bg-white/80 p-6 shadow-[0_10px_28px_rgba(23,53,46,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#a9c48e] hover:bg-white hover:shadow-[0_16px_34px_rgba(23,53,46,0.09)] sm:p-7 font-sans"
              >
                <div className={`absolute inset-x-0 top-0 h-1 ${accent.line}`} />
                <div className="flex min-h-[230px] flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${accent.wash}`}>
                        <Icon className={`h-5 w-5 ${accent.icon}`} strokeWidth={1.8} />
                      </div>
                      <span className="rounded-full border border-[#dce7d5] bg-[#f4f8ed] px-2.5 py-1 text-[10px] font-semibold text-[#66805f] font-sans">
                        {stat.metricDetail}
                      </span>
                    </div>
                    <p className="font-display mt-8 text-4xl font-semibold tracking-tight text-[#17352e] sm:text-5xl">
                      {stat.value}
                    </p>
                    <h3 className="font-display mt-2 text-sm font-semibold text-[#3d735c]">
                      {stat.label}
                    </h3>
                    <p className="mt-3 text-xs leading-5 text-[#71877d] font-sans">
                      {stat.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 border-t border-[#e4eadf] pt-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6f887b] font-sans">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#8eaf5f]" strokeWidth={1.8} />
                    Verified clean impact
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* 3 Real Commissioned Kerala Installations Showcase */}
        <div className="mt-16 sm:mt-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-[#d8e3d4] pb-6">
            <div>
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#578172]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7eaa57]" />
                Recent Deployments
              </p>
              <h3 className="font-display mt-2 text-2xl font-bold tracking-tight text-[#17352e] sm:text-3xl">
                Featured Rooftop Installations
              </h3>
            </div>
            <p className="max-w-md text-xs leading-5 text-[#6f887b] sm:text-sm">
              Custom-engineered for Kerala&apos;s pitched tile roofs, coastal conditions, and maximum PM Surya Ghar solar yields.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Project 1: Sunset Luxury Villa with Storage */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#d6e0d2] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#17352e]">
                <img
                  src="/images/solar-home-sunset.jpg"
                  alt="Modern Solar Residence with Battery Storage"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className="absolute left-3.5 top-3.5 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[10px] font-semibold text-[#efffd7] backdrop-blur-md">
                  Kochi, Kerala
                </span>
                <span className="absolute bottom-3.5 left-3.5 rounded-full bg-[#d6f36a] px-2.5 py-0.5 text-[10px] font-bold text-[#07241e]">
                  8.5 kW + Battery Backup
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h4 className="font-display text-base font-bold text-[#17352e]">
                    Smart Hybrid Solar Villa
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#688176]">
                    Zero-downtime micro-inverter architecture with 10 kWh lithium storage for uninterrupted power through outages.
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-[#e5ecde] pt-3 text-[11px] font-semibold text-[#3b715b]">
                  <span>₹82,000/yr Saved</span>
                  <span className="text-[#6f887b]">Mono PERC Bifacial</span>
                </div>
              </div>
            </motion.div>

            {/* Project 2: Tropical Kerala Villa */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: 0.08, ease: "easeOut" }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#d6e0d2] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#17352e]">
                <img
                  src="/images/kerala-solar-villa.jpg"
                  alt="Tropical Kerala Sloped Roof Solar Residence"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className="absolute left-3.5 top-3.5 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[10px] font-semibold text-[#efffd7] backdrop-blur-md">
                  Kozhikode, Kerala
                </span>
                <span className="absolute bottom-3.5 left-3.5 rounded-full bg-[#d6f36a] px-2.5 py-0.5 text-[10px] font-bold text-[#07241e]">
                  5.4 kW On-Grid
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h4 className="font-display text-base font-bold text-[#17352e]">
                    Tropical Sloped-Roof Solar
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#688176]">
                    Non-penetrative railless clamping mounted over terracotta tiles, generating 22+ units daily with KSEB net metering.
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-[#e5ecde] pt-3 text-[11px] font-semibold text-[#3b715b]">
                  <span>₹56,000/yr Saved</span>
                  <span className="text-[#6f887b]">TOPCon N-Type</span>
                </div>
              </div>
            </motion.div>

            {/* Project 3: Heritage Tiled Residence */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: 0.16, ease: "easeOut" }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#d6e0d2] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:col-span-2 lg:col-span-1"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#17352e]">
                <img
                  src="/images/kerala-traditional-solar-home.jpg"
                  alt="Kerala Heritage Traditional Home with Solar Panels"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className="absolute left-3.5 top-3.5 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[10px] font-semibold text-[#efffd7] backdrop-blur-md">
                  Thrissur, Kerala
                </span>
                <span className="absolute bottom-3.5 left-3.5 rounded-full bg-[#d6f36a] px-2.5 py-0.5 text-[10px] font-bold text-[#07241e]">
                  6.8 kW Zero-Leakage
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h4 className="font-display text-base font-bold text-[#17352e]">
                    Heritage Architecture Rooftop
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#688176]">
                    Preserving traditional Kerala facade aesthetics while delivering 92% electricity bill reduction under Surya Ghar subsidy.
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-[#e5ecde] pt-3 text-[11px] font-semibold text-[#3b715b]">
                  <span>₹68,000/yr Saved</span>
                  <span className="text-[#6f887b]">Tier-1 High Yield</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.16, ease: "easeOut" }}
          className="mt-12 overflow-hidden rounded-2xl bg-[#17352e] shadow-[0_18px_42px_rgba(23,53,46,0.14)] font-sans"
        >
          <div className="flex flex-col gap-7 px-6 py-7 sm:px-9 sm:py-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b9d28a] font-sans">
                Make your next move measurable
              </p>
              <h3 className="font-display mt-3 text-xl font-semibold tracking-[-0.035em] text-[#f4f9df] sm:text-2xl">
                Ready to see what clean power could do for your property?
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-[#b8cbc0] font-sans">
                Get a tailored rooftop assessment with a clear view of your potential savings and system performance.
              </p>
            </div>
            <button
              type="button"
              onClick={onScrollToContact}
              className="font-sans inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-full bg-[#d9ef9a] px-5 py-3.5 text-sm font-semibold text-[#17352e] transition hover:-translate-y-0.5 hover:bg-[#e7f6b7] focus:outline-none focus:ring-2 focus:ring-[#d9ef9a] focus:ring-offset-2 focus:ring-offset-[#17352e] sm:w-auto"
            >
              Request an assessment
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AnnualImpact;
