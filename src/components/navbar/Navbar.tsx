"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";

/* ============================================
   Navigation Links Configuration
   ============================================ */
type NavLink = {
  href: string;
  label: string;
  hasDropdown?: boolean;
};

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/alliance-hub", label: "Alliance Hub" },
  { href: "/refer-and-earn", label: "Refer and Earn" },
  { href: "/contact", label: "Contact" },
];

/* ============================================
   Navbar Component
   ============================================ */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#FBF6E8]/60 backdrop-blur-2xl border-b border-[#FBF6E8]/50 shadow-sm ${scrolled ? "py-1" : "py-2 lg:py-3"
        }`}
    >
      {/* Changed to max-w-[1536px] and px-8 lg:px-16 to match the wide mockup layout */}
      <nav className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16" aria-label="Main navigation">
        <div className="flex items-center justify-between">

          {/* Logo - visually increased size using scale to not affect nav height */}
          <Link href="/" className="flex items-center shrink-0 group" aria-label="NetNova Technologies Home">
            <Image
              src="/logo.png"
              alt="NetNova Technologies"
              width={200}
              height={60}
              priority
              className="h-10 sm:h-12 lg:h-[60px] w-auto transition-transform duration-300 group-hover:opacity-90 scale-125 origin-left"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 ml-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href === '/' && pathname === '/');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 text-[15px] font-bold transition-all duration-300 flex items-center gap-1 group ${isActive
                      ? "text-[#1E3A8A]"
                      : "text-[#07162B] hover:text-[#1E3A8A]"
                    }`}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4 text-[#475569]/80 group-hover:text-[#1E3A8A]" />}

                  {/* Active indicator underline matching mockup */}
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1E3A8A] rounded-t-sm"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              href="/contact"
              className="group relative overflow-hidden flex items-center justify-center px-7 py-3 rounded-xl shadow-[0_4px_15px_rgba(212,160,23,0.25)] hover:shadow-[0_6px_20px_rgba(212,160,23,0.35)] transition-all bg-[#D4A017] text-[#0F2D5C]"
            >
              <div className="absolute inset-0 bg-[#0F2D5C] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
              <span className="relative z-10 flex items-center gap-2 text-[15px] font-bold group-hover:text-[#FBF6E8] transition-colors duration-300">
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-xl text-[#07162B] hover:bg-[#FBF6E8] transition-colors border border-[#94A3B8]/30"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden rounded-2xl bg-[#FBF6E8] border border-[#94A3B8]/30 shadow-xl mb-4"
            >
              <div className="p-4 flex flex-col gap-1">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-bold transition-all ${isActive
                            ? "bg-[#1E3A8A]/10 text-[#1E3A8A]"
                            : "text-[#07162B] hover:bg-[#FBF6E8] hover:text-[#1E3A8A]"
                          }`}
                      >
                        {link.label}
                        <ArrowRight className={`w-4 h-4 ${isActive ? "text-[#1E3A8A]" : "opacity-40"}`} />
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4 mt-2 border-t border-[#94A3B8]/20"
                >
                  <Link
                    href="/contact"
                    className="group relative overflow-hidden flex items-center justify-center w-full px-6 py-3.5 rounded-xl shadow-md bg-[#D4A017] text-[#0F2D5C]"
                  >
                    <div className="absolute inset-0 bg-[#0F2D5C] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                    <span className="relative z-10 flex items-center gap-2 text-[15px] font-bold group-hover:text-[#FBF6E8] transition-colors duration-300">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
