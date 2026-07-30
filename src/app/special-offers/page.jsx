"use client";

import Image from "next/image";
import { useState, useCallback } from "react";

// ─── SPECIAL OFFERS DATA ───────────────────────────────────────────────────

const HERO_IMAGE =
  "https://www.thebalidreamvilla.com/storage/app/media/THE%20BALI%20DREAM%20VILLA%20SEMINYAK%202%20-%20MAIN%20POOL2.webp";

const CATEGORY_FILTERS = [
  { id: "all", label: "All Offers" },
  { id: "packages", label: "Honeymoon & Stay" },
  { id: "dining", label: "Romantic Dining" },
  { id: "experiences", label: "Activities & Wellness" },
];

const SPECIAL_OFFERS = [
  {
    id: "honeymoon-package",
    category: "packages",
    title: "Honeymoon Package",
    tagline: "Exclusive Romantic Escape in Seminyak",
    price: "Special Package",
    badge: "Most Popular",
    heroImg:
      "https://www.thebalidreamvilla.com/storage/app/uploads/public/61d/e8b/3d6/61de8b3d62ffd506084141.jpg",
    description:
      "Celebrate the start of your journey together with our exquisite Honeymoon Package at The Bali Dream Villa Seminyak. Tucked away in a tranquil part of Seminyak, our intimate retreat offers luxurious comfort and exclusive style, perfect for creating cherished memories.",
    bookingUrl:
      "https://www.swiftbook.io/inst/#home?propertyId=283MjYs5LJkRfTxEsJtl5MzM=&JDRN=Y&PackageID=881100000000014&minNight=2",
    inclusions: [
      "Free Upgrade to 1 Bedroom Private Pool Suite Villa (Subject to availability)",
      "Daily Gourmet Breakfast Served at Villa or Restaurant",
      "Honeymoon Flower Decoration & Special Honeymoon Cake Upon Arrival",
      "1x Romantic Floating Breakfast at Your Private Pool Villa",
      "1x Candle Light Dinner (3-Course Gourmet Menu) with 2 Glasses of Local Wine",
      "1x 2-Hour Signature Spa & Massage Treatment for Couple",
      "Free Scheduled Shuttle Service to Seminyak Square",
      "Free High-Speed Wi-Fi Service Throughout Villa",
    ],
  },
  {
    id: "sweet-couple-dinner",
    category: "dining",
    title: "Sweet Couple Dinner",
    tagline: "Romantic Poolside Candle & Flower Illumination",
    price: "IDR 1.500.000,-",
    badge: "Romantic Dining",
    heroImg:
      "https://www.thebalidreamvilla.com/storage/app/uploads/public/663/db4/447/663db4447312e407716903.jpg",
    description:
      "Feel the ultimate romance with our Sweet Couple Dinner. Enjoy a full floating flower arrangement and heart-shaped floral art in your private pool, surrounded by warm candle illumination and a delicious multi-course dinner paired with local wine.",
    bookingUrl:
      "https://www.swiftbook.io/inst/#home?propertyId=341M2YwhSSS0MC08zfcBbjY5MzM=&JDRN=Y",
    inclusions: [
      "Full Floating Flower Arrangement in Private Pool",
      "Romantic Flower Heart Shape Centerpiece",
      "Ambient Poolside Candle Decoration Setup",
      "Multi-Course Chef Special Set Menu Dinner",
      "1 Bottle of Selected Local Wine",
      "Dedicated Private Butler Service",
    ],
  },
  {
    id: "candle-light-dinner",
    category: "dining",
    title: "Candle Light Dinner",
    tagline: "Intimate Dinner Under the Stars",
    price: "IDR 1.200.000,-",
    badge: "Chef Special",
    heroImg:
      "https://www.thebalidreamvilla.com/storage/app/uploads/public/663/da1/7c0/663da17c0f68a807077071.jpg",
    description:
      "Indulge in a romantic Candle Light Dinner featuring a flower heart shape in your private pool, cozy surrounding candlelight, and a mouth-watering set menu dinner accompanied by two glasses of local wine.",
    bookingUrl:
      "https://www.swiftbook.io/inst/#home?propertyId=341M2YwhSSS0MC08zfcBbjY5MzM=&JDRN=Y",
    inclusions: [
      "Flower Heart Shape Floating Decoration",
      "Poolside Candle Arrangement & Ambiance",
      "Multi-Course Set Menu Dinner for 2",
      "2 Glasses of Selected Local Wine",
      "Private Table Setup at Villa Poolside",
    ],
  },
  {
    id: "floating-breakfast",
    category: "dining",
    title: "Floating Breakfast",
    tagline: "Luxury Morning Ritual in Your Private Pool",
    price: "IDR 250.000,-",
    badge: "Trending Experience",
    heroImg:
      "https://www.thebalidreamvilla.com/storage/app/uploads/public/663/dc2/8c4/663dc28c40abd575759806.jpg",
    description:
      "Start your morning in iconic Bali style with a delicious breakfast floating directly on your private pool. Choose between American, Continental, Indonesian, or Indian breakfast menus with fresh juices and gourmet coffee.",
    bookingUrl:
      "https://www.swiftbook.io/inst/#home?propertyId=341M2YwhSSS0MC08zfcBbjY5MzM=&JDRN=Y",
    inclusions: [
      "Floating Tray Setup in Private Villa Pool",
      "Choice of Breakfast: American, Continental, Indonesian, or Indian",
      "Fresh Tropical Fruit Platter & Pastries",
      "Selection of Fresh Juices & Premium Coffee/Tea",
      "Special Poolside Photo Assistance on Request",
    ],
  },
  {
    id: "cooking-class-market-tour",
    category: "experiences",
    title: "Cooking Class with Market Tour",
    tagline: "Authentic Culinary Journey with Executive Chef",
    price: "IDR 1.500.000,-",
    badge: "Cultural Activity",
    heroImg:
      "https://www.thebalidreamvilla.com/storage/app/uploads/public/663/dc2/0f2/663dc20f2d508499930917.jpg",
    description:
      "Learn the art of traditional Balinese cooking! Begin with an guided morning market tour to select fresh herbs and spices, followed by an interactive cooking class with our Executive Chef and enjoying your prepared lunch.",
    bookingUrl:
      "https://www.swiftbook.io/inst/#home?propertyId=341M2YwhSSS0MC08zfcBbjY5MzM=&JDRN=Y",
    inclusions: [
      "Valid for 2 Persons",
      "1-Hour Traditional Balinese Market Guided Tour",
      "Hands-on Cooking Class with Executive Chef",
      "4-Course Prepared Authentic Balinese Lunch",
      "Official Culinary Certificate of Completion",
      "Recipe Booklet to Take Home",
    ],
  },
  {
    id: "flower-fruit-bath-decoration",
    category: "experiences",
    title: "Flower & Fruit Bath Decoration",
    tagline: "Sensory Aromatherapy & Pure Relaxation",
    price: "IDR 250.000,-",
    badge: "Spa & Wellness",
    heroImg:
      "https://www.thebalidreamvilla.com/storage/app/uploads/public/663/dc2/d12/663dc2d12ac0a483906185.jpeg",
    description:
      "Experience ultimate relaxation with our Flower & Fruit Bath setup. The fragrance of fresh tropical flowers and citrus fruit slices soothes the mind, stabilizes your mood, and leaves your skin feeling refreshed.",
    bookingUrl:
      "https://www.swiftbook.io/inst/#home?propertyId=341M2YwhSSS0MC08zfcBbjY5MzM=&JDRN=Y",
    inclusions: [
      "Fresh Tropical Flower Petals Bathtub Fill",
      "Fresh Sliced Fruit Decoration Arrangement",
      "Natural Herbal & Aromatherapy Essential Oils",
      "Relaxing Villa Bathroom Atmosphere Setup",
    ],
  },
];

const DIRECT_BENEFITS = [
  {
    title: "Best Rate Guarantee",
    desc: "Up to 35% cheaper than any online travel agent",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Free Airport Transfer",
    desc: "Complimentary 1-way airport pickup for stay 3+ nights",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
  },
  {
    title: "10% F&B Discount",
    desc: "Valid at The Bali Dream Restaurant & Bar",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "10% Spa Discount",
    desc: "Exclusive savings at The Bali Dream Spa & Wellness",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
];

// ─── OFFER DETAIL MODAL ─────────────────────────────────────────────────────

function OfferDetailModal({ offer, onClose }) {
  if (!offer) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Dark Glass Backdrop */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-xl transition-opacity" />

      {/* Modal Container */}
      <div
        className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-[28px] border border-white/20 bg-[#1e1f18]/90 shadow-[0_25px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
              {offer.badge} • {offer.price}
            </span>
            <h3 className="font-serif text-xl font-light text-white sm:text-2xl">
              {offer.title}
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

        {/* Modal Content Body */}
        <div className="flex-1 overflow-y-auto p-6 [scrollbar-width:thin]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            {/* Image Banner */}
            <div className="md:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/15 bg-black/40">
                <Image
                  src={offer.heroImg}
                  alt={offer.title}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block rounded-full border border-brand-gold/50 bg-brand-gold/90 px-3.5 py-1 text-xs font-bold text-white shadow-md">
                    {offer.price}
                  </span>
                </div>
              </div>
            </div>

            {/* Inclusions & Overview */}
            <div className="md:col-span-6 flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
                  Offer Summary
                </span>
                <p className="mt-2 text-xs leading-relaxed text-white/80">
                  {offer.description}
                </p>

                <div className="my-4 h-px w-full bg-white/10" />

                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                  Package Inclusions
                </h4>
                <ul className="mt-3 space-y-2.5 text-xs text-white/75">
                  {offer.inclusions.map((inc, i) => (
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
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Booking Action */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href={offer.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-xl border border-brand-gold/60 bg-brand-gold/90 py-3 text-center text-xs font-bold tracking-[0.2em] text-white shadow-[0_6px_20px_rgba(0,0,0,0.2)] transition hover:bg-brand-gold"
                >
                  CLAIM & BOOK OFFER NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN SPECIAL OFFERS PAGE ─────────────────────────────────────────────────

export default function SpecialOffersPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeModalOffer, setActiveModalOffer] = useState(null);

  const filteredOffers =
    selectedCategory === "all"
      ? SPECIAL_OFFERS
      : SPECIAL_OFFERS.filter((o) => o.category === selectedCategory);

  const openModal = useCallback((offer) => setActiveModalOffer(offer), []);
  const closeModal = useCallback(() => setActiveModalOffer(null), []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#d7d7d3]">
      {/* ── HERO SECTION & FILTER ──────────────────────────────────────── */}
      <section className="relative isolate flex min-h-[640px] flex-col justify-end overflow-hidden px-4 pb-10 pt-32 text-center sm:min-h-[720px] sm:pb-12 md:min-h-[780px] md:pt-44">
        <Image
          src={HERO_IMAGE}
          alt="The Bali Dream Villa Special Offers"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Ambient Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/30" />
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-transparent via-[#d7d7d3]/40 to-[#d7d7d3]" />

        {/* Title & Tagline Header */}
        <div className="relative z-10 mx-auto mb-10 w-full max-w-3xl sm:mb-14 md:mb-16">
          <span className="block text-[10px] font-bold uppercase tracking-[0.5em] text-brand-gold drop-shadow-md md:text-xs">
            Exclusive Resort Deals
          </span>
          <h1 className="mt-3 font-serif text-4xl font-light uppercase tracking-widest text-white drop-shadow-lg sm:text-5xl md:text-7xl">
            Special Offers
          </h1>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/90 drop-shadow-md sm:text-base">
            Unlock exclusive packages, romantic dining experiences, floating breakfasts, and luxury wellness deals guaranteed at the best online rates.
          </p>
        </div>

        {/* Glass transparent rounded filter bar (identical style to gallery & villas page) */}
        <div className="relative z-20 mx-auto w-full max-w-4xl overflow-x-auto px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="relative isolate min-w-max overflow-hidden rounded-[24px] border border-white/20 bg-[#24251c]/60 shadow-[0_12px_32px_rgba(24,24,20,0.18)] ring-1 ring-black/[0.04] md:rounded-[28px]">
            {/* Backdrop blur layer */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit] bg-white/[0.025] backdrop-blur-xl"
            />

            <div className="relative flex gap-2 px-3 py-3 sm:flex-wrap sm:justify-center">
              {CATEGORY_FILTERS.map((cat) => (
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

      {/* ── DIRECT WEBSITE BENEFITS BANNER ─────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-[28px] border border-black/[0.08] bg-[#e5e5e2]/90 p-6 shadow-[0_10px_30px_rgba(45,45,40,0.1)] sm:p-8">
          <div className="text-center mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">
              Why Book Direct With Us?
            </span>
            <h2 className="mt-1 font-serif text-2xl text-stone-800">
              Unbeatable Rates & Direct Guest Privileges
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DIRECT_BENEFITS.map((b, i) => (
              <div
                key={i}
                className="flex items-start gap-3.5 rounded-2xl border border-stone-300/80 bg-white/70 p-4 shadow-sm backdrop-blur-sm"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={b.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-stone-800 uppercase tracking-wide">
                    {b.title}
                  </h3>
                  <p className="mt-1 text-[11px] text-stone-600 leading-snug">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIAL OFFERS GRID ────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 pb-28 pt-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredOffers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} onOpenDetails={openModal} />
          ))}
        </div>
      </section>

      {/* ── OFFER DETAIL MODAL ─────────────────────────────────────────── */}
      {activeModalOffer && (
        <OfferDetailModal offer={activeModalOffer} onClose={closeModal} />
      )}
    </div>
  );
}

// ─── OFFER CARD COMPONENT ─────────────────────────────────────────────────────

function OfferCard({ offer, onOpenDetails }) {
  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-[28px] border border-black/[0.08] bg-[#e5e5e2]/80 shadow-[0_10px_32px_rgba(45,45,40,0.12)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(45,45,40,0.18)]">
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900">
        <Image
          src={offer.heroImg}
          alt={offer.title}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

        {/* Top Badge */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="rounded-full border border-white/20 bg-black/40 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
            {offer.badge}
          </span>
          <span className="rounded-full border border-brand-gold/40 bg-brand-gold/90 px-3 py-1 text-[10px] font-bold tracking-widest text-white shadow-sm">
            {offer.price}
          </span>
        </div>

        {/* Subtitle at Bottom of Image */}
        <div className="absolute bottom-3 left-4 right-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold drop-shadow">
            {offer.tagline}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h2 className="font-serif text-2xl font-normal text-stone-800">
            {offer.title}
          </h2>

          <p className="mt-3 text-xs leading-relaxed text-stone-600 line-clamp-3">
            {offer.description}
          </p>

          {/* Inclusions Highlights */}
          <div className="mt-5 border-t border-stone-300/60 pt-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-700">
              Highlights Include:
            </span>
            <ul className="mt-2.5 space-y-1.5 text-xs text-stone-600">
              {offer.inclusions.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
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
                  <span className="truncate">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card Actions */}
        <div className="mt-6 flex items-center gap-2 pt-4 border-t border-stone-300/60">
          <button
            type="button"
            onClick={() => onOpenDetails(offer)}
            className="inline-flex items-center justify-center rounded-xl border border-stone-400/80 bg-white/60 px-3.5 py-2.5 text-[10px] font-bold tracking-[0.15em] text-stone-800 shadow-sm backdrop-blur-md transition hover:bg-white hover:border-stone-500"
          >
            DETAILS
          </button>

          <a
            href={offer.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center rounded-xl border border-brand-gold/60 bg-brand-gold/90 px-4 py-2.5 text-[10px] font-bold tracking-[0.18em] text-white shadow-[0_6px_18px_rgba(0,0,0,0.14)] transition duration-300 hover:bg-brand-gold hover:shadow-[0_10px_24px_rgba(0,0,0,0.2)]"
          >
            BOOK OFFER
          </a>
        </div>
      </div>
    </div>
  );
}
