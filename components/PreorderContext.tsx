"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/lib/products";

type PreorderContextType = {
  isOpen: boolean;
  product: Product | null;
  openModal: (product: Product) => void;
  closeModal: () => void;
};

const PreorderContext = createContext<PreorderContextType | undefined>(undefined);

export function PreorderProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);

  const openModal = (p: Product) => {
    setProduct(p);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <PreorderContext.Provider value={{ isOpen, product, openModal, closeModal }}>
      {children}
    </PreorderContext.Provider>
  );
}

export function usePreorder() {
  const ctx = useContext(PreorderContext);
  if (!ctx) throw new Error("usePreorder must be used within PreorderProvider");
  return ctx;
}
