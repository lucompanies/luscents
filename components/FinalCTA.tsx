"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/products";
import { usePreorder } from "./PreorderContext";

export default function FinalCTA() {
  const { openModal } = usePreorder();

  return (
    <section className="relative py-28 lg:py-36 bg-onyx overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[70%] rounded-full bg-gold/8 blur-[160px]" />
      </div>
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Image src="/images/logo.png" alt="LU Scents" width={64} height={64} className="mx-auto w-16 h-16 object-contain mb-8" />
          <h2 className="font-display text-4xl sm:text-6xl text-parchment leading-tight">
            Your Signature. <span className="italic text-gradient-gold">Your Scent.</span>
          </h2>
          <p className="text-parchment/55 mt-6 mb-10 max-w-lg mx-auto leading-relaxed">
            Early batch quantities are limited and pre-order pricing won&rsquo;t last. Reserve
            your bottle of Blossom or Boss today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => openModal(PRODUCTS[0])} className="btn-gold">
              Reserve Blossom
            </button>
            <button onClick={() => openModal(PRODUCTS[1])} className="btn-outline">
              Reserve Boss
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
