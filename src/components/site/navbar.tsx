"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Grassroots", href: "#grassroots" },
  { label: "Academy", href: "#academy" },
  { label: "Promotions", href: "#promotions" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-[#0a0a0c]/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-20 lg:px-8"
        aria-label="Main navigation"
      >
        <a href="#top" className="flex items-center gap-3" aria-label="AC Boxing home">
          <span className="flex h-10 w-10 items-center justify-center bg-[#e11d2e] font-display text-lg font-bold tracking-tight text-white">
            AC
          </span>
          <span className="leading-none">
            <span className="block font-display text-lg font-semibold uppercase tracking-wide text-white">
              AC Boxing
            </span>
            <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-400">
              Sport &amp; Entertainment
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-zinc-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#partner"
            className="rounded-sm bg-[#e11d2e] px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#c41423]"
          >
            Partner With Us
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-white lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#0a0a0c]/95 px-4 pb-6 pt-2 backdrop-blur-md lg:hidden">
          <div className="flex flex-col">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3.5 text-sm font-medium uppercase tracking-wider text-zinc-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#partner"
              onClick={() => setOpen(false)}
              className="mt-5 rounded-sm bg-[#e11d2e] px-5 py-3 text-center text-sm font-semibold uppercase tracking-wider text-white"
            >
              Partner With Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
