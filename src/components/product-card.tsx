import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ShoppingBag, Star } from "lucide-react";
import type { Product } from "@/lib/brand";

export function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative"
    >
      <Link
        to="/products/$slug"
        params={{ slug: product.slug }}
        className="block overflow-hidden rounded-3xl bg-gradient-blush shadow-card card-lift"
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="absolute right-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
            {Math.round(((product.mrp - product.price) / product.mrp) * 100)}% OFF
          </div>
        </div>
        <div className="space-y-2 p-5">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="h-3 w-3 fill-primary text-primary" />
            <span className="font-medium text-foreground">{product.rating}</span>
            <span>({product.reviews})</span>
          </div>
          <h3 className="font-display text-lg leading-tight text-foreground">{product.name}</h3>
          <p className="text-xs text-muted-foreground">{product.tagline}</p>
          <div className="flex items-end justify-between pt-2">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-semibold text-primary">₹{product.price}</span>
              <span className="text-xs text-muted-foreground line-through">₹{product.mrp}</span>
            </div>
            <button
              type="button"
              onClick={(e) => { e.preventDefault(); }}
              className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-white shadow-soft transition-transform hover:scale-110"
              aria-label="Add to cart"
            >
              <ShoppingBag className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
