const ITEMS = [
  "BLOSSOM FOR HER",
  "BOSS FOR HIM",
  "TIMELESS SCENTS",
  "PREMIUM QUALITY",
  "MADE FOR EVERY MOMENT",
  "50ML EAU DE PARFUM",
  "LIMITED EARLY BATCH"
];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="relative border-y border-gold/15 bg-onyx py-4 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="mx-6 text-xs sm:text-sm uppercase tracking-[0.3em] text-parchment/60">
              {item}
            </span>
            <span className="text-gold/50">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
