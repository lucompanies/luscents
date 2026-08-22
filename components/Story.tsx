"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Story() {
  return (
    <section id="story" className="relative py-24 lg:py-32 bg-onyx overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-square max-w-md mx-auto rounded-sm overflow-hidden gold-border">
            <Image
              src="/images/logo.png"
              alt="LU Scents emblem"
              fill
              className="object-contain p-16 bg-ink"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/30 rounded-sm hidden sm:block" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-gold">Our Story</span>
          <h2 className="font-display text-4xl sm:text-5xl mt-4 mb-6 text-parchment leading-tight">
            New Beginnings, <br /> Unforgettable Scents
          </h2>
          <p className="text-parchment/60 leading-relaxed mb-5">
            LU Scents was born from a simple belief: fragrance should feel personal. Not a
            trend to be chased, but a signature to be owned — something that lingers in a
            room after you've left it.
          </p>
          <p className="text-parchment/60 leading-relaxed mb-8">
            Blossom and Boss are our first chapter — two distinct characters built from
            fine ingredients and an obsessive attention to detail, from the weight of the
            glass to the fold of the box. This is only the beginning.
          </p>
          <div className="flex items-center gap-6">
            <div>
              <p className="font-display text-3xl text-gold">2</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-parchment/45 mt-1">
                Signature Scents
              </p>
            </div>
            <span className="w-px h-10 bg-gold/20" />
            <div>
              <p className="font-display text-3xl text-gold">50ml</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-parchment/45 mt-1">
                Eau de Parfum
              </p>
            </div>
            <span className="w-px h-10 bg-gold/20" />
            <div>
              <p className="font-display text-3xl text-gold">475+</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-parchment/45 mt-1">
                Early Reservations
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
