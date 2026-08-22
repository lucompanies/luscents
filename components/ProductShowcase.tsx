import { PRODUCTS } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function ProductShowcase() {
  return (
    <section id="scents" className="relative py-24 lg:py-32 bg-ink">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-gold">The Collection</span>
          <h2 className="font-display text-4xl sm:text-5xl mt-4 text-parchment">
            Two Signatures, <span className="italic text-gradient-gold">One House</span>
          </h2>
          <p className="text-parchment/55 mt-5 leading-relaxed">
            Reserve now at our exclusive pre-order price. Early batch quantities are
            limited — once each collection sells out, pricing returns to full retail.
          </p>
        </div>

        <div className="flex flex-col gap-10 lg:gap-14">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.slug} product={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
