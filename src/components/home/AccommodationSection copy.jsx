"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { villasData } from "@/data/homeData";

export default function AccommodationSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % villasData.length);
  const prevSlide = () =>
    setActiveIndex(
      (prev) => (prev - 1 + villasData.length) % villasData.length,
    );

  return (
    <section className="py-14 md:py-20 px-4 md:px-8 bg-brand-gold/5 border-t border-stone-200/40 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-5 mb-10 md:mb-12">
          <span className="text-[10px] tracking-[0.4em] text-brand-gold uppercase font-bold block">
            Our Sanctuaries
          </span>
          <h2 className="font-serif text-2xl md:text-4xl text-stone-900 uppercase tracking-widest font-light">
            Luxury Accommodations
          </h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white border border-stone-100 shadow-xl relative min-h-[500px] lg:h-[550px] items-stretch">
          <div className="lg:col-span-7 relative h-[350px] sm:h-[450px] lg:h-full bg-stone-50 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={villasData[activeIndex].image}
                  alt={villasData[activeIndex].title}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            <span className="absolute top-6 left-6 bg-stone-900 text-white text-[9px] font-bold tracking-[0.2em] uppercase py-1.5 px-4 z-10">
              Luxury Villa
            </span>
          </div>

          <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-between items-start space-y-6 bg-white relative lg:h-full">
            <div className="text-stone-300 font-serif text-4xl font-light tracking-tighter">
              {String(activeIndex + 1).padStart(2, "0")}
            </div>

            <div className="space-y-4 max-w-sm w-full flex-1 flex flex-col justify-center">
              <span className="text-[10px] tracking-[0.2em] text-brand-gold uppercase font-bold block">
                Exclusive Sanctuary
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-3"
                >
                  <h3 className="font-serif text-2xl md:text-3xl text-stone-900 font-normal uppercase tracking-wide leading-snug">
                    {villasData[activeIndex].title}
                  </h3>
                  <p className="text-stone-500 text-xs md:text-sm font-light leading-relaxed">
                    {villasData[activeIndex].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="w-full pt-6 border-t border-stone-100 flex items-center justify-between">
              <Link
                href="/villas"
                className="text-[11px] font-bold tracking-[0.3em] text-stone-900 hover:text-brand-gold transition-colors uppercase border-b border-stone-900 hover:border-brand-gold pb-1"
              >
                Explore Sanctuary
              </Link>

              <div className="flex space-x-1">
                <button
                  onClick={prevSlide}
                  className="p-2 text-stone-400 hover:text-stone-900 transition-colors"
                >
                  <ChevronLeft size={18} strokeWidth={1.5} />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 text-stone-400 hover:text-stone-900 transition-colors"
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
