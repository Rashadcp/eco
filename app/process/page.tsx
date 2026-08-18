"use client";

import React, { useState } from "react";
import { ArrowDown, ArrowRight, CheckCircle2, Compass, FileCheck2, ShieldCheck, Wrench } from "lucide-react";
import { useRouter } from "next/navigation";
import { ProcessWorkflow } from "@/components/sections/ProcessWorkflow";

const trustPoints = [
  {
    icon: Compass,
    title: "A plan shaped around you",
    description: "We start with your property, energy habits, and goals before we recommend a system.",
  },
  {
    icon: FileCheck2,
    title: "The details stay visible",
    description: "Sizing, paperwork, approvals, and next steps are explained in plain language.",
  },
  {
    icon: Wrench,
    title: "Support beyond installation",
    description: "Once the system is live, our team remains close for guidance and ongoing care.",
  },
];

const faqs = [
  {
    question: "What should I prepare before the first conversation?",
    answer: "Nothing complicated. A recent electricity bill, your property location, and a rough idea of your energy needs are enough to begin.",
  },
  {
    question: "Will the system be designed for my specific roof?",
    answer: "Yes. The assessment considers your roof layout, usable area, shade, energy patterns, and future requirements before a system is recommended.",
  },
  {
    question: "Will you help with the paperwork and approvals?",
    answer: "We guide you through the documentation, subsidy and net-metering steps that apply to your project, so the process feels clear at every stage.",
  },
  {
    question: "What happens after the system is switched on?",
    answer: "We walk you through the system, explain the important controls, and stay available for questions, monitoring, and support after installation.",
  },
];

export default function ProcessPage() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(0);

  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8f1] text-[#17352e]">
      <section className="relative border-b border-[#dce4d6] px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-44 lg:px-12">
        <div className="pointer-events-none absolute -right-28 -top-28 h-[390px] w-[390px] rounded-full bg-[#d9ef9a]/35 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#4b9180]/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(23,53,46,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(23,53,46,0.03)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="relative mx-auto grid max-w-6xl items-end gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20">
          <div>
            <p className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#578172]">
              <span className="h-px w-9 bg-[#a6c66d]" />
              The Ennerty process
            </p>
            <h1 className="max-w-xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#17352e] sm:text-5xl lg:text-6xl">
              From first idea to everyday power.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-[#6b8178] sm:text-lg">
              A solar project should feel considered, not confusing. Our process keeps the big decisions simple and the important details visible.
            </p>
            <button
              type="button"
              onClick={handleContactClick}
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#17352e] px-6 py-3.5 text-sm font-semibold text-[#f4f9df] shadow-[0_12px_26px_rgba(23,53,46,0.14)] transition hover:-translate-y-0.5 hover:bg-[#285c4c] outline-none focus:outline-none"
            >
              Start your project
              <ArrowRight className="h-4 w-4 text-[#d9ef9a]" strokeWidth={1.8} />
            </button>
          </div>

          <div className="relative min-h-[310px] overflow-hidden rounded-[2rem] bg-[#17352e] p-7 shadow-[0_24px_58px_rgba(23,53,46,0.14)] sm:min-h-[370px] sm:p-9">
            <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[#d9ef9a]/15 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[#4b9180]/20 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(224,244,204,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(224,244,204,0.25)_1px,transparent_1px)] [background-size:40px_40px]" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#cfe0cb]">
                  Four considered steps
                </span>
                <span className="text-3xl font-semibold tracking-tight text-white/10 sm:text-4xl">04</span>
              </div>
              <div>
                <p className="text-4xl font-bold leading-none tracking-tight text-[#d9ef9a] sm:text-5xl">01</p>
                <p className="mt-4 max-w-xs text-xl font-medium leading-tight tracking-[-0.03em] text-[#f4f9df] sm:text-2xl">
                  Clarity comes before commitment.
                </p>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#aac1b0]">
                <span className="h-px w-8 bg-[#91b46d]" />
                Start with a free conversation
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="grid gap-4 md:grid-cols-3">
          {trustPoints.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className="rounded-2xl border border-[#d6e0d2] bg-white/70 p-6 transition hover:-translate-y-1 hover:border-[#a9c48e] hover:bg-white hover:shadow-[0_14px_30px_rgba(23,53,46,0.07)] sm:p-8"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f4ef] text-[#4b9180]">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <span className="text-4xl font-semibold tracking-[-0.08em] text-[#e2ebdc]">0{index + 1}</span>
              </div>
              <h2 className="mt-10 text-lg font-semibold tracking-[-0.035em]">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#71877d]">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <ProcessWorkflow onScrollToContact={handleContactClick} />

      <section className="border-y border-[#dce4d6] bg-white/55 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#578172]">
              <span className="h-px w-8 bg-[#a6c66d]" />
              Good to know
            </p>
            <h2 className="max-w-md text-3xl font-bold leading-[1.1] tracking-[-0.035em] text-[#17352e] sm:text-4xl lg:text-5xl">
              The questions worth asking.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-[#6b8178] sm:text-base">
              A little context before you begin can make the whole journey feel easier.
            </p>
          </div>

          <div className="border-t border-[#d6e0d2]">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question} className="border-b border-[#d6e0d2]">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center gap-5 py-5 text-left outline-none focus:outline-none sm:py-6"
                  >
                    <span className="text-xs font-semibold text-[#86a06f]">0{index + 1}</span>
                    <span className="flex-1 text-sm font-semibold text-[#315c4b] sm:text-base">{faq.question}</span>
                    <ArrowDown className={`h-4 w-4 shrink-0 text-[#6f8f7d] transition ${isOpen ? "rotate-180" : ""}`} strokeWidth={1.8} />
                  </button>
                  {isOpen && (
                    <p className="max-w-2xl pb-6 pl-9 text-sm leading-6 text-[#71877d] sm:pl-10">{faq.answer}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-[2rem] bg-[#17352e] p-7 shadow-[0_22px_50px_rgba(23,53,46,0.14)] sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#d9ef9a]">
              <ShieldCheck className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-[-0.035em] text-[#f4f9df]">Ready when you are.</p>
              <p className="mt-1 max-w-xl text-sm leading-6 text-[#b8cbc0]">Bring us your questions. We will bring you a clearer path forward.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleContactClick}
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#d9ef9a] px-5 py-3.5 text-sm font-semibold text-[#17352e] transition hover:-translate-y-0.5 hover:bg-[#e7f6b7] outline-none focus:outline-none"
          >
            Talk to our team
            <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
          </button>
        </div>
      </section>
    </main>
  );
}
