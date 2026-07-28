import Image from "next/image";
import { facilitiesData } from "@/data/homeData";

export default function FacilitiesSection() {
  return (
    <section className="relative isolate overflow-hidden border-t border-white/30 bg-transparent px-4 py-14 md:px-8 md:py-20">
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-36 top-24 -z-10 h-80 w-80 rounded-full bg-white/75 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-brand-gold/[0.08] blur-3xl" />

      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-10 space-y-5 text-center md:mb-12">
          <span className="block text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold">
            Resort Indulgences
          </span>

          <h2 className="font-serif text-2xl font-light uppercase tracking-widest text-stone-900 md:text-3xl">
            Our Facilities
          </h2>

          <div className="mx-auto h-px w-12 bg-brand-gold" />
        </div>

        {/* Facilities cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-7">
          {facilitiesData.map((fac, idx) => (
            <article
              key={fac.name || idx}
              className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[50px] border border-white/55 bg-white/[0.28] p-3 shadow-[0_18px_48px_rgba(45,45,40,0.11)] ring-1 ring-black/[0.03] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.42] hover:shadow-[0_24px_58px_rgba(45,45,40,0.15)] md:rounded-[32px]"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[22px] bg-white/20">
                <Image
                  src={fac.image}
                  alt={fac.name}
                  fill
                  className="scale-[1.03] object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-100"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Soft overlay */}
                <div className="absolute inset-0 z-10 bg-stone-950/[0.08] transition-colors duration-700 group-hover:bg-transparent" />

                {/* Number */}
                <span className="absolute right-3 top-3 z-20 rounded-full border border-white/30 bg-black/15 px-3 py-1.5 font-serif text-[10px] tracking-widest text-white shadow-sm backdrop-blur-md">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Information */}
              <div className="flex flex-1 flex-col px-3 pb-4 pt-5">
                <h3 className="font-serif text-base font-light uppercase tracking-[0.15em] text-stone-900 transition-colors duration-300 group-hover:text-brand-gold">
                  {fac.name}
                </h3>

                <div className="mt-3 h-px w-12 bg-brand-gold/30 transition-all duration-500 ease-out group-hover:w-full group-hover:bg-brand-gold" />

                <p className="mt-4 flex-1 text-xs font-light leading-relaxed tracking-wide text-stone-600">
                  {fac.desc}
                </p>

                <div className="mt-5">
                  <span className="inline-flex rounded-full border border-white/60 bg-white/25 px-4 py-2 text-[9px] font-medium uppercase tracking-[0.2em] text-brand-gold shadow-sm backdrop-blur-md transition-all duration-300 group-hover:bg-white/55">
                    Discover More →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}