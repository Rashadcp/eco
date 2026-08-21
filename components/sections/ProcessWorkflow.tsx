"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import {
  ArrowRight,
  Compass,
  FileCheck2,
  Zap,
  Check,
  Sparkles,
  ShieldCheck,
  Sun,
} from "lucide-react";
import { PROCESS_STEPS, ProcessCard } from "@/data/content";

export interface ProcessWorkflowProps {
  onScrollToContact?: () => void;
}

const stepIcons = [Compass, FileCheck2, Zap, Sun];

/**
 * Smooth Hermite S-Curve easing function for organic interpolation
 */
function smoothStep(edge0: number, edge1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

/**
 * Individual 3D Card with ultra-smooth physics-based transforms
 */
function ScrollStepCard({
  step,
  index,
  total,
  progress,
}: {
  step: ProcessCard;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const Icon = stepIcons[index] || Compass;
  const cardProgress = useTransform(progress, [0, 1], [0, total]);

  // Smooth Hermite-interpolated Y position
  const y = useTransform(cardProgress, (val) => {
    const diff = val - index;
    if (diff < 0) {
      // Waiting in back deck
      return diff * 24;
    } else if (diff <= 0.65) {
      // Active in front stage
      return 0;
    } else {
      // Final card never drops away
      if (index === total - 1) return 0;
      // Smooth organic drop exit
      const exitProgress = smoothStep(0.65, 1.25, diff);
      return exitProgress * 460;
    }
  });

  // Smooth X offset
  const x = useTransform(cardProgress, (val) => {
    const diff = val - index;
    if (diff < 0) {
      return -diff * 18;
    } else if (diff <= 0.65) {
      return 0;
    } else {
      if (index === total - 1) return 0;
      const exitProgress = smoothStep(0.65, 1.25, diff);
      return -exitProgress * 50;
    }
  });

  // Smooth 3D scale
  const scale = useTransform(cardProgress, (val) => {
    const diff = val - index;
    if (diff < 0) {
      return Math.max(0.88, 1 + diff * 0.04);
    } else if (diff <= 0.65) {
      return 1;
    } else {
      if (index === total - 1) return 1;
      const exitProgress = smoothStep(0.65, 1.25, diff);
      return 1 - exitProgress * 0.06;
    }
  });

  // Dynamic 3D tilt & rotation
  const rotateZ = useTransform(cardProgress, (val) => {
    const diff = val - index;
    if (diff < 0) {
      return diff * 2;
    } else if (diff <= 0.65) {
      return 0;
    } else {
      if (index === total - 1) return 0;
      const exitProgress = smoothStep(0.65, 1.25, diff);
      return -exitProgress * 12;
    }
  });

  const rotateX = useTransform(cardProgress, (val) => {
    const diff = val - index;
    if (diff < 0) return 3;
    if (diff <= 0.65) return 0;
    if (index === total - 1) return 0;
    const exitProgress = smoothStep(0.65, 1.25, diff);
    return exitProgress * 14;
  });

  // Smooth fading
  const opacity = useTransform(cardProgress, (val) => {
    const diff = val - index;
    if (diff < -2) return 0.2;
    if (diff < 0) return 0.65 + (diff + 2) * 0.17;
    if (diff <= 0.65) return 1;
    if (index === total - 1) return 1;
    const exitProgress = smoothStep(0.65, 1.25, diff);
    return Math.max(0, 1 - exitProgress * 1.3);
  });

  const zIndex = useTransform(cardProgress, (val) => {
    const diff = val - index;
    if (diff < 0) return total - Math.abs(Math.round(diff));
    if (diff <= 0.65) return 20;
    return 1;
  });

  return (
    <motion.div
      style={{
        y,
        x,
        scale,
        rotateZ,
        rotateX,
        opacity,
        zIndex,
        transformOrigin: "bottom center",
        transformStyle: "preserve-3d",
      }}
      className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-br from-[#0b2720] via-[#103b30] to-[#071b15] p-7 text-[#eef7df] shadow-[0_24px_60px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-2xl transition-shadow select-none will-change-transform sm:p-8"
    >
      {/* Ambient Inner Lighting */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#b4e67e]/15 blur-2xl" />

      {/* Top Meta: Phase badge & Icon */}
      <div className="relative z-10">
        <div className="flex items-center justify-between pb-4 sm:pb-5">
          <span className="rounded-full border border-[#b4e67e]/30 bg-[#b4e67e]/15 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#d6ef9a]">
            Phase {step.number} of 04
          </span>

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-[#b4e67e] shadow-sm">
            <Icon className="h-5 w-5" strokeWidth={2} />
          </div>
        </div>

        {/* Step Title */}
        <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-snug">
          {step.title}
        </h3>

        {/* Step Description */}
        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#b4cbbf] font-sans">
          {step.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {step.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-[#d9ef9a]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Highlight with Checkmark */}
      <div className="relative z-10 border-t border-white/10 pt-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#eef7df]">
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#b4e67e] text-[#0d2b24]">
            <Check className="h-3 w-3 stroke-[3]" />
          </div>
          <span className="leading-tight text-[#d6ef9a] font-medium sm:text-sm">
            {step.keyHighlight}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Individual List Item on the left that responds smoothly to scroll progress.
 */
function ScrollStepListItem({
  step,
  index,
  total,
  progress,
  onItemClick,
}: {
  step: ProcessCard;
  index: number;
  total: number;
  progress: MotionValue<number>;
  onItemClick: () => void;
}) {
  const Icon = stepIcons[index] || Compass;
  const cardProgress = useTransform(progress, [0, 1], [0, total]);

  const scale = useTransform(cardProgress, (val) => {
    const diff = val - index;
    return diff >= -0.2 && diff <= 0.8 ? 1.02 : 1;
  });

  return (
    <motion.div
      style={{ scale }}
      onClick={onItemClick}
      className="group relative flex cursor-pointer items-center justify-between rounded-xl border border-[#dce5d8] bg-white/70 p-3 transition-all duration-300 hover:border-[#13322b]/50 hover:bg-white hover:shadow-xs"
    >
      {/* Active Phase Node Indicator */}
      <div className="absolute -left-[27px] top-1/2 -translate-y-1/2 flex h-3.5 w-3.5 items-center justify-center">
        <div className="h-2.5 w-2.5 rounded-full border-2 border-white bg-[#13322b] shadow-xs group-hover:scale-125 transition-transform" />
      </div>
      
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#13322b] text-[11px] font-bold text-[#b4e67e]">
          {step.number}
        </div>
        <div>
          <h4 className="text-xs sm:text-sm font-bold text-[#13322b] leading-tight">
            {step.title}
          </h4>
          <p className="text-[11px] text-[#516b60] hidden sm:block">
            {step.keyHighlight}
          </p>
        </div>
      </div>

      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#edf3e8] text-[#13322b]">
        <Icon className="h-3.5 w-3.5" strokeWidth={2} />
      </div>
    </motion.div>
  );
}

export function ProcessWorkflow({ onScrollToContact }: ProcessWorkflowProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position through the tall pinned section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Ultra-smooth spring physics (low mass, balanced damping for organic inertia)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 22,
    mass: 0.12,
    restDelta: 0.0001,
  });

  // Progress bar height for left conduit
  const conduitHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const scrollToPhase = (index: number) => {
    if (!containerRef.current) return;
    const top = containerRef.current.offsetTop;
    const height = containerRef.current.offsetHeight;
    const targetScroll = top + (index / PROCESS_STEPS.length) * (height - window.innerHeight);
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <div
      ref={containerRef}
      id="process"
      className="relative h-[380vh] sm:h-[440vh] bg-[#f7f8f1]"
    >
      {/* Sticky Window Container pinned to screen while scrolling through the 4 phases */}
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden border-y border-[#dce4d6] py-8 sm:py-12">
        {/* Subtle Background Pattern & Ambient Lighting */}
        <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(19,50,43,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(19,50,43,0.035)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="pointer-events-none absolute -left-28 top-1/4 h-96 w-96 rounded-full bg-[#b4e67e]/25 blur-[120px]" />
        <div className="pointer-events-none absolute -right-28 bottom-1/4 h-96 w-96 rounded-full bg-[#174a40]/20 blur-[120px]" />

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          {/* Main Grid: Left Narrative + Right Scroll-Driven 3D Cards */}
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            
            {/* Left Column: Header, Narrative & Active Phase Scrubber */}
            <div className="max-w-xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#13322b]/15 bg-white/80 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3d6255] shadow-xs backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#13322b] animate-pulse" />
                Interactive Journey • Scroll to explore
              </div>

              <h2
                id="process-title"
                className="font-display text-3xl font-bold tracking-tight text-[#13322b] sm:text-4xl lg:text-5xl leading-[1.1]"
              >
                From first idea to <span className="text-[#174a40]">clean power.</span>
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-[#516b60] sm:text-base font-sans">
                A transparent 4-step transition engineered for zero hassle, maximum government subsidy, and peak solar yields.
              </p>

              {/* Scroll-Linked Phase List */}
              <div className="relative mt-6 space-y-2 pl-6 sm:pl-7">
                {/* Vertical Scroll Energy Line Track */}
                <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-[#dbe4d4] rounded-full">
                  <motion.div
                    style={{ height: conduitHeight }}
                    className="w-full bg-gradient-to-b from-[#13322b] via-[#7eaa57] to-[#b4e67e] shadow-[0_0_10px_#b4e67e] rounded-full will-change-[height]"
                  />
                </div>

                {PROCESS_STEPS.map((step, idx) => (
                  <ScrollStepListItem
                    key={step.number}
                    step={step}
                    index={idx}
                    total={PROCESS_STEPS.length}
                    progress={smoothProgress}
                    onItemClick={() => scrollToPhase(idx)}
                  />
                ))}
              </div>

              {/* CTA & Scroll Instruction */}
              <div className="mt-6 flex flex-wrap items-center gap-4 pl-6 sm:pl-7">
                <button
                  type="button"
                  onClick={onScrollToContact}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#13322b] px-6 py-3 text-xs sm:text-sm font-semibold text-[#f5f8e9] shadow-[0_10px_24px_rgba(19,50,43,0.15)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#174a40] cursor-pointer outline-none focus:outline-none"
                >
                  <span>Start your project</span>
                  <ArrowRight className="h-4 w-4 text-[#b4e67e] transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>

                <span className="text-xs font-semibold text-[#5a7a6c] inline-flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-[#7eaa57]" />
                  Scroll down to swap phases ↓
                </span>
              </div>
            </div>

            {/* Right Column: Scroll-Driven 3D Card Stack */}
            <div className="relative flex h-[380px] sm:h-[420px] w-full max-w-[420px] items-center justify-center mx-auto lg:mx-0 lg:ml-auto [perspective:1200px]">
              {PROCESS_STEPS.map((step, idx) => (
                <ScrollStepCard
                  key={step.number}
                  step={step}
                  index={idx}
                  total={PROCESS_STEPS.length}
                  progress={smoothProgress}
                />
              ))}
            </div>

          </div>

          {/* Bottom Turnkey Guarantee Strip */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#dce5d8] bg-white/70 px-6 py-3 backdrop-blur-sm text-xs font-medium text-[#496b5b]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#7eaa57] animate-pulse" />
              <span>
                <strong>100% Government Subsidy Handled</strong> — Direct DBT credit to your bank account
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold text-[#285c4c]">
              <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5 text-[#7eaa57]" /> Tier-1 Modules</span>
              <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5 text-[#7eaa57]" /> KSEB Net Metering</span>
              <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5 text-[#7eaa57]" /> 25-Yr Warranty</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProcessWorkflow;
