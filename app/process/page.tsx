"use client";

import React, { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Clock,
  Compass,
  FileCheck2,
  HelpCircle,
  Phone,
  Shield,
  ShieldCheck,
  Sparkles,
  Sun,
  Wrench,
  Zap,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { COMPANY_DETAILS } from "@/data/content";

interface ProcessStage {
  stepNumber: string;
  duration: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  highlight: string;
  icon: React.ElementType;
}

const PROCESS_STAGES: ProcessStage[] = [
  {
    stepNumber: "01",
    duration: "Day 1 – 2 • Complimentary",
    title: "Free Rooftop Audit & Solar Feasibility",
    subtitle: "Understanding your roof, electricity patterns, and exact solar potential.",
    description:
      "Our Kerala solar engineers inspect your roof (concrete terrace, traditional Kerala tile, or truss work), review your past 12-month KSEB bills, and run a 3D shadow simulation to determine the ideal system capacity in kW.",
    deliverables: [
      "Physical Site & Structural Inspection",
      "3D Solar Shade & Monsoon Yield Report",
      "KSEB Bill Savings & ROI Calculator",
    ],
    highlight: "100% Free • No Obligation Survey",
    icon: Compass,
  },
  {
    stepNumber: "02",
    duration: "Day 3 – 5 • Full Paperwork",
    title: "Custom Engineering & Government Subsidy Filing",
    subtitle: "Securing approvals, KSEB feasibility sanction, and central subsidies.",
    description:
      "We design custom aerodynamic mounting layouts that protect your roof tiles without leakage. Our team handles your entire application on the PM Surya Ghar National Portal and obtains KSEB grid connectivity approval.",
    deliverables: [
      "Precision CAD Structural Blueprint",
      "PM Surya Ghar Subsidy Portal Registration",
      "KSEB Feasibility & Net Meter NOC",
    ],
    highlight: "Direct Bank Transfer (DBT) Subsidy up to ₹78,000",
    icon: FileCheck2,
  },
  {
    stepNumber: "03",
    duration: "Day 7 – 10 • EPC Execution",
    title: "Turnkey Installation with Tier-1 Hardware",
    subtitle: "High-yield photovoltaic panels installed with monsoon-proof engineering.",
    description:
      "Certified technicians install certified Tier-1 panels (Tata Power Solar, Adani, Waaree, Premier) with anodized aluminum/GI structures, UV-protected DC cables, dedicated chemical earth pits, and heavy-duty lightning surge arresters.",
    deliverables: [
      "Certified Tier-1 Mono PERC / TOPCon Modules",
      "Corrosion-Proof Anodized Aluminum Clamps",
      "Dedicated Earth Pits & Lightning Arrester",
    ],
    highlight: "Completed in 3 to 5 Days with Zero Tile Damage",
    icon: Wrench,
  },
  {
    stepNumber: "04",
    duration: "Day 12 – 15 • Energization",
    title: "KSEB Net Metering & Cloud Telemetry",
    subtitle: "Powering on your solar system and slashing your electricity bill.",
    description:
      "KSEB tests the system and installs the bi-directional net meter. Your solar energy powers your home during the day, feeds excess energy back to the grid, and tracks live generation on your mobile app.",
    deliverables: [
      "KSEB Bi-Directional Net Meter Installation",
      "Live Wi-Fi Mobile Telemetry App Setup",
      "25-Year Linear Performance Warranty Certificate",
    ],
    highlight: "Up to 90% Drop in Monthly KSEB Power Bills",
    icon: Zap,
  },
];

const PROCESS_FAQS = [
  {
    question: "How long does the entire solar installation process take?",
    answer:
      "From your initial survey to final KSEB net meter installation, the process typically takes between 10 to 18 working days. The actual on-site rooftop installation takes just 3 to 5 days with zero disruption to your daily routine.",
  },
  {
    question: "How do I receive the PM Surya Ghar subsidy?",
    answer:
      "We handle 100% of the portal documentation, KSEB inspection paperwork, and commissioning certification. Once KSEB installs the net meter, the central government subsidy (up to ₹78,000) is credited directly to your bank account via Direct Benefit Transfer (DBT).",
  },
  {
    question: "Will installing solar damage my Kerala tiled or sloped roof?",
    answer:
      "No. We use specialized non-penetrative aluminum clamp systems and customized elevated truss rails engineered specifically for traditional Kerala tile and sheet roofs. We never puncture waterproof membranes or damage heritage tiles.",
  },
  {
    question: "What happens during heavy monsoon and cloudy days?",
    answer:
      "Our Tier-1 TOPCon and Mono PERC solar panels feature high diffuse light absorption, meaning they continue generating clean energy even under overcast monsoon skies. When grid connection is active, KSEB supplies power seamlessly whenever needed.",
  },
  {
    question: "What after-sales support does Ennerty provide?",
    answer:
      "Every installation comes with a 25-year linear performance warranty on solar panels, 5 to 10 years warranty on inverters, and dedicated local Kerala support from EcoHarmony Enterprises Pvt. Ltd. in Kalamassery, Kochi.",
  },
];

export default function ProcessPage() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <main className="min-h-screen bg-[#f7f8f1] text-[#17352e]">
      {/* 1. Hero Showcase Section */}
      <section className="relative border-b border-[#dce4d6] px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-40 lg:px-12">
        <div className="pointer-events-none absolute -right-28 -top-28 h-[420px] w-[420px] rounded-full bg-[#d9ef9a]/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#4b9180]/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(23,53,46,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(23,53,46,0.035)_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#17352e]/15 bg-white/80 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3d6255] shadow-xs backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#13322b]" />
              EPC Roadmap • Kerala Solar
            </div>

            <h1 className="max-w-xl text-3xl font-bold leading-[1.12] tracking-tight text-[#17352e] sm:text-5xl lg:text-6xl">
              A transparent roadmap to clean solar power.
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#516b60] sm:text-base font-sans">
              Switching to solar should feel clear, predictable, and rewarding. From your first free rooftop audit to KSEB net metering and PM Surya Ghar subsidy transfer, here is how we power your property.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleContactClick}
                className="inline-flex items-center gap-2.5 rounded-full bg-[#13322b] px-7 py-3.5 text-sm font-semibold text-[#f5f8e9] shadow-[0_10px_24px_rgba(19,50,43,0.18)] transition hover:-translate-y-0.5 hover:bg-[#1b443a] cursor-pointer outline-none focus:outline-none"
              >
                <span>Book Free Site Audit</span>
                <ArrowRight className="h-4 w-4 text-[#b4e67e]" />
              </button>

              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-[#cbdac6] bg-white/80 px-5 py-3.5 text-sm font-semibold text-[#17352e] transition hover:bg-white hover:border-[#13322b]/40"
              >
                <Phone className="h-4 w-4 text-[#13322b]" />
                <span>Call {COMPANY_DETAILS.phoneFormatted}</span>
              </a>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="group relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-[2rem] border border-[#cbdac6] bg-[#17352e] p-7 shadow-[0_24px_58px_rgba(23,53,46,0.14)] sm:min-h-[440px] sm:p-8">
            <img
              src="/images/kerala-traditional-solar-home.jpg"
              alt="Traditional Kerala Solar Rooftop Engineering by Ennerty"
              loading="eager"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07241e]/95 via-[#07241e]/40 to-black/20" />

            <div className="relative z-10 mb-auto flex items-center justify-between">
              <span className="rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d6f36a] backdrop-blur-md">
                Kerala Field Blueprint
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
                <CheckCircle2 className="h-4 w-4 text-[#d6f36a]" />
                Zero Tile Leakage
              </span>
            </div>

            <div className="relative z-10 mt-auto rounded-xl border border-white/15 bg-[#092922]/85 p-4.5 backdrop-blur-md shadow-lg sm:p-5">
              <div className="flex items-center justify-between text-xs text-[#d6f36a] font-semibold">
                <span>Phase 01 to Phase 04 EPC</span>
                <span>KSEB Net-Metered</span>
              </div>
              <p className="mt-1.5 text-xs text-white/85 sm:text-sm leading-relaxed">
                Precision engineering that protects traditional Kerala architecture while maximizing sunlight harvest and government subsidies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Structured 4-Stage Editorial Process Roadmap (Fresh, unique non-scroll design) */}
      <section className="border-b border-[#dce4d6] bg-white px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#578172]">
              Step-by-Step Execution
            </p>
            <h2 className="font-serif text-3xl font-normal tracking-tight text-[#17352e] sm:text-4xl">
              From Consultation to Power Generation
            </h2>
            <p className="mt-3 text-sm text-[#6b8275] sm:text-base">
              Every stage is managed end-to-end by Ennerty certified solar engineers.
            </p>
          </div>

          {/* 4 Detailed Process Cards */}
          <div className="space-y-6 sm:space-y-8">
            {PROCESS_STAGES.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.stepNumber}
                  className="group relative overflow-hidden rounded-[2rem] border border-[#dce5d8] bg-[#f7f8f1] p-6 transition-all duration-300 hover:border-[#13322b]/40 hover:bg-white hover:shadow-md sm:p-9"
                >
                  <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 items-start">
                    {/* Left: Step Info */}
                    <div>
                      <div className="flex flex-wrap items-center gap-3 pb-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#13322b] text-sm font-bold text-[#b4e67e]">
                          {stage.stepNumber}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d6e0d2] bg-white px-3 py-1 text-xs font-semibold text-[#486b5c]">
                          <Clock className="h-3.5 w-3.5 text-[#7eaa57]" />
                          {stage.duration}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold tracking-tight text-[#13322b] sm:text-2xl lg:text-3xl">
                        {stage.title}
                      </h3>
                      <p className="mt-1 text-xs font-medium text-[#7eaa57] sm:text-sm">
                        {stage.subtitle}
                      </p>

                      <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#516b60] font-sans">
                        {stage.description}
                      </p>
                    </div>

                    {/* Right: Key Deliverables & Highlight Badge */}
                    <div className="flex flex-col justify-between rounded-2xl border border-[#e2ebd9] bg-white/80 p-5 sm:p-6 lg:h-full">
                      <div>
                        <div className="flex items-center justify-between pb-3 border-b border-[#e8efe4]">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#3d6255]">
                            Key Deliverables
                          </span>
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#edf3e8] text-[#13322b]">
                            <Icon className="h-4 w-4" />
                          </div>
                        </div>

                        <ul className="mt-3.5 space-y-2.5">
                          {stage.deliverables.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-xs font-medium text-[#2d4e41] sm:text-[13px] leading-snug"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7eaa57]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-5 rounded-xl border border-[#dce7d5] bg-[#f4f8ed] p-3 text-xs font-semibold text-[#1f4a3d] flex items-center gap-2">
                        <Sparkles className="h-4 w-4 shrink-0 text-[#7eaa57]" />
                        <span>{stage.highlight}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Turnkey Guarantee Banner */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#dce5d8] bg-[#eff4eb] px-6 py-4.5 text-xs font-medium text-[#496b5b]">
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#7eaa57] animate-pulse" />
              <span className="text-sm">
                <strong>PM Surya Ghar Muft Bijli Yojana:</strong> Direct DBT subsidy of up to ₹78,000 credited straight to your bank account.
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold text-[#285c4c]">
              <span className="inline-flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-[#7eaa57]" /> Tier-1 Modules</span>
              <span className="inline-flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-[#7eaa57]" /> KSEB Net Metering</span>
              <span className="inline-flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-[#7eaa57]" /> 25-Yr Linear Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Frequently Asked Questions Section (Accordion) */}
      <section className="border-b border-[#dce4d6] bg-[#f7f8f1] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#578172]">
              Frequently Asked Questions
            </p>
            <h2 className="font-serif text-2xl font-normal tracking-tight text-[#17352e] sm:text-3xl lg:text-4xl">
              Common Questions About Solar in Kerala
            </h2>
          </div>

          <div className="divide-y divide-[#dce5d8] rounded-3xl border border-[#dce5d8] bg-white p-5 sm:p-8 shadow-xs">
            {PROCESS_FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question} className="py-4 sm:py-5 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 text-left outline-none focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-[#7eaa57]">0{index + 1}</span>
                      <span className="text-sm sm:text-base font-bold text-[#13322b]">{faq.question}</span>
                    </div>
                    <ArrowDown
                      className={`h-4 w-4 shrink-0 text-[#6f8f7d] transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#13322b]" : ""
                      }`}
                      strokeWidth={2}
                    />
                  </button>
                  {isOpen && (
                    <div className="mt-3 pl-7 pr-4 text-xs sm:text-sm leading-relaxed text-[#516b60]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Ready to Begin CTA Strip */}
      <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-[2rem] bg-[#17352e] p-7 shadow-[0_22px_50px_rgba(23,53,46,0.14)] sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#d9ef9a]">
              <ShieldCheck className="h-6 w-6" strokeWidth={1.8} />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-[#f4f9df] sm:text-2xl">
                Ready to zero your KSEB electricity bill?
              </h3>
              <p className="mt-1 max-w-xl text-xs sm:text-sm leading-relaxed text-[#b8cbc0]">
                Schedule a free rooftop survey across Kerala with Ennerty solar engineers.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleContactClick}
            className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full bg-[#d9ef9a] px-6 py-3.5 text-sm font-bold text-[#17352e] shadow-[0_10px_24px_rgba(140,178,92,0.25)] transition hover:-translate-y-0.5 hover:bg-[#e7f6b7] outline-none focus:outline-none cursor-pointer"
          >
            <span>Start Free Solar Survey</span>
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>
      </section>
    </main>
  );
}
