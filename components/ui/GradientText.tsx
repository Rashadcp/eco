"use client";

import React, { memo } from "react";
import "./GradientText.css";

export interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
  direction?: "horizontal" | "vertical" | "diagonal";
  pauseOnHover?: boolean;
  yoyo?: boolean;
}

/**
 * Optimized GPU-accelerated GradientText using CSS hardware-accelerated keyframe transforms
 * instead of continuous JS requestAnimationFrame ticks.
 */
export const GradientText = memo(function GradientText({
  children,
  className = "",
  colors = ["#b8db71", "#ffffff", "#62e6b5", "#d9ef9a", "#ffffff", "#b8db71"],
  animationSpeed = 6,
  showBorder = false,
  direction = "horizontal",
  pauseOnHover = false,
}: GradientTextProps) {
  const gradientColors = colors.join(", ");
  
  const gradientStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(90deg, ${gradientColors})`,
    backgroundSize: "200% auto",
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <span
      className={`animated-gradient-text ${showBorder ? "with-border" : ""} ${
        pauseOnHover ? "pause-on-hover" : ""
      } ${className}`.trim()}
    >
      <span
        className="text-content"
        style={gradientStyle}
      >
        {children}
      </span>
    </span>
  );
});

export default GradientText;
