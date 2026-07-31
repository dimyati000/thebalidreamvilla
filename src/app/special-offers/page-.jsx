"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  Mail,
  Sparkles,
  Tag,
} from "lucide-react";
import { useEffect } from "react";
import { heroSlidesData } from "@/data/homeData";
import { useSliderBackground } from "@/components/SliderBackgroundProvider";

const BOOKING_URL =
  "https://www.swiftbook.io/inst/#home?propertyId=341M2YwhSSS0MC08zfcBbjY5MzM=&JDRN=Y";

const EXPERIENCE_BOOKING_URL =
  "https://app-apac.thebookingbutton.com/properties/balidreamvilladirect?promocode=BALIDREAM23";

// Offer content is adapted from:
// https://www.thebalidreamvilla.com/special-offers
const SPECIAL_OFFERS = [
  {
    id: "honeymoon-package",
    eyebrow: "Romantic Escape",
    title: "Honeymoon Package",
    price: "An intimate escape for two",
    description:
      "Celebrate the beginning of your journey together with a romantic stay at The Bali Dream Villa Seminyak. Every detail is thoughtfully arranged so you can slow down, reconnect, and create memories together.",
    image:
      "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/bd0/ed4/5e1bd0ed42cee948347220.jpg",
    imageAlt: "Romantic private pool villa experience in Seminyak",
    note: "Subject to availability",
    inclusions: [
      "Free upgrade to a 1-bedroom private pool suite villa",
      "Daily breakfast",
      "Honeymoon decoration and cake upon arrival",
      "Floating breakfast at your private pool villa",
      "3-course candle light dinner with 2 glasses of local wine",
      "2-hour spa treatment",
      "Free shuttle to Seminyak Square as scheduled",
      "Free Wi-Fi",
    ],
    bookUrl: BOOKING_URL,
  },
  {
    id: "flower-fruit-bath",
    eyebrow: "In-Villa Indulgence",
    title: "Flower & Fruit Bath Decoration",
    price: "IDR 250.000",
    description:
      "Feel a different sensation with a beautifully prepared bath surrounded by flowers and fresh fruit. A calming ritual designed to make your stay feel even more comfortable and memorable.",
    image:
      "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/bd1/3b2/5e1bd13b2f2f7574829202.jpg",
    imageAlt: "Relaxing spa and bath experience at The Bali Dream Villa",
    note: "A private in-villa arrangement",
    inclusions: [
      "Decorated bath arrangement",
      "Fresh flowers and seasonal fruit",
      "Prepared privately in your villa",
    ],
    bookUrl: EXPERIENCE_BOOKING_URL,
  },
  {
    id: "floating-breakfast",
    eyebrow: "Slow Mornings",
    title: "Floating Breakfast",
    price: "IDR 250.000",
    description:
      "Enjoy breakfast in a different way. Start the morning in the privacy of your pool with a carefully arranged floating breakfast and your choice of a favourite breakfast style.",
    image:
      "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e7/327/fa4/5e7327fa4a72a124836851.jpg",
    imageAlt: "Breakfast experience by the private pool in Seminyak",
    note: "Served at your private pool villa",
    inclusions: [
      "American breakfast",
      "Continental breakfast",
      "Indonesian breakfast",
      "Indian breakfast",
    ],
    bookUrl: EXPERIENCE_BOOKING_URL,
  },
  {
    id: "cooking-class",
    eyebrow: "Taste of Bali",
    title: "Cooking Class with Market Tour",
    price: "IDR 1.500.000",
    description:
      "Discover the herbs, spices, and traditional ingredients that make Balinese cuisine so distinctive. The experience combines a traditional market tour with a hands-on cooking class led by our executive chef.",
    image:
      "https://www.thebalidreamvilla.com/storage/app/uploads/public/6a5/890/8e9/6a58908e955b9297042467.webp",
    imageAlt: "Curated culinary experience at The Bali Dream Villa",
    note: "Valid for 2 persons",
    inclusions: [
      "1-hour traditional market tour",
      "Cooking class with our executive chef",
      "Lunch",
      "Certificate",
    ],
    bookUrl: EXPERIENCE_BOOKING_URL,
  },
  {
    id: "sweet-couple-dinner",
    eyebrow: "Private Celebration",
    title: "Sweet Couple Dinner",
    price: "IDR 1.500.000",
    description:
      "Make the evening yours with an intimate dinner prepared beside your private pool. The setting combines floating flowers, candlelight, and a romantic set menu for an unforgettable celebration.",
    image:
      "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e1/bd0/ed4/5e1bd0ed42cee948347220.jpg",
    imageAlt: "Romantic dinner setting at a private pool villa",
    note: "Designed for a special evening",
    inclusions: [
      "Floating flower decoration",
      "Flower heart-shaped pool decoration",
      "Candle decoration around the pool",
      "Set menu dinner",
      "1 bottle of local wine",
    ],
    bookUrl: EXPERIENCE_BOOKING_URL,
  },
  {
    id: "candle-light-dinner",
    eyebrow: "Evening Ritual",
    title: "Candle Light Dinner",
    price: "IDR 1.200.000",
    description:
      "Turn a quiet evening into a beautiful memory. Enjoy a romantic set menu dinner surrounded by candlelight, with a flower heart-shaped decoration in the privacy of your villa pool.",
    image:
      "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e7/327/fa4/5e7327fa4a72a124836851.jpg",
    imageAlt: "Candle light dinner experience by the private pool",
    note: "A romantic private pool arrangement",
    inclusions: [
      "Flower heart-shaped pool decoration",
      "Candle decoration around the pool",
      "Set menu dinner",
      "2 glasses of local wine",
    ],
    bookUrl: EXPERIENCE_BOOKING_URL,
  },
];

const BENEFITS = [
  "Absolute best online rates guaranteed",
  "Save up to 35% compared to other travel sites",
  "Free one-way airport transfer for a minimum 3-night stay",
  "10% discount on food and beverages",
  "10% discount at Bali Dream Spa",
];

function OfferActions({ offer }) {
  return (
    <div className="mt-8 flex flex-col gap-3 border-t border-stone-700/15 pt-5 sm:flex-row">
      <a
        href={offer.bookUrl}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-brand-gold bg-brand-gold px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_8px_22px_rgba(176,125,26,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d59b21] hover:shadow-[0_12px_28px_rgba(176,125,26,0.28)]"
      >
        Book now
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
      <Link
        href="/enquire"
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-stone-700/25 bg-white/25 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-800 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/45"
      >
        Enquire now
        <Mail className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}

function OfferCard({ offer, index }) {
  const isImageLeft = index % 2 === 1;

  return (
    <motion.article
      id={offer.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="group scroll-mt-28 overflow-hidden rounded-[30px] border border-white/45 bg-white/[0.08] shadow-[0_18px_55px_rgba(45,45,40,0.12)] backdrop-blur-sm transition duration-500 hover:shadow-[0_24px_65px_rgba(45,45,40,0.18)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div
          className={`relative min-h-[360px] overflow-hidden sm:min-h-[450px] lg:min-h-[560px] ${
            isImageLeft ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <Image
            src={offer.image}
            alt={offer.imageAlt}
            fill
            unoptimized
            priority={index < 2}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-black/15" />

          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 sm:p-7">
            <span className="rounded-full border border-white/25 bg-black/25 px-3.5 py-2 text-[9px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-md">
              {offer.eyebrow}
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-md">
              <Sparkles className="h-4 w-4" />
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/75">
              The Bali Dream Villa Seminyak
            </p>
            <div className="mt-2 h-px w-12 bg-brand-gold" />
          </div>
        </div>

        <div
          className={`relative flex flex-col justify-between border-white/35 bg-white/[0.22] p-6 backdrop-blur-xl sm:p-9 md:p-12 lg:p-14 ${
            isImageLeft ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div aria-hidden="true" className="absolute -right-5 -top-10 text-[150px] font-serif text-stone-900/[0.035]">
            {String(index + 1).padStart(2, "0")}
          </div>

          <div className="relative">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/45 bg-brand-gold/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#9d6c11]">
                <Tag className="h-3 w-3" />
                Special offer
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-stone-700/15 bg-white/20 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.16em] text-stone-600">
                <CalendarDays className="h-3 w-3" />
                Enquire for details
              </span>
            </div>

            <h2 className="mt-5 max-w-lg font-serif text-3xl font-light leading-tight tracking-wide text-stone-900 sm:text-4xl md:text-[2.75rem]">
              {offer.title}
            </h2>

            <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-serif text-xl text-[#a97110] sm:text-2xl">{offer.price}</span>
              <span className="text-[10px] uppercase tracking-[0.16em] text-stone-500">
                {offer.note}
              </span>
            </div>

            <div className="mt-5 h-px w-16 bg-brand-gold" />
            <p className="mt-6 max-w-xl text-sm leading-7 text-stone-700 sm:text-[15px]">
              {offer.description}
            </p>

            <div className="mt-7">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.24em] text-stone-700">
                Included in this experience
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {offer.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs leading-5 text-stone-700">
                    <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-[#a97110]">
                      <Check className="h-2.5 w-2.5" strokeWidth={2.5} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <OfferActions offer={offer} />
        </div>
      </div>
    </motion.article>
  );
}

export default function SpecialOffersPage() {
  const { setActiveSlideImage } = useSliderBackground();
  const pageBackground = heroSlidesData?.[0]?.image || "/slider1.jpg";

  useEffect(() => {
    setActiveSlideImage(pageBackground);
  }, [pageBackground, setActiveSlideImage]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#d7d7d3]">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <Image
          src={pageBackground}
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="scale-105 object-cover opacity-[0.12] blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#eeeeeb]/85 via-[#d7d7d3]/90 to-[#cfd0cb]/95" />
      </div>

      <section className="relative px-4 pb-10 pt-32 sm:px-6 sm:pb-14 sm:pt-40 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-[#a97110] sm:text-xs">
              Curated moments in Seminyak
            </span>
            <h1 className="mt-4 font-serif text-4xl font-light uppercase tracking-[0.16em] text-stone-900 sm:text-5xl md:text-7xl">
              Special Offers
            </h1>
            <div className="mx-auto mt-5 h-px w-20 bg-brand-gold" />
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base">
              Make your stay more memorable with private dining, wellness rituals,
              cultural experiences, and romantic moments thoughtfully prepared by
              The Bali Dream Villa Seminyak.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-9 max-w-4xl overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <nav className="flex min-w-max justify-center gap-2 rounded-full border border-white/50 bg-white/[0.18] p-2 shadow-[0_10px_30px_rgba(45,45,40,0.08)] backdrop-blur-xl">
            {SPECIAL_OFFERS.map((offer) => (
              <a
                key={offer.id}
                href={`#${offer.id}`}
                className="rounded-full px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.14em] text-stone-600 transition hover:bg-white/35 hover:text-stone-900 sm:px-5"
              >
                {offer.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-10 px-4 pb-24 sm:space-y-14 sm:px-6 lg:px-8">
        {SPECIAL_OFFERS.map((offer, index) => (
          <OfferCard key={offer.id} offer={offer} index={index} />
        ))}

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[30px] border border-white/45 bg-white/[0.22] p-6 shadow-[0_18px_55px_rgba(45,45,40,0.1)] backdrop-blur-xl sm:p-10 md:p-14"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#a97110]">
                Direct booking benefits
              </span>
              <h2 className="mt-3 max-w-xl font-serif text-3xl font-light tracking-wide text-stone-900 sm:text-4xl">
                More value for your Bali escape
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-stone-700">
                Book directly with us to enjoy our best-rate guarantee and selected
                benefits during your stay.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#d59b21]"
                >
                  Book your stay
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <Link
                  href="/enquire"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-700/25 bg-white/25 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-800 transition hover:bg-white/45"
                >
                  Ask our team
                  <Mail className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {BENEFITS.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 rounded-2xl border border-white/40 bg-white/20 p-4 text-xs leading-5 text-stone-700"
                >
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-[#a97110]">
                    <Check className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>
      </section>
    </main>
  );
}