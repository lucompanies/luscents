"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { usePreorder } from "./PreorderContext";

const LINKS = [
  { label: "Scents", href: "#scents" },
  { label: "Story", href: "#story" },
  { label: "Why Pre-Order", href: "#perks" },
  { label: "FAQ", href: "#faq" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openModal } = usePreorder();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ink/90 backdrop-blur-md border-b border-gold/15 py-3" : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="LU Scents" width={40} height={40} className="w-9 h-9 object-contain" priority />
          <span className="font-display text-xl tracking-widest text-parchment">LU SCENTS</span>
        </a>

        <div className="hidden lg:flex items-center gap-10">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[0.2em] text-parchment/70 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <button onClick={() => openModal(PRODUCTS[0])} className="btn-gold">
            Pre-Order Now
          </button>
        </div>

        <button className="lg:hidden text-parchment" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden mt-4 px-6 pb-6 flex flex-col gap-5 bg-ink/95 border-t border-gold/15">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.2em] text-parchment/80 pt-4"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              openModal(PRODUCTS[0]);
            }}
            className="btn-gold w-full mt-2"
          >
            Pre-Order Now
          </button>
        </div>
      )}
    </header>
  );
}
