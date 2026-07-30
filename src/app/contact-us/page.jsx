"use client";

import Image from "next/image";

const CONTACT_ITEMS = [
  {
    label: "Address",
    content: (
      <>
        Jl. Bidadari No. 108x
        <br />
        Seminyak – Bali, Indonesia
      </>
    ),
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </>
    ),
  },
  {
    label: "Phone",
    content: (
      <a
        href="tel:+62361737788"
        className="transition-colors duration-300 hover:text-brand-gold"
      >
        +62 361 737788
      </a>
    ),
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.496-4.196-7.092-7.092l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    ),
  },
  {
    label: "Email",
    content: (
      <a
        href="mailto:info@thebalidreamvilla.com"
        className="break-all transition-colors duration-300 hover:text-brand-gold"
      >
        info@thebalidreamvilla.com
      </a>
    ),
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    ),
  },
];

const MAP_URL =
  "https://www.google.com/maps?q=The%20Bali%20Dream%20Villa%20Seminyak%20Jl.%20Bidadari%20No.%20108x&output=embed";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=The+Bali+Dream+Villa+Seminyak+Jl.+Bidadari+No.+108x";

export default function ContactPage() {
  const handleWhatsAppSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const firstName = formData.get("firstName")?.toString().trim() ?? "";
    const lastName = formData.get("lastName")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const message = formData.get("message")?.toString().trim() ?? "";

    const whatsappMessage = [
      "Hello Bali Dream Villa,",
      "",
      `Name: ${firstName} ${lastName}`.trim(),
      `Email: ${email}`,
      `Message: ${message}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/628213140701?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="relative min-h-screen bg-stone-50">
      {/* HERO + CONTACT */}
      <section className="relative isolate w-full pb-20 pt-28 md:pb-28 md:pt-40">
        <div className="absolute inset-0 -z-20">
          <Image
            src="https://www.thebalidreamvilla.com/storage/app/uploads/public/5dd/788/c49/5dd788c49c221775095105.jpg"
            alt="The Bali Dream Villa Seminyak"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Hero overlay dibuat lebih lembut menuju bagian map */}
        <div className="absolute inset-0 -z-10 bg-black/45" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/15 to-transparent" />
        {/* Fade smoothly to the background color at the bottom of the hero image */}
        <div className="absolute bottom-0 left-0 right-0 h-48 -z-10 bg-gradient-to-b from-transparent to-stone-50" />

        <header className="mx-auto mb-12 space-y-4 px-4 text-center md:mb-16">
          <span className="block text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold md:text-xs">
            Get In Touch
          </span>
          <h1 className="font-serif text-3xl font-light uppercase tracking-widest text-white sm:text-4xl md:text-6xl">
            Contact Us
          </h1>
          <div className="mx-auto h-px w-16 bg-brand-gold" />
        </header>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[30px] border border-white/30 bg-white/[0.09] shadow-[0_0_50px_rgba(255,255,255,0.12)] backdrop-blur-xl md:rounded-[38px]">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* CONTACT INFORMATION */}
              <div className="flex flex-col justify-center space-y-10 p-8 md:p-14 lg:p-16">
                <div className="space-y-4">
                  <h2 className="max-w-md font-serif text-2xl leading-tight tracking-wide text-white md:text-3xl">
                    The Bali Dream Villa Seminyak
                  </h2>
                  <p className="max-w-md text-sm leading-relaxed text-stone-100/80">
                    Live out the holiday you&apos;ve always wanted in your own
                    tropical paradise. Reach out to us for any inquiries or
                    assistance.
                  </p>
                </div>

                <div className="space-y-7">
                  {CONTACT_ITEMS.map((item) => (
                    <div
                      key={item.label}
                      className="group flex items-start gap-5"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/[0.08] text-white transition-all duration-300 group-hover:border-brand-gold group-hover:bg-brand-gold">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          {item.icon}
                        </svg>
                      </div>

                      <div>
                        <h3 className="mb-2 text-[11px] font-bold uppercase tracking-widest text-stone-300">
                          {item.label}
                        </h3>
                        <div className="text-sm font-medium leading-relaxed text-white md:text-base">
                          {item.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CONTACT FORM */}
              <div className="flex flex-col justify-center border-t border-white/15 bg-black/[0.18] p-8 md:p-14 lg:border-l lg:border-t-0 lg:p-16">
                <h2 className="mb-8 font-serif text-xl text-white md:text-2xl">
                  Send us a message
                </h2>

                <form className="space-y-5" onSubmit={handleWhatsAppSubmit}>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field
                      label="First Name"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      placeholder="John"
                    />
                    <Field
                      label="Last Name"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      placeholder="Doe"
                    />
                  </div>

                  <Field
                    label="Email Address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="john@example.com"
                  />

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="ml-1 block text-xs font-semibold uppercase tracking-wider text-stone-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="How can we help you?"
                      className="w-full resize-none rounded-2xl border border-white/20 bg-black/15 px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-stone-300/60 hover:border-white/30 focus:border-brand-gold focus:bg-black/25 focus:ring-2 focus:ring-brand-gold/15"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full rounded-2xl border border-brand-gold/60 bg-brand-gold/90 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold hover:shadow-[0_14px_30px_rgba(0,0,0,0.20)] focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:ring-offset-2 focus:ring-offset-transparent"
                  >
                    Send via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        MAP TRANSITION
        Gradient luar hanya menjadi breathing space dan memudar sebelum footer.
        Map overlap sedikit ke hero supaya perpindahan tidak terlihat terpotong.
      */}
      <section className="relative isolate -mt-14 pb-20 md:-mt-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[28px] border border-white/30 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.04] md:rounded-[34px]">
            {/* Jembatan visual antara contact card dan peta */}
            <div className="flex flex-col gap-4 border-b border-white/10 bg-[#1b1914]/90 px-6 py-5 text-white backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between md:px-8">
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-gold/10 text-brand-gold">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand-gold">
                    Our Location
                  </p>
                  <h2 className="mt-1 font-serif text-base tracking-wide sm:text-lg">
                    The Bali Dream Villa Seminyak
                  </h2>
                </div>
              </div>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-stone-200 transition-colors duration-300 hover:text-brand-gold"
              >
                Open in Google Maps
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13.5 4.5H19.5V10.5M19.5 4.5L10.5 13.5M6.75 6.75H5.25A2.25 2.25 0 003 9v9.75A2.25 2.25 0 005.25 21h9.75a2.25 2.25 0 002.25-2.25v-1.5"
                  />
                </svg>
              </a>
            </div>

            <div className="h-[360px] w-full bg-stone-200 md:h-[500px]">
              <iframe
                src={MAP_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Bali Dream Villa Seminyak location map"
                className="block h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 
        FOOTER TRANSITION
        Membuat gradasi putih halus yang tumpah ke arah footer agar tidak ada potongan kasar
      */}
      <div 
        aria-hidden="true" 
        className="absolute left-0 right-0 -bottom-10 h-10 bg-gradient-to-b from-stone-50 to-transparent pointer-events-none z-20"
      />
    </main>
  );
}

function Field({ label, name, type, autoComplete, placeholder }) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="ml-1 block text-xs font-semibold uppercase tracking-wider text-stone-300"
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        autoComplete={autoComplete}
        required
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/20 bg-black/15 px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-stone-300/60 hover:border-white/30 focus:border-brand-gold focus:bg-black/25 focus:ring-2 focus:ring-brand-gold/15"
      />
    </div>
  );
}