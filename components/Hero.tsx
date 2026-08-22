"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LAUNCH_DATE, PRODUCTS } from "@/lib/products";
import CountdownTimer from "./CountdownTimer";
import { usePreorder } from "./PreorderContext";

export default function Hero() {
  const { openModal } = usePreorder();

  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden bg-ink pt-28 pb-16">
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/4 -left-1/4 w-[60%] h-[60%] rounded-full bg-gold/10 blur-[140px]" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-rose/5 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0b0a09_85%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-xs uppercase tracking-[0.35em] text-gold">Launching Soon</span>
          </div>

          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-[0.95] text-parchment">
            LU <span className="text-gradient-gold italic">Scents</span>
          </h1>
          <p className="mt-6 font-display text-2xl sm:text-3xl text-parchment/90 max-w-xl">
            Crafted with elegance. Made to leave a lasting impression.
          </p>
          <p className="mt-5 text-parchment/60 max-w-md leading-relaxed">
            Two signature eau de parfums, poured in limited early batches. Reserve yours
            now and be among the first to wear Blossom or Boss when they arrive.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button onClick={() => openModal(PRODUCTS[0])} className="btn-gold">
              Reserve Blossom — For Her
            </button>
            <button onClick={() => openModal(PRODUCTS[1])} className="btn-outline">
              Reserve Boss — For Him
            </button>
          </div>

          <div className="mt-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-parchment/40 mb-4">Doors open in</p>
            <CountdownTimer target={LAUNCH_DATE} />
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full bg-gold/10 blur-3xl" />
            <div className="absolute right-4 sm:right-10 top-0 w-[62%] animate-float">
              <Image
                src="/images/boss-product.png"
                alt="LU Scents Boss eau de parfum bottle"
                width={500}
                height={625}
                className="w-full h-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
                priority
              />
            </div>
            <div
              className="absolute left-0 bottom-0 w-[58%] animate-float"
              style={{ animationDelay: "1.4s" }}
            >
              <Image
                src="/images/blossom-product.png"
                alt="LU Scents Blossom eau de parfum bottle"
                width={500}
                height={625}
                className="w-full h-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
                priority
              />
            </div>
          </div>
          <p className="text-center mt-6 text-xs uppercase tracking-[0.3em] text-parchment/40">
            Blossom for Her &nbsp;|&nbsp; Boss for Him
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px shimmer-line opacity-40" />
    </section>
  );
}
