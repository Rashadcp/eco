"use client";

import React from "react";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { EnnertyLogo } from "@/components/ui/BrandLogo";
import { COMPANY_DETAILS } from "@/data/content";

const footerGroups = [
  {
    title: "Solutions",
    links: [
      ["Solar panels & inverters", "/products"],
      ["Tata Power Solar panels", "/products"],
      ["Adani Solar modules", "/products"],
      ["V-Guard & Havells inverters", "/products"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Ennerty", "/about"],
      ["EcoHarmony Enterprises", "/about"],
      ["Installation process", "/process"],
      ["Kerala branch offices", "/contact"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["PM Surya Ghar subsidy", "/process"],
      ["KSEB net metering", "/process"],
      ["25-year panel warranty", "/process"],
      ["GST & invoice compliance", "/process"],
    ],
  },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      aria-labelledby="footer-title"
      className="relative overflow-hidden border-t border-[#244b3d] bg-[#0d2b24] text-[#eef7df]"
    >
      <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#b8db71]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#4b9180]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 pb-7 pt-14 sm:px-8 sm:pb-9 sm:pt-18 lg:px-12">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.15fr_1.85fr] lg:gap-20 lg:pb-16">
          <div className="max-w-sm">
            {/* Brand & Parent Company Logos */}
            <div className="mb-6 flex flex-wrap items-center gap-3.5">
              <Link href="/" aria-label="Ennerty Solar Home" className="transition hover:opacity-90">
                <EnnertyLogo variant="dark" size="md" />
              </Link>
              <span className="hidden h-7 w-px bg-white/20 sm:block" />
              <div className="flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
                <img
                  src="/ecoharmony-logo.jpg"
                  alt="EcoHarmony Enterprises Pvt. Ltd."
                  className="h-6 w-6 rounded-full object-cover ring-1 ring-white/30"
                />
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-bold leading-tight text-white">EcoHarmony</span>
                  <span className="text-[9px] uppercase tracking-wider text-[#d9ef9a]">Enterprises Pvt. Ltd.</span>
                </div>
              </div>
            </div>

            <h2
              id="footer-title"
              className="mt-5 max-w-xs text-2xl font-bold leading-tight tracking-tight text-[#f4f9df] sm:text-3xl lg:text-4xl"
            >
              Powering a better everyday.
            </h2>
            <p className="mt-6 text-sm leading-6 text-[#b6c9bc]">
              Dependable rooftop solar, thoughtful installation, and support that stays with you long after switch-on.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#d9ef9a] transition hover:text-[#efffc9]"
            >
              Talk to our team
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-9 sm:grid-cols-3 sm:gap-6">
            {footerGroups.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d7e4cf]">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {group.links.map(([label, href]) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="group inline-flex items-center gap-1 text-xs leading-5 text-[#91aa9c] transition hover:text-[#f4f9df]"
                      >
                        {label}
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-70" strokeWidth={1.8} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-6 text-xs text-[#8fa99a] sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} M/s EcoHarmony Enterprises Pvt. Ltd.</p>
            <p className="text-[10px] uppercase tracking-[0.14em] text-[#6f8e7d]">
              Brand: Ennerty · GST: {COMPANY_DETAILS.gstNumber}
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-3.5 py-2 text-xs font-semibold text-[#c4d4c3] transition hover:border-[#d9ef9a]/60 hover:text-[#d9ef9a] outline-none focus:outline-none"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
