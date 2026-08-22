"use client";

import { motion } from "framer-motion";
import { Percent, Truck, PackageOpen, Star } from "lucide-react";

const PERKS = [
  {
    icon: Percent,
    title: "Save up to 26%",
    desc: "Lock in exclusive pre-order pricing before we launch to full retail."
  },
  {
    icon: Star,
    title: "First to Receive",
    desc: "Early batch reservations ship before general release, no exceptions."
  },
  {
    icon: PackageOpen,
    title: "Founding Member Box",
    desc: "Pre-order customers receive a numbered box and a handwritten note."
  },
  {
    icon: Truck,
    title: "Priority Shipping",
    desc: "Your order jumps the queue the moment LU Scents goes live."
  }
];

export default function Perks() {
  return (
    <section id="perks" className="relative py-24 lg:py-28 bg-onyx">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-gold">Why Pre-Order</span>
          <h2 className="font-display text-4xl sm:text-5xl mt-4 text-parchment">
            Reserve Today, <span className="italic text-gradient-gold">Reap the Rewards</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PERKS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-7 border border-gold/15 rounded-sm hover:border-gold/40 transition-colors bg-ink/40"
            >
              <p.icon className="text-gold mb-4" size={24} strokeWidth={1.4} />
              <h3 className="font-display text-xl text-parchment mb-2">{p.title}</h3>
              <p className="text-parchment/50 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
