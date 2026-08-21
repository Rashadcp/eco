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
              PM Surya Ghar Yojana • Kerala Solar
            </p>
            <h2 className="mt-7 max-w-xl text-3xl font-bold leading-[1.12] tracking-tight text-[#f4f9df] sm:text-4xl lg:text-5xl">
              Ready to zero your monthly KSEB bill?
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-[#b8cbc0] sm:text-base">
              Get a free rooftop solar survey across Kerala. We design custom systems with Tier-1 panels, handle 100% KSEB net metering paperwork, and claim up to ₹78,000 government subsidy for you.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                variant="lime"
                size="lg"
                onClick={onScrollToContact}
                rightIcon={<ArrowRight className="h-4 w-4 text-[#17352e]" strokeWidth={1.8} />}
                className="justify-center bg-[#d9ef9a] px-6 py-3.5 text-sm font-bold text-[#17352e] shadow-[0_10px_24px_rgba(140,178,92,0.2)] hover:bg-[#e7f6b7]"
              >
                Book Free Site Survey
              </Button>
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-sm font-semibold text-[#e5f0df] transition hover:border-[#b9d28a]/60 hover:bg-white/10 hover:text-white outline-none focus:outline-none"
              >
                <Phone className="h-4 w-4 text-[#d9ef9a]" strokeWidth={1.8} />
                Call +91 97465 39631
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

        <div className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden bg-[#17352e] p-7 sm:min-h-[420px] sm:p-9 lg:min-h-full">
          {/* Real High-Resolution Solar Installation Photograph */}
          <img
            src="/images/solar-rooftop-installer.jpg"
            alt="Certified Ennerty Technician Installing Tier-1 Solar Panels on Tiled Rooftop"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          {/* Elegant Gradient Protection Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#09221b]/95 via-[#09221b]/40 to-black/30" />

          {/* Top Meta Badges */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d6f36a] backdrop-blur-md">
              Roof to grid
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#d6f36a] animate-pulse" />
              Certified EPC Install
            </span>
          </div>

          {/* Bottom Card Caption */}
          <div className="relative z-10 mt-auto rounded-2xl border border-white/15 bg-[#092922]/85 p-4.5 backdrop-blur-md shadow-lg sm:p-5">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-3xl font-bold tracking-tight text-[#d6f36a]">01</p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                  Start with a conversation
                </p>
              </div>
              <p className="max-w-[150px] text-right text-xs leading-5 text-[#dce7df]">
                No pressure. Just a clearer view of your options.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default CtaBanner;
