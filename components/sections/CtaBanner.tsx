"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, Sun } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { COMPANY_DETAILS } from "@/data/content";

export interface CtaBannerProps {
  onScrollToContact: () => void;
}

export function CtaBanner({ onScrollToContact }: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden bg-[#f7f8f1] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="pointer-events-none absolute -left-32 top-12 h-72 w-72 rounded-full bg-[#d9ef9a]/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#4b9180]/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-[#17352e] shadow-[0_24px_60px_rgba(23,53,46,0.16)] lg:grid-cols-[1.15fr_0.85fr]"
      >
        <div className="relative overflow-hidden p-7 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#4b9180]/25 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#d9ef9a]/10 blur-3xl" />

          <div className="relative z-10">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b9d28a]">
              <span className="h-px w-8 bg-[#7eaa57]" />
              A clearer way to switch
            </p>
            <h2 className="mt-7 max-w-xl text-3xl font-bold leading-[1.1] tracking-tight text-[#f4f9df] sm:text-4xl lg:text-5xl">
              Your next energy decision can start here.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-[#b8cbc0] sm:text-base">
              Get a thoughtful rooftop assessment, a system designed around your property, and a clear view of what comes next.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                variant="lime"
                size="lg"
                onClick={onScrollToContact}
                rightIcon={<ArrowRight className="h-4 w-4 text-[#17352e]" strokeWidth={1.8} />}
                className="justify-center bg-[#d9ef9a] px-6 py-3.5 text-sm font-bold text-[#17352e] shadow-[0_10px_24px_rgba(140,178,92,0.2)] hover:bg-[#e7f6b7]"
              >
                Request a free assessment
              </Button>
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-sm font-semibold text-[#e5f0df] transition hover:border-[#b9d28a]/60 hover:bg-white/10 hover:text-white outline-none focus:outline-none"
              >
                <Phone className="h-4 w-4 text-[#d9ef9a]" strokeWidth={1.8} />
                Call our team
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9fb7a7]">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#b9d28a]" strokeWidth={1.8} />
                25-year manufacturer warranty
              </span>
              <span className="inline-flex items-center gap-2">
                <Sun className="h-4 w-4 text-[#d9ef9a]" strokeWidth={1.8} />
                Free rooftop shadow survey
              </span>
            </div>
          </div>
        </div>

        <div className="relative min-h-[300px] overflow-hidden bg-[#e8f0df] p-7 sm:min-h-[360px] sm:p-10 lg:min-h-full">
          <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-[#d9ef9a]/65 blur-2xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#4b9180]/15 blur-3xl" />
          <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(23,53,46,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(23,53,46,0.07)_1px,transparent_1px)] [background-size:34px_34px]" />

          <div className="relative flex h-full min-h-[250px] flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-[#9fbd91] bg-[#f7f8f1]/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#537362]">
                Roof to grid
              </span>
              <span className="h-2.5 w-2.5 rounded-full bg-[#7eaa57] shadow-[0_0_0_6px_rgba(126,170,87,0.16)]" />
            </div>

            {/* Precision Architectural Solar Illustration */}
            <div className="relative mx-auto flex h-48 w-full max-w-[320px] items-center justify-center">
              <svg
                viewBox="0 0 320 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full drop-shadow-[0_12px_24px_rgba(23,53,46,0.12)]"
              >
                <defs>
                  <radialGradient id="ctaSunGlow" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="#fef08a" stopOpacity="0.9" />
                    <stop offset="45%" stopColor="#f59e0b" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="ctaSolarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0284c7" />
                    <stop offset="50%" stopColor="#0369a1" />
                    <stop offset="100%" stopColor="#075985" />
                  </linearGradient>
                  <linearGradient id="ctaHouseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#17352e" />
                    <stop offset="100%" stopColor="#0c1f1b" />
                  </linearGradient>
                  <linearGradient id="ctaRoofGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#244e43" />
                    <stop offset="100%" stopColor="#15362e" />
                  </linearGradient>
                </defs>

                {/* Ambient Sun Corona */}
                <circle cx="160" cy="38" r="42" fill="url(#ctaSunGlow)" opacity="0.35" />
                <circle cx="160" cy="38" r="26" fill="url(#ctaSunGlow)" opacity="0.6" />

                {/* Sun Core */}
                <circle cx="160" cy="38" r="15" fill="#fde047" />
                <circle cx="160" cy="38" r="15" stroke="#f59e0b" strokeWidth="1.5" />
                <circle cx="160" cy="38" r="21" stroke="#d9ef9a" strokeWidth="1" strokeDasharray="3 4" opacity="0.7" />

                {/* Solar Light Rays */}
                <path d="M142 54 L118 82" stroke="#eab308" strokeWidth="1.2" strokeDasharray="2 3" opacity="0.65" />
                <path d="M160 58 L160 84" stroke="#eab308" strokeWidth="1.2" strokeDasharray="2 3" opacity="0.65" />
                <path d="M178 54 L202 82" stroke="#eab308" strokeWidth="1.2" strokeDasharray="2 3" opacity="0.65" />

                {/* House Base Structure */}
                <rect x="95" y="118" width="130" height="62" rx="4" fill="url(#ctaHouseGrad)" stroke="#2b594b" strokeWidth="1.5" />

                {/* Large Architectural Window */}
                <rect x="110" y="130" width="38" height="34" rx="2" fill="#d9ef9a" fillOpacity="0.25" stroke="#7eaa57" strokeWidth="1" />
                <line x1="129" y1="130" x2="129" y2="164" stroke="#17352e" strokeWidth="1" />
                <line x1="110" y1="147" x2="148" y2="147" stroke="#17352e" strokeWidth="1" />

                {/* Modern Doorway */}
                <rect x="175" y="134" width="28" height="46" rx="2" fill="#0d241f" stroke="#3d6c5d" strokeWidth="1" />
                <circle cx="179" cy="158" r="1.5" fill="#d9ef9a" />

                {/* Angled Roof Gable */}
                <polygon points="160,78 72,118 248,118" fill="url(#ctaRoofGrad)" stroke="#3d6c5d" strokeWidth="1.5" />

                {/* Photovoltaic Solar Panel Array on Left Slanted Roof */}
                <polygon points="152,85 96,110 120,110 156,85" fill="url(#ctaSolarGrad)" stroke="#38bdf8" strokeWidth="1.2" />
                <line x1="108" y1="110" x2="154" y2="85" stroke="#bae6fd" strokeWidth="0.75" opacity="0.8" />
                <line x1="102" y1="98" x2="132" y2="98" stroke="#bae6fd" strokeWidth="0.75" opacity="0.8" />

                {/* Photovoltaic Solar Panel Array on Right Slanted Roof */}
                <polygon points="168,85 164,85 200,110 224,110" fill="url(#ctaSolarGrad)" stroke="#38bdf8" strokeWidth="1.2" />
                <line x1="166" y1="85" x2="212" y2="110" stroke="#bae6fd" strokeWidth="0.75" opacity="0.8" />
                <line x1="188" y1="98" x2="218" y2="98" stroke="#bae6fd" strokeWidth="0.75" opacity="0.8" />

                {/* Energy Pulse Ring at Apex */}
                <circle cx="160" cy="80" r="5" fill="#d9ef9a" />
                <circle cx="160" cy="80" r="9" stroke="#d9ef9a" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" />

                {/* Ground Line & Eco Bush Accents */}
                <line x1="50" y1="180" x2="270" y2="180" stroke="#9fbd91" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="82" cy="180" r="8" fill="#7eaa57" fillOpacity="0.4" />
                <circle cx="90" cy="180" r="6" fill="#5c8a40" fillOpacity="0.5" />
                <circle cx="238" cy="180" r="7" fill="#7eaa57" fillOpacity="0.4" />
              </svg>
            </div>

            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-3xl font-semibold tracking-[-0.07em] text-[#17352e]">01</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#668775]">Start with a conversation</p>
              </div>
              <p className="max-w-[130px] text-right text-xs leading-5 text-[#6b8178]">No pressure. Just a clearer view of your options.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default CtaBanner;
