"use client";

import { useEffect, useState } from "react";
import { PRODUCTS } from "@/lib/products";
import { usePreorder } from "./PreorderContext";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);
  const { openModal } = usePreorder();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-ink/95 backdrop-blur-md border-t border-gold/20 px-4 py-3 flex items-center justify-between gap-3">
      <div className="text-xs text-parchment/60 leading-tight">
        <p className="text-gold font-medium">Pre-order now</p>
        <p>From £55 · limited batch</p>
      </div>
      <button onClick={() => openModal(PRODUCTS[0])} className="btn-gold !px-6 !py-3">
        Reserve
      </button>
    </div>
  );
}
