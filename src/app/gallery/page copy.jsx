"use client";

import Image from "next/image";
import { useState, useCallback } from "react";

// ─── DATA ───────────────────────────────────────────────────────────────────

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "villa", label: "Villa" },
  { id: "restaurant", label: "Eat & Drink" },
  { id: "pool", label: "Pool & Garden" },
  { id: "spa", label: "Spa" },
  { id: "wedding", label: "Wedding & Events" },
  { id: "video", label: "Video" },
];

const GALLERY_ITEMS = [
  // ── VILLA ────────────────────────────────────────────────────────────────
  { id: 1,  cat: "villa", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/77a/99a/5dd77a99a511d540395563.jpg",   thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/77a/99a/thumb_1727_600_338_0_0_auto.jpg",   alt: "Villa Interior",      span: "col-span-2" },
  { id: 2,  cat: "villa", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/77a/9d1/5dd77a9d1736a300574316.jpg",   thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/77a/9d1/thumb_1729_600_338_0_0_auto.jpg",   alt: "Villa Bedroom",       span: "" },
  { id: 3,  cat: "villa", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/77a/9d4/5dd77a9d47f5a008885981.jpg",   thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/77a/9d4/thumb_1730_600_338_0_0_auto.jpg",   alt: "Villa Lounge",        span: "" },
  { id: 4,  cat: "villa", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/77a/9f3/5dd77a9f3b050471853102.jpg",   thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/77a/9f3/thumb_1731_600_338_0_0_auto.jpg",   alt: "Villa Room",          span: "" },
  { id: 5,  cat: "villa", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/77a/a23/5dd77aa23b831331461788.jpg",   thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/77a/a23/thumb_1732_600_338_0_0_auto.jpg",   alt: "Villa View",          span: "col-span-2" },
  { id: 6,  cat: "villa", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/77a/a3c/5dd77aa3c1492086548251.jpg",   thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/77a/a3c/thumb_1733_600_338_0_0_auto.jpg",   alt: "Villa Exterior",      span: "" },
  { id: 7,  cat: "villa", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/77a/a40/5dd77aa4062fb540092889.jpg",   thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/77a/a40/thumb_1734_600_338_0_0_auto.jpg",   alt: "Villa Garden",        span: "" },
  { id: 8,  cat: "villa", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/77a/a59/5dd77aa59b59e520086033.jpg",   thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/77a/a59/thumb_1735_600_338_0_0_auto.jpg",   alt: "Villa Suite",         span: "" },
  { id: 9,  cat: "villa", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/77a/a5c/5dd77aa5ce70e216525100.jpg",   thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/77a/a5c/thumb_1736_600_338_0_0_auto.jpg",   alt: "Villa Living",        span: "" },
  { id: 10, cat: "villa", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/77a/a6a/5dd77aa6a3a3c003288735.jpg",   thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/77a/a6a/thumb_1737_600_338_0_0_auto.jpg",   alt: "Villa Dining",        span: "col-span-2" },
  { id: 11, cat: "villa", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/be6/9e4/5e1be69e47848421009477.jpg",   thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/be6/9e4/thumb_1827_600_338_0_0_auto.jpg",   alt: "Premium Villa",       span: "" },
  { id: 12, cat: "villa", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/be6/a04/5e1be6a04cad4290998167.jpg",   thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/be6/a04/thumb_1828_600_338_0_0_auto.jpg",   alt: "Villa Bathroom",      span: "" },
  // ── EAT & DRINK ─────────────────────────────────────────────────────────
  { id: 20, cat: "restaurant", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/786/cce/5dd786cced554991375822.jpg", thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/786/cce/thumb_1743_600_338_0_0_auto.jpg",  alt: "Restaurant",          span: "col-span-2" },
  { id: 21, cat: "restaurant", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/786/cce/5dd786ccefab7383875667.jpg", thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/786/cce/thumb_1744_600_338_0_0_auto.jpg", alt: "Dining Area",         span: "" },
  { id: 22, cat: "restaurant", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/786/ce6/5dd786ce6c96f660098984.jpg", thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/786/ce6/thumb_1745_600_338_0_0_auto.jpg",  alt: "Bar",                 span: "" },
  { id: 23, cat: "restaurant", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/786/cf9/5dd786cf95f8d937694481.jpg", thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/786/cf9/thumb_1746_600_338_0_0_auto.jpg",  alt: "Food Presentation",   span: "" },
  { id: 24, cat: "restaurant", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/786/d16/5dd786d166b4b174834708.jpg", thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/786/d16/thumb_1747_600_338_0_0_auto.jpg",  alt: "Tropical Drinks",     span: "col-span-2" },
  { id: 25, cat: "restaurant", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/786/d4a/5dd786d4a72b4675562447.jpg", thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/786/d4a/thumb_1748_600_338_0_0_auto.jpg",  alt: "Cuisine",             span: "" },
  { id: 26, cat: "restaurant", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/be7/024/5e1be702452d4029501615.jpg", thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/be7/024/thumb_1862_600_338_0_0_auto.jpg",  alt: "Private Dining",      span: "" },
  // ── POOL & GARDEN ───────────────────────────────────────────────────────
  { id: 30, cat: "pool", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/787/37b/5dd78737b9262863276692.jpg",    thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/787/37b/thumb_1749_600_338_0_0_auto.jpg",    alt: "Private Pool",        span: "col-span-2" },
  { id: 31, cat: "pool", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/787/37e/5dd78737e3af0694652099.jpg",    thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/787/37e/thumb_1750_600_338_0_0_auto.jpg",    alt: "Pool View",           span: "" },
  { id: 32, cat: "pool", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/787/394/5dd787394dd61863215493.jpg",    thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/787/394/thumb_1751_600_338_0_0_auto.jpg",    alt: "Garden",              span: "" },
  { id: 33, cat: "pool", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/787/3ac/5dd7873acd42c619517286.jpg",    thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/787/3ac/thumb_1752_600_338_0_0_auto.jpg",    alt: "Tropical Garden",     span: "" },
  { id: 34, cat: "pool", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/787/3b7/5dd7873b7b0a3157605850.jpg",    thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/787/3b7/thumb_1753_600_338_0_0_auto.jpg",    alt: "Pool Lounge",         span: "col-span-2" },
  { id: 35, cat: "pool", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/787/3c2/5dd7873c29b94421562181.jpg",    thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/787/3c2/thumb_1754_600_338_0_0_auto.jpg",    alt: "Pool Sunset",         span: "" },
  { id: 36, cat: "pool", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/be7/1c5/5e1be71c51b76706930260.jpg",    thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/be7/1c5/thumb_1864_600_338_0_0_auto.jpg",    alt: "Pool Evening",        span: "" },
  // ── SPA ─────────────────────────────────────────────────────────────────
  { id: 40, cat: "spa", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/787/756/5dd7877562ced431572033.jpg",     thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/787/756/thumb_1756_600_338_0_0_auto.jpg",     alt: "Spa Treatment",       span: "col-span-2" },
  { id: 41, cat: "spa", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/787/75e/5dd78775e952c136924630.jpg",     thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/787/75e/thumb_1757_600_338_0_0_auto.jpg",     alt: "Massage",             span: "" },
  { id: 42, cat: "spa", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/787/77d/5dd78777db1fc797823282.jpg",     thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/787/77d/thumb_1758_600_338_0_0_auto.jpg",     alt: "Spa Interior",        span: "" },
  { id: 43, cat: "spa", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/787/791/5dd787791a319701583911.jpg",     thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/787/791/thumb_1759_600_338_0_0_auto.jpg",     alt: "Wellness Center",     span: "" },
  { id: 44, cat: "spa", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/be7/3bc/5e1be73bc1194235239305.jpg",     thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/be7/3bc/thumb_1869_600_338_0_0_auto.jpg",     alt: "Relaxation",          span: "col-span-2" },
  { id: 45, cat: "spa", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/be7/3f0/5e1be73f0acff234814304.jpg",     thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/be7/3f0/thumb_1871_600_338_0_0_auto.jpg",     alt: "Spa Ritual",          span: "" },
  // ── WEDDING & EVENTS ────────────────────────────────────────────────────
  { id: 50, cat: "wedding", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/787/b7c/5dd787b7cf880573185914.jpg", thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/787/b7c/thumb_1760_600_338_0_0_auto.jpg", alt: "Wedding Ceremony",    span: "col-span-2" },
  { id: 51, cat: "wedding", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/787/b81/5dd787b819f8a441546778.jpg", thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/787/b81/thumb_1761_600_338_0_0_auto.jpg", alt: "Wedding Reception",   span: "" },
  { id: 52, cat: "wedding", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/787/b9b/5dd787b9b7e06143761216.jpg", thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/787/b9b/thumb_1762_600_338_0_0_auto.jpg", alt: "Wedding Decoration",  span: "" },
  { id: 53, cat: "wedding", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/787/bb7/5dd787bb7fa8b894284135.jpg", thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/787/bb7/thumb_1763_600_338_0_0_auto.jpg", alt: "Wedding Setup",       span: "" },
  { id: 54, cat: "wedding", src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/787/bbd/5dd787bbd9c79849743584.jpg", thumb: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/787/bbd/thumb_1764_600_338_0_0_auto.jpg", alt: "Events Venue",        span: "col-span-2" },
  // ── VIDEO ───────────────────────────────────────────────────────────────
  { id: 60, cat: "video", type: "video", videoId: "eqTem35-B4M", alt: "Villa Tour Video",   span: "" },
  { id: 61, cat: "video", type: "video", videoId: "OlUtjOlWW_o", alt: "Experience Video",   span: "" },
];

const BG_IMAGE =
  "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/77a/99a/5dd77a99a511d540395563.jpg";

// ─── LIGHTBOX ───────────────────────────────────────────────────────────────

function Lightbox({ item, onClose, onPrev, onNext }) {
  if (!item) return null;
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      {/* Controls */}
      <button
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>
      <button
        className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
        onClick={onClose}
        aria-label="Close"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
      </button>

      {/* Image */}
      <div
        className="relative z-10 max-h-[88vh] max-w-5xl w-full mx-6 overflow-hidden rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "video" ? (
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full rounded-2xl"
              src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={item.alt}
            />
          </div>
        ) : (
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              unoptimized
              className="object-contain"
              sizes="90vw"
            />
          </div>
        )}
        <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 px-6 pb-4 pt-8 text-sm font-medium tracking-widest text-white/90 uppercase">
          {item.alt}
        </p>
      </div>
    </div>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = activeCategory === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((i) => i.cat === activeCategory);

  const openLightbox = useCallback((idx) => setLightboxIndex(idx), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevItem = useCallback(() =>
    setLightboxIndex((i) => (i === 0 ? filtered.length - 1 : i - 1)), [filtered.length]);
  const nextItem = useCallback(() =>
    setLightboxIndex((i) => (i === filtered.length - 1 ? 0 : i + 1)), [filtered.length]);

  return (
    <main className="relative min-h-screen bg-stone-950 overflow-hidden">
      {/* ── FIXED BACKGROUND ─────────────────────────────────────────── */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <Image
          src={BG_IMAGE}
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/60 to-stone-950/90" />
      </div>

      {/* ── HERO HEADER ──────────────────────────────────────────────── */}
      <section className="relative isolate pt-32 pb-14 md:pt-44 md:pb-20 text-center px-4">
        {/* Atmospheric glow */}
        <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-gold/15 blur-[100px]" />

        <span className="block text-[10px] font-bold uppercase tracking-[0.5em] text-brand-gold md:text-xs">
          The Bali Dream Villa Seminyak
        </span>
        <h1 className="mt-3 font-serif text-4xl font-light uppercase tracking-widest text-white sm:text-5xl md:text-7xl">
          Gallery
        </h1>
        <div className="mx-auto mt-4 h-px w-20 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-stone-300/80">
          Immerse yourself in the beauty of our tropical paradise — from luxurious villa suites and serene spas to vibrant dining and unforgettable celebrations.
        </p>
      </section>

      {/* ── FILTER BAR ───────────────────────────────────────────────── */}
      <div className="sticky top-[72px] z-30 px-4 pb-6">
        <div className="mx-auto max-w-5xl overflow-x-auto">
          <div className="flex min-w-max gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:flex-wrap sm:justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-xl px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-brand-gold text-white shadow-[0_4px_16px_rgba(0,0,0,0.25)]"
                    : "text-stone-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── GALLERY GRID ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        {/* Photo / Video Grid */}
        {activeCategory !== "video" ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filtered
              .filter((i) => i.type !== "video")
              .map((item, idx) => (
                <PhotoCard
                  key={item.id}
                  item={item}
                  onClick={() => openLightbox(idx)}
                />
              ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {filtered
              .filter((i) => i.type === "video")
              .map((item) => (
                <VideoCard key={item.id} item={item} />
              ))}
          </div>
        )}

        {/* Mixed mode: if "all" show videos at bottom */}
        {activeCategory === "all" && (
          <div className="mt-10">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">Video</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {GALLERY_ITEMS
                .filter((i) => i.type === "video")
                .map((item) => (
                  <VideoCard key={item.id} item={item} />
                ))}
            </div>
          </div>
        )}
      </section>

      {/* ── LIGHTBOX ──────────────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <Lightbox
          item={filtered[lightboxIndex]}
          onClose={closeLightbox}
          onPrev={prevItem}
          onNext={nextItem}
        />
      )}
    </main>
  );
}

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function PhotoCard({ item, onClick }) {
  return (
    <div
      className="group relative mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:border-white/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
      onClick={onClick}
    >
      <Image
        src={item.thumb || item.src}
        alt={item.alt}
        width={600}
        height={338}
        unoptimized
        className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/40">
        <div className="flex h-12 w-12 -translate-y-2 items-center justify-center rounded-full border border-white/40 bg-white/10 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
        <p className="mt-2 translate-y-2 text-[10px] font-semibold uppercase tracking-widest text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {item.alt}
        </p>
      </div>
    </div>
  );
}

function VideoCard({ item }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.25)] backdrop-blur-sm">
      <div className="aspect-video w-full">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${item.videoId}`}
          title={item.alt}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="px-5 py-4">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-stone-300">
          {item.alt}
        </p>
      </div>
    </div>
  );
}
