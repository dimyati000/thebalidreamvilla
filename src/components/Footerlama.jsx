import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-olive text-stone-200 pt-20 pb-10 border-t border-black/10">
      <div className="w-full px-6 md:px-12 xl:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 pb-16 border-b border-stone-700/30">
        {/* KOLOM 1: Newsletter Signup */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h3 className="font-serif text-base tracking-[0.2em] text-white uppercase font-semibold">
              Newsletter Signup
            </h3>
            <p className="text-stone-300 text-xs leading-relaxed max-w-sm">
              Subscribe to our newsletter to receive updates on special offers
              and exclusive deals.
            </p>
          </div>

          <form className="space-y-3 w-full max-w-sm">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-brand-dark/30 border border-stone-700/40 text-stone-200 px-4 py-3 text-xs focus:outline-none focus:border-brand-gold placeholder-stone-400 rounded-none transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-brand-dark/30 border border-stone-700/40 text-stone-200 px-4 py-3 text-xs focus:outline-none focus:border-brand-gold placeholder-stone-400 rounded-none transition-colors"
            />
            <button
              type="submit"
              className="w-full bg-brand-gold hover:bg-brand-goldHover text-white font-bold tracking-[0.2em] text-xs py-3 rounded-none transition-colors duration-300"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

        {/* KOLOM 2: Info & Alamat Utama */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h3 className="font-serif text-base tracking-[0.2em] text-white uppercase font-semibold">
              The Bali Dream Villa
            </h3>
            <p className="text-stone-300 text-xs leading-loose tracking-wide">
              Jl. Bali Deli No. 99, Seminyak, <br />
              Kuta, Kabupaten Badung, Bali - Indonesia <br />
              <span className="block mt-2 font-semibold text-brand-gold">
                Postal Code: 80361
              </span>
            </p>
          </div>

          <div className="text-[11px] text-stone-400 tracking-wider">
            <p>
              Managed by{" "}
              <span className="text-stone-100 font-medium tracking-widest block mt-1">
                DREAM TEAM HOSPITALITY
              </span>
            </p>
          </div>
        </div>

        {/* KOLOM 3: Kontak & Social Media */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h3 className="font-serif text-base tracking-[0.2em] text-white uppercase font-semibold">
              Contact Us
            </h3>
            <div className="text-xs space-y-3 text-stone-300 tracking-wide">
              <p>
                <span className="text-stone-400 inline-block w-20">
                  Corporate:
                </span>{" "}
                info@thebalidreamvilla.com
              </p>
              <p>
                <span className="text-stone-400 inline-block w-20">
                  Seminyak:
                </span>{" "}
                +62 361 737788
              </p>
              <p>
                <span className="text-stone-400 inline-block w-20">
                  Canggu:
                </span>{" "}
                +62 878 0651 4620
              </p>
            </div>
          </div>

          <div className="flex space-x-3 pt-2">
            {["I", "F", "T", "W"].map((letter) => (
              <a
                key={letter}
                href="#"
                className="w-9 h-9 rounded-full border border-stone-600/50 flex items-center justify-center text-stone-300 hover:text-brand-dark hover:bg-brand-gold hover:border-brand-gold transition-all text-xs font-semibold"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="w-full px-6 md:px-12 xl:px-16 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-stone-400 tracking-[0.15em] gap-4">
        <p>© 2026 THE BALI DREAM VILLA. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-6">
          <Link
            href="/privacy"
            className="hover:text-brand-gold transition-colors"
          >
            PRIVACY POLICY
          </Link>
          <Link
            href="/terms"
            className="hover:text-brand-gold transition-colors"
          >
            TERMS & CONDITIONS
          </Link>
        </div>
      </div>
    </footer>
  );
}
