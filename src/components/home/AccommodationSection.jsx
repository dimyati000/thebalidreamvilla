"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { villasData } from "@/data/homeData";

export default function AccommodationSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeVilla = villasData[activeIndex];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % villasData.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + villasData.length) % villasData.length,
    );
  };

  return (
    <section className="relative isolate overflow-hidden border-t border-stone-200/40 bg-gradient-to-b from-white via-[#f3f2ee] to-[#d7d7d3] px-4 py-14 md:px-8 md:py-20">
      {/* Soft background decoration */}
      <div className="pointer-events-none absolute -left-28 top-10 -z-10 h-72 w-72 rounded-full bg-brand-gold/[0.08] blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-0 -z-10 h-80 w-80 rounded-full bg-white/70 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-10 space-y-5 text-center md:mb-12">
          <span className="block text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold">
            Our Sanctuaries
          </span>

          <h2 className="font-serif text-2xl font-light uppercase tracking-widest text-stone-900 md:text-4xl">
            Luxury Accommodations
          </h2>

          <div className="mx-auto h-px w-12 bg-brand-gold" />
        </div>

        {/* Separate glass cards */}
        <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-12 lg:gap-5">
          {/* Image card */}
          <div className="relative h-[350px] overflow-hidden rounded-[28px] border border-white/50 bg-white/[0.16] shadow-[0_18px_48px_rgba(45,45,40,0.14)] ring-1 ring-black/[0.035] backdrop-blur-md sm:h-[450px] md:rounded-[34px] lg:col-span-7 lg:h-[550px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.025 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 0.55 },
                  scale: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                }}
                className="absolute inset-0"
              >
                <Image
                  src={activeVilla.image}
                  alt={activeVilla.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Soft image overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/[0.06]" />

            {/* Glass label */}
            <span className="absolute left-5 top-5 z-10 rounded-full border border-white/30 bg-black/20 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.22em] text-white shadow-sm backdrop-blur-md sm:left-6 sm:top-6">
              Luxury Villa
            </span>

            {/* Mobile counter */}
            <div className="absolute bottom-5 left-5 z-10 flex items-center gap-2 rounded-full border border-white/25 bg-black/15 px-4 py-2 text-white backdrop-blur-md lg:hidden">
              <span className="font-serif text-sm">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <span className="text-white/40">/</span>

              <span className="text-[10px] text-white/70">
                {String(villasData.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Information glass card */}
          <div className="relative flex min-h-[430px] flex-col justify-between overflow-hidden rounded-[28px] border border-white/55 bg-white/[0.42] p-7 shadow-[0_18px_48px_rgba(45,45,40,0.12)] ring-1 ring-black/[0.035] backdrop-blur-xl sm:p-10 md:rounded-[34px] lg:col-span-5 lg:h-[550px] lg:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-white/50 blur-3xl" />

            {/* Number */}
            <div className="relative z-10 hidden items-start justify-between lg:flex">
              <span className="font-serif text-4xl font-light tracking-tighter text-stone-400/70">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <span className="pt-2 text-[9px] font-bold uppercase tracking-[0.25em] text-stone-400">
                {String(villasData.length).padStart(2, "0")} Villas
              </span>
            </div>

            {/* Animated content */}
            <div className="relative z-10 flex flex-1 flex-col justify-center">
              <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.22em] text-brand-gold">
                Exclusive Sanctuary
              </span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="max-w-sm space-y-4"
                >
                  <h3 className="font-serif text-2xl font-normal uppercase leading-snug tracking-wide text-stone-900 md:text-3xl">
                    {activeVilla.title}
                  </h3>

                  <p className="text-xs font-light leading-relaxed text-stone-600 md:text-sm">
                    {activeVilla.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer navigation */}
            <div className="relative z-10 flex w-full items-center justify-between border-t border-stone-900/[0.08] pt-6">
              <Link
                href="/villas"
                className="border-b border-stone-700 pb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-stone-800 transition-colors duration-300 hover:border-brand-gold hover:text-brand-gold sm:text-[11px] sm:tracking-[0.3em]"
              >
                Explore Sanctuary
              </Link>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous accommodation"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/35 text-stone-500 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-gold/40 hover:bg-white/65 hover:text-stone-900"
                >
                  <ChevronLeft size={18} strokeWidth={1.5} />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next accommodation"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/35 text-stone-500 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-gold/40 hover:bg-white/65 hover:text-stone-900"
                >
                  <ChevronRight size={18} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}