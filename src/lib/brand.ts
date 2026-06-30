import facepack from "@/assets/product-facepack.jpg";
import hairoil from "@/assets/product-hairoil.jpg";
import soap from "@/assets/product-soap.jpg";
import serum from "@/assets/product-serum.jpg";

export const CATEGORIES = [
  { slug: "face-pack", name: "Herbal Face Pack", image: facepack },
  { slug: "hair-oils", name: "Hair Oils", image: hairoil },
  { slug: "soap", name: "Handmade Soap", image: soap },
  { slug: "scrubs", name: "Herbal Scrubs", image: facepack },
  { slug: "serum", name: "Face Serum", image: serum },
  { slug: "shampoo", name: "Shampoo", image: hairoil },
  { slug: "face-wash", name: "Face Wash", image: serum },
  { slug: "kits", name: "Skin & Hair Care Kits", image: soap },
] as const;

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  mrp: number;
  image: string;
  tagline: string;
  rating: number;
  reviews: number;
  ingredients: string[];
  benefits: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "rose-glow-face-pack",
    name: "Rose Glow Herbal Face Pack",
    category: "face-pack",
    price: 499, mrp: 699, image: facepack,
    tagline: "Brightens, soothes & revives dull skin",
    rating: 4.9, reviews: 312,
    ingredients: ["Rose Petals", "Multani Mitti", "Aloe Vera", "Sandalwood"],
    benefits: ["Natural glow", "Reduces blemishes", "Deep cleansing", "Hydrating"],
  },
  {
    slug: "ayurvedic-hair-growth-oil",
    name: "Ayurvedic Hair Growth Oil",
    category: "hair-oils",
    price: 599, mrp: 899, image: hairoil,
    tagline: "Strengthens roots & promotes growth",
    rating: 4.8, reviews: 528,
    ingredients: ["Bhringraj", "Amla", "Neem", "Coconut Oil"],
    benefits: ["Reduces hair fall", "Boosts growth", "Anti-dandruff", "Adds shine"],
  },
  {
    slug: "rose-petal-handmade-soap",
    name: "Rose Petal Handmade Soap",
    category: "soap",
    price: 199, mrp: 299, image: soap,
    tagline: "Cold-processed with real rose petals",
    rating: 4.9, reviews: 421,
    ingredients: ["Rose Petals", "Glycerin", "Vitamin E", "Shea Butter"],
    benefits: ["Gentle cleanse", "Soft skin", "Floral aroma", "No SLS"],
  },
  {
    slug: "vitamin-c-radiance-serum",
    name: "Vitamin C Radiance Serum",
    category: "serum",
    price: 899, mrp: 1299, image: serum,
    tagline: "Brightens & evens skin tone",
    rating: 4.9, reviews: 689,
    ingredients: ["Vitamin C", "Hyaluronic Acid", "Kakadu Plum", "Rose Water"],
    benefits: ["Brightening", "Anti-aging", "Hydrating", "Fades dark spots"],
  },
  {
    slug: "turmeric-glow-scrub",
    name: "Turmeric Glow Body Scrub",
    category: "scrubs",
    price: 449, mrp: 649, image: facepack,
    tagline: "Exfoliates & reveals smooth glow",
    rating: 4.7, reviews: 198,
    ingredients: ["Turmeric", "Walnut", "Honey", "Almond Oil"],
    benefits: ["Exfoliation", "Smooth skin", "Glow boost", "Tan removal"],
  },
  {
    slug: "neem-tulsi-shampoo",
    name: "Neem & Tulsi Shampoo",
    category: "shampoo",
    price: 399, mrp: 549, image: hairoil,
    tagline: "Cleanses scalp & nourishes hair",
    rating: 4.8, reviews: 367,
    ingredients: ["Neem", "Tulsi", "Reetha", "Shikakai"],
    benefits: ["Anti-dandruff", "Strengthens", "Sulphate-free", "Adds volume"],
  },
  {
    slug: "aloe-vera-face-wash",
    name: "Aloe Vera Gentle Face Wash",
    category: "face-wash",
    price: 299, mrp: 399, image: serum,
    tagline: "Hydrating daily cleanser",
    rating: 4.8, reviews: 542,
    ingredients: ["Aloe Vera", "Cucumber", "Green Tea", "Glycerin"],
    benefits: ["Deep cleanse", "Hydrating", "Soothing", "Daily use"],
  },
  {
    slug: "complete-glow-kit",
    name: "Complete Glow Skincare Kit",
    category: "kits",
    price: 1799, mrp: 2599, image: soap,
    tagline: "Face wash, serum, pack & moisturizer",
    rating: 5.0, reviews: 142,
    ingredients: ["Curated set"],
    benefits: ["Full routine", "Gift-ready", "Best value"],
  },
];

export const INGREDIENTS = [
  { name: "Neem", desc: "Purifies and clears", emoji: "🌿", color: "oklch(0.85 0.13 130)" },
  { name: "Aloe Vera", desc: "Hydrates and soothes", emoji: "🌱", color: "oklch(0.88 0.11 150)" },
  { name: "Turmeric", desc: "Brightens naturally", emoji: "✨", color: "oklch(0.86 0.16 85)" },
  { name: "Rose", desc: "Tones and refreshes", emoji: "🌹", color: "oklch(0.8 0.14 0)" },
  { name: "Sandalwood", desc: "Calms and renews", emoji: "🪵", color: "oklch(0.78 0.08 60)" },
  { name: "Tulsi", desc: "Heals and protects", emoji: "🍃", color: "oklch(0.83 0.13 140)" },
];
