import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { offersData } from "@/data/homeData";

export default function OffersSection() {
  const gridStyles = [
    "lg:col-span-7 h-[400px] lg:h-[480px]",
    "lg:col-span-5 h-[400px] lg:h-[480px]",
    "lg:col-span-4 h-[400px] lg:h-[550px]",
    "lg:col-span-8 h-[400px] lg:h-[550px]",
    "lg:col-span-6 h-[400px] lg:h-[450px]",
    "lg:col-span-6 h-[400px] lg:h-[450px]",
  ];

  return (
    <section className="relative isolate overflow-hidden border-t border-white/30 bg-transparent px-4 py-14 md:px-8 md:py-20">
      {/* Background accents */}
      <div className="pointer-events-none absolute -right-32 top-20 -z-10 h-96 w-96 rounded-full bg-brand-gold/[0.08] blur-3xl" />
      <div className="pointer-events-none absolute -left-28 bottom-20 -z-10 h-80 w-80 rounded-full bg-white/65 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-10 space-y-5 text-center md:mb-12">
          <span className="block text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold">
            Curated Privileges
          </span>

          <h2 className="font-serif text-2xl font-light uppercase tracking-widest text-stone-900 md:text-4xl">
            Special Offers
          </h2>

          <div className="mx-auto h-px w-12 bg-brand-gold" />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {offersData.slice(0, 6).map((item, idx) => (
            <article
              key={item.title || idx}
              className={`group relative w-full overflow-hidden rounded-[28px] border border-white/45 bg-white/[0.18] shadow-[0_18px_50px_rgba(45,45,40,0.14)] ring-1 ring-black/[0.035] backdrop-blur-md md:rounded-[34px] ${
                gridStyles[idx] || "lg:col-span-4"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Soft image overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-stone-950/65 via-stone-950/10 to-stone-950/[0.08]" />

              {/* Glass label */}
              <span className="absolute left-5 top-5 z-20 rounded-full border border-white/25 bg-black/15 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-brand-gold shadow-sm backdrop-blur-md sm:left-6 sm:top-6">
                {item.tag || "Exclusive Package"}
              </span>

              {/* Glass information card */}
              <div className="absolute inset-x-4 bottom-4 z-20 rounded-[22px] border border-white/20 bg-stone-950/25 p-5 text-white shadow-lg backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-6">
                <span className="block text-[9px] font-light uppercase tracking-widest text-white/65">
                  {item.subtitle}
                </span>

                <h3 className="mt-2 max-w-xl font-serif text-xl font-light uppercase leading-tight tracking-wide text-white md:text-2xl">
                  {item.title}
                </h3>

                <div className="mt-3 max-h-32 overflow-hidden border-t border-white/15 pt-3 opacity-100 transition-all duration-500 ease-out lg:mt-0 lg:max-h-0 lg:border-transparent lg:pt-0 lg:opacity-0 lg:group-hover:mt-3 lg:group-hover:max-h-40 lg:group-hover:border-white/15 lg:group-hover:pt-3 lg:group-hover:opacity-100">
                  <p className="max-w-md text-xs font-light leading-relaxed text-white/70">
                    {item.desc}
                  </p>

                  <Link
                    href="/offers"
                    className="mt-4 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.25em] text-brand-gold transition-colors hover:text-white"
                  >
                    <span>View Experience</span>
                    <ArrowUpRight size={14} strokeWidth={1.8} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}