"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSliderBackground } from "@/components/SliderBackgroundProvider";

const BACKGROUND_IMAGE = "/coming-soon.webp";

export default function ComingSoon({
  title = "Coming Soon",
  subtitle = "We are currently crafting an extraordinary luxury experience for this page. Please check back soon.",
}) {
  const { setActiveSlideImage } = useSliderBackground();

  useEffect(() => {
    // Sync image with the Footer glass background after render
    setActiveSlideImage(BACKGROUND_IMAGE);
  }, [setActiveSlideImage]);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-4 py-28 md:py-36">
      <div className="absolute inset-0 z-0">
        <Image
          src={BACKGROUND_IMAGE}
          alt="The Bali Dream Villa"
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover object-center blur-md brightness-90 md:blur-lg"
        />

        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
      </div>

      <div className="relative z-20 mx-auto max-w-2xl px-6 text-center text-white">
        <div className="space-y-6 rounded-3xl border border-white/15 bg-black/40 p-8 shadow-2xl backdrop-blur-md sm:p-12 md:p-14">
          <div className="inline-block rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.35em] text-brand-gold md:text-xs">
            The Bali Dream Villa
          </div>

          <h1 className="font-serif text-3xl font-light uppercase tracking-widest sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h1>

          <div className="mx-auto h-px w-16 bg-brand-gold" />

          <p className="mx-auto max-w-lg text-xs leading-relaxed tracking-wide text-stone-200/90 sm:text-sm md:text-base">
            {subtitle}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row sm:gap-5">
            <Link
              href="/"
              className="w-full rounded-full border border-brand-gold/70 bg-brand-gold/90 px-7 py-3 text-[10px] font-bold tracking-[0.2em] text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-gold sm:w-auto md:text-xs"
            >
              BACK TO HOME
            </Link>

            <Link
              href="/villas"
              className="w-full rounded-full border border-white/30 bg-white/10 px-7 py-3 text-[10px] font-bold tracking-[0.2em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/20 sm:w-auto md:text-xs"
            >
              EXPLORE VILLAS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}