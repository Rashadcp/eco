"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sun, TrendingUp } from "lucide-react";
import { METRIC_MODES } from "@/data/content";

type MetricMode = "mode1" | "mode2";

const tabs: Array<{
  id: MetricMode;
  label: string;
  icon: typeof Sun;
}> = [
  { id: "mode1", label: "Savings & installs", icon: Sun },
  { id: "mode2", label: "Capacity & yield", icon: TrendingUp },
];

export function MetricSwitcher() {
  const [currentMode, setCurrentMode] = useState<MetricMode>("mode1");
  const data = METRIC_MODES[currentMode];

  return (
    <section
      id="metrics"
      aria-labelledby="metrics-title"
      className="relative overflow-hidden bg-[#f7f8f1] py-20 text-[#17352e] sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(23,53,46,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(23,53,46,0.035)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="pointer-events-none absolute -right-28 top-20 h-72 w-72 rounded-full bg-[#d9ef9a]/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-end gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <header className="max-w-md">
            <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#578172]">
              <span className="h-px w-8 bg-[#a6c66d]" />
              The numbers behind the shift
            </p>
            <h2
              id="metrics-title"
              className="font-display max-w-md text-3xl font-bold leading-tight tracking-tight text-[#17352e] sm:text-4xl lg:text-5xl"
            >
              Small changes. Real momentum.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-6 text-[#6b8178] sm:text-base font-sans">
              Explore the progress our connected energy systems are creating across homes and communities.
            </p>
          </header>

          <div className="font-sans">
            <div
              role="tablist"
              aria-label="Metric categories"
              className="mb-5 flex w-full max-w-md rounded-xl border border-[#d6dfcf] bg-white/65 p-1 shadow-[0_8px_24px_rgba(23,53,46,0.04)] backdrop-blur-sm font-sans"
            >
              {tabs.map(({ id, label, icon: Icon }) => {
                const active = currentMode === id;
                return (
                  <button
                    key={id}
                    id={`${id}-tab`}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-controls={`${id}-panel`}
                    tabIndex={active ? 0 : -1}
                    onClick={() => setCurrentMode(id)}
                    onKeyDown={(event) => {
                      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
                      event.preventDefault();
                      const nextMode = id === "mode1" ? "mode2" : "mode1";
                      setCurrentMode(nextMode);
                      document.getElementById(`${nextMode}-tab`)?.focus();
                    }}
                    className={`relative flex min-w-0 flex-1 items-center justify-center gap-2 rounded-lg px-3 py-3 text-xs font-semibold transition sm:text-sm font-sans ${
                      active
                        ? "bg-[#17352e] text-white shadow-[0_5px_14px_rgba(23,53,46,0.16)]"
                        : "text-[#70847a] hover:bg-white hover:text-[#17352e]"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" strokeWidth={1.8} />
                    <span className="truncate">{label}</span>
                  </button>
                );
              })}
            </div>

            <motion.div
              key={currentMode}
              id={`${currentMode}-panel`}
              role="tabpanel"
              aria-labelledby={`${currentMode}-tab`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="grid gap-4 sm:grid-cols-2 font-sans"
            >
              <MetricCard
                label={data.card1.label}
                value={data.card1.value}
                trend={data.card1.trend}
                subtext={data.card1.subtext}
                featured
              />
              <MetricCard
                label={data.card2.label}
                value={data.card2.value}
                trend={data.card2.trend}
                subtext={data.card2.subtext}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface MetricCardProps {
  label: string;
  value: string;
  trend: string;
  subtext: string;
  featured?: boolean;
}

function MetricCard({
  label,
  value,
  trend,
  subtext,
  featured = false,
}: MetricCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border p-6 transition duration-300 sm:p-8 font-sans ${
        featured
          ? "border-[#17352e] bg-[#17352e] text-white shadow-[0_18px_38px_rgba(23,53,46,0.15)]"
          : "border-[#d6dfcf] bg-white/80 text-[#17352e] hover:-translate-y-0.5 hover:border-[#a8c188] hover:shadow-[0_14px_30px_rgba(23,53,46,0.08)]"
      }`}
    >
      <div
        className={`pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full blur-2xl transition duration-300 group-hover:scale-125 ${
          featured ? "bg-[#d9ef9a]/20" : "bg-[#d9ef9a]/30"
        }`}
      />

      <div className="relative flex min-h-[178px] flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <span
            className={`text-[10px] font-semibold uppercase tracking-[0.2em] font-sans ${
              featured ? "text-[#b9d28a]" : "text-[#648878]"
            }`}
          >
            {label}
          </span>
          <span
            className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-wide font-sans ${
              featured
                ? "bg-[#d9ef9a]/15 text-[#d9ef9a]"
                : "border border-[#d6e4c7] bg-[#edf6dd] text-[#57783f]"
            }`}
          >
            {trend}
          </span>
        </div>

        <div
          className={`font-display mt-7 text-4xl font-bold tracking-tight transition duration-300 sm:text-5xl ${
            featured ? "text-[#f4f9df]" : "text-[#17352e] group-hover:text-[#3a7968]"
          }`}
        >
          {value}
        </div>

        <div
          className={`mt-6 border-t pt-4 text-xs leading-5 ${
            featured ? "border-white/15 text-[#b8cbc0]" : "border-[#e4eadf] text-[#71877d]"
          }`}
        >
          {subtext}
        </div>
      </div>
    </article>
  );
}

export default MetricSwitcher;
