"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ShieldCheck, Zap, Cpu, Sparkles, CheckCircle2 } from "lucide-react";

export function SystemArchitecture() {
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [5, -5]);
  const rotateY = useTransform(x, [-150, 150], [-5, 5]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  }

  return (
    <div className="relative mx-auto w-full max-w-2xl [perspective:1000px]">
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative flex min-h-[380px] w-full flex-col justify-between overflow-hidden rounded-[2rem] border border-[#d6dfcf] bg-[#0c241e] shadow-[0_24px_60px_rgba(12,36,30,0.18)] transition-all duration-500 hover:shadow-[0_30px_70px_rgba(12,36,30,0.28)] sm:aspect-[4/3] sm:rounded-[2.5rem]"
      >
        {/* Real Solar Architecture Photo */}
        <img
          src="/images/solar-precision-engineering.jpg"
          alt="Precision Engineered Rooftop Solar Installation with Inverter"
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />

        {/* Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#061814]/90 via-[#061814]/30 to-black/40" />

        {/* Top Floating Badges */}
        <div
          className="relative z-10 flex items-center justify-between p-6 sm:p-7"
          style={{ transform: "translateZ(25px)" }}
        >
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-3.5 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b4e67e] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b4e67e]"></span>
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e8f6d2]">
              Live Kerala Installation
            </span>
          </div>

          <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[11px] font-semibold text-[#d9ef9a] backdrop-blur-md">
            <ShieldCheck className="h-3.5 w-3.5 text-[#b4e67e]" />
            25-Yr Performance
          </div>
        </div>

        {/* Bottom Floating Specs Overlay */}
        <div
          className="relative z-10 p-6 sm:p-7"
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="rounded-2xl border border-white/20 bg-black/60 p-4.5 backdrop-blur-xl shadow-lg">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#b4cbbf]">
                  Turnkey Balance of System
                </span>
                <h4 className="text-base font-bold text-white leading-tight">
                  Tier-1 N-Type TOPCon &amp; Smart Inverter
                </h4>
              </div>
              <span className="rounded-lg border border-[#b4e67e]/30 bg-[#b4e67e]/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#d6ef9a]">
                KSEB Approved
              </span>
            </div>

            {/* Quick Spec Highlights */}
            <div className="mt-3 grid grid-cols-2 gap-3 text-xs text-[#e0ecdf] sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#b4e67e] shrink-0" />
                <span className="truncate">High-Efficiency PV</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#b4e67e] shrink-0" />
                <span className="truncate">Dual MPPT Inverter</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#b4e67e] shrink-0" />
                <span className="truncate">Wi-Fi Telemetry</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default SystemArchitecture;