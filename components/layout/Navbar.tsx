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
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 pointer-events-none",
        isScrolled ? "py-3" : "py-4 sm:py-6"
      )}
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <div
          className={cn(
            "pointer-events-auto relative flex items-center justify-between gap-3 rounded-full border px-4 py-2 sm:px-6 sm:py-2.5 transition-all duration-300 shadow-[0_10px_35px_rgba(19,50,43,0.08),0_1px_2px_rgba(0,0,0,0.03)]",
            isScrolled
              ? "border-[#d8e2d4] bg-white/95 shadow-[0_14px_40px_rgba(19,50,43,0.12)] backdrop-blur-2xl"
              : "border-white/90 bg-white/85 backdrop-blur-xl"
          )}
        >
          {/* Brand Logo */}
          <Link
            href="/"
            aria-label="Ennerty Solar Home"
            className="shrink-0 transition-transform duration-200 hover:scale-102 outline-none focus:outline-none flex items-center py-0.5"
          >
            <EnnertyLogo variant="light" size="md" className="h-10 sm:h-12" />
          </Link>

          {/* Center Nav Links (Linear / Apple style pill navigation) */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {NAV_LINKS.map((link) => {
              const isActive = link.href === pathname;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 sm:text-sm",
                    isActive
                      ? "bg-[#13322b] text-[#f5f8e9] shadow-xs"
                      : "text-[#4a6d5e] hover:bg-[#edf3e8] hover:text-[#13322b]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Get a quote Button */}
          <div className="hidden items-center sm:flex">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#13322b] px-5 py-2 text-xs font-semibold text-[#f5f8e9] shadow-[0_6px_18px_rgba(19,50,43,0.18)] transition-all duration-200 hover:scale-105 hover:bg-[#174a40] hover:shadow-[0_10px_24px_rgba(19,50,43,0.24)] outline-none focus:outline-none sm:text-sm cursor-pointer"
            >
              <span>Get a quote</span>
              <ArrowUpRight className="h-4 w-4 text-[#b4e67e] stroke-[2.2]" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d6e0d2] bg-white text-[#13322b] transition hover:bg-[#edf3e8] outline-none focus:outline-none lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="pointer-events-auto mt-3 overflow-hidden rounded-3xl border border-[#dce5d8] bg-white/95 p-4 shadow-[0_20px_50px_rgba(19,50,43,0.14)] backdrop-blur-2xl lg:hidden"
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
                      "flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition-all",
                      isActive
                        ? "bg-[#13322b] text-[#f5f8e9]"
                        : "text-[#4a6d5e] hover:bg-[#edf3e8] hover:text-[#13322b]"
                    )}
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 opacity-60" strokeWidth={1.8} />
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4 grid grid-cols-2 gap-2.5 border-t border-[#e2ebd9] pt-3.5">
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                onClick={closeMobileMenu}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#d6e0d2] bg-[#f4f7ee] px-3 py-3 text-xs font-semibold text-[#13322b] transition hover:bg-white"
              >
                <Phone className="h-4 w-4 text-[#13322b]" strokeWidth={1.8} />
                Call us
              </a>
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="inline-flex items-center justify-center gap-1.5 rounded-2xl bg-[#13322b] px-3 py-3 text-xs font-bold text-[#f5f8e9] shadow-sm transition hover:bg-[#174a40]"
              >
                Get a quote
                <ArrowUpRight className="h-4 w-4 text-[#b4e67e] stroke-[2.2]" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
