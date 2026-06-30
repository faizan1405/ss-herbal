import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, ShoppingBag, Search, User, X } from "lucide-react";
import logo from "@/assets/logo.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Shop" },
  { to: "/categories", label: "Categories" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled
              ? "glass-panel shadow-card"
              : "bg-white/30 backdrop-blur-md"
          }`}
        >
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="SS Herbal" className="h-9 w-9 object-contain" />
            <span className="font-display text-xl text-foreground">SS Herbal</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`relative text-sm font-medium transition-colors ${
                  path === item.to ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`}
              >
                {item.label}
                {path === item.to && (
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-gradient-primary" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button className="rounded-full p-2 text-foreground/70 hover:bg-secondary hover:text-primary transition-colors" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/account" className="rounded-full p-2 text-foreground/70 hover:bg-secondary hover:text-primary transition-colors" aria-label="Account">
              <User className="h-5 w-5" />
            </Link>
            <Link to="/cart" className="relative rounded-full p-2 text-foreground/70 hover:bg-secondary hover:text-primary transition-colors" aria-label="Cart">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-primary text-[10px] font-medium text-white">
                0
              </span>
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="ml-1 rounded-full p-2 text-foreground/70 hover:bg-secondary md:hidden"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile slide menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            open ? "mt-3 max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass-panel rounded-3xl p-6 shadow-card">
            <nav className="flex flex-col gap-3">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-foreground/80 hover:bg-secondary hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
