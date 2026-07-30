"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useSliderBackground } from "@/components/SliderBackgroundProvider";

const TOUR_URL = "https://geckodigital.co/kirs/BaliDreamSeminyak/";
const BACKGROUND_IMAGE = "/coming-soon.webp";

export default function VirtualTourPage() {
  const { setActiveSlideImage } = useSliderBackground();

  useEffect(() => {
    setActiveSlideImage(BACKGROUND_IMAGE);
  }, [setActiveSlideImage]);

  return (
    <main className="relative min-h-screen bg-stone-50 px-3 pb-20 pt-24 md:px-6 md:pt-28">
      {/* Photo is only for the top area, behind the navbar */}
      {/* <div className="absolute inset-x-0 top-0 z-0 h-[540px] overflow-hidden"> */}
<div className="absolute inset-x-0 top-0 z-0 h-[900px] overflow-hidden">

        <Image
          src={BACKGROUND_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* The photo gradually becomes the same white background as Contact */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-stone-50" />
      </div>

      <section className="relative z-10 mx-auto max-w-[1600px] overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
        <div className="flex flex-col gap-4 border-b border-stone-200 bg-white px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:px-7">
          <div>
            <Link
              href="/"
              className="mb-3 inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] text-stone-500 transition-colors hover:text-brand-gold"
            >
              <ArrowLeft size={14} />
              BACK TO HOME
            </Link>

            <h1 className="font-serif text-2xl text-stone-800 md:text-3xl">
              Virtual Tour
            </h1>

            <p className="mt-1 text-sm text-stone-500">
              Explore The Bali Dream Villa Seminyak interactively.
            </p>
          </div>

          <a
            href={TOUR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-gold/60 bg-brand-gold px-5 py-3 text-[10px] font-bold tracking-[0.16em] text-white transition hover:bg-brand-gold/90"
          >
            OPEN FULL SCREEN
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="relative h-[72vh] min-h-[560px] bg-stone-100">
          <iframe
            src={TOUR_URL}
            title="The Bali Dream Villa Seminyak Virtual Tour"
            className="absolute inset-0 h-full w-full border-0"
            allow="fullscreen; autoplay; clipboard-write"
            allowFullScreen
          />
        </div>

        <p className="border-t border-stone-200 px-5 py-3 text-center text-xs text-stone-400">
          Virtual tour experience provided by Gecko Digital.
        </p>
      </section>

      {/* Same footer transition pattern used by Contact */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-10 z-20 h-10 bg-gradient-to-b from-stone-50 to-transparent"
      />
    </main>
  );
}