"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export function SystemArchitecture() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      {/* Outer Card */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex min-h-[320px] w-full flex-col justify-between overflow-hidden rounded-[1.75rem] border border-[#d6e3ce] bg-[#eef4e6] p-5 shadow-[0_16px_40px_rgba(23,53,46,0.08)] transition-all duration-500 hover:border-[#a8c69a] hover:shadow-[0_25px_60px_rgba(23,53,46,0.12)] sm:aspect-[4/3] sm:rounded-[2.5rem] sm:p-8 lg:p-10"
      >
        {/* Subtle Background Grid Pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(23,53,46,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(23,53,46,0.06)_1px,transparent_1px)] [background-size:28px_28px]" />

        {/* Ambient Radial Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fde047]/35 blur-3xl transition-transform duration-700 group-hover:scale-110 sm:h-[340px] sm:w-[340px]" />

        {/* Top Left Label */}
        <div className="relative z-10 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#3d6e59] animate-pulse" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#4d705f] sm:text-[11px] sm:tracking-[0.24em]">
            System Architecture
          </span>
        </div>

        {/* Center Animated Solar Graphic */}
        <div className="relative my-2 flex w-full items-center justify-center sm:absolute sm:inset-0">
          <div className="relative flex h-[240px] w-[240px] items-center justify-center sm:h-[300px] sm:w-[300px] lg:h-[340px] lg:w-[340px]">
            {/* 1. Concentric Animated Orbit Waves */}
            <motion.div
              animate={{ scale: [1, 1.06, 1], opacity: [0.35, 0.65, 0.35] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute h-[220px] w-[220px] rounded-full border border-[#d4b055]/35 sm:h-[270px] sm:w-[270px] lg:h-[300px] lg:w-[300px]"
            />
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute h-[180px] w-[180px] rounded-full border border-dashed border-[#eab308]/45 sm:h-[220px] sm:w-[220px] lg:h-[245px] lg:w-[245px]"
            />

            <motion.div
              animate={{ scale: [1.03, 0.98, 1.03], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="pointer-events-none absolute h-[140px] w-[140px] rounded-full border border-[#f59e0b]/50 sm:h-[170px] sm:w-[170px] lg:h-[190px] lg:w-[190px]"
            />

            {/* 2. Main SVG Graphic: Sun Sphere, Rays, Solar Module & Architectural Base */}
            <svg
              viewBox="0 0 300 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10 h-full w-full"
            >
              <defs>
                {/* Sun Glow Gradient (Vibrant Golden Yellow) */}
                <radialGradient id="archSunGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="28%" stopColor="#fef08a" stopOpacity="0.95" />
                  <stop offset="62%" stopColor="#fde047" stopOpacity="0.92" />
                  <stop offset="85%" stopColor="#f59e0b" stopOpacity="0.88" />
                  <stop offset="100%" stopColor="#d97706" stopOpacity="0.8" />
                </radialGradient>

                {/* Solar Panel Gradient */}
                <linearGradient id="archPanelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1f4b3e" />
                  <stop offset="50%" stopColor="#173b31" />
                  <stop offset="100%" stopColor="#0f2b23" />
                </linearGradient>

                {/* Base Dome Gradient */}
                <linearGradient id="archBaseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#17352e" />
                  <stop offset="100%" stopColor="#0d241f" />
                </linearGradient>

                {/* Energy Pulse Glow */}
                <filter id="glowGleam" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Central Luminous Celestial Sun Sphere */}
              <motion.circle
                cx="150"
                cy="140"
                r="64"
                fill="url(#archSunGradient)"
                stroke="#f59e0b"
                strokeWidth="1.2"
                animate={{
                  r: [63, 66, 63],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Inner Soft Glowing Light Core */}
              <circle cx="150" cy="140" r="46" fill="#fffbeb" fillOpacity="0.45" />

              {/* Specular Core Reflection */}
              <circle cx="138" cy="128" r="16" fill="#ffffff" fillOpacity="0.5" />

              {/* Energy Photon Beams (Flowing down into the solar array) */}
              <motion.line
                x1="135"
                y1="150"
                x2="130"
                y2="198"
                stroke="#fde047"
                strokeWidth="1.6"
                strokeDasharray="3 4"
                animate={{ strokeDashoffset: [0, -14] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
              <motion.line
                x1="150"
                y1="154"
                x2="150"
                y2="200"
                stroke="#ffffff"
                strokeWidth="2"
                strokeDasharray="4 4"
                animate={{ strokeDashoffset: [0, -16] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.line
                x1="165"
                y1="150"
                x2="170"
                y2="198"
                stroke="#fde047"
                strokeWidth="1.6"
                strokeDasharray="3 4"
                animate={{ strokeDashoffset: [0, -14] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />

              {/* Architectural Dome Base */}
              <path
                d="M80 264 C80 220, 108 220, 114 220 L186 220 C192 220, 220 220, 220 264 Z"
                fill="url(#archBaseGrad)"
                stroke="#2b594b"
                strokeWidth="1.5"
              />

              {/* Precision Slanted Solar PV Module Parallelogram */}
              <polygon
                points="114,198 196,198 186,226 104,226"
                fill="url(#archPanelGrad)"
                stroke="#9fc18c"
                strokeWidth="1.4"
                className="transition-all duration-300"
              />

              {/* Photovoltaic Cell Grid Lines on Module */}
              <line x1="134" y1="198" x2="124" y2="226" stroke="#487869" strokeWidth="1" />
              <line x1="155" y1="198" x2="145" y2="226" stroke="#487869" strokeWidth="1" />
              <line x1="175" y1="198" x2="165" y2="226" stroke="#487869" strokeWidth="1" />
              <line x1="109" y1="212" x2="191" y2="212" stroke="#487869" strokeWidth="0.8" />

              {/* Active High-Output Luminescent Panel Rim */}
              <motion.line
                x1="114"
                y1="198"
                x2="196"
                y2="198"
                stroke="#fde047"
                strokeWidth="1.8"
                filter="url(#glowGleam)"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Small Floating Micro Photon Sparks */}
              <motion.circle
                cx="128"
                cy="180"
                r="1.8"
                fill="#ffffff"
                animate={{ y: [0, 18], opacity: [0, 1, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeIn" }}
              />
              <motion.circle
                cx="150"
                cy="172"
                r="2"
                fill="#fde047"
                animate={{ y: [0, 24], opacity: [0, 1, 0] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeIn", delay: 0.3 }}
              />
              <motion.circle
                cx="172"
                cy="180"
                r="1.8"
                fill="#ffffff"
                animate={{ y: [0, 18], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeIn", delay: 0.6 }}
              />
            </svg>
          </div>
        </div>

        {/* Bottom Right Stacked Label */}
        <div className="relative z-10 flex h-full flex-col justify-end text-right">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#486959] sm:text-[11px]">
            Designed as one
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#486959] sm:text-[11px]">
            Not sold as parts
          </p>
        </div>
      </div>
    </div>
  );
}

export default SystemArchitecture;
