"use client";

import React, { useEffect } from "react";
import { CheckCircle2, AlertCircle, X, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export interface ToastProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message?: string;
  type?: "success" | "error" | "info";
  duration?: number;
}

export function Toast({
  isOpen,
  onClose,
  title,
  message,
  type = "success",
  duration = 4500,
}: ToastProps) {
  useEffect(() => {
    if (isOpen && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-charcoal text-cream-100 p-4 rounded-2xl shadow-dark border border-white/15 flex items-start gap-3.5"
        >
          <div className="shrink-0 mt-0.5">
            {type === "success" && (
              <div className="w-8 h-8 rounded-full bg-amber/20 border border-amber/40 flex items-center justify-center text-amber">
                <Sparkles className="w-4 h-4 text-amber-light" />
              </div>
            )}
            {type === "error" && (
              <div className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400">
                <AlertCircle className="w-4 h-4" />
              </div>
            )}
            {type === "info" && (
              <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0 pr-2">
            <h4 className="font-display font-bold text-sm text-cream-100">{title}</h4>
            {message && (
              <p className="text-xs text-cream-400 mt-1 leading-relaxed">{message}</p>
            )}
          </div>

          <button
            onClick={onClose}
            aria-label="Close notification"
            className="shrink-0 p-1 text-cream-500 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
