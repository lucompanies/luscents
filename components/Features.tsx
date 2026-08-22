"use client";

import { motion } from "framer-motion";
import { Gem, Sparkles, Gift } from "lucide-react";

const FEATURES = [
  {
    icon: Sparkles,
    title: "Timeless Scents",
    desc: "Compositions designed to feel as elegant a decade from now as they do the day you first wear them."
  },
  {
    icon: Gem,
    title: "Premium Quality",
    desc: "Fine fragrance oils, meticulously blended and bottled in weighted glass — nothing about LU Scents feels ordinary."
  },
  {
    icon: Gift,
    title: "Made for Every Moment",
    desc: "From the boardroom to a first date, Blossom and Boss are versatile enough to become your everyday signature."
  }
];

export default function Features() {
  return (
    <section className="relative py-24 lg:py-32 bg-ink">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid sm:grid-cols-3 gap-10 lg:gap-16">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center mb-6">
                <f.icon className="text-gold" size={26} strokeWidth={1.4} />
              </div>
              <h3 className="font-display text-2xl text-parchment mb-3">{f.title}</h3>
              <p className="text-parchment/55 text-sm leading-relaxed max-w-xs">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
