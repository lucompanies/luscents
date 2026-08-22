"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Product } from "@/lib/products";
import { usePreorder } from "./PreorderContext";

const NOTE_TABS = [
  { key: "top", label: "Top Notes" },
  { key: "heart", label: "Heart Notes" },
  { key: "base", label: "Base Notes" }
] as const;

export default function ProductCard({ product, reverse = false }: { product: Product; reverse?: boolean }) {
  const [tab, setTab] = useState<"top" | "heart" | "base">("top");
  const { openModal } = usePreorder();
  const pct = Math.min(100, Math.round((product.claimed / product.goal) * 100));
  const discount = Math.round(((product.compareAt - product.price) / product.compareAt) * 100);

  const isDark = product.accent === "onyx";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className={`grid lg:grid-cols-2 gap-0 overflow-hidden rounded-sm card-glow ${
        isDark ? "bg-char" : "bg-[#161311]"
      }`}
    >
      {/* Image side */}
      <div
        className={`relative flex items-center justify-center p-10 sm:p-16 ${
          reverse ? "lg:order-2" : ""
        } ${isDark ? "bg-gradient-to-br from-[#0f0d0c] to-[#1c1917]" : "bg-gradient-to-br from-[#1a1613] to-[#221d19]"}`}
      >
        <div className="absolute top-8 left-8 flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold border border-gold/40 rounded-full px-3 py-1">
            {product.tagline}
          </span>
        </div>
        {discount > 0 && (
          <div className="absolute top-8 right-8">
            <span className="text-[10px] uppercase tracking-[0.2em] bg-gold-gradient text-ink font-semibold rounded-full px-3 py-1">
              Save {discount}%
            </span>
          </div>
        )}
        <Image
          src={product.image}
          alt={`LU Scents ${product.name} eau de parfum bottle and box`}
          width={480}
          height={600}
          className="w-full max-w-xs h-auto drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)]"
        />
      </div>

      {/* Content side */}
      <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
        <h3 className="font-display text-4xl sm:text-5xl text-parchment mb-1">{product.name}</h3>
        <p className="text-gold text-xs uppercase tracking-[0.3em] mb-5">{product.audience}</p>
        <p className="text-parchment/60 leading-relaxed mb-6">{product.description}</p>

        {/* Notes tabs */}
        <div className="mb-7">
          <div className="flex gap-6 border-b border-gold/15 mb-4">
            {NOTE_TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`pb-3 text-xs uppercase tracking-[0.2em] transition-colors relative ${
                  tab === t.key ? "text-gold" : "text-parchment/40 hover:text-parchment/70"
                }`}
              >
                {t.label}
                {tab === t.key && (
                  <motion.span layoutId={`underline-${product.slug}`} className="absolute -bottom-px left-0 right-0 h-px bg-gold" />
                )}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {product.notes[tab].map((note) => (
              <span
                key={note}
                className="text-xs text-parchment/70 border border-gold/20 rounded-full px-3 py-1.5"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        {/* Scarcity */}
        <div className="mb-7">
          <div className="flex justify-between text-[11px] uppercase tracking-[0.15em] text-parchment/45 mb-2">
            <span>{product.claimed} reserved</span>
            <span>{product.goal - product.claimed} left in early batch</span>
          </div>
          <div className="h-1.5 rounded-full bg-parchment/10 overflow-hidden">
            <div
              className="h-full bg-gold-gradient rounded-full transition-all duration-700"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between flex-wrap gap-6">
          <div>
            <div className="flex items-baseline gap-3">
              <span className="font-display text-3xl text-gold">
                {product.currency}
                {product.price}
              </span>
              <span className="text-sm text-parchment/40 line-through">
                {product.currency}
                {product.compareAt}
              </span>
            </div>
            <p className="text-[11px] text-parchment/40 mt-1">{product.size} · Pre-order price</p>
          </div>
          <button onClick={() => openModal(product)} className="btn-gold">
            Pre-Order {product.name}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
