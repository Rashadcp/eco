"use client";

import React from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";

export function TestimonialsSlider() {
  const featured = TESTIMONIALS[0];
  const gridCards = TESTIMONIALS.slice(1, 5);

  return (
    <section
      id="about"
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-[#fafbf7] py-20 text-[#17352e] sm:py-28 lg:py-32"
    >
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <p className="flex items-center justify-center gap-2 text-xs font-medium tracking-wide text-[#6b8275]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#17352e]" />
            Testimonials
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 font-serif text-3xl font-normal tracking-tight text-[#17352e] sm:text-4xl lg:text-5xl"
          >
            What Our Clients Say
          </h2>
        </div>

        {/* Main Bento Layout */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          {/* Left: Tall Featured Photo Card */}
          <div className="group relative flex min-h-[460px] flex-col justify-end overflow-hidden rounded-[2rem] bg-[#17352e] p-6 shadow-md transition-all duration-300 sm:min-h-[520px] sm:p-8 lg:col-span-5">
            {/* Background Solar Eco-Home Photograph */}
            <img
              src="/images/testimonial-solar-home.png"
              alt="Modern solar-powered eco-villa at sunset"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            {/* Bottom Content */}
            <div className="relative z-10">
              <blockquote className="text-base font-normal leading-relaxed text-white sm:text-lg">
                &ldquo;{featured.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-end justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={featured.avatar}
                    alt={featured.name}
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-white/30"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-white">{featured.name}</h4>
                    <p className="text-xs text-white/70">{featured.role}</p>
                  </div>
                </div>

                {/* Big decorative quotation watermark */}
                <span
                  aria-hidden="true"
                  className="select-none font-serif text-5xl font-bold leading-none text-white/20 sm:text-6xl"
                >
                  &rdquo;
                </span>
              </div>
            </div>
          </div>

          {/* Right: 2x2 Grid of Testimonial Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-7">
            {gridCards.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-[1.75rem] border border-[#e4ebd9] bg-[#eff3e9] p-6 transition-all duration-300 hover:border-[#c8dbb8] hover:bg-[#eaf0e3] hover:shadow-sm sm:p-7"
              >
                {/* 5 Solid Black Stars */}
                <div>
                  <div className="flex items-center gap-1 text-[#17352e]">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-[#17352e] text-[#17352e]"
                        strokeWidth={0}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="my-5 text-sm leading-relaxed text-[#2c443b] sm:text-[15px]">
                    {item.quote}
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="mt-2 flex items-center gap-3 border-t border-[#dfe8d4] pt-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-9 w-9 shrink-0 rounded-full object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="truncate text-xs font-semibold text-[#17352e] sm:text-sm">
                      {item.name}
                    </h4>
                    <p className="truncate text-[11px] text-[#6d8478] sm:text-xs">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export const TestimonialsSliderAward = TestimonialsSlider;
export default TestimonialsSlider;
