"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { EnnertyLogo } from "@/components/ui/BrandLogo";
import { NAV_LINKS, COMPANY_DETAILS } from "@/data/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled ? "py-3" : "py-4 sm:py-6",
      )}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div
          className={cn(
            "relative flex items-center justify-between gap-5 rounded-2xl border px-3 py-2.5 transition-all duration-300 sm:px-4",
            isScrolled
              ? "border-[#d4dfd0]/90 bg-[#f7f8f1]/90 shadow-[0_10px_28px_rgba(23,53,46,0.08)] backdrop-blur-xl"
              : "border-[#d6e0d2]/70 bg-[#f7f8f1]/75 backdrop-blur-md",
          )}
        >
          <Link
            href="/"
            aria-label="Ennerty Solar Home"
            className="shrink-0 rounded-lg outline-none focus:outline-none"
          >
            <EnnertyLogo variant="light" size="md" />
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 rounded-xl border border-[#dce5d8] bg-white/55 p-1 lg:flex"
          >
            {NAV_LINKS.map((link) => {
              const isActive = link.href === pathname;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-4 py-2 text-xs font-semibold transition sm:text-sm",
                    isActive
                      ? "bg-[#17352e] text-[#f3f8e6] shadow-sm"
                      : "text-[#567568] hover:bg-[#edf3e8] hover:text-[#17352e]",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              aria-label={`Call ${COMPANY_DETAILS.phoneFormatted}`}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d6e0d2] text-[#4d7663] transition hover:border-[#9bb789] hover:bg-[#edf3e8] hover:text-[#17352e] outline-none focus:outline-none"
            >
              <Phone className="h-4 w-4" strokeWidth={1.8} />
            </a>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#17352e] px-4 py-2.5 text-xs font-semibold text-[#f3f8e6] transition hover:-translate-y-0.5 hover:bg-[#285c4c] outline-none focus:outline-none sm:text-sm"
            >
              Get a quote
              <ArrowUpRight className="h-4 w-4 text-[#d9ef9a]" strokeWidth={1.8} />
            </Link>
          </div>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d6e0d2] bg-white/65 text-[#17352e] transition hover:bg-[#edf3e8] outline-none focus:outline-none lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="mt-3 rounded-2xl border border-[#d6e0d2] bg-[#f7f8f1]/95 p-3 shadow-[0_18px_42px_rgba(23,53,46,0.12)] backdrop-blur-xl lg:hidden"
          >
            <nav aria-label="Mobile navigation" className="space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = link.href === pathname;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={closeMobileMenu}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition",
                      isActive
                        ? "bg-[#17352e] text-[#f3f8e6]"
                        : "text-[#567568] hover:bg-[#edf3e8] hover:text-[#17352e]",
                    )}
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 opacity-60" strokeWidth={1.8} />
                  </Link>
                );
              })}
            </nav>
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-[#dce5d8] pt-3">
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                onClick={closeMobileMenu}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#d6e0d2] px-3 py-3 text-xs font-semibold text-[#4d7663] transition hover:bg-white"
              >
                <Phone className="h-4 w-4" strokeWidth={1.8} />
                Call us
              </a>
              <Link
                href="#contact"
                onClick={closeMobileMenu}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#17352e] px-3 py-3 text-xs font-semibold text-[#f3f8e6] transition hover:bg-[#285c4c]"
              >
                Get a quote
                <ArrowUpRight className="h-4 w-4 text-[#d9ef9a]" strokeWidth={1.8} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
