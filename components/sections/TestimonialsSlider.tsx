"use client";

import React, { useState, useEffect, useRef } from "react";
import { Star, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";

export function TestimonialsSlider() {
  const featured = TESTIMONIALS[0];
  const allReviews = TESTIMONIALS;
  const gridCards = TESTIMONIALS.slice(1, 5);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-swipe effect on mobile every 4.2 seconds
  useEffect(() => {
    if (isUserInteracting) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % allReviews.length;
        scrollToIndex(next);
        return next;
      });
    }, 4200);

    return () => clearInterval(interval);
  }, [isUserInteracting, allReviews.length]);

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.children;
    if (cards[index]) {
      const card = cards[index] as HTMLElement;
      const leftOffset = card.offsetLeft - (container.offsetWidth - card.offsetWidth) / 2;
      container.scrollTo({
        left: Math.max(0, leftOffset),
        behavior: "smooth",
      });
    }
  };

  const handleManualSelect = (index: number) => {
    setActiveIndex(index);
    scrollToIndex(index);
    // Pause auto-swipe temporarily
    setIsUserInteracting(true);
    if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);
    autoPlayTimeoutRef.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 8000);
  };

  const handleNext = () => {
    const next = (activeIndex + 1) % allReviews.length;
    handleManualSelect(next);
  };

  const handlePrev = () => {
    const prev = (activeIndex - 1 + allReviews.length) % allReviews.length;
    handleManualSelect(prev);
  };

  return (
    <section
      id="about"
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-[#fafbf7] py-14 text-[#17352e] sm:py-20"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#17352e]/15 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4a6e5f] shadow-2xs backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#17352e]" />
            Client Stories
          </div>
          <h2
            id="testimonials-heading"
            className="font-serif text-2xl font-normal tracking-tight text-[#17352e] sm:text-3xl lg:text-4xl"
          >
            What Our Clients Say
          </h2>
          <p className="mt-2 text-xs text-[#6b8275] sm:text-sm">
            Verified experiences from homeowners and enterprises powered by Ennerty across Kerala.
          </p>
        </div>

        {/* Desktop Bento Grid Layout (lg and up) */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-5 items-stretch">
          {/* Left: Featured Photo Card */}
          <div className="group relative flex min-h-[440px] flex-col justify-end overflow-hidden rounded-[2rem] bg-[#17352e] p-7 shadow-sm transition-all duration-300 sm:p-8 lg:col-span-5">
            {/* Background Solar Eco-Home Photograph */}
            <img
              src="/images/testimonial-solar-home.png"
              alt="Modern solar-powered eco-villa at sunset"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#09221b]/95 via-[#09221b]/55 to-black/25" />

            {/* Bottom Content */}
            <div className="relative z-10">
              <div className="mb-3 flex items-center gap-1">
                {[...Array(featured.rating || 5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#d9ef9a] text-[#d9ef9a]" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="text-sm font-medium leading-relaxed text-white sm:text-base">
                &ldquo;{featured.quote}&rdquo;
              </blockquote>

              <div className="mt-5 flex items-end justify-between border-t border-white/20 pt-4">
                <div>
                  <h4 className="text-sm font-bold text-white sm:text-base">{featured.name}</h4>
                  <p className="mt-0.5 text-xs font-medium text-[#d9ef9a]">{featured.role} • {featured.companyOrLocation}</p>
                </div>
                <span aria-hidden="true" className="select-none font-serif text-3xl font-bold leading-none text-white/25 sm:text-4xl">
                  &rdquo;
                </span>
              </div>
            </div>
          </div>

          {/* Right: 2x2 Grid */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-7">
            {gridCards.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-[2rem] border border-[#e4ebd9] bg-[#eff3e9] p-6 transition-all duration-300 hover:border-[#c8dbb8] hover:bg-[#eaf0e3] hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-[#17352e] text-[#17352e]" strokeWidth={0} />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-[#5a7a6c] inline-flex items-center gap-1">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#7eaa57]" /> Verified
                    </span>
                  </div>

                  <blockquote className="my-3.5 text-xs leading-relaxed text-[#2c443b] sm:text-sm font-medium">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="mt-4 border-t border-[#dfe8d4] pt-3.5">
                  <h4 className="text-xs font-bold text-[#17352e] sm:text-sm">
                    {item.name}
                  </h4>
                  <p className="mt-0.5 text-[11px] font-medium text-[#6d8478]">
                    {item.role} • {item.companyOrLocation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Auto-Swiping Carousel */}
        <div className="lg:hidden">
          <div
            ref={scrollContainerRef}
            onTouchStart={() => setIsUserInteracting(true)}
            onTouchEnd={() => {
              if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);
              autoPlayTimeoutRef.current = setTimeout(() => setIsUserInteracting(false), 8000);
            }}
            onScroll={(e) => {
              const target = e.currentTarget;
              const scrollPos = target.scrollLeft;
              const cardWidth = target.offsetWidth * 0.85;
              const newIndex = Math.round(scrollPos / cardWidth);
              if (newIndex >= 0 && newIndex < allReviews.length && newIndex !== activeIndex) {
                setActiveIndex(newIndex);
              }
            }}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 pt-1 px-[8vw] sm:px-[calc(50%-170px)] no-scrollbar scroll-smooth"
          >
            {allReviews.map((item, index) => {
              const isFeatured = index === 0;
              const isCurrent = activeIndex === index;
              return (
                <div
                  key={item.id}
                  onClick={() => handleManualSelect(index)}
                  className={`snap-center shrink-0 w-[84vw] max-w-[340px] flex flex-col justify-between rounded-3xl p-5 shadow-xs transition-all duration-300 cursor-pointer ${
                    isFeatured
                      ? "relative overflow-hidden bg-[#17352e] text-white"
                      : "border border-[#e4ebd9] bg-[#eff3e9] text-[#17352e]"
                  } ${isCurrent ? "ring-2 ring-[#13322b]/40 shadow-md scale-[1.01]" : "opacity-90"}`}
                >
                  {isFeatured && (
                    <>
                      <img
                        src="/images/testimonial-solar-home.png"
                        alt="Solar home"
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#09221b]/95 via-[#09221b]/60 to-black/30" />
                    </>
                  )}

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(item.rating || 5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              isFeatured ? "fill-[#d9ef9a] text-[#d9ef9a]" : "fill-[#17352e] text-[#17352e]"
                            }`}
                            strokeWidth={0}
                          />
                        ))}
                      </div>
                      <span className={`text-[10px] font-semibold inline-flex items-center gap-1 ${
                        isFeatured ? "text-[#d9ef9a]" : "text-[#5a7a6c]"
                      }`}>
                        <ShieldCheck className="h-3 w-3 text-[#7eaa57]" /> Verified
                      </span>
                    </div>

                    <blockquote className={`text-xs sm:text-[13px] leading-relaxed ${
                      isFeatured ? "text-white font-medium" : "text-[#2c443b]"
                    }`}>
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                  </div>

                  <div className={`relative z-10 mt-4 border-t pt-3 ${
                    isFeatured ? "border-white/15" : "border-[#dfe8d4]"
                  }`}>
                    <h4 className={`text-xs font-bold sm:text-[13px] ${
                      isFeatured ? "text-white" : "text-[#17352e]"
                    }`}>
                      {item.name}
                    </h4>
                    <p className={`mt-0.5 text-[10.5px] font-medium leading-tight ${
                      isFeatured ? "text-[#d9ef9a]" : "text-[#6d8478]"
                    }`}>
                      {item.role} • {item.companyOrLocation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Interactive Pagination Controls */}
          <div className="mt-3 flex items-center justify-between px-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous review"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dce5d8] bg-white text-[#17352e] shadow-xs active:scale-95"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Indicator Dots */}
            <div className="flex items-center gap-1.5">
              {allReviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => handleManualSelect(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === i ? "w-6 bg-[#13322b]" : "w-1.5 bg-[#ccd6c5]"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next review"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dce5d8] bg-white text-[#17352e] shadow-xs active:scale-95"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export const TestimonialsSliderAward = TestimonialsSlider;
export default TestimonialsSlider;
