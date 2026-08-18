import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "forest"
    | "lime"
    | "orange"
    | "outline-forest"
    | "outline-light"
    | "cream"
    | "glass"
    | "ghost";
  size?: "sm" | "md" | "lg" | "xl" | "icon";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "forest",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      forest:
        "bg-ennerty-forest text-cream-100 hover:bg-ennerty-dark active:scale-[0.98] border border-ennerty-forest shadow-md font-semibold",
      lime:
        "bg-ennerty-lime text-ennerty-forest hover:bg-ennerty-limeLight active:scale-[0.98] shadow-lime-glow font-bold",
      orange:
        "bg-ennerty-orange text-white hover:bg-ennerty-orangeDark active:scale-[0.98] shadow-orange-glow font-bold",
      "outline-forest":
        "bg-transparent text-ennerty-forest border border-ennerty-forest/30 hover:border-ennerty-forest hover:bg-ennerty-forest/5 active:scale-[0.98]",
      "outline-light":
        "bg-transparent text-cream-100 border border-white/25 hover:border-white hover:bg-white/10 active:scale-[0.98]",
      cream:
        "bg-cream-200 text-ennerty-forest hover:bg-cream-300 active:scale-[0.98] border border-cream-300",
      glass:
        "bg-white/80 backdrop-blur-md text-ennerty-forest border border-white/60 hover:bg-white active:scale-[0.98] shadow-sm",
      ghost: "bg-transparent text-ennerty-forest hover:bg-black/5 active:scale-[0.98]",
    };

    const sizeStyles = {
      sm: "px-3.5 py-1.5 text-xs font-medium gap-1.5",
      md: "px-5 py-2.5 text-sm font-medium gap-2",
      lg: "px-6 py-3 text-base font-semibold gap-2.5",
      xl: "px-8 py-3.5 text-base sm:text-lg font-semibold gap-3",
      icon: "p-2.5 text-sm",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none select-none tracking-tight",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin shrink-0" />
        ) : (
          leftIcon && <span className="inline-flex items-center shrink-0">{leftIcon}</span>
        )}
        {children}
        {!isLoading && rightIcon && (
          <span className="inline-flex items-center shrink-0 transition-transform group-hover:translate-x-0.5">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
