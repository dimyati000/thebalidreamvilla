import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="py-14 md:py-24 px-4 md:px-8 max-w-6xl mx-auto text-center space-y-8 bg-white">
      <div className="space-y-5">
        <span className="text-[10px] tracking-[0.4em] text-brand-gold uppercase font-bold block">
          A Private Oasis
        </span>
        <h2 className="font-serif text-2xl md:text-4xl text-stone-900 tracking-widest uppercase font-light">
          The Bali Dream Villa Seminyak
        </h2>
        <div className="w-12 h-[1px] bg-brand-gold mx-auto" />
      </div>

      <p className="text-stone-600 text-xs md:text-sm leading-loose tracking-wide font-light max-w-3xl mx-auto">
        The Bali Dream Villa Seminyak features exquisite Balinese private pool
        villas surrounded by lush tropical gardens. Each villa offers
        unparalleled seclusion, complete with fully equipped kitchen spaces,
        modern entertainment arrays, and our signature personalized luxury
        service. Located strategically in the heart of Seminyak, it is your
        definitive gateway to experiencing genuine island living.
      </p>

      <div className="pt-4">
        <Link
          href="/about"
          className="text-[11px] tracking-[0.3em] text-stone-900 hover:text-brand-gold uppercase font-bold transition-colors duration-300 border-b border-stone-900 hover:border-brand-gold pb-1"
        >
          Discover Our Story
        </Link>
      </div>
    </section>
  );
}
