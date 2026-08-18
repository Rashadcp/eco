"use client";

import React, { useEffect, useRef, useState } from "react";
import { 
  Sun, 
  BatteryCharging, 
  Zap, 
  Home as HomeIcon, 
  Sparkles, 
  ShieldCheck, 
  Activity, 
  ArrowUpRight,
  TrendingUp
} from "lucide-react";

export interface HeroSectionProps {
  onScrollToContact?: () => void;
  onScrollToImpact?: () => void;
}

type SimulationMode = "daylight" | "battery" | "export";

export function HeroSection({
  onScrollToContact,
  onScrollToImpact,
}: HeroSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeMode, setActiveMode] = useState<SimulationMode>("daylight");
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const modeRef = useRef<SimulationMode>("daylight");

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame = 0;
    let width = 600;
    let height = 450;
    let dpr = 1;
    let tick = 0;

    // Ambient floating particles
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random(),
      y: Math.random(),
      radius: 0.8 + Math.random() * 1.5,
      speed: 0.0001 + Math.random() * 0.0002,
      phase: Math.random() * Math.PI * 2,
    }));

    // Energy photon pulses


    // Cubic bezier interpolation helper
    const bezier = (
      t: number,
      p0: { x: number; y: number },
      p1: { x: number; y: number },
      p2: { x: number; y: number },
      p3: { x: number; y: number }
    ) => {
      const u = 1 - t;
      return {
        x: u*u*u*p0.x + 3*u*u*t*p1.x + 3*u*t*t*p2.x + t*t*t*p3.x,
        y: u*u*u*p0.y + 3*u*u*t*p1.y + 3*u*t*t*p2.y + t*t*t*p3.y,
      };
    };

    // Arc sparks for grid export animation
    interface ArcSpark {
      angle: number;
      length: number;
      life: number;
      maxLife: number;
    }
    const arcSparks: ArcSpark[] = [];

    const updateDimensions = () => {
      const rect = container.getBoundingClientRect();
      width = Math.max(rect.width, 320);
      height = Math.max(rect.height, 360);
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });
    resizeObserver.observe(container);

    const safeGlow = (x: number, y: number, r: number, colorRgb: string, alpha: number) => {
      if (r <= 0.1 || !isFinite(x) || !isFinite(y)) return;
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, Math.max(r, 1));
      gradient.addColorStop(0, `rgba(${colorRgb}, ${alpha})`);
      gradient.addColorStop(1, `rgba(${colorRgb}, 0)`);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, Math.max(r, 1), 0, Math.PI * 2);
      ctx.fill();
    };

    const render = () => {
      tick++;
      const mode = modeRef.current;
      // Battery fill: ramps toward 1 in battery mode, drains in export, holds in daylight
      const batteryFill = Math.min(1, Math.max(0.15,
        mode === "battery" ? 0.55 + Math.sin(tick * 0.015) * 0.25
        : mode === "export" ? 0.45 + Math.sin(tick * 0.01) * 0.15
        : 0.78 + Math.sin(tick * 0.012) * 0.1
      ));
      ctx.clearRect(0, 0, width, height);

      // --- 1. Background Atmosphere ---
      const bg = ctx.createLinearGradient(0, 0, 0, height);
      bg.addColorStop(0, "#06221c");
      bg.addColorStop(0.5, "#041a15");
      bg.addColorStop(1, "#020f0c");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      // Perspective Grid Floor
      const horizonY = height * 0.62;
      const vanishX = width * 0.5;
      ctx.strokeStyle = "rgba(74, 222, 128, 0.08)";
      ctx.lineWidth = 1;

      for (let y = horizonY; y <= height + 30; y += Math.max(22, (y - horizonY) * 0.35 + 16)) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      for (let x = -width * 0.3; x <= width * 1.3; x += 48) {
        ctx.beginPath();
        ctx.moveTo(x, height);
        ctx.lineTo(vanishX + (x - vanishX) * 0.32, horizonY);
        ctx.stroke();
      }

      // Atmospheric Stars / Dust
      particles.forEach((p) => {
        const px = ((p.x + tick * p.speed) % 1) * width;
        const py = p.y * height * 0.75;
        const alpha = 0.15 + (Math.sin(tick * 0.03 + p.phase) + 1) * 0.15;
        ctx.fillStyle = `rgba(180, 240, 190, ${alpha})`;
        ctx.beginPath();
        ctx.arc(px, py, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // --- 2. Radiant Celestial Sun ---
      const sunX = width * 0.82;
      const sunY = height * 0.2;
      const sunR = Math.max(20, Math.min(width, height) * 0.056);
      const sunPulse = 0.92 + Math.sin(tick * 0.04) * 0.08;

      // Volumetric Multi-Layered Solar Corona
      safeGlow(sunX, sunY, sunR * 3.6, "255, 180, 50", 0.22 * sunPulse);
      safeGlow(sunX, sunY, sunR * 2.0, "255, 225, 90", 0.42 * sunPulse);
      safeGlow(sunX, sunY, sunR * 1.2, "255, 255, 200", 0.65);

      ctx.save();
      ctx.translate(sunX, sunY);

      // Rotating Solar Rays / Flare Halo
      ctx.save();
      ctx.rotate(tick * 0.004);
      for (let ray = 0; ray < 8; ray++) {
        const rayAngle = (ray * Math.PI) / 4;
        const rayLen = sunR + 8 + Math.sin(tick * 0.08 + ray) * 4;
        ctx.strokeStyle = "rgba(255, 220, 110, 0.25)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(Math.cos(rayAngle) * (sunR + 2), Math.sin(rayAngle) * (sunR + 2));
        ctx.lineTo(Math.cos(rayAngle) * rayLen, Math.sin(rayAngle) * rayLen);
        ctx.stroke();
      }

      // Fine dashed solar orbit ring
      ctx.strokeStyle = "rgba(255, 235, 130, 0.35)";
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 5]);
      ctx.beginPath();
      ctx.arc(0, 0, sunR + 9, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Outer Solar Atmosphere Flare
      const coronaGrad = ctx.createRadialGradient(0, 0, sunR * 0.6, 0, 0, sunR * 1.15);
      coronaGrad.addColorStop(0, "rgba(254, 240, 138, 0.6)");
      coronaGrad.addColorStop(0.7, "rgba(245, 158, 11, 0.25)");
      coronaGrad.addColorStop(1, "rgba(245, 158, 11, 0)");
      ctx.fillStyle = coronaGrad;
      ctx.beginPath();
      ctx.arc(0, 0, sunR * 1.15, 0, Math.PI * 2);
      ctx.fill();

      // Core Sun Sphere (Radiant Gradient)
      const sunGrad = ctx.createRadialGradient(-sunR * 0.2, -sunR * 0.2, 1, 0, 0, sunR);
      sunGrad.addColorStop(0, "#ffffff");
      sunGrad.addColorStop(0.2, "#fffbeb");
      sunGrad.addColorStop(0.5, "#fde047");
      sunGrad.addColorStop(0.8, "#f59e0b");
      sunGrad.addColorStop(1, "#d97706");
      ctx.fillStyle = sunGrad;
      ctx.beginPath();
      ctx.arc(0, 0, sunR, 0, Math.PI * 2);
      ctx.fill();

      // Inner Solar Highlight Specular Glint
      ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
      ctx.beginPath();
      ctx.arc(-sunR * 0.25, -sunR * 0.25, sunR * 0.32, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      // --- 3. Architectural 3D House ---
      const houseScale = Math.min(width / 540, 1.15);
      const hx = width * 0.48;
      const hy = height * 0.5;

      ctx.save();

      // House Foundation Base Shadow
      safeGlow(hx, hy + 60 * houseScale, 110 * houseScale, "52, 211, 153", 0.12);

      // Villa Main Walls
      const wallW = 140 * houseScale;
      const wallH = 75 * houseScale;
      const wallX = hx - wallW * 0.5;
      const wallY = hy + 5 * houseScale;

      const wallGrad = ctx.createLinearGradient(wallX, wallY, wallX, wallY + wallH);
      wallGrad.addColorStop(0, "#0d3a33");
      wallGrad.addColorStop(1, "#07201c");
      ctx.fillStyle = wallGrad;
      ctx.strokeStyle = "rgba(74, 222, 128, 0.55)";
      ctx.lineWidth = 1.5;
      ctx.fillRect(wallX, wallY, wallW, wallH);
      ctx.strokeRect(wallX, wallY, wallW, wallH);

      // Glowing Architectural Windows
      const winGlow = 0.45 + Math.sin(tick * 0.04) * 0.1;
      ctx.fillStyle = `rgba(255, 225, 120, ${winGlow})`;
      ctx.strokeStyle = "rgba(255, 240, 180, 0.7)";
      ctx.lineWidth = 1;

      // Left Large Picture Window
      ctx.fillRect(wallX + 16 * houseScale, wallY + 16 * houseScale, 46 * houseScale, 42 * houseScale);
      ctx.strokeRect(wallX + 16 * houseScale, wallY + 16 * houseScale, 46 * houseScale, 42 * houseScale);

      // Mullion Cross
      ctx.strokeStyle = "rgba(10, 45, 38, 0.85)";
      ctx.beginPath();
      ctx.moveTo(wallX + 39 * houseScale, wallY + 16 * houseScale);
      ctx.lineTo(wallX + 39 * houseScale, wallY + 58 * houseScale);
      ctx.moveTo(wallX + 16 * houseScale, wallY + 34 * houseScale);
      ctx.lineTo(wallX + 62 * houseScale, wallY + 34 * houseScale);
      ctx.stroke();

      // Right Villa Door
      ctx.fillStyle = "rgba(6, 26, 22, 0.95)";
      ctx.strokeStyle = "rgba(74, 222, 128, 0.4)";
      ctx.fillRect(wallX + 85 * houseScale, wallY + 22 * houseScale, 34 * houseScale, 53 * houseScale);
      ctx.strokeRect(wallX + 85 * houseScale, wallY + 22 * houseScale, 34 * houseScale, 53 * houseScale);

      // Porch Light
      ctx.fillStyle = "#fef08a";
      ctx.beginPath();
      ctx.arc(wallX + 78 * houseScale, wallY + 30 * houseScale, 2.5 * houseScale, 0, Math.PI * 2);
      ctx.fill();
      safeGlow(wallX + 78 * houseScale, wallY + 30 * houseScale, 16 * houseScale, "255, 235, 130", 0.45);

      // Slanted Eco-Roof Structure
      const rPeak = { x: hx - 85 * houseScale, y: hy - 45 * houseScale };
      const rEave = { x: hx + 95 * houseScale, y: hy + 6 * houseScale };
      const rBack = { x: 30 * houseScale, y: -25 * houseScale };

      const roofGrad = ctx.createLinearGradient(rPeak.x, rPeak.y, rEave.x, rEave.y);
      roofGrad.addColorStop(0, "#10483f");
      roofGrad.addColorStop(1, "#07241e");
      ctx.fillStyle = roofGrad;
      ctx.strokeStyle = "rgba(74, 222, 128, 0.75)";
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(rPeak.x, rPeak.y);
      ctx.lineTo(rPeak.x + rBack.x, rPeak.y + rBack.y);
      ctx.lineTo(rEave.x + rBack.x, rEave.y + rBack.y);
      ctx.lineTo(rEave.x, rEave.y);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Photovoltaic Solar Panel Array on Roof
      const sp1 = { x: rPeak.x + 22 * houseScale, y: rPeak.y + 6 * houseScale };
      const sp2 = { x: rPeak.x + rBack.x + 16 * houseScale, y: rPeak.y + rBack.y + 10 * houseScale };
      const sp3 = { x: rEave.x + rBack.x - 18 * houseScale, y: rEave.y + rBack.y + 3 * houseScale };
      const sp4 = { x: rEave.x - 15 * houseScale, y: rEave.y + 0 * houseScale };

      const pvGrad = ctx.createLinearGradient(sp1.x, sp1.y, sp3.x, sp3.y);
      pvGrad.addColorStop(0, "#0369a1");
      pvGrad.addColorStop(0.5, "#0284c7");
      pvGrad.addColorStop(1, "#075985");
      ctx.fillStyle = pvGrad;
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(sp1.x, sp1.y);
      ctx.lineTo(sp2.x, sp2.y);
      ctx.lineTo(sp3.x, sp3.y);
      ctx.lineTo(sp4.x, sp4.y);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Solar Panel Cell Grid
      ctx.strokeStyle = "rgba(186, 230, 253, 0.5)";
      ctx.lineWidth = 0.8;
      for (let i = 1; i <= 4; i++) {
        const t = i / 5;
        ctx.beginPath();
        ctx.moveTo(sp1.x + (sp4.x - sp1.x) * t, sp1.y + (sp4.y - sp1.y) * t);
        ctx.lineTo(sp2.x + (sp3.x - sp2.x) * t, sp2.y + (sp3.y - sp2.y) * t);
        ctx.stroke();
      }
      for (let i = 1; i <= 3; i++) {
        const t = i / 4;
        ctx.beginPath();
        ctx.moveTo(sp1.x + (sp2.x - sp1.x) * t, sp1.y + (sp2.y - sp1.y) * t);
        ctx.lineTo(sp4.x + (sp3.x - sp4.x) * t, sp4.y + (sp3.y - sp4.y) * t);
        ctx.stroke();
      }

      // Specular Sunlight Sheen across Panels
      const sheenPos = (Math.sin(tick * 0.02) + 1) * 0.5;
      const sheenX = sp1.x + (sp3.x - sp1.x) * sheenPos;
      const sheenY = sp1.y + (sp3.y - sp1.y) * sheenPos;
      safeGlow(sheenX, sheenY, 26 * houseScale, "224, 242, 254", 0.4);

      ctx.restore();

      // --- 4. Node Positions ---
      const solarCenter = {
        x: (sp1.x + sp2.x + sp3.x + sp4.x) / 4,
        y: (sp1.y + sp2.y + sp3.y + sp4.y) / 4,
      };
      const houseCenter = { x: hx, y: hy + 42 * houseScale };
      const batteryNode = { x: width * 0.16, y: height * 0.74 };
      const gridNode    = { x: width * 0.84, y: height * 0.74 };
      const hs = houseScale;

      // --- 5. Battery Cabinet: Animated Fill ---
      const bw = 36 * hs, bh = 58 * hs;
      const bx = batteryNode.x - bw * 0.5, by = batteryNode.y - bh * 0.5;

      ctx.fillStyle = "#0a2e27";
      ctx.strokeStyle = mode === "battery" ? "rgba(52,211,153,1)" : "rgba(52,211,153,0.7)";
      ctx.lineWidth = mode === "battery" ? 2 : 1.5;
      ctx.setLineDash([]);
      ctx.beginPath(); ctx.roundRect(bx, by, bw, bh, 5 * hs); ctx.fill(); ctx.stroke();

      // Terminal nub
      const termW = bw * 0.3;
      ctx.fillStyle = "rgba(52,211,153,0.6)";
      ctx.fillRect(batteryNode.x - termW * 0.5, by - 4 * hs, termW, 4 * hs);

      // Animated fill level
      const fillH = (bh - 8 * hs) * batteryFill;
      const fillY = by + 4 * hs + (bh - 8 * hs) * (1 - batteryFill);
      const fillRgb = batteryFill > 0.6 ? "52,211,153" : batteryFill > 0.3 ? "251,191,36" : "239,68,68";
      ctx.fillStyle = `rgba(${fillRgb}, 0.85)`;
      ctx.beginPath(); ctx.roundRect(bx + 6 * hs, fillY, bw - 12 * hs, fillH, 2 * hs); ctx.fill();

      // Percentage text
      ctx.fillStyle = "rgba(255,255,255,0.8)";
      ctx.font = `bold ${Math.round(8 * hs)}px monospace`;
      ctx.textAlign = "center";
      ctx.fillText(`${Math.round(batteryFill * 100)}%`, batteryNode.x, by + bh + 14 * hs);
      ctx.textAlign = "left";
      safeGlow(batteryNode.x, batteryNode.y, 28 * hs, fillRgb, mode === "battery" ? 0.4 + Math.sin(tick * 0.06) * 0.15 : 0.2);

      // --- 6. Grid Tower: Transformer with Arc Sparks ---
      ctx.save();
      ctx.translate(gridNode.x, gridNode.y);
      ctx.strokeStyle = mode === "export" ? "rgba(251,191,36,1)" : "rgba(251,191,36,0.75)";
      ctx.lineWidth = mode === "export" ? 2.5 : 1.8;
      ctx.lineCap = "round"; ctx.lineJoin = "round"; ctx.setLineDash([]);
      ctx.beginPath();
      ctx.moveTo(0, 24 * hs);  ctx.lineTo(0, -30 * hs);
      ctx.moveTo(-18 * hs, -14 * hs); ctx.lineTo(18 * hs, -14 * hs);
      ctx.moveTo(-12 * hs, 2 * hs);  ctx.lineTo(12 * hs, 2 * hs);
      ctx.moveTo(-18 * hs, -14 * hs); ctx.lineTo(0, -30 * hs);
      ctx.moveTo(18 * hs, -14 * hs);  ctx.lineTo(0, -30 * hs);
      ctx.stroke();

      const insulColor = mode === "export" ? "#fbbf24" : "#a16207";
      for (const [ix, iy] of [[-18, -14], [18, -14], [-12, 2], [12, 2]]) {
        ctx.fillStyle = insulColor;
        ctx.beginPath(); ctx.arc(ix * hs, iy * hs, 2.5 * hs, 0, Math.PI * 2); ctx.fill();
      }

      if (mode === "export") {
        if (Math.random() < 0.18) arcSparks.push({ angle: Math.random() * Math.PI * 2, length: 8 + Math.random() * 14, life: 0, maxLife: 6 + Math.floor(Math.random() * 8) });
        arcSparks.forEach((sp) => {
          sp.life++;
          const a = 1 - sp.life / sp.maxLife;
          const wobble = Math.sin(sp.life * 1.8) * 3;
          ctx.strokeStyle = `rgba(255,240,100,${a * 0.9})`; ctx.lineWidth = 1.2;
          ctx.shadowColor = "#fde68a"; ctx.shadowBlur = 4;
          ctx.beginPath();
          ctx.moveTo(-14 * hs, -14 * hs);
          ctx.lineTo((-14 + Math.cos(sp.angle) * sp.length + wobble) * hs, (-14 + Math.sin(sp.angle) * sp.length + wobble) * hs);
          ctx.stroke(); ctx.shadowBlur = 0;
        });
        for (let si = arcSparks.length - 1; si >= 0; si--) if (arcSparks[si].life >= arcSparks[si].maxLife) arcSparks.splice(si, 1);
      }
      ctx.restore();
      safeGlow(gridNode.x, gridNode.y - 14 * hs, 22 * hs, "251,191,36", mode === "export" ? 0.45 + Math.sin(tick * 0.08) * 0.15 : 0.25);

      // --- 7. Conduit Paths ---
      type PathDef = { p0:{x:number;y:number}; p1:{x:number;y:number}; p2:{x:number;y:number}; p3:{x:number;y:number}; colorRgb:string; modes:SimulationMode[] };
      const paths: PathDef[] = [
        { p0:{x:sunX,y:sunY}, p1:{x:sunX-width*0.08,y:sunY+height*0.08}, p2:{x:solarCenter.x+width*0.06,y:solarCenter.y-height*0.08}, p3:solarCenter, colorRgb:"253,224,71", modes:["daylight","battery","export"] },
        { p0:solarCenter, p1:{x:solarCenter.x+15*hs,y:solarCenter.y+30*hs}, p2:{x:houseCenter.x,y:houseCenter.y-20*hs}, p3:houseCenter, colorRgb:"74,222,128", modes:["daylight","battery","export"] },
        { p0:houseCenter, p1:{x:width*0.34,y:houseCenter.y+20*hs}, p2:{x:batteryNode.x+20*hs,y:batteryNode.y-20*hs}, p3:batteryNode, colorRgb:"56,189,248", modes:["battery"] },
        { p0:houseCenter, p1:{x:width*0.64,y:houseCenter.y+20*hs}, p2:{x:gridNode.x-20*hs,y:gridNode.y-20*hs}, p3:gridNode, colorRgb:"251,191,36", modes:["export"] },
        { p0:batteryNode, p1:{x:batteryNode.x+30*hs,y:batteryNode.y-30*hs}, p2:{x:houseCenter.x-40*hs,y:houseCenter.y+10*hs}, p3:houseCenter, colorRgb:"56,189,248", modes:["daylight"] },
      ];

      paths.forEach((p) => {
        const active = p.modes.includes(mode);
        ctx.save();
        ctx.strokeStyle = `rgba(${p.colorRgb},${active?0.32:0.08})`;
        ctx.lineWidth = active ? 2.2 : 1.2;
        ctx.setLineDash([5,6]);
        ctx.lineDashOffset = active ? -tick*0.9 : -tick*0.3;
        ctx.beginPath(); ctx.moveTo(p.p0.x,p.p0.y);
        ctx.bezierCurveTo(p.p1.x,p.p1.y,p.p2.x,p.p2.y,p.p3.x,p.p3.y);
        ctx.stroke(); ctx.restore();
      });



      animationFrame = requestAnimationFrame(render);
    };

    render();
    return () => { cancelAnimationFrame(animationFrame); resizeObserver.disconnect(); };
  }, []);

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative isolate min-h-screen lg:h-screen w-full flex items-center justify-center overflow-hidden bg-[#f5f6ee] text-[#102d27] pt-20 sm:pt-24 lg:pt-16 pb-8 lg:pb-0"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(214,243,106,0.16),transparent_32%),linear-gradient(135deg,#f9faf3_0%,#edf2e6_55%,#e5ece0_100%)]" />

      <div className="relative mx-auto grid w-full max-w-[1440px] items-center gap-8 px-6 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:px-14">

        {/* Left Column */}
        <div className="relative z-10 max-w-xl">
          <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-[#cad7c4] bg-white/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#3b6051] backdrop-blur-sm shadow-xs font-sans">
            <span className="h-2 w-2 rounded-full bg-[#102d27] animate-pulse" />
            Empowering Clean Energy
          </div>

          <h1
            id="hero-title"
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.08] tracking-[-0.035em] text-[#102d27]"
          >
            Energy that moves with you.
          </h1>

          <p className="mt-3.5 max-w-lg text-sm leading-relaxed text-[#557064] sm:text-base sm:leading-7 font-sans">
            Turn sunlight into dependable, zero-emission power for your home, commercial enterprise, and the sustainable future you are building.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 font-sans">
            <button
              type="button"
              onClick={onScrollToContact}
              className="inline-flex items-center rounded-full bg-[#102d27] px-6 py-3 text-xs sm:text-sm font-semibold text-[#f4f8e7] shadow-[0_10px_24px_rgba(16,45,39,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1d4a3e] hover:shadow-[0_14px_30px_rgba(16,45,39,0.24)] outline-none focus:outline-none"
            >
              Start your transition
              <ArrowUpRight className="ml-1.5 h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onScrollToImpact}
              className="inline-flex items-center rounded-full border border-[#b9c9b7] bg-white/60 px-6 py-3 text-xs sm:text-sm font-semibold text-[#31584c] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#7f9e82] hover:bg-white outline-none focus:outline-none"
            >
              See the impact
            </button>
          </div>

          <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-[#cad7c4]/80 pt-4 font-sans">
            <div className="flex flex-col">
              <span className="font-display text-base sm:text-lg font-bold text-[#102d27] tracking-tight">25 Years</span>
              <span className="text-[10px] sm:text-[11px] font-medium text-[#648070] uppercase tracking-wider">Performance Warranty</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base sm:text-lg font-bold text-[#102d27] tracking-tight">Tier-1</span>
              <span className="text-[10px] sm:text-[11px] font-medium text-[#648070] uppercase tracking-wider">Solar PV Hardware</span>
            </div>
            <div className="flex flex-col col-span-2 sm:col-span-1">
              <span className="font-display text-base sm:text-lg font-bold text-[#102d27] tracking-tight">₹78,000+</span>
              <span className="text-[10px] sm:text-[11px] font-medium text-[#648070] uppercase tracking-wider">PM Subsidy Support</span>
            </div>
          </div>
        </div>

        {/* Right Column: Canvas Card */}
        <div
          ref={containerRef}
          className="group relative z-0 h-[380px] sm:h-[450px] lg:h-[480px] xl:h-[530px] w-full overflow-hidden rounded-[2rem] border border-[#2d7a6a]/40 bg-[#06201a] shadow-[0_25px_70px_rgba(10,40,32,0.3)] transition-all duration-300"
        >
          <canvas
            ref={canvasRef}
            aria-label="Interactive live solar system architecture"
            className="absolute inset-0 block h-full w-full"
          />

          {/* Top HUD */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 p-3.5 sm:gap-3 sm:p-6">
            <div className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#d6f36a] backdrop-blur-md sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-[11px] sm:tracking-[0.18em]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d6f36a] animate-ping sm:h-2 sm:w-2" />
              Live Energy Map
            </div>

            <div className="flex items-center gap-0.5 rounded-full border border-white/15 bg-black/30 p-0.5 backdrop-blur-md sm:gap-1 sm:p-1">
              {(["daylight","battery","export"] as SimulationMode[]).map((m) => {
                const labels = { daylight:"☀️ Solar", battery:"🔋 Battery", export:"⚡ Grid" };
                const activeColors = { daylight:"bg-[#d6f36a] text-[#07241e]", battery:"bg-[#38bdf8] text-[#07241e]", export:"bg-[#fbbf24] text-[#07241e]" };
                return (
                  <button
                    key={m}
                    type="button"
                    onClick={() => { setActiveMode(m); modeRef.current = m; }}
                    className={`rounded-full px-2 py-0.5 text-[9px] font-semibold transition-all sm:px-2.5 sm:py-1 sm:text-[10px] ${
                      activeMode===m ? activeColors[m]+" shadow-xs" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {labels[m]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Telemetry Cards */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-2 p-3.5 sm:gap-3 sm:p-6">
            <div className="pointer-events-auto rounded-xl border border-white/15 bg-[#092922]/85 p-2.5 backdrop-blur-md shadow-lg sm:rounded-2xl sm:p-3.5">
              <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#a4c9b2] sm:text-[10px] sm:tracking-[0.16em]">
                {activeMode==="daylight" ? "Solar Generation" : activeMode==="battery" ? "Battery Level" : "Grid Net Export"}
              </p>
              <p className="mt-0.5 text-lg font-bold tracking-tight text-[#efffd7] sm:text-2xl md:text-3xl">
                {activeMode==="daylight" ? "6.8 kW" : activeMode==="battery" ? "96% • Charging" : "+4.2 kW Net"}
              </p>
              <span className="mt-0.5 flex items-center gap-1 text-[10px] font-medium text-[#d6f36a] sm:text-[11px]">
                <TrendingUp className="h-3 w-3" />
                98% Self-Sufficiency
              </span>
            </div>
            <div className="pointer-events-auto hidden rounded-xl border border-white/15 bg-[#092922]/85 p-2.5 text-right backdrop-blur-md shadow-lg min-[420px]:block sm:rounded-2xl sm:p-3.5">
              <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#a4c9b2] sm:text-[10px] sm:tracking-[0.16em]">Carbon Offset</p>
              <p className="mt-0.5 text-base font-bold text-[#d6f36a] sm:text-xl md:text-2xl">7.2 kg CO₂</p>
              <span className="text-[10px] text-white/70 sm:text-[11px]">~ 2.4 trees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
