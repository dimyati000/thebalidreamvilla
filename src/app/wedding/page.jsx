"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── DATA ────────────────────────────────────────────────────────────────────

const HERO_IMAGE =
  "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/776/b0c/5dd776b0cfff1061778137.jpg";

const WEDDING_PACKAGES = [
  {
    id: "bali-dream-wedding",
    tag: "Wedding",
    icon: "💍",
    title: "All Inspiration You Need — Your Big Day All Here",
    subtitle: "Bespoke Balinese Wedding Experience",
    description:
      "Experience unique wedding ideas and decoration at The Bali Dream Villa to make the day extra special. Envision a few wedding themes that suit your personal style and leave the details to us. Our dedicated team will craft an unforgettable celebration surrounded by lush tropical gardens and the luxury of your own private pool villa.",
    highlights: [
      "Bespoke Tropical Wedding Themes",
      "Private Pool Villa Setting",
      "Professional Wedding Decoration",
      "Balinese Cultural Elements",
      "Dedicated Wedding Consultant",
      "Intimate Garden Ceremony Venue",
    ],
    images: [
      {
        src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/776/7d0/5dd7767d09b88060108501.jpg",
        caption: "Romantic Wedding Ceremony Setup",
      },
      {
        src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/776/b0c/5dd776b0cfff1061778137.jpg",
        caption: "Tropical Garden Celebration",
      },
    ],
  },
  {
    id: "frangipani-package",
    tag: "Wedding Package",
    icon: "🌸",
    title: "Frangipani Wedding Package",
    subtitle: "All-Inclusive Romantic Celebration",
    description:
      "Our signature Frangipani Wedding Package is priced based on request and includes everything you need for a breathtaking intimate ceremony. From the floral arch to the welcome drinks, every detail is thoughtfully arranged so you can focus entirely on your special day.",
    highlights: [
      "3-Night Stay at One Bedroom Private Pool Villa",
      "2-Hour Spa Treatment for Couple",
      "Wedding Celebrant & Commemorative Certificate",
      "Tropical Flower Decoration & Flower Arch",
      "Frangipani Bouquet, Boutonniere & Maid Bouquets",
      "Welcome Board with Fresh Flower Arrangement",
      "Welcome Drinks for 20 Guests",
      "Flower Shower Ceremony for 20 Guests",
      "Dedicated Wedding Consultant",
    ],
    images: [
      {
        src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/777/273/5dd777273201c861159665.jpg",
        caption: "Frangipani Wedding Package Setup",
      },
      {
        src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/776/7d0/5dd7767d09b88060108501.jpg",
        caption: "Intimate Floral Ceremony",
      },
    ],
  },
];

const GALLERY_IMAGES = [
  {
    src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/776/b0c/5dd776b0cfff1061778137.jpg",
    caption: "Grand Entrance",
  },
  {
    src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/776/7d0/5dd7767d09b88060108501.jpg",
    caption: "Ceremony Setup",
  },
  {
    src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/777/273/5dd777273201c861159665.jpg",
    caption: "Frangipani Arch",
  },
];

// ─── PACKAGE DETAIL MODAL ─────────────────────────────────────────────────────

function PackageModal({ pkg, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  if (!pkg) return null;

  const currentImg = pkg.images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        key="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/85 backdrop-blur-xl" />

        <motion.div
          key="modal-box"
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-[28px] border border-white/20 bg-[#1e1f18]/85 shadow-[0_25px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                {pkg.tag}
              </span>
              <h3 className="font-serif text-xl font-light text-white sm:text-2xl">
                {pkg.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
              aria-label="Close modal"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 [scrollbar-width:thin]">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* Image Viewer */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/15 bg-black/40">
                  <Image
                    src={currentImg.src}
                    alt={currentImg.caption || pkg.title}
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-500"
                  />
                  {pkg.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); setCurrentIndex((p) => p === 0 ? pkg.images.length - 1 : p - 1); }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition hover:bg-black/70"
                      >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); setCurrentIndex((p) => p === pkg.images.length - 1 ? 0 : p + 1); }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition hover:bg-black/70"
                      >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                    <p className="text-xs font-semibold tracking-wider text-white/90 uppercase">
                      {currentImg.caption} ({currentIndex + 1} of {pkg.images.length})
                    </p>
                  </div>
                </div>
                {pkg.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {pkg.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-xl border transition-all duration-300 ${currentIndex === idx ? "border-brand-gold ring-2 ring-brand-gold/60 scale-105" : "border-white/20 opacity-60 hover:opacity-100"}`}
                      >
                        <Image src={img.src} alt={`Thumbnail ${idx + 1}`} fill unoptimized className="object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Details Panel */}
              <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
                <div>
                  <span className="inline-block rounded-lg border border-brand-gold/40 bg-brand-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
                    {pkg.tag}
                  </span>
                  <p className="mt-3 text-xs leading-relaxed text-white/80">{pkg.description}</p>
                  <div className="my-5 h-px w-full bg-white/10" />
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Package Inclusions</h4>
                  <ul className="mt-3 space-y-2 text-xs text-white/70">
                    {pkg.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 space-y-3 border-t border-white/10 pt-4">
                  <Link
                    href="/enquire"
                    onClick={onClose}
                    className="block w-full rounded-xl border border-brand-gold/60 bg-brand-gold/90 py-3 text-center text-xs font-bold tracking-[0.2em] text-white shadow-[0_6px_20px_rgba(0,0,0,0.2)] transition hover:bg-brand-gold"
                  >
                    ENQUIRE NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── PACKAGE CARD ─────────────────────────────────────────────────────────────

function PackageCard({ pkg, index, onOpenDetails }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const currentImage = pkg.images[activeImgIndex];
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-[28px] border border-black/[0.08] bg-[#e5e5e2]/80 shadow-[0_12px_36px_rgba(45,45,40,0.12)] transition-all duration-500 hover:shadow-[0_20px_48px_rgba(45,45,40,0.2)]"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 ${!isEven ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}>
        {/* Image Side */}
        <div className="relative lg:col-span-7 flex flex-col justify-between overflow-hidden bg-stone-900 min-h-[340px] sm:min-h-[420px]">
          <Image
            src={currentImage.src}
            alt={currentImage.caption || pkg.title}
            fill
            unoptimized
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30" />

          {/* Top badges */}
          <div className="relative z-10 flex items-center justify-between p-6">
            <span className="rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              {pkg.tag}
            </span>
            <span className="rounded-full border border-brand-gold/40 bg-brand-gold/80 px-3.5 py-1 text-[10px] font-bold tracking-widest text-white backdrop-blur-md">
              Based on Request
            </span>
          </div>

          {/* Bottom thumbnails */}
          <div className="relative z-10 p-4 sm:p-6">
            <p className="mb-3 text-xs font-semibold tracking-wider text-white/90 uppercase drop-shadow">
              {currentImage.caption}
            </p>
            {pkg.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {pkg.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImgIndex(idx)}
                    className={`relative h-12 w-16 sm:h-14 sm:w-20 flex-shrink-0 overflow-hidden rounded-xl border transition-all duration-300 ${activeImgIndex === idx ? "border-brand-gold ring-2 ring-brand-gold/70 scale-105" : "border-white/30 opacity-60 hover:opacity-100"}`}
                  >
                    <Image src={img.src} alt={`Thumbnail ${idx + 1}`} fill unoptimized className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Info Side */}
        <div className="relative lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 md:p-10">
          <div
            aria-hidden="true"
            className="absolute -right-4 -top-4 text-[96px] opacity-[0.06] select-none pointer-events-none"
          >
            {pkg.icon}
          </div>

          <div>
            <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
              {pkg.subtitle}
            </span>
            <h2 className="mt-2 font-serif text-2xl font-normal tracking-wide text-stone-800 sm:text-3xl">
              {pkg.title}
            </h2>

            <div className="mt-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-stone-300 bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-stone-700 shadow-sm backdrop-blur-sm">
                <span className="text-base leading-none">{pkg.icon}</span>
                {pkg.tag}
              </span>
            </div>

            <p className="mt-5 text-xs leading-relaxed text-stone-600 sm:text-sm">
              {pkg.description}
            </p>

            <div className="mt-6">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-700">
                Inclusions
              </h3>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {pkg.highlights.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-stone-600">
                    <svg className="h-3.5 w-3.5 text-brand-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
              {pkg.highlights.length > 4 && (
                <p className="mt-2 text-[10px] text-brand-gold font-semibold tracking-wide">
                  +{pkg.highlights.length - 4} more inclusions
                </p>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-stone-300/60 pt-4">
            <button
              type="button"
              onClick={() => onOpenDetails(pkg)}
              className="inline-flex items-center justify-center rounded-xl border border-stone-400/80 bg-white/60 px-4 py-2.5 text-[11px] font-bold tracking-[0.15em] text-stone-800 shadow-sm backdrop-blur-md transition hover:bg-white hover:border-stone-500"
            >
              VIEW DETAILS
            </button>
            <Link
              href="/enquire"
              className="inline-flex flex-1 items-center justify-center rounded-xl border border-brand-gold/60 bg-brand-gold/90 px-6 py-2.5 text-[11px] font-bold tracking-[0.18em] text-white shadow-[0_6px_18px_rgba(0,0,0,0.14)] transition duration-300 hover:bg-brand-gold hover:shadow-[0_10px_24px_rgba(0,0,0,0.2)]"
            >
              ENQUIRE NOW
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── MAIN WEDDING PAGE ────────────────────────────────────────────────────────

export default function WeddingPage() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#d7d7d3]">
      {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
      <section className="relative isolate flex min-h-[640px] flex-col justify-end overflow-hidden px-4 pb-10 pt-32 text-center sm:min-h-[720px] sm:pb-12 md:min-h-[780px] md:pt-44">
        <Image
          src={HERO_IMAGE}
          alt="The Bali Dream Villa Wedding"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/30" />
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-transparent via-[#d7d7d3]/40 to-[#d7d7d3]" />

        <div className="relative z-10 mx-auto mb-10 w-full max-w-3xl sm:mb-14 md:mb-16">
          <span className="block text-[10px] font-bold uppercase tracking-[0.5em] text-brand-gold drop-shadow-md md:text-xs">
            Celebrate Your Love
          </span>
          <h1 className="mt-3 font-serif text-4xl font-light uppercase tracking-widest text-white drop-shadow-lg sm:text-5xl md:text-7xl">
            Wedding
          </h1>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/90 drop-shadow-md sm:text-base">
            Create an unforgettable wedding at The Bali Dream Villa — surrounded by tropical gardens, private pools, and the timeless beauty of Balinese elegance.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/enquire"
              className="rounded-full border border-brand-gold/70 bg-brand-gold/90 px-8 py-3.5 text-[10px] font-bold tracking-[0.25em] text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold md:text-xs"
            >
              ENQUIRE NOW
            </Link>
            <a
              href="#packages"
              className="rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-[10px] font-bold tracking-[0.25em] text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 md:text-xs"
            >
              VIEW PACKAGES
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-3 sm:gap-6">
          {[
            { value: "💍", label: "Intimate Ceremonies" },
            { value: "30+", label: "Private Villas" },
            { value: "✨", label: "Bespoke Experiences" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center rounded-[20px] border border-white/60 bg-white/50 px-4 py-5 text-center shadow-sm backdrop-blur-sm sm:rounded-[24px] sm:py-8"
            >
              <span className="font-serif text-3xl font-light text-stone-800 sm:text-4xl md:text-5xl">
                {stat.value}
              </span>
              <span className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-stone-500 sm:text-[10px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PHOTO GALLERY STRIP ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-3">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-[20px] sm:rounded-[24px] ${i === 1 ? "aspect-[4/5]" : "aspect-square"}`}
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <p className="absolute bottom-3 left-3 right-3 text-[9px] font-bold uppercase tracking-wider text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-[10px]">
                {img.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PACKAGES SECTION ─────────────────────────────────────────────── */}
      <section id="packages" className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pt-10 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="block text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold">
            Wedding Packages
          </span>
          <h2 className="mt-2 font-serif text-3xl font-light tracking-wide text-stone-800 sm:text-4xl">
            Your Perfect Day, Our Expertise
          </h2>
          <div className="mx-auto mt-3 h-px w-16 bg-brand-gold" />
        </motion.div>

        <div className="space-y-12 sm:space-y-16">
          {WEDDING_PACKAGES.map((pkg, index) => (
            <div key={pkg.id} id={pkg.id}>
              <PackageCard pkg={pkg} index={index} onOpenDetails={setActiveModal} />
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT CTA BANNER ────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 pb-28 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[28px] border border-white/60 bg-white/50 shadow-[0_12px_36px_rgba(45,45,40,0.12)] backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Text Side */}
            <div className="flex flex-col justify-center p-8 sm:p-10 md:p-12">
              <span className="block text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold">
                Start Planning Today
              </span>
              <h2 className="mt-3 font-serif text-3xl font-light tracking-wide text-stone-800 sm:text-4xl">
                Let&apos;s Create Your Dream Wedding
              </h2>
              <div className="mt-3 h-px w-12 bg-brand-gold" />
              <p className="mt-5 text-sm leading-relaxed text-stone-600">
                Contact our dedicated wedding consultant team to discuss your vision, guest list, and preferences. We will craft a bespoke celebration perfectly tailored to you.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/enquire"
                  className="inline-flex items-center justify-center rounded-xl border border-brand-gold/60 bg-brand-gold/90 px-6 py-3 text-[11px] font-bold tracking-[0.18em] text-white shadow-[0_6px_18px_rgba(0,0,0,0.14)] transition hover:bg-brand-gold"
                >
                  ENQUIRE NOW
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-xl border border-stone-400/80 bg-white/70 px-6 py-3 text-[11px] font-bold tracking-[0.15em] text-stone-800 shadow-sm backdrop-blur-md transition hover:bg-white hover:border-stone-500"
                >
                  CONTACT US
                </Link>
              </div>
            </div>

            {/* Contact Info Side */}
            <div className="flex flex-col justify-center gap-5 border-t border-stone-200/80 p-8 sm:p-10 md:border-l md:border-t-0 md:p-12">
              {[
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  ),
                  label: "Wedding Enquiries",
                  value: "+62 361 737788",
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  ),
                  label: "Email",
                  value: "info@thebalidreamvilla.com",
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  ),
                  label: "Venue Address",
                  value: "Jl. Bidadari No. 108x, Seminyak, Bali",
                },
              ].map((info, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-stone-300 bg-white/70 shadow-sm">
                    <svg className="h-4 w-4 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {info.icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">{info.label}</p>
                    <p className="mt-0.5 text-xs font-medium text-stone-800 sm:text-sm">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── PACKAGE DETAIL MODAL ─────────────────────────────────────────── */}
      {activeModal && (
        <PackageModal pkg={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </div>
  );
}
