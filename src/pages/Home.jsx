import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const services = [
    "Spa",
    "Room Service",
    "Villa Compendium",
    "Villa Rules",
    "Facilities",
    "Activities",
  ];

  const promos = ["Garden Relaxation", "Breakfast Special", "Tropical Walk"];

  return (
    <div className="w-full max-w-md mx-auto min-h-screen bg-stone-50 flex flex-col">
      {/* HEADER */}
      <div className="px-6 pt-10 pb-6 border-b border-stone-200 text-center">
        <h1 className="text-2xl font-semibold text-stone-800 tracking-wide">
          The Bali Dream
        </h1>
      </div>

      <div className="flex-1 px-6 py-8 space-y-10">
        {/* WELCOME */}
        <section>
          <h2 className="text-lg font-semibold text-stone-800 mb-3">
            Welcome Our Beloved Guest
          </h2>

          <p className="text-sm text-stone-600 leading-relaxed">
            Welcome to The Bali Dream Villa, a peaceful sanctuary designed for
            comfort, privacy, and unforgettable moments. From thoughtfully
            curated rooms to personalized services, we are here to make your
            stay truly special.
          </p>

          <button
            onClick={() => navigate("/services")}
            className="mt-5 px-5 py-3 border border-stone-400 text-stone-700 text-sm hover:bg-stone-100 transition"
          >
            Contact Us
          </button>
        </section>

        {/* SERVICES */}
        <section>
          <h3 className="text-sm font-semibold text-stone-700 mb-4">
            SERVICES
          </h3>

          <button
            onClick={() => navigate("/services")}
            className="w-full border border-stone-300 rounded-xl p-5 hover:bg-stone-100 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              {/* icon */}
              <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-lg">
                ✨
              </div>

              {/* text */}
              <div className="flex-1 text-left">
                <p className="text-stone-800 text-sm font-medium">
                  Explore Our Services
                </p>

                <p className="text-stone-500 text-xs">
                  Spa • Room Service • Facilities • Activities
                </p>
              </div>

              {/* arrow */}
              <svg
                className="w-4 h-4 text-stone-400 group-hover:text-stone-700 transition"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        </section>

        {/* PROMOTION */}
        <section>
          <h3 className="text-sm font-semibold text-stone-700 mb-4">
            PROMOTION
          </h3>

          <div className="grid grid-cols-3 gap-3">
            {promos.map((promo, i) => (
              <div
                key={i}
                className="border border-stone-300 py-10 text-center text-xs text-stone-600"
              >
                {promo}
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="space-y-3">
          <h3 className="text-sm font-semibold text-stone-700">CONTACT</h3>

          <p className="text-sm text-stone-600">+62 361 737 788</p>

          <p className="text-sm text-stone-600 break-all">
            info@thebalidreamvilla.com
          </p>
        </section>
      </div>

      {/* FOOTER */}
      <div className="border-t border-stone-200 px-6 py-6 text-center text-xs text-stone-500">
        © The Bali Dream Villa
      </div>
    </div>
  );
}
