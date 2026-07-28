"use client";
import Image from "next/image";
import { facilitiesData } from "@/data/homeData";

export default function FacilitiesSection() {
  return (
    <section className="py-14 md:py-20 px-4 md:px-8 bg-white border-t border-stone-200/40 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-5 mb-10 md:mb-12">
          <span className="text-[10px] tracking-[0.4em] text-brand-gold uppercase font-bold block">
            Resort Indulgences
          </span>
          <h2 className="font-serif text-2xl md:text-3xl text-stone-900 tracking-widest font-light uppercase">
            Our Facilities
          </h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto" />
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {facilitiesData.map((fac, idx) => (
            <div
              key={idx}
              className="flex flex-col space-y-4 group cursor-pointer"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-50 shadow-sm">
                <div className="absolute inset-0 bg-stone-950/5 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <Image
                  src={fac.image}
                  alt={fac.name}
                  fill
                  className="object-cover scale-103 group-hover:scale-100 transition-transform duration-[1.5s] ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-3 right-3 z-20 font-serif text-[10px] tracking-widest text-white/80 bg-stone-900/30 backdrop-blur-sm px-2 py-1">
                  0{idx + 1}
                </span>
              </div>

              {/* Typography Layout */}
              <div className="space-y-2 px-1">
                <h3 className="font-serif text-base tracking-[0.15em] uppercase text-stone-900 font-light group-hover:text-brand-gold transition-colors duration-300">
                  {fac.name}
                </h3>

                <div className="w-12 h-[1px] bg-brand-gold/30 group-hover:w-full group-hover:bg-brand-gold transition-all duration-500 ease-in-out" />

                <p className="text-stone-500 text-xs font-light leading-relaxed tracking-wide pt-1">
                  {fac.desc}
                </p>

                <div className="pt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[9px] tracking-[0.2em] font-medium uppercase text-brand-gold">
                    Discover More →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
