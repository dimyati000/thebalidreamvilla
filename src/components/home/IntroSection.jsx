import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="relative isolate overflow-hidden border-t border-white/30 bg-transparent px-4 py-14 md:px-8 md:py-24">
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-32 top-0 -z-10 h-72 w-72 rounded-full bg-brand-gold/[0.09] blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-0 -z-10 h-80 w-80 rounded-full bg-white/70 blur-3xl" />

      <div className="mx-auto max-w-5xl">
        <div className="rounded-[28px] border border-white/55 bg-white/[0.32] px-6 py-12 text-center shadow-[0_18px_55px_rgba(55,55,48,0.11)] ring-1 ring-black/[0.03] backdrop-blur-xl sm:px-10 md:rounded-[34px] md:px-16 md:py-16">
          <div className="space-y-5">
            <span className="block text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold">
              A Private Oasis
            </span>

            <h2 className="font-serif text-2xl font-light uppercase tracking-widest text-stone-900 md:text-4xl">
              The Bali Dream Villa Seminyak
            </h2>

            <div className="mx-auto h-px w-12 bg-brand-gold" />
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-xs font-light leading-loose tracking-wide text-stone-600 md:text-sm">
            The Bali Dream Villa Seminyak features exquisite Balinese private
            pool villas surrounded by lush tropical gardens. Each villa offers
            unparalleled seclusion, complete with fully equipped kitchen
            spaces, modern entertainment arrays, and our signature personalized
            luxury service. Located strategically in the heart of Seminyak, it
            is your definitive gateway to experiencing genuine island living.
          </p>

          <div className="pt-8">
            <Link
              href="/about"
              className="inline-flex rounded-full border border-white/60 bg-white/30 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.28em] text-stone-800 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-gold/50 hover:bg-white/55 hover:text-brand-gold"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}