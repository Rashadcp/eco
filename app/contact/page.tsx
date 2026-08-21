"use client";

import React, { useState } from "react";
import { ArrowRight, Clock3, Mail, MapPin, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/content";
import { FooterContact } from "@/components/layout/FooterContact";
import { Toast } from "@/components/ui/Toast";

const contactMethods = [
  {
    icon: Phone,
    eyebrow: "Prefer a quick call?",
    title: COMPANY_DETAILS.phoneFormatted,
    detail: "Speak directly with our solar team.",
    href: `tel:${COMPANY_DETAILS.phone}`,
    accent: "bg-[#e8f4ef] text-[#4b9180]",
  },
  {
    icon: Mail,
    eyebrow: "Send us a note",
    title: COMPANY_DETAILS.email,
    detail: "We usually reply within one working day.",
    href: `mailto:${COMPANY_DETAILS.email}`,
    accent: "bg-[#fff4df] text-[#c48639]",
  },
  {
    icon: MapPin,
    eyebrow: "Find our team",
    title: "Kerala & beyond",
    detail: COMPANY_DETAILS.address,
    href: "#contact",
    accent: "bg-[#eef6df] text-[#6f984d]",
  },
];

const steps = [
  ["01", "Tell us about your property"],
  ["02", "We map the right system"],
  ["03", "You decide with clarity"],
];

export default function ContactPage() {
  const [toastState, setToastState] = useState<{
    isOpen: boolean;
    title: string;
    message?: string;
  }>({
    isOpen: false,
    title: "",
    message: "",
  });

  const showToast = (title: string, message?: string) => {
    setToastState({ isOpen: true, title, message });
  };

  const closeToast = () => {
    setToastState((previous) => ({ ...previous, isOpen: false }));
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8f1] text-[#17352e]">
      <section className="relative border-b border-[#dce4d6] px-5 pb-16 pt-36 sm:px-8 sm:pb-20 sm:pt-44 lg:px-12">
        <div className="pointer-events-none absolute -right-28 -top-28 h-[380px] w-[380px] rounded-full bg-[#d9ef9a]/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#4b9180]/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(23,53,46,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(23,53,46,0.03)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#578172]">
              <span className="h-px w-9 bg-[#a6c66d]" />
              Let&apos;s connect
            </p>
            <h1 className="max-w-xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Your roof has a story to tell.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-[#6b8178] sm:text-lg">
              Tell us where you are today. We&apos;ll help you see what cleaner, more dependable power could look like next.
            </p>
            <button
              type="button"
              onClick={scrollToContact}
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#17352e] px-6 py-3.5 text-sm font-semibold text-[#f4f9df] shadow-[0_12px_26px_rgba(23,53,46,0.14)] transition hover:-translate-y-0.5 hover:bg-[#285c4c] outline-none focus:outline-none"
            >
              Start the conversation
              <ArrowRight className="h-4 w-4 text-[#d9ef9a]" strokeWidth={1.8} />
            </button>
          </div>

          <div className="relative min-h-[330px] overflow-hidden rounded-[2rem] bg-[#17352e] p-7 shadow-[0_24px_58px_rgba(23,53,46,0.16)] sm:min-h-[390px] sm:p-9">
            <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-[#d9ef9a]/15 blur-2xl" />
            <div className="absolute -bottom-14 -left-12 h-48 w-48 rounded-full bg-[#4b9180]/20 blur-2xl" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#cfe0cb]">
                  A better way to begin
                </span>
                <Sparkles className="h-5 w-5 text-[#d9ef9a]" strokeWidth={1.7} />
              </div>
              <div>
                <p className="text-5xl font-bold leading-none tracking-tight text-[#d9ef9a] sm:text-6xl">01</p>
                <p className="mt-5 max-w-xs text-2xl font-medium leading-snug tracking-tight text-[#f4f9df] sm:text-3xl">
                  A free conversation. No pressure. Clear next steps.
                </p>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#aac1b0]">
                <Clock3 className="h-4 w-4 text-[#b9d28a]" strokeWidth={1.8} />
                Typical response within one working day
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid gap-4 md:grid-cols-3">
          {contactMethods.map(({ icon: Icon, eyebrow, title, detail, href, accent }) => (
            <a
              key={eyebrow}
              href={href}
              className="group rounded-2xl border border-[#d6e0d2] bg-white/75 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#a9c48e] hover:bg-white hover:shadow-[0_14px_30px_rgba(23,53,46,0.07)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${accent}`}>
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <ArrowRight className="h-4 w-4 text-[#9aafa0] transition group-hover:translate-x-1 group-hover:text-[#4b8065]" strokeWidth={1.8} />
              </div>
              <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#789283]">{eyebrow}</p>
              <h2 className="mt-2 truncate text-base font-semibold text-[#17352e]">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#71877d]">{detail}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="border-y border-[#dce4d6] bg-white/55 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#578172]">
              <span className="h-px w-8 bg-[#a6c66d]" />
              What happens next
            </p>
            <h2 className="max-w-lg text-3xl font-bold leading-[1.1] tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              Simple from the first hello.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-[#6b8178] sm:text-base">
              No technical homework required. Share a few details and we&apos;ll bring the right questions, options, and answers to the table.
            </p>
          </div>
          <div className="space-y-3">
            {steps.map(([number, label], index) => (
              <div
                key={number}
                className="flex items-center gap-4 rounded-2xl border border-[#d6e0d2] bg-[#f7f8f1] p-4 sm:p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#17352e] text-xs font-semibold text-[#d9ef9a]">
                  {number}
                </span>
                <span className="flex-1 text-sm font-semibold text-[#315c4b] sm:text-base">{label}</span>
                {index === 0 && <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#789283]">You are here</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 rounded-2xl border border-[#d6e0d2] bg-[#e8f0df] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f7f8f1] text-[#6f984d]">
              <ShieldCheck className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#315c4b]">A considered recommendation, not a rushed sale.</p>
              <p className="mt-1 text-xs leading-5 text-[#71877d]">We&apos;ll only suggest what makes sense for your energy use and your property.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={scrollToContact}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#17352e] px-5 py-3 text-sm font-semibold text-[#f4f9df] transition hover:bg-[#285c4c]"
          >
            Get started
            <ArrowRight className="h-4 w-4 text-[#d9ef9a]" strokeWidth={1.8} />
          </button>
        </div>
      </section>

      <FooterContact onSuccessToast={(message) => showToast("Request received!", message)} />

      <Toast
        isOpen={toastState.isOpen}
        onClose={closeToast}
        title={toastState.title}
        message={toastState.message}
      />
    </main>
  );
}
