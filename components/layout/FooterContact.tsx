"use client";

import React, { useState } from "react";
import {
  ArrowUp,
  FileCheck2,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EnnertyLogo } from "@/components/ui/BrandLogo";
import { COMPANY_DETAILS } from "@/data/content";

export interface FooterContactProps {
  onSuccessToast: (message: string) => void;
  onScrollToContact?: () => void;
}

const inputClassName =
  "mt-2 w-full rounded-xl border border-[#d7e1d2] bg-white px-4 py-3 text-sm text-[#17352e] outline-none transition placeholder:text-[#9aa9a0] focus:border-[#6f9f7b] focus:ring-2 focus:ring-[#d9ef9a]";

export function FooterContact({ onSuccessToast }: FooterContactProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    district: "Ernakulam",
    monthlyBill: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      onSuccessToast(
        `Thank you ${formData.fullName}! Your solar inquiry has been received by EcoHarmony Enterprises. Our solar engineer will call you at ${formData.phone} shortly.`,
      );
      setFormData({
        fullName: "",
        phone: "",
        district: "Ernakulam",
        monthlyBill: "",
        message: "",
      });
    }, 850);
  };

  return (
    <footer
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden border-t border-[#244b3d] bg-[#0d2b24] text-[#eef7df]"
    >
      <div className="pointer-events-none absolute -right-40 -top-36 h-[420px] w-[420px] rounded-full bg-[#b8db71]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#4b9180]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 pb-8 pt-16 sm:px-8 sm:pb-10 sm:pt-20 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div>
            <div className="flex flex-wrap items-center gap-3.5">
              <EnnertyLogo variant="dark" size="lg" />
              <span className="hidden h-7 w-px bg-white/20 sm:block" />
              <div className="flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
                <img
                  src="/ecoharmony-logo.jpg"
                  alt="EcoHarmony Enterprises Pvt. Ltd."
                  className="h-6 w-6 rounded-full object-cover ring-1 ring-white/30"
                />
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-bold leading-tight text-white">EcoHarmony</span>
                  <span className="text-[9px] uppercase tracking-wider text-[#d9ef9a]">Enterprises Pvt. Ltd.</span>
                </div>
              </div>
            </div>

            <h2
              id="contact-title"
              className="mt-8 max-w-md text-3xl font-bold leading-tight tracking-tight text-[#f4f9df] sm:text-4xl lg:text-5xl"
            >
              Let&apos;s build your clean energy future.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-6 text-[#b6c9bc]">
              Tell us a little about your property and our team will help you find the right solar path.
            </p>

            <div className="mt-9 space-y-4 border-t border-white/10 pt-6 text-sm text-[#c6d6c7]">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#d9ef9a]" strokeWidth={1.8} />
                <span className="leading-6">{COMPANY_DETAILS.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#d9ef9a]" strokeWidth={1.8} />
                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="transition hover:text-[#d9ef9a]"
                >
                  {COMPANY_DETAILS.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[#d9ef9a]" strokeWidth={1.8} />
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="transition hover:text-[#d9ef9a]"
                >
                  {COMPANY_DETAILS.email}
                </a>
              </div>
            </div>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#a9c1ae]">
              <FileCheck2 className="h-3.5 w-3.5 text-[#d9ef9a]" strokeWidth={1.8} />
              GST: {COMPANY_DETAILS.gstNumber}
            </div>
          </div>

          <div className="rounded-2xl bg-[#f7f8f1] p-6 text-[#17352e] shadow-[0_24px_60px_rgba(0,0,0,0.16)] sm:p-9">
            <div className="flex flex-col justify-between gap-3 border-b border-[#dfe7da] pb-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#668775]">
                  Free rooftop assessment
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.045em] text-[#17352e] sm:text-3xl">
                  Start with a conversation.
                </h3>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#789283]">
                <ShieldCheck className="h-4 w-4 text-[#7eaa57]" strokeWidth={1.8} />
                No obligation
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-xs font-semibold text-[#456b59]">
                  Full name <span className="text-[#d17862]">*</span>
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={(event) => updateField("fullName", event.target.value)}
                    className={inputClassName}
                    placeholder="Your name"
                  />
                </label>

                <label className="block text-xs font-semibold text-[#456b59]">
                  Mobile number <span className="text-[#d17862]">*</span>
                  <input
                    type="tel"
                    required
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                    className={inputClassName}
                    placeholder="Your phone number"
                  />
                </label>

                <label className="block text-xs font-semibold text-[#456b59]">
                  District
                  <select
                    value={formData.district}
                    onChange={(event) => updateField("district", event.target.value)}
                    className={inputClassName}
                  >
                    <option value="Ernakulam">Ernakulam</option>
                    <option value="Thrissur">Thrissur</option>
                    <option value="Kottayam">Kottayam</option>
                    <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                    <option value="Kozhikode">Kozhikode</option>
                    <option value="Malappuram">Malappuram</option>
                    <option value="Palakkad">Palakkad</option>
                    <option value="Alappuzha">Alappuzha</option>
                    <option value="Other">Other district</option>
                  </select>
                </label>

                <label className="block text-xs font-semibold text-[#456b59]">
                  Average bill
                  <input
                    type="text"
                    inputMode="numeric"
                    value={formData.monthlyBill}
                    onChange={(event) => updateField("monthlyBill", event.target.value)}
                    className={inputClassName}
                    placeholder="Approx. amount in ₹"
                  />
                </label>
              </div>

              <label className="block text-xs font-semibold text-[#456b59]">
                Tell us about your property
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  className={`${inputClassName} resize-none`}
                  placeholder="Roof type, power needs, or anything else we should know"
                />
              </label>

              <Button
                type="submit"
                variant="lime"
                size="lg"
                isLoading={isSubmitting}
                rightIcon={<Send className="h-4 w-4 text-[#17352e]" />}
                className="w-full justify-center bg-[#d9ef9a] py-3.5 text-sm font-bold text-[#17352e] shadow-[0_8px_18px_rgba(140,178,92,0.2)] hover:bg-[#e7f6b7]"
              >
                Request my assessment
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-6 text-xs text-[#8fa99a] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ennerty. Clean power, thoughtfully delivered.</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-[#c4d4c3] transition hover:text-[#d9ef9a] focus:outline-none focus:ring-2 focus:ring-[#d9ef9a] focus:ring-offset-2 focus:ring-offset-[#0d2b24]"
          >
            Back to top
            <ArrowUp className="h-4 w-4" strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default FooterContact;
