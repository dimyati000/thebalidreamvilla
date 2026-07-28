import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { offersData } from "@/data/homeData";

export default function OffersSection() {
  const gridStyles = [
    "h-[400px] lg:col-span-7 lg:h-[480px]",
    "h-[400px] lg:col-span-5 lg:h-[480px]",
    "h-[400px] lg:col-span-4 lg:h-[550px]",
    "h-[400px] lg:col-span-8 lg:h-[550px]",
    "h-[400px] lg:col-span-6 lg:h-[450px]",
    "h-[400px] lg:col-span-6 lg:h-[450px]",
  ];

  return (
    <section className="relative isolate overflow-hidden border-t border-white/30 bg-transparent px-4 py-14 md:px-8 md:py-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 top-20 -z-10 h-96 w-96 rounded-full bg-brand-gold/[0.08] blur-3xl" />

      <div className="pointer-events-none absolute -left-28 bottom-20 -z-10 h-80 w-80 rounded-full bg-white/70 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        {/* Section title */}
        <div className="mb-10 space-y-5 text-center md:mb-12">
          <span className="block text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold">
            Curated Privileges
          </span>

          <h2 className="font-serif text-2xl font-light uppercase tracking-widest text-stone-900 md:text-4xl">
            Special Offers
          </h2>

          <div className="mx-auto h-px w-12 bg-brand-gold" />
        </div>

        {/* Offers grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {offersData.slice(0, 6).map((item, idx) => (
            <article
              key={item.title || idx}
              className={`group relative isolate w-full overflow-hidden rounded-[28px] border border-white/50 bg-white/20 shadow-[0_18px_50px_rgba(45,45,40,0.14)] ring-1 ring-black/[0.035] backdrop-blur-xl md:rounded-[34px] ${
                gridStyles[idx] || "h-[400px] lg:col-span-4"
              }`}
            >
              {/* Image wrapper */}
              <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Soft dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/15 to-stone-950/10 transition-colors duration-500 group-hover:from-stone-950/80" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-between p-5 text-white sm:p-6">
                {/* Glass tag */}
                <span className="w-fit rounded-full border border-white/25 bg-black/15 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-brand-gold shadow-sm backdrop-blur-md">
                  {item.tag || "Exclusive Package"}
                </span>

                {/* Glass information card */}
                <div className="w-full overflow-hidden rounded-[22px] border border-white/25 bg-stone-950/25 p-5 shadow-[0_12px_35px_rgba(0,0,0,0.16)] backdrop-blur-xl sm:p-6">
                  <span className="block text-[9px] font-light uppercase tracking-widest text-white/70">
                    {item.subtitle}
                  </span>

                  <h3 className="mt-2 max-w-xl font-serif text-xl font-light uppercase leading-tight tracking-wide text-white md:text-2xl">
                    {item.title}
                  </h3>

                  {/* Description visible on mobile, hover on desktop */}
                  <div className="mt-3 max-h-40 overflow-hidden border-t border-white/15 pt-3 opacity-100 transition-all duration-500 ease-out lg:mt-0 lg:max-h-0 lg:border-transparent lg:pt-0 lg:opacity-0 lg:group-hover:mt-3 lg:group-hover:max-h-40 lg:group-hover:border-white/15 lg:group-hover:pt-3 lg:group-hover:opacity-100">
                    <p className="max-w-md text-xs font-light leading-relaxed text-white/70">
                      {item.desc}
                    </p>

                    <Link
                      href="/offers"
                      className="mt-4 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.25em] text-brand-gold transition-colors duration-300 hover:text-white"
                    >
                      <span>View Experience</span>
                      <ArrowUpRight size={14} strokeWidth={1.8} />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}