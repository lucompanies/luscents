export type Product = {
  slug: "blossom" | "boss";
  name: string;
  tagline: string;
  audience: string;
  description: string;
  image: string;
  accent: "rose" | "onyx";
  size: string;
  price: number;
  compareAt: number;
  currency: string;
  claimed: number;
  goal: number;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
};

export const PRODUCTS: Product[] = [
  {
    slug: "blossom",
    name: "Blossom",
    tagline: "For Her",
    audience: "BLOSSOM FOR HER",
    description:
      "A luminous floral eau de parfum built around white rose and blush peony, warmed with amber and a whisper of soft musk. Blossom is quiet confidence — elegant, tender, and utterly unforgettable.",
    image: "/images/blossom-product.png",
    accent: "rose",
    size: "50ML / 1.7 FL.OZ",
    price: 55,
    compareAt: 75,
    currency: "£",
    claimed: 214,
    goal: 300,
    notes: {
      top: ["Blush Peony", "Pink Pepper", "Bergamot"],
      heart: ["White Rose", "Jasmine Sambac", "Iris"],
      base: ["Soft Musk", "Amber", "Sandalwood"]
    }
  },
  {
    slug: "boss",
    name: "Boss",
    tagline: "For Him",
    audience: "BOSS FOR HIM",
    description:
      "A commanding eau de parfum forged from smoked oud and dark amber, sharpened with bergamot and grounded in vetiver. Boss is presence in a bottle — bold, magnetic, and made to lead the room.",
    image: "/images/boss-product.png",
    accent: "onyx",
    size: "50ML / 1.7 FL.OZ",
    price: 55,
    compareAt: 75,
    currency: "£",
    claimed: 261,
    goal: 300,
    notes: {
      top: ["Bergamot", "Black Pepper", "Cardamom"],
      heart: ["Smoked Oud", "Leather", "Cedarwood"],
      base: ["Dark Amber", "Vetiver", "Tonka Bean"]
    }
  }
];

export const LAUNCH_DATE = "2026-10-15T09:00:00Z";
