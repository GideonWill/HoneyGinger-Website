"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Preparation", href: "/preparation" },
  { name: "Benefits", href: "/benefits" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (!pathname) return false;
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-4">
          <img
            src="/images/joy/logo.jpeg"
            alt="Joy4Fame Logo"
            className="h-14 w-auto object-contain"
          />
          <div className="flex flex-col -space-y-1">
            <span className="text-lg font-serif italic font-bold">
              <span className="text-brand-blue">Instant</span>{" "}
              <span className="text-brand-red" style={{ color: '#F70000' }}>Honey Ginger</span>
            </span>
            <span className="text-xs font-semibold text-brand-blue tracking-wide">Drink</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors relative py-1 ${active
                  ? "text-brand-blue font-bold"
                  : "text-foreground/80 hover:text-brand-blue"
                  }`}
              >
                {link.name}
                {active && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-blue rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <Button asChild className="bg-brand-red hover:bg-brand-red/90 text-white rounded-full px-6 ml-4">
            <Link href="/contact">
              Buy Now
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col space-y-4">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-xl font-bold transition-all relative py-3 px-4 rounded-2xl ${active
                      ? "text-brand-blue bg-brand-blue/5"
                      : "text-foreground/70 hover:text-brand-blue hover:bg-brand-blue/5"
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      {link.name}
                      {active && (
                        <motion.div
                          layoutId="mobile-active-dot"
                          className="w-2 h-2 bg-brand-blue rounded-full"
                        />
                      )}
                    </div>
                  </Link>
                );
              })}
              <div className="pt-6">
                <Button asChild className="bg-brand-red hover:bg-brand-red/90 text-white w-full py-7 text-xl rounded-full shadow-lg shadow-brand-red/20">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Buy Now
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
