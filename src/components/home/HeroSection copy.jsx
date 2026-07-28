"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useSliderBackground } from "@/components/SliderBackgroundProvider";
import { heroSlidesData } from "@/data/homeData";

const SLIDE_DURATION = 6000;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const { setActiveSlideImage } = useSliderBackground();

  useEffect(() => {
    // Mengirim gambar slider aktif ke Footer glass background.
    setActiveSlideImage(heroSlidesData[current].image);

    // Timer selalu dimulai ulang saat slide berubah atau indicator diklik.
    const timer = window.setTimeout(() => {
      setCurrent((previous) => (previous + 1) % heroSlidesData.length);
    }, SLIDE_DURATION);

    return () => window.clearTimeout(timer);
  }, [current, setActiveSlideImage]);

  const handleDotClick = (index) => {
    setCurrent(index);
  };

  return (
    <section className="relative h-[60vh] w-full overflow-hidden bg-stone-100 md:h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.01 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={heroSlidesData[current].image}
            alt={`The Bali Dream Villa Resort - slide ${current + 1}`}
            fill
            priority={current === 0}
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-20 right-6 z-10 max-w-xl space-y-3 text-right text-white md:right-16">
        <span className="block text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold md:text-xs">
          Welcome to Paradise
        </span>

        <h1 className="font-serif text-xl uppercase leading-tight tracking-widest text-white sm:text-2xl md:text-4xl">
          Luxury & Authentic Style <br />
          <span className="block capitalize font-normal italic tracking-normal text-brand-gold">
            Villas in Seminyak
          </span>
        </h1>

        <div className="ml-auto mt-2 h-px w-12 bg-brand-gold" />
      </div>

      <div className="absolute bottom-10 left-6 z-20 flex items-center gap-3 md:left-16">
        {heroSlidesData.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => handleDotClick(index)}
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === current ? "true" : undefined}
            className="group cursor-pointer py-3 focus:outline-none"
          >
            <span
              className={`block h-[2px] rounded-none transition-all duration-500 group-hover:bg-brand-gold ${
                index === current ? "w-8 bg-brand-gold" : "w-3 bg-white/40"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}