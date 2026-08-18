import React from "react";
import { cn } from "@/lib/utils";

export interface BrandLogoProps {
  variant?: "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function EnnertyLogo({
  variant = "light",
  className,
  size = "md",
}: BrandLogoProps) {
  const isDark = variant === "dark";

  const sizeMap = {
    sm: "h-7 sm:h-8",
    md: "h-9 sm:h-11",
    lg: "h-12 sm:h-14",
    xl: "h-16 sm:h-20",
  };

  // Clean local static assets with no spaces in filename
  const imageSrc = isDark ? "/ennerty-logo-dark.png" : "/ennerty-logo.png";

  return (
    <div className={cn("inline-flex items-center select-none", className)}>
      <img
        src={imageSrc}
        alt="Ennerty Solar"
        className={cn(
          sizeMap[size],
          "w-auto object-contain transition-transform duration-300 hover:scale-102"
        )}
      />
    </div>
  );
}

export function EcoHarmonyParentBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-cream-300 shadow-sm text-xs sm:text-sm transition-all hover:border-ennerty-forest/40",
        className
      )}
    >
      <img
        src="/ecoharmony-logo.jpg"
        alt="EcoHarmony Enterprises Pvt. Ltd."
        className="w-6 h-6 rounded-full object-cover shrink-0 shadow-xs ring-1 ring-cream-300"
      />
      <span className="text-ennerty-forest text-xs sm:text-sm leading-none">
        A Solar Brand of <strong className="text-ennerty-forest font-bold">EcoHarmony Enterprises Pvt. Ltd.</strong>
      </span>
    </div>
  );
}

export function EcoHarmonyFullLogo({ className }: { className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-3 select-none", className)}>
      <img
        src="/ecoharmony-logo.jpg"
        alt="EcoHarmony Enterprises Pvt. Ltd."
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl object-cover shrink-0 shadow-sm"
      />
      <div className="flex flex-col justify-center text-left">
        <span className="font-display font-black text-base sm:text-lg text-white tracking-tight leading-tight">
          EcoHarmony
        </span>
        <span className="text-[10px] font-mono uppercase tracking-widest text-ennerty-lime font-bold">
          Enterprises Pvt. Ltd.
        </span>
      </div>
    </div>
  );
}
