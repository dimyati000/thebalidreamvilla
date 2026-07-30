"use client";

import Image from "next/image";
import { useState, useCallback } from "react";

// ─── VILLA DATA ─────────────────────────────────────────────────────────────

const HERO_IMAGE =
  "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/bd0/a0a/5e1bd0a0ad9fb482156931.jpg";

const BEDROOM_FILTERS = [
  { id: "all", label: "All Villas" },
  { id: "1", label: "1 Bedroom" },
  { id: "2", label: "2 Bedrooms" },
  { id: "3", label: "3 Bedrooms" },
  { id: "4", label: "4 Bedrooms" },
];

const VILLAS = [
  {
    id: "one-bedroom",
    bedrooms: 1,
    title: "One Bedroom Private Pool Villa",
    subtitle: "Serene Sanctuary for Couples & Honeymooners",
    size: "100 Sqm",
    occupancy: "2 Adults + 1 Extra Person",
    pool: "Private Swimming Pool with Sundeck",
    description:
      "Our 7 different units of One Bedroom Private Pool Villa offer tranquility and serenity. Surrounded by a lush tropical garden, each villa comes with its own private pool, open living and dining area, and fully equipped kitchen. The pool side area can be set up for your romantic candle light dinner, making this sanctuary a perfect place for couples or honeymooners.",
    bookingUrl:
      "https://www.swiftbook.io/inst/#home?propertyId=341M2YwhSSS0MC08zfcBbjY5MzM=&JDRN=Y",
    images: [
      {
        src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/bcf/5cc/5e1bcf5cce2bf333609712.jpg",
        caption: "Villa Exterior & Private Pool",
      },
      {
        src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/bcf/5dd/5e1bcf5dd4d45239440645.jpg",
        caption: "Master Bedroom Suite",
      },
      {
        src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/bcf/5e5/5e1bcf5e5aa9e469323479.jpg",
        caption: "Open-Air Living & Dining Lounge",
      },
      {
        src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/bcf/603/5e1bcf6034212377168723.jpg",
        caption: "En-suite Bathroom & Bathtub",
      },
      {
        src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/bcf/615/5e1bcf61505d5593087199.jpg",
        caption: "Private Garden & Sundeck",
      },
      {
        src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/bcf/5cd/5e1bcf5cdb300921703957.jpg",
        caption: "Romantic Poolside Setting",
      },
    ],
    amenities: [
      "Individual Controlled Air-Conditioning",
      "Kitchenette with Gas Hob & Pantry",
      "Smart TV with International Channels",
      "Free High-Speed Wi-Fi Service",
      "Private Pool with Sun Loungers",
      "Deep Soak Bathtub & Indoor Shower",
      "Complimentary Luxury Toiletries",
      "Coffee & Tea Making Facilities",
      "Mini Refrigerator & Minibar",
      "Personal Safety Deposit Box",
      "Slippers, Bathrobes & Hair Dryer",
      "Iron & Board (On Request)",
    ],
  },
  {
    id: "two-bedroom",
    bedrooms: 2,
    title: "Two Bedroom Private Pool Villa",
    subtitle: "Tranquil Luxury for Families & Small Groups",
    size: "120 - 150 Sqm",
    occupancy: "4 Adults + 1 Extra Person",
    pool: "Private Pool & Tropical Garden Deck",
    description:
      "Tucked away in a lush tropical garden setting, the Two Bedroom Villa is the epitome of tranquil luxury with unique Balinese architecture and touches of modern amenities. Sun bathing loungers are also available for relaxation while you are enjoying your quality time with your family or friends.",
    bookingUrl:
      "https://www.swiftbook.io/inst/#home?propertyId=341M2YwhSSS0MC08zfcBbjY5MzM=&JDRN=Y",
    images: [
      {
        src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/bcf/950/5e1bcf950514e246752320.jpg",
        caption: "Spacious Villa Exterior & Pool",
      },
      {
        src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/bcf/954/5e1bcf954e830716095692.jpg",
        caption: "First Master Bedroom",
      },
      {
        src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/bcf/969/5e1bcf969d4e4544688273.jpg",
        caption: "Second Bedroom Area",
      },
      {
        src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/bcf/97a/5e1bcf97a940c356911560.jpg",
        caption: "Integrated Living & Dining Room",
      },
      {
        src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/bcf/97b/5e1bcf97b2af1488841291.jpg",
        caption: "Sun Loungers & Deck",
      },
      {
        src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/bcf/98d/5e1bcf98d4a6c623646946.jpg",
        caption: "En-suite Bathroom Design",
      },
      {
        src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/bcf/99c/5e1bcf99c7e0c976035132.jpg",
        caption: "Balinese Architectural Detail",
      },
      {
        src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/bcf/9a4/5e1bcf9a4b304990980884.jpg",
        caption: "Poolside Relaxation Area",
      },
    ],
    amenities: [
      "Individual Controlled Air-Conditioning",
      "Kitchenette with Gas Hob & Pantry",
      "Smart TV with International Channels",
      "Free High-Speed Wi-Fi Service",
      "Private Pool with Sun Loungers",
      "Deep Soak Bathtub & Indoor Shower",
      "Complimentary Luxury Toiletries",
      "Coffee & Tea Making Facilities",
      "Mini Refrigerator & Minibar",
      "Personal Safety Deposit Box",
      "Slippers, Bathrobes & Hair Dryer",
      "Iron & Board (On Request)",
    ],
  },
  {
    id: "three-bedroom",
    bedrooms: 3,
    title: "Three Bedroom Private Pool Villa",
    subtitle: "Expansive Haven with Open Pavilion Lounge",
    size: "150 - 250 Sqm",
    occupancy: "6 Adults + 1 Extra Person",
    pool: "Large Private Pool & Wooden Deck",
    description:
      "These Three Bedroom Villas are another accommodation choice for a family or a group of friends. Each Villa has a large wooden deck with an open walls living room and a high thatch ceiling roof. Comfortable stylish seating overlooking the swimming pool and sun loungers surrounded by a lush tropical garden. Enjoy your leisure time with family or friends in your private three bedroom villa.",
    bookingUrl:
      "https://www.swiftbook.io/inst/#home?propertyId=341M2YwhSSS0MC08zfcBbjY5MzM=&JDRN=Y",
    images: [
      {
        src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/bcf/d0a/5e1bcfd0aea54274410061.jpg",
        caption: "3-Bedroom Villa Oasis & Pool",
      },
      {
        src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/bcf/d1a/5e1bcfd1a46a1640524057.jpg",
        caption: "Open Thatch-Roof Living Pavilion",
      },
      {
        src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/bcf/d26/5e1bcfd26a183400945712.jpg",
        caption: "Master Bedroom Suite",
      },
      {
        src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/bcf/d36/5e1bcfd362f51549658392.jpg",
        caption: "Second Bedroom Suite",
      },
      {
        src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/bcf/d43/5e1bcfd434198881707660.jpg",
        caption: "Third Bedroom Suite",
      },
      {
        src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/bcf/ce4/5e1bcfce49d3c647910538.jpg",
        caption: "Luxury Bathing Experience",
      },
      {
        src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/bcf/cf3/5e1bcfcf3a003297805689.jpg",
        caption: "Tropical Dining & Garden Area",
      },
    ],
    amenities: [
      "Individual Controlled Air-Conditioning",
      "Kitchenette with Gas Hob & Pantry",
      "Smart TV with International Channels",
      "Free High-Speed Wi-Fi Service",
      "Private Pool with Sun Loungers",
      "Deep Soak Bathtub & Indoor Shower",
      "Complimentary Luxury Toiletries",
      "Coffee & Tea Making Facilities",
      "Full Refrigerator & Pantry",
      "Personal Safety Deposit Box",
      "Slippers, Bathrobes & Hair Dryer",
      "Iron & Board (On Request)",
    ],
  },
  {
    id: "four-bedroom",
    bedrooms: 4,
    title: "Four Bedroom Private Pool Villa",
    subtitle: "Ultimate Grand Royal Retreat for Large Families",
    size: "200 - 300 Sqm",
    occupancy: "8 Adults + 1 Extra Person",
    pool: "Expansive Private Pool & BBQ Garden Lawn",
    description:
      "This unique and massive 300 square meter four-bedroom villa has to be experienced to be believed. Specially designed for bigger families, a group of families or friends who seek a quiet and peaceful base in Seminyak. Enjoy togetherness by simply lounging or doing fun activities by the pool, having a chit chat in living area or even setting your own private barbecue at night. This villa will certainly make you feel like being royalty in Bali.",
    bookingUrl:
      "https://www.swiftbook.io/inst/#home?propertyId=341M2YwhSSS0MC08zfcBbjY5MzM=&JDRN=Y",
    images: [
      {
        src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/bd0/33e/5e1bd033e11e0481205206.jpg",
        caption: "Grand 4-Bedroom Villa Compound",
      },
      {
        src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/69a/b2f/5dd69ab2f347c765379747.jpg",
        caption: "Luxurious Living & Entertainment Area",
      },
      {
        src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/bd0/33c/5e1bd033cca48559590150.jpg",
        caption: "Master Suite & Private Terrace",
      },
      {
        src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/bd0/362/5e1bd03628abc951010617.jpg",
        caption: "Bedrooms Arrangement",
      },
      {
        src: "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/bd0/355/5e1bd0355f792312585447.jpg",
        caption: "Evening Poolside Ambiance",
      },
    ],
    amenities: [
      "Individual Controlled Air-Conditioning",
      "Kitchenette with Gas Hob & Pantry",
      "Smart TV with International Channels",
      "Free High-Speed Wi-Fi Service",
      "Private Pool with Sun Loungers",
      "Deep Soak Bathtub & Indoor Shower",
      "Complimentary Luxury Toiletries",
      "Coffee & Tea Making Facilities",
      "Full Refrigerator & Pantry",
      "Personal Safety Deposit Box",
      "Slippers, Bathrobes & Hair Dryer",
      "Private Barbecue Area Setup",
    ],
  },
];

// ─── LIGHTBOX MODAL ──────────────────────────────────────────────────────────

function VillaGalleryModal({ villa, initialIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  if (!villa) return null;

  const currentImg = villa.images[currentIndex] || villa.images[0];

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? villa.images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === villa.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Dark Glass Backdrop */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-xl transition-opacity" />

      {/* Main Glass Modal Window */}
      <div
        className="relative z-10 flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-[28px] border border-white/20 bg-[#1e1f18]/85 shadow-[0_25px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
              {villa.size} • {villa.occupancy}
            </span>
            <h3 className="font-serif text-xl font-light text-white sm:text-2xl">
              {villa.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
            aria-label="Close modal"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 [scrollbar-width:thin]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Image Slider */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/15 bg-black/40">
                <Image
                  src={currentImg.src}
                  alt={currentImg.caption || villa.title}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="object-cover transition-transform duration-500"
                />

                {/* Left/Right navigation buttons */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition hover:bg-black/70"
                  aria-label="Previous photo"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition hover:bg-black/70"
                  aria-label="Next photo"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Caption overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                  <p className="text-xs font-semibold tracking-wider text-white/90 uppercase">
                    {currentImg.caption} ({currentIndex + 1} of {villa.images.length})
                  </p>
                </div>
              </div>

              {/* Thumbnails strip */}
              <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {villa.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-xl border transition-all duration-300 ${
                      currentIndex === idx
                        ? "border-brand-gold ring-2 ring-brand-gold/60 scale-105"
                        : "border-white/20 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Villa Overview & Full Amenities */}
            <div className="lg:col-span-4 flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
              <div>
                <span className="inline-block rounded-lg border border-brand-gold/40 bg-brand-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
                  Villa Overview
                </span>
                <p className="mt-3 text-xs leading-relaxed text-white/80">
                  {villa.description}
                </p>

                <div className="my-5 h-px w-full bg-white/10" />

                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                  Included Amenities
                </h4>
                <ul className="mt-3 space-y-2 text-xs text-white/70">
                  {villa.amenities.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg
                        className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-brand-gold"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3 pt-4 border-t border-white/10">
                <a
                  href={villa.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-xl border border-brand-gold/60 bg-brand-gold/90 py-3 text-center text-xs font-bold tracking-[0.2em] text-white shadow-[0_6px_20px_rgba(0,0,0,0.2)] transition hover:bg-brand-gold"
                >
                  RESERVE THIS VILLA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN VILLAS PAGE ────────────────────────────────────────────────────────

export default function VillasPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeModalVilla, setActiveModalVilla] = useState(null);

  const filteredVillas =
    selectedCategory === "all"
      ? VILLAS
      : VILLAS.filter((v) => v.bedrooms.toString() === selectedCategory);

  const openModal = useCallback((villa) => setActiveModalVilla(villa), []);
  const closeModal = useCallback(() => setActiveModalVilla(null), []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#d7d7d3]">
      {/* ── HERO SECTION & FILTER ──────────────────────────────────────── */}
      <section className="relative isolate flex min-h-[640px] flex-col justify-end overflow-hidden px-4 pb-10 pt-32 text-center sm:min-h-[720px] sm:pb-12 md:min-h-[780px] md:pt-44">
        <Image
          src={HERO_IMAGE}
          alt="The Bali Dream Villa Accommodations"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Ambient Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/30" />
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-transparent via-[#d7d7d3]/40 to-[#d7d7d3]" />

        {/* Title Header Content */}
        <div className="relative z-10 mx-auto mb-10 w-full max-w-3xl sm:mb-14 md:mb-16">
          <span className="block text-[10px] font-bold uppercase tracking-[0.5em] text-brand-gold drop-shadow-md md:text-xs">
            Luxury Private Accommodation
          </span>
          <h1 className="mt-3 font-serif text-4xl font-light uppercase tracking-widest text-white drop-shadow-lg sm:text-5xl md:text-7xl">
            Our Villas
          </h1>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/90 drop-shadow-md sm:text-base">
            Discover our collection of 30 luxurious private pool villas dressed in
            authentic Balinese ornaments, surrounded by lush tropical gardens in the heart of Seminyak.
          </p>
        </div>

        {/* Glass transparent rounded filter bar (identical style to gallery page) */}
        <div className="relative z-20 mx-auto w-full max-w-4xl overflow-x-auto px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="relative isolate min-w-max overflow-hidden rounded-[24px] border border-white/20 bg-[#24251c]/60 shadow-[0_12px_32px_rgba(24,24,20,0.18)] ring-1 ring-black/[0.04] md:rounded-[28px]">
            {/* Backdrop blur layer */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit] bg-white/[0.025] backdrop-blur-xl"
            />

            <div className="relative flex gap-2 px-3 py-3 sm:flex-wrap sm:justify-center">
              {BEDROOM_FILTERS.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  aria-pressed={selectedCategory === cat.id}
                  className={`rounded-xl border px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/70 ${
                    selectedCategory === cat.id
                      ? "border-brand-gold/60 bg-brand-gold/90 text-white shadow-[0_6px_18px_rgba(0,0,0,0.16)]"
                      : "border-transparent text-white/70 hover:border-white/10 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VILLAS CARDS LIST ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 pb-28 pt-8 sm:px-6 sm:pt-12 lg:px-8">
        <div className="space-y-12 sm:space-y-16">
          {filteredVillas.map((villa) => (
            <VillaCard key={villa.id} villa={villa} onOpenDetails={openModal} />
          ))}
        </div>
      </section>

      {/* ── LIGHTBOX / DETAILS MODAL ───────────────────────────────────── */}
      {activeModalVilla && (
        <VillaGalleryModal villa={activeModalVilla} onClose={closeModal} />
      )}
    </div>
  );
}

// ─── VILLA CARD COMPONENT ─────────────────────────────────────────────────────

function VillaCard({ villa, onOpenDetails }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const currentImage = villa.images[activeImgIndex] || villa.images[0];

  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-black/[0.08] bg-[#e5e5e2]/80 shadow-[0_12px_36px_rgba(45,45,40,0.12)] transition-all duration-500 hover:shadow-[0_20px_48px_rgba(45,45,40,0.18)]">
      {/* Internal Glass Card container */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Image Carousel / Gallery Preview */}
        <div className="relative lg:col-span-7 flex flex-col justify-between overflow-hidden bg-stone-900 min-h-[340px] sm:min-h-[420px]">
          <Image
            src={currentImage.src}
            alt={currentImage.caption || villa.title}
            fill
            unoptimized
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Dark Gradient Overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30" />

          {/* Top Badge Overlay */}
          <div className="relative z-10 flex items-center justify-between p-6">
            <span className="rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              {villa.bedrooms} Bedroom Private Pool Villa
            </span>
            <span className="rounded-full border border-brand-gold/40 bg-brand-gold/80 px-3.5 py-1 text-[10px] font-bold tracking-widest text-white backdrop-blur-md">
              Best Rate Guarantee
            </span>
          </div>

          {/* Bottom Thumbnails & Caption Bar */}
          <div className="relative z-10 p-4 sm:p-6">
            <p className="mb-3 text-xs font-semibold tracking-wider text-white/90 uppercase drop-shadow">
              {currentImage.caption}
            </p>
            <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {villa.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImgIndex(idx)}
                  className={`relative h-12 w-16 sm:h-14 sm:w-20 flex-shrink-0 overflow-hidden rounded-xl border transition-all duration-300 ${
                    activeImgIndex === idx
                      ? "border-brand-gold ring-2 ring-brand-gold/70 scale-105 opacity-100"
                      : "border-white/30 opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`View ${img.caption}`}
                >
                  <Image
                    src={img.src}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Villa Info & Specification Details */}
        <div className="relative lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 md:p-10">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
              {villa.subtitle}
            </span>
            <h2 className="mt-2 font-serif text-2xl font-normal tracking-wide text-stone-800 sm:text-3xl">
              {villa.title}
            </h2>

            {/* Rounded Glass Specs Pills */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-stone-300 bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-stone-700 shadow-sm backdrop-blur-sm">
                <svg className="h-4 w-4 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
                {villa.size}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-stone-300 bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-stone-700 shadow-sm backdrop-blur-sm">
                <svg className="h-4 w-4 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {villa.occupancy}
              </span>
            </div>

            {/* Description */}
            <p className="mt-5 text-xs leading-relaxed text-stone-600 sm:text-sm">
              {villa.description}
            </p>

            {/* Amenities Grid */}
            <div className="mt-6">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-700">
                Key Amenities
              </h3>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {villa.amenities.slice(0, 6).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-stone-600">
                    <svg className="h-3.5 w-3.5 text-brand-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card Footer Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3 pt-4 border-t border-stone-300/60">
            <button
              type="button"
              onClick={() => onOpenDetails(villa)}
              className="inline-flex items-center justify-center rounded-xl border border-stone-400/80 bg-white/60 px-4 py-2.5 text-[11px] font-bold tracking-[0.15em] text-stone-800 shadow-sm backdrop-blur-md transition hover:bg-white hover:border-stone-500"
            >
              FULL GALLERY & DETAILS
            </button>

            <a
              href={villa.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center rounded-xl border border-brand-gold/60 bg-brand-gold/90 px-6 py-2.5 text-[11px] font-bold tracking-[0.18em] text-white shadow-[0_6px_18px_rgba(0,0,0,0.14)] transition duration-300 hover:bg-brand-gold hover:shadow-[0_10px_24px_rgba(0,0,0,0.2)]"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
