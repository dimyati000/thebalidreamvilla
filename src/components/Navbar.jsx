"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "HOME", href: "/" },
  { name: "VILLAS", href: "/villas" },
  { name: "SPECIAL OFFERS", href: "/special-offers" },
  { name: "FACILITIES", href: "/facilities" },
  { name: "WEDDING", href: "/wedding" },
  { name: "VIRTUAL TOUR", href: "/virtual-tour" },
  { name: "GALLERY", href: "/gallery" },
  { name: "CONTACT US", href: "/contact-us" },
  { name: "OUR VILLA", href: "/our-villa" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed left-3 right-3 top-3 z-50 h-16 rounded-[22px] border transition-all duration-500 ease-out md:left-6 md:right-6 md:top-4 md:h-[72px] md:rounded-[26px] ${
        isScrolled || isOpen
          ? "border-white/15 bg-[#17180f]/75 shadow-[0_18px_50px_rgba(0,0,0,0.32)] backdrop-blur-2xl"
          : "border-white/10 bg-black/10 shadow-[0_12px_35px_rgba(0,0,0,0.12)] backdrop-blur-md"
      }`}
    >
      <div className="flex h-full w-full items-center justify-between px-4 sm:px-5 md:px-7 xl:px-9">
        <Link
          href="/"
          aria-label="The Bali Dream Villa - Home"
          className="group flex flex-shrink-0 items-center"
        >
          <div className="relative h-14 w-28 transition-transform duration-500 ease-out group-hover:scale-[1.03] md:h-16 md:w-36">
            <Image
              src="/logo.png"
              alt="The Bali Dream Villa Logo"
              fill
              priority
              sizes="(max-width: 768px) 112px, 144px"
              className="object-contain"
            />
          </div>
        </Link>

        <div className="hidden h-full items-center gap-5 text-[10px] font-medium tracking-[0.19em] xl:flex 2xl:gap-7 2xl:text-[11px]">
          {menuItems.map((item) => {
            const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/");

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative flex h-full items-center whitespace-nowrap transition-colors duration-300 after:content-[''] after:absolute after:bottom-[17px] after:left-0 after:h-px after:bg-brand-gold after:transition-all after:duration-300 ${
                  isActive
                    ? "text-white after:w-full"
                    : "text-white/60 after:w-0 hover:text-white hover:after:w-full"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden flex-shrink-0 xl:block">
          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-full border border-brand-gold/60 bg-brand-gold/90 px-4 py-2.5 text-[9px] font-bold tracking-[0.18em] text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold hover:shadow-[0_12px_28px_rgba(0,0,0,0.24)] xl:px-6 xl:text-[10px]"
          >
            BOOK NOW
          </Link>
        </div>

        <div className="flex items-center xl:hidden">
          <button
            onClick={() => setIsOpen((current) => !current)}
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition-colors duration-300 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/70"
          >
            <span className="sr-only">
              {isOpen ? "Close main menu" : "Open main menu"}
            </span>

            <span className="relative flex h-[18px] w-5 flex-col items-center justify-between">
              <span
                className={`block h-px w-5 origin-center bg-current transition-all duration-300 ease-out ${
                  isOpen ? "translate-y-[8.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-5 bg-current transition-all duration-200 ${
                  isOpen ? "scale-x-0 opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-5 origin-center bg-current transition-all duration-300 ease-out ${
                  isOpen ? "-translate-y-[8.5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`absolute left-0 right-0 top-[calc(100%+8px)] overflow-hidden rounded-[22px] border bg-[#17180f]/85 shadow-[0_22px_55px_rgba(0,0,0,0.38)] backdrop-blur-2xl transition-all duration-500 ease-out lg:hidden ${
          isOpen
            ? "visible max-h-[620px] translate-y-0 border-white/15 opacity-100"
            : "invisible max-h-0 -translate-y-2 border-transparent opacity-0 pointer-events-none"
        } xl:hidden`}
      >
        <div className="space-y-1 px-5 py-5 text-left text-[11px] font-semibold tracking-[0.15em] sm:px-7">
          {menuItems.map((item) => {
            const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/");

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center justify-between rounded-xl px-3 py-3 transition-all duration-300 ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:bg-white/[0.06] hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span>{item.name}</span>
                <span
                  className={`h-1 w-1 rounded-full bg-brand-gold transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            );
          })}

          <div className="pt-3">
            <Link
              href="/book"
              className="block w-full rounded-xl border border-brand-gold/60 bg-brand-gold/90 py-3.5 text-center text-[11px] font-bold tracking-[0.2em] text-white transition-all duration-300 hover:bg-brand-gold"
              onClick={() => setIsOpen(false)}
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}