"use client";

import Link from "next/link";
import { useSliderBackground } from "@/components/SliderBackgroundProvider";

const socialLinks = [
  { label: "Instagram", shortLabel: "I", href: "#" },
  { label: "Facebook", shortLabel: "F", href: "#" },
  { label: "TikTok", shortLabel: "T", href: "#" },
  { label: "WhatsApp", shortLabel: "W", href: "#" },
];

export default function Footer() {
  const { activeSlideImage } = useSliderBackground();

  return (
    <footer className="relative z-10 isolate overflow-hidden bg-black px-3 py-8 text-stone-100 sm:px-5 sm:py-10 md:px-8 md:py-14">
      {/* Slider ada di BACKGROUND FOOTER, bukan di dalam card. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center transition-[background-image] duration-1000"
        style={{ backgroundImage: `url("${activeSlideImage}")` }}
      />

      {/* Lapisan hitam membuat background tetap elegant dan teks selalu terbaca. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/60"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/70"
      />

      {/* Card hanya glass transparan. Tidak ada gambar slider di dalamnya. */}
      <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[28px] border border-white/20 bg-white/[0.07] shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl md:rounded-[36px]">
        <div className="grid w-full grid-cols-1 gap-12 border-b border-white/15 px-6 py-12 sm:px-8 md:grid-cols-2 md:px-10 md:py-14 lg:grid-cols-3 lg:gap-14 xl:px-14 xl:py-16">
          <div className="flex flex-col justify-between space-y-7">
            <div className="space-y-4">
              <h3 className="font-serif text-sm font-semibold uppercase tracking-[0.22em] text-white sm:text-base">
                Newsletter Signup
              </h3>
              <p className="max-w-sm text-xs leading-relaxed text-stone-100/85">
                Subscribe to our newsletter to receive updates on special offers
                and exclusive deals.
              </p>
            </div>

            <form className="w-full max-w-sm space-y-3" onSubmit={(event) => event.preventDefault()}>
              <input
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/25 bg-black/15 px-4 py-3 text-xs text-white outline-none transition-all duration-300 placeholder:text-stone-200/70 hover:border-white/40 focus:border-brand-gold focus:bg-black/25 focus:ring-2 focus:ring-brand-gold/20"
              />
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-white/25 bg-black/15 px-4 py-3 text-xs text-white outline-none transition-all duration-300 placeholder:text-stone-200/70 hover:border-white/40 focus:border-brand-gold focus:bg-black/25 focus:ring-2 focus:ring-brand-gold/20"
              />
              <button
                type="submit"
                className="w-full rounded-xl border border-brand-gold/60 bg-brand-gold/90 py-3 text-xs font-bold tracking-[0.2em] text-white shadow-[0_10px_25px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-between space-y-7 md:border-l md:border-white/15 md:pl-10 lg:pl-12">
            <div className="space-y-4">
              <h3 className="font-serif text-sm font-semibold uppercase tracking-[0.22em] text-white sm:text-base">
                The Bali Dream Villa
              </h3>
              <p className="text-xs leading-loose tracking-wide text-stone-100/85">
                Jl. Bali Deli No. 99, Seminyak, <br />
                Kuta, Kabupaten Badung, Bali - Indonesia <br />
                <span className="mt-2 block font-semibold text-brand-gold">
                  Postal Code: 80361
                </span>
              </p>
            </div>

            <div className="text-[11px] tracking-wider text-stone-100/75">
              <p>
                Managed by{" "}
                <span className="mt-1 block font-medium tracking-widest text-white">
                  DREAM TEAM HOSPITALITY
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between space-y-7 md:col-span-2 md:border-l md:border-white/15 md:pl-10 lg:col-span-1 lg:pl-12">
            <div className="space-y-4">
              <h3 className="font-serif text-sm font-semibold uppercase tracking-[0.22em] text-white sm:text-base">
                Contact Us
              </h3>
              <div className="space-y-3 text-xs tracking-wide text-stone-100/85">
                <p className="flex flex-col gap-1 sm:block">
                  <span className="inline-block text-stone-100/65 sm:w-20">Corporate:</span>{" "}
                  info@thebalidreamvilla.com
                </p>
                <p className="flex flex-col gap-1 sm:block">
                  <span className="inline-block text-stone-100/65 sm:w-20">Seminyak:</span>{" "}
                  +62 361 737788
                </p>
                <p className="flex flex-col gap-1 sm:block">
                  <span className="inline-block text-stone-100/65 sm:w-20">Canggu:</span>{" "}
                  +62 878 0651 4620
                </p>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-gold hover:bg-brand-gold"
                >
                  {social.shortLabel}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-between gap-4 px-6 py-6 text-center text-[9px] tracking-[0.14em] text-stone-100/75 sm:px-8 sm:text-[10px] md:flex-row md:px-10 md:text-left xl:px-14">
          <p>© 2026 THE BALI DREAM VILLA. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/privacy" className="transition-colors duration-300 hover:text-brand-gold">
              PRIVACY POLICY
            </Link>
            <Link href="/terms" className="transition-colors duration-300 hover:text-brand-gold">
              TERMS & CONDITIONS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}