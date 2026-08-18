"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Layers,
  Sparkles,
  Wrench,
} from "lucide-react";
import { PROCESS_STEPS } from "@/data/content";

export interface ProcessWorkflowProps {
  onScrollToContact: () => void;
}

const stepIcons = [Compass, Layers, Wrench, Sparkles];

export function ProcessWorkflow({ onScrollToContact }: ProcessWorkflowProps) {
  const [activeStep, setActiveStep] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const current = PROCESS_STEPS[activeStep] || PROCESS_STEPS[0];
  const ActiveIcon = stepIcons[activeStep] || CheckCircle2;

  const selectStep = (index: number) => {
    setActiveStep(Math.max(0, Math.min(index, PROCESS_STEPS.length - 1)));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextIndex = (index + 1) % PROCESS_STEPS.length;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextIndex = (index - 1 + PROCESS_STEPS.length) % PROCESS_STEPS.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = PROCESS_STEPS.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    selectStep(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="relative overflow-hidden border-y border-[#dce4d6] bg-[#f7f8f1] py-20 text-[#17352e] sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(23,53,46,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(23,53,46,0.035)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="pointer-events-none absolute -left-28 top-24 h-72 w-72 rounded-full bg-[#d9ef9a]/25 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-7 border-b border-[#d4dfd0] pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#578172]">
              <span className="h-px w-8 bg-[#a6c66d]" />
              How it works
            </p>
            <h2
              id="process-title"
              className="font-display max-w-xl text-3xl font-bold leading-tight tracking-tight text-[#17352e] sm:text-4xl lg:text-5xl"
            >
              From first idea to clean power.
            </h2>
          </div>
          <button
            type="button"
            onClick={onScrollToContact}
            className="font-sans inline-flex w-fit items-center gap-3 rounded-full bg-[#17352e] px-5 py-3 text-sm font-semibold text-[#f5f8e9] shadow-[0_10px_22px_rgba(23,53,46,0.14)] transition hover:-translate-y-0.5 hover:bg-[#285c4c] outline-none focus:outline-none"
          >
            Start your project
            <ArrowRight className="h-4 w-4 text-[#d9ef9a]" />
          </button>
        </div>

        <div className="grid gap-6 pt-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16 lg:pt-14">
          <div className="order-2 lg:order-1">
            <div className="mb-4 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-[#71877d] font-sans">
              <span>Project journey</span>
              <span>{String(activeStep + 1).padStart(2, "0")} / {String(PROCESS_STEPS.length).padStart(2, "0")}</span>
            </div>
            <div
              role="tablist"
              aria-label="Project journey steps"
              aria-orientation="vertical"
              className="space-y-2 font-sans"
            >
              {PROCESS_STEPS.map((step, index) => {
                const isActive = index === activeStep;
                const Icon = stepIcons[index] || CheckCircle2;
                return (
                  <button
                    key={step.number}
                    ref={(element) => {
                      tabRefs.current[index] = element;
                    }}
                    id={`process-step-${index}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="process-detail"
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => selectStep(index)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                    className={`group flex w-full items-center gap-4 rounded-xl border px-4 py-4 text-left transition duration-200 sm:px-5 ${
                      isActive
                        ? "border-[#17352e] bg-[#17352e] text-[#f5f8e9] shadow-[0_10px_24px_rgba(23,53,46,0.12)]"
                        : "border-[#d8e2d3] bg-white/60 text-[#345c4e] hover:border-[#a9c48e] hover:bg-white"
                    }`}
                  >
                    <span
                      className={`font-display flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                        isActive ? "bg-white/15 text-[#d9ef9a]" : "bg-[#edf3e8] text-[#6a8775]"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold sm:text-base font-display">{step.title}</span>
                      <span
                        className={`mt-1 block text-[10px] font-semibold uppercase tracking-[0.16em] ${
                          isActive ? "text-[#afc99b]" : "text-[#8a9c92]"
                        }`}
                      >
                        Phase {String(index + 1).padStart(2, "0")}
                      </span>
                    </span>
                    <Icon
                      className={`h-4 w-4 shrink-0 transition ${
                        isActive ? "text-[#d9ef9a]" : "text-[#93ab9a] group-hover:text-[#527a67]"
                      }`}
                      strokeWidth={1.8}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="order-1 lg:order-2 font-sans">
            <AnimatePresence mode="wait">
              <motion.article
                key={current.number}
                id="process-detail"
                role="tabpanel"
                aria-labelledby={`process-step-${activeStep}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="relative min-h-[360px] overflow-hidden rounded-2xl border border-[#d6e0d2] bg-white p-7 shadow-[0_18px_42px_rgba(23,53,46,0.07)] sm:p-10"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#d9ef9a]/35 blur-3xl" />
                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <div className="mb-12 flex items-start justify-between gap-6">
                      <span className="font-display text-5xl font-semibold leading-none tracking-tight text-[#e7eee1] sm:text-6xl lg:text-7xl">
                        {current.number}
                      </span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#d8e4d2] bg-[#f3f7ec] text-[#3b715b]">
                        <ActiveIcon className="h-5 w-5" strokeWidth={1.7} />
                      </div>
                    </div>
                    <h3 className="font-display max-w-md text-2xl font-semibold tracking-[-0.04em] text-[#17352e] sm:text-3xl">
                      {current.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-sm leading-7 text-[#6b8178] sm:text-base font-sans">
                      {current.description}
                    </p>
                  </div>

                  <div className="mt-12 border-t border-[#e3e9df] pt-5">
                    <div className="flex flex-wrap items-end justify-between gap-5">
                      <div className="flex flex-wrap gap-2">
                        {current.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-[#dce7d5] bg-[#f4f8ed] px-2.5 py-1 text-[11px] font-medium text-[#567766]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#3d735c]">
                        <CheckCircle2 className="h-4 w-4 text-[#8bae57]" />
                        {current.keyHighlight}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-10 border-t border-[#d4dfd0] pt-5">
          <div className="h-1 overflow-hidden rounded-full bg-[#dce6d6]">
            <motion.div
              className="h-full rounded-full bg-[#4c8067]"
              animate={{ width: `${((activeStep + 1) / PROCESS_STEPS.length) * 100}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
          <div className="mt-3 flex justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#879a8e]">
            <span>Discovery</span>
            <span>Grid ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessWorkflow;
