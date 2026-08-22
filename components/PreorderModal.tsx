"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, Minus, Plus, CheckCircle2, Loader2 } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { usePreorder } from "./PreorderContext";

type Status = "idle" | "submitting" | "success" | "error";

export default function PreorderModal() {
  const { isOpen, product, closeModal } = usePreorder();
  const [selectedSlug, setSelectedSlug] = useState(product?.slug ?? PRODUCTS[0].slug);
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    if (product) setSelectedSlug(product.slug);
  }, [product]);

  useEffect(() => {
    if (isOpen) {
      setStatus("idle");
      setError("");
      setQuantity(1);
    }
  }, [isOpen]);

  const selected = PRODUCTS.find((p) => p.slug === selectedSlug) ?? PRODUCTS[0];
  const total = (selected.price * quantity).toFixed(2);

  const handleClose = () => {
    closeModal();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/preorder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          notes,
          product: `${selected.name} (${selected.tagline})`,
          size: selected.size,
          quantity
        })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setOrderId(data.orderId);
      setStatus("success");
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink/85 backdrop-blur-sm"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-char gold-border rounded-sm shadow-lift"
          >
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 text-parchment/50 hover:text-gold transition-colors z-10"
              aria-label="Close"
            >
              <X size={22} />
            </button>

            {status === "success" ? (
              <div className="p-10 sm:p-14 text-center flex flex-col items-center">
                <CheckCircle2 className="text-gold mb-5" size={52} strokeWidth={1.2} />
                <h3 className="font-display text-3xl text-parchment mb-3">Reservation Confirmed</h3>
                <p className="text-parchment/60 leading-relaxed mb-2">
                  Thank you, {name.split(" ")[0]}. Your pre-order for{" "}
                  <span className="text-gold">
                    {quantity} × {selected.name}
                  </span>{" "}
                  is confirmed.
                </p>
                <p className="text-parchment/40 text-xs uppercase tracking-[0.2em] mb-8">
                  Confirmation #{orderId}
                </p>
                <p className="text-parchment/50 text-sm mb-8">
                  We&rsquo;ve saved your spot in the early batch. We&rsquo;ll email {email} with shipping
                  and payment details as soon as LU Scents launches.
                </p>
                <button onClick={handleClose} className="btn-gold">
                  Done
                </button>
              </div>
            ) : (
              <div className="p-8 sm:p-10">
                <div className="mb-7">
                  <span className="text-xs uppercase tracking-[0.3em] text-gold">Reserve Yours</span>
                  <h3 className="font-display text-3xl text-parchment mt-2">Complete Your Pre-Order</h3>
                  <p className="text-parchment/50 text-sm mt-2">
                    No payment now — we&rsquo;ll reach out with checkout details before launch.
                  </p>
                </div>

                {/* Product selector */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {PRODUCTS.map((p) => (
                    <button
                      type="button"
                      key={p.slug}
                      onClick={() => setSelectedSlug(p.slug)}
                      className={`flex items-center gap-3 p-3 rounded-sm border transition-colors text-left ${
                        selectedSlug === p.slug
                          ? "border-gold bg-gold/10"
                          : "border-gold/15 hover:border-gold/40"
                      }`}
                    >
                      <Image
                        src={p.image}
                        alt={p.name}
                        width={36}
                        height={45}
                        className="w-9 h-auto object-contain"
                      />
                      <div>
                        <p className="text-sm text-parchment">{p.name}</p>
                        <p className="text-[10px] uppercase tracking-wide text-parchment/40">{p.tagline}</p>
                      </div>
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      required
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="input-field"
                    />
                    <input
                      required
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input-field"
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone (optional)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="input-field"
                  />

                  <div className="flex items-center justify-between border border-gold/30 rounded-sm px-4 py-3">
                    <span className="text-sm text-parchment/70">Quantity</span>
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="text-gold hover:text-gold-light transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-6 text-center text-parchment tabular-nums">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                        className="text-gold hover:text-gold-light transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  <textarea
                    placeholder="Anything else we should know? (optional)"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={2}
                    className="input-field resize-none"
                  />

                  <div className="flex items-center justify-between border-t border-gold/15 pt-4 mt-1">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-parchment/40">
                        Estimated Total
                      </p>
                      <p className="font-display text-2xl text-gold">
                        {selected.currency}
                        {total}
                      </p>
                    </div>
                    <p className="text-[11px] text-parchment/40 max-w-[160px] text-right">
                      {selected.currency}
                      {selected.price} × {quantity} · pre-order rate
                    </p>
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-400 -mt-1">{error}</p>
                  )}

                  <button type="submit" disabled={status === "submitting"} className="btn-gold mt-1 disabled:opacity-60">
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="animate-spin" size={16} /> Reserving...
                      </>
                    ) : (
                      "Confirm Pre-Order"
                    )}
                  </button>
                  <p className="text-[11px] text-parchment/35 text-center">
                    By reserving, you agree to be contacted about your LU Scents pre-order.
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
