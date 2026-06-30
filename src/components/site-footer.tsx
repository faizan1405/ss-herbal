import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 overflow-hidden bg-gradient-blush">
      <div className="absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-[100%] bg-background" />
      <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="SS Herbal" className="h-12 w-12 object-contain" />
              <span className="font-display text-2xl">SS Herbal</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              Premium herbal cosmetics crafted with the timeless wisdom of Ayurveda. Nature's touch, beautifully yours.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full glass-panel text-primary transition-transform hover:-translate-y-1 hover:shadow-glow"
                  aria-label="Social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg">Shop</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/products" className="hover:text-primary">All Products</Link></li>
              <li><Link to="/categories" className="hover:text-primary">Categories</Link></li>
              <li><Link to="/products" className="hover:text-primary">Bestsellers</Link></li>
              <li><Link to="/products" className="hover:text-primary">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
              <li><a href="#" className="hover:text-primary">Privacy</a></li>
              <li><a href="#" className="hover:text-primary">Terms</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg">Get in touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary" />+91 93549 03225</li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary" />ssherbalcare5@gmail.com</li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" />Delhi NCR, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} SS Herbal. All rights reserved.</p>
          <p>Handcrafted with love in India.</p>
        </div>
      </div>
    </footer>
  );
}
