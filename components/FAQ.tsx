"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "When will my pre-order ship?",
    a: "All pre-orders ship as soon as LU Scents launches. Early batch reservations are fulfilled first, in the order they were placed."
  },
  {
    q: "Do I need to pay now?",
    a: "No. Reserving your bottle costs nothing today. We'll email you securely for payment and shipping details right before launch."
  },
  {
    q: "Can I change my scent or quantity later?",
    a: "Yes — just reply to your confirmation email and we'll update your reservation, subject to early batch availability."
  },
  {
    q: "What's included in each order?",
    a: "A 50ml (1.7 fl.oz) eau de parfum in our signature weighted glass bottle, presented in the LU Scents box shown above."
  },
  {
    q: "Is pre-order pricing guaranteed?",
    a: "Yes. Whatever price you reserve at today is locked in for your order, even if full retail pricing is higher at launch."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-28 bg-ink">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.35em] text-gold">Questions</span>
          <h2 className="font-display text-4xl sm:text-5xl mt-4 text-parchment">Frequently Asked</h2>
        </div>

        <div className="flex flex-col divide-y divide-gold/15 border-y border-gold/15">
          {FAQS.map((item, i) => (
            <div key={item.q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left"
              >
                <span className="font-display text-lg sm:text-xl text-parchment pr-6">{item.q}</span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.25 }}>
                  <Plus className="text-gold shrink-0" size={20} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-parchment/55 text-sm leading-relaxed pb-6 pr-10">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
