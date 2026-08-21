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
            <h1 className="max-w-xl text-4xl font-bold leading-[1.12] tracking-tight text-[#17352e] sm:text-5xl lg:text-6xl">
              Powering Kerala homes with clean solar energy.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-[#6b8178] sm:text-lg">
              Ennerty is the solar energy brand of EcoHarmony Enterprises Pvt. Ltd., based in Kalamassery, Kochi. We help homeowners, villas, and commercial enterprises cut their KSEB electricity bills with certified Tier-1 panels, PM Surya Ghar subsidy, and lifetime local support.
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
                  Our promise
                </span>
                <Zap className="h-5 w-5 text-[#d9ef9a]" strokeWidth={1.7} />
              </div>
              <blockquote className="max-w-sm text-2xl font-medium leading-snug tracking-tight text-[#f4f9df] sm:text-3xl">
                “The best solar system is the one that quietly cuts your power bill to zero every single month.”
              </blockquote>
              <div className="flex items-center gap-3 text-xs text-[#aac1b0]">
                <span className="h-px w-8 bg-[#91b46d]" />
                Engineered for Kerala • 25-Year Linear Warranty
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-24">

          <div className="group relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-[2rem] border border-[#cbdac6] bg-[#17352e] p-7 shadow-[0_20px_50px_rgba(23,53,46,0.12)] sm:min-h-[460px] sm:p-9">
            <img
              src="/images/kerala-solar-villa.jpg"
              alt="Kerala Tropical Solar Villa Commissioned by Ennerty"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07241e]/95 via-[#07241e]/40 to-black/20" />

            {/* Top Badges */}
            <div className="relative z-10 mb-auto flex items-center justify-between">
              <span className="rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d6f36a] backdrop-blur-md">
                Kerala Field Project
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#d6f36a] animate-pulse" />
                Live Net-Metered
              </span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="relative z-10 mt-auto rounded-xl border border-white/15 bg-[#092922]/85 p-4 backdrop-blur-md shadow-lg sm:p-5">
              <div className="flex items-center justify-between text-xs text-[#d6f36a] font-semibold">
                <span>Rooftop Solar + Smart Storage</span>
                <span>KSEB Grid Sync</span>
              </div>
              <p className="mt-1 text-xs text-white/80 sm:text-sm">
                Engineered for Kerala&apos;s tropical architecture with zero tile penetration and high-yield monsoon performance.
              </p>
            </div>
          </div>

          <div>
            <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#578172]">
              <span className="h-px w-8 bg-[#a6c66d]" />
              Why we started
            </p>
            <h2 className="max-w-xl text-3xl font-bold leading-[1.15] tracking-tight text-[#17352e] sm:text-4xl lg:text-5xl">
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
                <p className="text-2xl font-semibold tracking-tight text-[#17352e]">25 yr</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#789283]">Reliability focus</p>
              </div>
              <div>
                <p className="text-2xl font-semibold tracking-tight text-[#17352e]">1:1</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#789283]">Human guidance</p>
              </div>
              <div>
                <p className="text-2xl font-semibold tracking-tight text-[#17352e]">360°</p>
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
