"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

// ─── CONFIG ──────────────────────────────────────────────────────────────────

const HERO_IMAGE =
  "https://www.thebalidreamvilla.com/storage/app/uploads/public/5e2/eb5/915/5e2eb591576e2183953249.jpg";

const WHATSAPP_NUMBER = "6282131407011"; // +62821-3140-701 → no dashes/spaces, with country code

// ─── SELECT OPTIONS ───────────────────────────────────────────────────────────

const VILLA_TYPES = [
  "One Bedroom Private Pool Villa",
  "Two Bedroom Private Pool Villa",
  "Three Bedroom Private Pool Villa",
  "Four Bedroom Private Pool Villa",
  "Not Sure Yet",
];

const ENQUIRY_TYPES = [
  "General Enquiry",
  "Room Reservation",
  "Special Offers & Packages",
  "Spa & Wellness",
  "Restaurant & Dining",
  "Tour & Activities",
  "Wedding & Events",
  "Other",
];

const GUEST_COUNTS = ["1", "2", "3", "4", "5", "6", "7", "8", "8+"];

// ─── INITIAL FORM STATE ───────────────────────────────────────────────────────

const INITIAL_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  villaType: "",
  enquiryType: "",
  checkIn: "",
  checkOut: "",
  guests: "",
  specialRequests: "",
};

// ─── FORM FIELD COMPONENTS ────────────────────────────────────────────────────

function FieldLabel({ children, required }) {
  return (
    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-stone-600">
      {children}
      {required && <span className="ml-1 text-brand-gold">*</span>}
    </label>
  );
}

const inputBase =
  "mt-1.5 w-full rounded-xl border border-stone-300/80 bg-white/60 px-4 py-3 text-sm text-stone-800 placeholder-stone-400 backdrop-blur-sm outline-none transition-all duration-200 focus:border-brand-gold focus:bg-white/90 focus:ring-2 focus:ring-brand-gold/20 hover:border-stone-400";

const selectBase =
  "mt-1.5 w-full rounded-xl border border-stone-300/80 bg-white/60 px-4 py-3 text-sm text-stone-800 backdrop-blur-sm outline-none transition-all duration-200 focus:border-brand-gold focus:bg-white/90 focus:ring-2 focus:ring-brand-gold/20 hover:border-stone-400 appearance-none cursor-pointer";

// ─── MAIN ENQUIRE PAGE ────────────────────────────────────────────────────────

export default function EnquirePage() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter a valid email address";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.enquiryType) newErrors.enquiryType = "Please select an enquiry type";
    return newErrors;
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      "📩 *NEW ENQUIRY — The Bali Dream Villa*",
      "",
      `👤 *Name:* ${form.firstName} ${form.lastName}`,
      `📧 *Email:* ${form.email}`,
      `📞 *Phone:* ${form.phone}`,
      form.country ? `🌏 *Country:* ${form.country}` : null,
      "",
      `📌 *Enquiry Type:* ${form.enquiryType}`,
      form.villaType ? `🏡 *Villa Type:* ${form.villaType}` : null,
      form.guests ? `👥 *Number of Guests:* ${form.guests}` : null,
      form.checkIn ? `📅 *Check-In:* ${form.checkIn}` : null,
      form.checkOut ? `📅 *Check-Out:* ${form.checkOut}` : null,
      form.specialRequests
        ? `\n💬 *Special Requests:*\n${form.specialRequests}`
        : null,
    ]
      .filter(Boolean)
      .join("\n");

    return encodeURIComponent(lines);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to first error
      const firstErrorKey = Object.keys(validationErrors)[0];
      document.getElementById(firstErrorKey)?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const message = buildWhatsAppMessage();
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#d7d7d3]">
      {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
      <section className="relative isolate flex min-h-[480px] flex-col justify-end overflow-hidden px-4 pb-10 pt-32 text-center sm:min-h-[560px] sm:pb-12 md:min-h-[620px] md:pt-40">
        <Image
          src={HERO_IMAGE}
          alt="Enquire — The Bali Dream Villa"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/25 to-black/35" />
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-b from-transparent via-[#d7d7d3]/40 to-[#d7d7d3]" />

        <div className="relative z-10 mx-auto mb-6 w-full max-w-2xl">
          <span className="block text-[10px] font-bold uppercase tracking-[0.5em] text-brand-gold drop-shadow-md md:text-xs">
            Get in Touch
          </span>
          <h1 className="mt-3 font-serif text-4xl font-light uppercase tracking-widest text-white drop-shadow-lg sm:text-5xl md:text-6xl">
            Enquire
          </h1>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/90 drop-shadow-md">
            Have a question or ready to plan your stay? Fill out the form below and our team will respond via WhatsApp promptly.
          </p>
        </div>
      </section>

      {/* ── MAIN FORM SECTION ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 pb-28 pt-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

          {/* ── LEFT: INFO SIDEBAR ──────────────────────────────────────── */}
          <motion.aside
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            {/* Contact Card */}
            <div className="overflow-hidden rounded-[24px] border border-white/60 bg-white/50 shadow-[0_12px_36px_rgba(45,45,40,0.1)] backdrop-blur-sm">
              <div className="p-6 sm:p-8">
                <span className="block text-[10px] font-bold uppercase tracking-[0.35em] text-brand-gold">
                  Contact Us
                </span>
                <h2 className="mt-2 font-serif text-2xl font-light tracking-wide text-stone-800">
                  We&apos;re Here to Help
                </h2>
                <div className="mt-3 h-px w-10 bg-brand-gold" />
                <p className="mt-4 text-xs leading-relaxed text-stone-600">
                  Our dedicated guest experience team is ready to assist you 24/7. Submit the form and we will get back to you on WhatsApp as soon as possible.
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      icon: (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      ),
                      label: "Seminyak",
                      value: "+62 361 737788",
                    },
                    {
                      icon: (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      ),
                      label: "Email",
                      value: "info@thebalidreamvilla.com",
                    },
                    {
                      icon: (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      ),
                      label: "Address",
                      value: "Jl. Bidadari No. 108x, Seminyak, Bali 80361",
                    },
                  ].map((info, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-stone-300 bg-white/70">
                        <svg className="h-4 w-4 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {info.icon}
                        </svg>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-stone-500">{info.label}</p>
                        <p className="mt-0.5 text-xs font-medium text-stone-800">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp Banner */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border-t border-stone-200/80 bg-[#25D366]/10 p-5 transition-colors hover:bg-[#25D366]/20"
              >
                <svg className="h-8 w-8 flex-shrink-0 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <div>
                  <p className="text-xs font-bold tracking-wide text-stone-800">Chat on WhatsApp</p>
                  <p className="text-[10px] text-stone-500">+62 821-3140-701</p>
                </div>
                <svg className="ml-auto h-4 w-4 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Quick Tips Card */}
            <div className="rounded-[24px] border border-white/60 bg-white/50 p-6 shadow-[0_8px_24px_rgba(45,45,40,0.08)] backdrop-blur-sm sm:p-7">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500">Good to Know</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "We typically respond within 1–2 hours during business hours.",
                  "Your enquiry will be sent directly to our team via WhatsApp.",
                  "For immediate assistance, call +62 361 737788.",
                  "Best rates guaranteed when booking direct with us.",
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs leading-relaxed text-stone-600">
                    <svg className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>

          {/* ── RIGHT: ENQUIRY FORM ──────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8"
          >
            {submitted ? (
              /* ── SUCCESS STATE ─────────────────────────────────────────── */
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex min-h-[480px] flex-col items-center justify-center rounded-[28px] border border-white/60 bg-white/50 p-10 text-center shadow-[0_12px_36px_rgba(45,45,40,0.1)] backdrop-blur-sm"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#25D366]/30 bg-[#25D366]/10">
                  <svg className="h-10 w-10 text-[#25D366]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="mt-6 font-serif text-3xl font-light tracking-wide text-stone-800">
                  Enquiry Sent!
                </h2>
                <div className="mt-3 h-px w-12 bg-brand-gold" />
                <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-stone-600">
                  Your enquiry has been sent to our team via WhatsApp. We will get back to you as soon as possible. Thank you for choosing The Bali Dream Villa!
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <button
                    onClick={handleReset}
                    className="rounded-xl border border-stone-400/80 bg-white/70 px-6 py-3 text-[11px] font-bold tracking-[0.15em] text-stone-800 shadow-sm backdrop-blur-md transition hover:bg-white hover:border-stone-500"
                  >
                    SEND ANOTHER ENQUIRY
                  </button>
                  <a
                    href="https://www.swiftbook.io/inst/#home?propertyId=341M2YwhSSS0MC08zfcBbjY5MzM=&JDRN=Y"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-brand-gold/60 bg-brand-gold/90 px-6 py-3 text-[11px] font-bold tracking-[0.18em] text-white shadow-[0_6px_18px_rgba(0,0,0,0.14)] transition hover:bg-brand-gold"
                  >
                    BOOK NOW
                  </a>
                </div>
              </motion.div>
            ) : (
              /* ── FORM STATE ────────────────────────────────────────────── */
              <form
                onSubmit={handleSubmit}
                noValidate
                className="overflow-hidden rounded-[28px] border border-white/60 bg-white/50 shadow-[0_12px_36px_rgba(45,45,40,0.1)] backdrop-blur-sm"
              >
                {/* Form Header */}
                <div className="border-b border-stone-200/80 px-6 py-6 sm:px-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-gold">
                    Enquiry Form
                  </span>
                  <h2 className="mt-1 font-serif text-2xl font-light tracking-wide text-stone-800 sm:text-3xl">
                    Plan Your Stay
                  </h2>
                  <p className="mt-1.5 text-xs text-stone-500">
                    Fields marked with <span className="text-brand-gold font-bold">*</span> are required.
                  </p>
                </div>

                <div className="space-y-8 p-6 sm:p-8">
                  {/* ── PERSONAL INFORMATION ─────────────────────────── */}
                  <fieldset>
                    <legend className="text-[11px] font-bold uppercase tracking-[0.3em] text-stone-700">
                      Personal Information
                    </legend>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <FieldLabel required>First Name</FieldLabel>
                        <input
                          id="firstName"
                          type="text"
                          name="firstName"
                          autoComplete="given-name"
                          placeholder="John"
                          value={form.firstName}
                          onChange={handleChange}
                          className={inputBase}
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-[10px] text-red-500">{errors.firstName}</p>
                        )}
                      </div>
                      <div>
                        <FieldLabel required>Last Name</FieldLabel>
                        <input
                          id="lastName"
                          type="text"
                          name="lastName"
                          autoComplete="family-name"
                          placeholder="Doe"
                          value={form.lastName}
                          onChange={handleChange}
                          className={inputBase}
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-[10px] text-red-500">{errors.lastName}</p>
                        )}
                      </div>
                      <div>
                        <FieldLabel required>Email Address</FieldLabel>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          autoComplete="email"
                          placeholder="john@example.com"
                          value={form.email}
                          onChange={handleChange}
                          className={inputBase}
                        />
                        {errors.email && (
                          <p className="mt-1 text-[10px] text-red-500">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <FieldLabel required>Phone / WhatsApp</FieldLabel>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          autoComplete="tel"
                          placeholder="+1 234 567 8900"
                          value={form.phone}
                          onChange={handleChange}
                          className={inputBase}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-[10px] text-red-500">{errors.phone}</p>
                        )}
                      </div>
                      <div className="sm:col-span-2">
                        <FieldLabel>Country of Residence</FieldLabel>
                        <input
                          id="country"
                          type="text"
                          name="country"
                          autoComplete="country-name"
                          placeholder="e.g. United Kingdom"
                          value={form.country}
                          onChange={handleChange}
                          className={inputBase}
                        />
                      </div>
                    </div>
                  </fieldset>

                  <div className="h-px bg-stone-200/80" />

                  {/* ── STAY DETAILS ─────────────────────────────────── */}
                  <fieldset>
                    <legend className="text-[11px] font-bold uppercase tracking-[0.3em] text-stone-700">
                      Stay Details
                    </legend>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <FieldLabel required>Enquiry Type</FieldLabel>
                        <div className="relative">
                          <select
                            id="enquiryType"
                            name="enquiryType"
                            value={form.enquiryType}
                            onChange={handleChange}
                            className={selectBase}
                          >
                            <option value="" disabled>Select enquiry type…</option>
                            {ENQUIRY_TYPES.map((t) => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                          <svg className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        {errors.enquiryType && (
                          <p className="mt-1 text-[10px] text-red-500">{errors.enquiryType}</p>
                        )}
                      </div>
                      <div>
                        <FieldLabel>Villa Type</FieldLabel>
                        <div className="relative">
                          <select
                            id="villaType"
                            name="villaType"
                            value={form.villaType}
                            onChange={handleChange}
                            className={selectBase}
                          >
                            <option value="" disabled>Select villa type…</option>
                            {VILLA_TYPES.map((t) => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                          <svg className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <FieldLabel>Check-In Date</FieldLabel>
                        <input
                          id="checkIn"
                          type="date"
                          name="checkIn"
                          value={form.checkIn}
                          min={new Date().toISOString().split("T")[0]}
                          onChange={handleChange}
                          className={inputBase}
                        />
                      </div>
                      <div>
                        <FieldLabel>Check-Out Date</FieldLabel>
                        <input
                          id="checkOut"
                          type="date"
                          name="checkOut"
                          value={form.checkOut}
                          min={form.checkIn || new Date().toISOString().split("T")[0]}
                          onChange={handleChange}
                          className={inputBase}
                        />
                      </div>
                      <div>
                        <FieldLabel>Number of Guests</FieldLabel>
                        <div className="relative">
                          <select
                            id="guests"
                            name="guests"
                            value={form.guests}
                            onChange={handleChange}
                            className={selectBase}
                          >
                            <option value="" disabled>Select guests…</option>
                            {GUEST_COUNTS.map((g) => (
                              <option key={g} value={g}>{g} {parseInt(g) === 1 ? "Guest" : "Guests"}</option>
                            ))}
                          </select>
                          <svg className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  <div className="h-px bg-stone-200/80" />

                  {/* ── SPECIAL REQUESTS ─────────────────────────────── */}
                  <fieldset>
                    <legend className="text-[11px] font-bold uppercase tracking-[0.3em] text-stone-700">
                      Special Requests
                    </legend>
                    <div className="mt-4">
                      <FieldLabel>Message / Special Requests</FieldLabel>
                      <textarea
                        id="specialRequests"
                        name="specialRequests"
                        rows={4}
                        placeholder="Tell us about any special occasions, dietary requirements, or specific requests..."
                        value={form.specialRequests}
                        onChange={handleChange}
                        className={`${inputBase} resize-none`}
                      />
                    </div>
                  </fieldset>

                  {/* ── SUBMIT ────────────────────────────────────────── */}
                  <div className="flex flex-col items-center gap-4 border-t border-stone-200/80 pt-6 sm:flex-row">
                    <button
                      type="submit"
                      id="submit-enquiry"
                      className="group flex w-full items-center justify-center gap-2.5 rounded-xl border border-brand-gold/60 bg-brand-gold/90 px-8 py-4 text-[11px] font-bold tracking-[0.22em] text-white shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold hover:shadow-[0_12px_28px_rgba(0,0,0,0.22)] sm:w-auto"
                    >
                      {/* WhatsApp icon */}
                      <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      SEND VIA WHATSAPP
                    </button>
                    <p className="text-center text-[10px] leading-relaxed text-stone-500 sm:text-left">
                      By submitting, you agree to be contacted by our team. Your information will not be shared with third parties.
                    </p>
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
