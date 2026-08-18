"use client";

import React from "react";
import { ArrowRight, Leaf, ShieldCheck, Users, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { AnnualImpact } from "@/components/sections/AnnualImpact";

const principles = [
  {
    icon: Leaf,
    title: "Designed for the long run",
    description:
      "We recommend systems around the way your property actually uses power, not around a one-size-fits-all package.",
  },
  {
    icon: ShieldCheck,
    title: "Clear from day one",
    description:
      "From system sizing to subsidies and net metering, we keep every decision understandable and documented.",
  },
  {
    icon: Users,
    title: "Support that stays close",
    description:
      "Our relationship does not end at installation. We stay available for monitoring, maintenance, and next steps.",
  },
];

export default function AboutPage() {
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8f1] text-[#17352e]">
      <section className="relative border-b border-[#dce4d6] px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-44 lg:px-12">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[430px] w-[430px] rounded-full bg-[#d9ef9a]/35 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#4b9180]/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(23,53,46,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(23,53,46,0.03)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="relative mx-auto grid max-w-6xl items-end gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#578172]">
              <span className="h-px w-9 bg-[#a6c66d]" />
              About Ennerty
            </p>
            <h1 className="max-w-xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#17352e] sm:text-5xl lg:text-6xl">
              Energy that feels closer to home.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-[#6b8178] sm:text-lg">
              Ennerty exists to make the switch to solar feel practical, personal, and genuinely worth it — for every roof, every bill, and every future plan.
            </p>
            <button
              type="button"
              onClick={handleContactClick}
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#17352e] px-6 py-3.5 text-sm font-semibold text-[#f4f9df] shadow-[0_12px_26px_rgba(23,53,46,0.14)] transition hover:-translate-y-0.5 hover:bg-[#285c4c] outline-none focus:outline-none"
            >
              Talk to our team
              <ArrowRight className="h-4 w-4 text-[#d9ef9a]" strokeWidth={1.8} />
            </button>
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] border border-[#cbdac6] bg-[#17352e] p-7 shadow-[0_24px_58px_rgba(23,53,46,0.14)] sm:min-h-[340px] sm:p-9">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#d9ef9a]/15 blur-2xl" />
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#4b9180]/20 blur-2xl" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#cfe0cb]">
                  Our point of view
                </span>
                <Zap className="h-5 w-5 text-[#d9ef9a]" strokeWidth={1.7} />
              </div>
              <blockquote className="max-w-sm text-2xl font-medium leading-tight tracking-[-0.04em] text-[#f4f9df] sm:text-3xl">
                “The best solar system is the one that quietly keeps working for you.”
              </blockquote>
              <div className="flex items-center gap-3 text-xs text-[#aac1b0]">
                <span className="h-px w-8 bg-[#91b46d]" />
                Practical power, thoughtfully delivered
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-24">
          <div className="relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-[2rem] bg-[#e8f0df] p-7 shadow-[0_16px_40px_rgba(23,53,46,0.08)] sm:min-h-[450px] sm:p-10">
            <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(23,53,46,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(23,53,46,0.07)_1px,transparent_1px)] [background-size:38px_38px]" />
            <div className="pointer-events-none absolute -right-12 -top-12 h-60 w-60 rounded-full bg-[#d9ef9a]/60 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-60 w-60 rounded-full bg-[#4b9180]/15 blur-3xl" />

            {/* Header Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="rounded-full border border-[#9fbd91] bg-[#f7f8f1]/80 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4f735f] backdrop-blur-sm">
                Roof to grid
              </span>
              <span className="h-2.5 w-2.5 rounded-full bg-[#7eaa57] shadow-[0_0_0_6px_rgba(126,170,87,0.16)]" />
            </div>

            {/* Central Precision Architectural Solar Graphic */}
            <div className="relative z-10 mx-auto my-auto flex h-60 w-full max-w-[340px] items-center justify-center">
              <svg
                viewBox="0 0 340 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full drop-shadow-[0_16px_32px_rgba(23,53,46,0.12)]"
              >
                <defs>
                  <radialGradient id="aboutSunGlow" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="#fef08a" stopOpacity="0.95" />
                    <stop offset="45%" stopColor="#f59e0b" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="aboutSolarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0284c7" />
                    <stop offset="50%" stopColor="#0369a1" />
                    <stop offset="100%" stopColor="#075985" />
                  </linearGradient>
                  <linearGradient id="aboutHouseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#17352e" />
                    <stop offset="100%" stopColor="#0b221d" />
                  </linearGradient>
                  <linearGradient id="aboutRoofGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#244e43" />
                    <stop offset="100%" stopColor="#15362e" />
                  </linearGradient>
                  <linearGradient id="aboutBatGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10382f" />
                    <stop offset="100%" stopColor="#081e19" />
                  </linearGradient>
                </defs>

                {/* Orbit Halo Rings */}
                <circle cx="170" cy="46" r="48" stroke="#a6c986" strokeWidth="1" strokeDasharray="3 4" opacity="0.45" />
                <circle cx="170" cy="46" r="32" stroke="#d9ef9a" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />

                {/* Sun Glow and Core */}
                <circle cx="170" cy="46" r="42" fill="url(#aboutSunGlow)" opacity="0.4" />
                <circle cx="170" cy="46" r="18" fill="#fde047" />
                <circle cx="170" cy="46" r="18" stroke="#f59e0b" strokeWidth="1.5" />
                <circle cx="170" cy="46" r="12" fill="#fffbeb" opacity="0.8" />

                {/* Radiant Light Conduits down to Roof */}
                <path d="M150 64 L120 102" stroke="#eab308" strokeWidth="1.2" strokeDasharray="2 3" opacity="0.75" />
                <path d="M170 68 L170 100" stroke="#eab308" strokeWidth="1.2" strokeDasharray="2 3" opacity="0.75" />
                <path d="M190 64 L220 102" stroke="#eab308" strokeWidth="1.2" strokeDasharray="2 3" opacity="0.75" />

                {/* Ground Platform */}
                <line x1="30" y1="216" x2="310" y2="216" stroke="#9fbd91" strokeWidth="1.5" strokeLinecap="round" />

                {/* Main Home Base */}
                <rect x="90" y="142" width="160" height="74" rx="4" fill="url(#aboutHouseGrad)" stroke="#2b594b" strokeWidth="1.5" />

                {/* Picture Windows with Mullions */}
                <rect x="108" y="156" width="46" height="42" rx="2" fill="#d9ef9a" fillOpacity="0.25" stroke="#7eaa57" strokeWidth="1" />
                <line x1="131" y1="156" x2="131" y2="198" stroke="#17352e" strokeWidth="1" />
                <line x1="108" y1="177" x2="154" y2="177" stroke="#17352e" strokeWidth="1" />

                {/* Architectural Villa Door & Porch */}
                <rect x="190" y="160" width="34" height="56" rx="2" fill="#0d241f" stroke="#3d6c5d" strokeWidth="1" />
                <circle cx="196" cy="188" r="1.5" fill="#d9ef9a" />
                <circle cx="180" cy="168" r="2.5" fill="#fde047" />

                {/* Angled Modern Eco-Roof */}
                <polygon points="170,96 64,142 276,142" fill="url(#aboutRoofGrad)" stroke="#3d6c5d" strokeWidth="1.5" />

                {/* Solar Panel Array Left Wing */}
                <polygon points="160,105 92,134 122,134 165,105" fill="url(#aboutSolarGrad)" stroke="#38bdf8" strokeWidth="1.2" />
                <line x1="107" y1="134" x2="162" y2="105" stroke="#bae6fd" strokeWidth="0.75" opacity="0.85" />
                <line x1="100" y1="120" x2="136" y2="120" stroke="#bae6fd" strokeWidth="0.75" opacity="0.85" />

                {/* Solar Panel Array Right Wing */}
                <polygon points="180,105 175,105 218,134 248,134" fill="url(#aboutSolarGrad)" stroke="#38bdf8" strokeWidth="1.2" />
                <line x1="178" y1="105" x2="233" y2="134" stroke="#bae6fd" strokeWidth="0.75" opacity="0.85" />
                <line x1="204" y1="120" x2="240" y2="120" stroke="#bae6fd" strokeWidth="0.75" opacity="0.85" />

                {/* Rooftop Apex Energy Core */}
                <circle cx="170" cy="98" r="5" fill="#d9ef9a" />
                <circle cx="170" cy="98" r="10" stroke="#d9ef9a" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" />

                {/* Battery Storage Cabinet (Left of House) */}
                <rect x="48" y="174" width="28" height="42" rx="3" fill="url(#aboutBatGrad)" stroke="#38bdf8" strokeWidth="1.2" />
                <rect x="54" y="180" width="16" height="28" rx="1.5" fill="#38bdf8" fillOpacity="0.4" />
                <circle cx="62" cy="170" r="2" fill="#38bdf8" />
                <path d="M62 174 L62 166 L88 166" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" opacity="0.7" />

                {/* Grid Connection Tower (Right of House) */}
                <line x1="282" y1="216" x2="282" y2="164" stroke="#eab308" strokeWidth="1.4" />
                <line x1="272" y1="176" x2="292" y2="176" stroke="#eab308" strokeWidth="1.2" />
                <line x1="275" y1="188" x2="289" y2="188" stroke="#eab308" strokeWidth="1.2" />
                <circle cx="272" cy="176" r="1.5" fill="#fbbf24" />
                <circle cx="292" cy="176" r="1.5" fill="#fbbf24" />
                <path d="M252 170 L282 170" stroke="#eab308" strokeWidth="1" strokeDasharray="2 2" opacity="0.7" />

                {/* Eco Foliage Accents */}
                <circle cx="40" cy="216" r="9" fill="#7eaa57" fillOpacity="0.4" />
                <circle cx="300" cy="216" r="8" fill="#7eaa57" fillOpacity="0.4" />
              </svg>
            </div>

            {/* Footer Status */}
            <div className="relative z-10 flex items-center justify-between border-t border-[#cadbc2] pt-4">
              <span className="text-xs font-semibold text-[#17352e]">Zero-Emission Architecture</span>
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#5d8068]">
                <span className="h-2 w-2 rounded-full bg-[#82aa61] animate-pulse" />
                Connected by design
              </div>
            </div>
          </div>

          <div>
            <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#578172]">
              <span className="h-px w-8 bg-[#a6c66d]" />
              Why we started
            </p>
            <h2 className="max-w-xl text-3xl font-bold leading-[1.1] tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              Solar should be easier to understand.
            </h2>
            <div className="mt-7 max-w-xl space-y-5 text-sm leading-7 text-[#6b8178] sm:text-base">
              <p>
                The shift to clean energy is no longer only about technology. It is about making confident decisions for your home, your business, and the people who depend on them.
              </p>
              <p>
                Ennerty brings together careful system design, trusted products, transparent guidance, and local support so that solar works as a long-term part of everyday life.
              </p>
            </div>
            <div className="mt-9 grid grid-cols-3 gap-4 border-t border-[#d6e0d2] pt-6">
              <div>
                <p className="text-2xl font-semibold tracking-[-0.06em] text-[#17352e]">25 yr</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#789283]">Reliability focus</p>
              </div>
              <div>
                <p className="text-2xl font-semibold tracking-[-0.06em] text-[#17352e]">1:1</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#789283]">Human guidance</p>
              </div>
              <div>
                <p className="text-2xl font-semibold tracking-[-0.06em] text-[#17352e]">360°</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#789283]">System care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#dce4d6] bg-white/55 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-xl">
            <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#578172]">
              <span className="h-px w-8 bg-[#a6c66d]" />
              What guides us
            </p>
            <h2 className="text-3xl font-bold leading-[1.1] tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              The standard behind every installation.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, description }, index) => (
              <article
                key={title}
                className="rounded-2xl border border-[#d6e0d2] bg-[#f7f8f1] p-6 transition hover:-translate-y-1 hover:border-[#a9c48e] hover:shadow-[0_14px_30px_rgba(23,53,46,0.07)] sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f4ef] text-[#4b9180]">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <span className="text-4xl font-semibold tracking-[-0.08em] text-[#e2ebdc]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-10 text-lg font-semibold tracking-[-0.035em] text-[#17352e]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#71877d]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

     
      <section className="bg-[#17352e] px-5 py-20 text-center sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b9d28a]">
            Your roof has potential
          </p>
          <h2 className="mt-5 text-3xl font-bold leading-[1.1] tracking-[-0.035em] text-[#f4f9df] sm:text-4xl lg:text-5xl">
            Let&apos;s turn it into dependable power.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#b8cbc0] sm:text-base">
            Start with a free conversation about your property, your energy needs, and what a better system could look like.
          </p>
          <button
            type="button"
            onClick={handleContactClick}
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#d9ef9a] px-6 py-3.5 text-sm font-semibold text-[#17352e] transition hover:-translate-y-0.5 hover:bg-[#e7f6b7] outline-none focus:outline-none"
          >
            Speak with our team
            <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
          </button>
        </div>
      </section>
    </main>
  );
}
