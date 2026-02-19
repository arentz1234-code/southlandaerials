"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/investment" },
  { name: "About", href: "/aboutus" },
  { name: "Pilots", href: "/pilots" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-soft backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container-wide flex h-20 items-center justify-between">
        <Link href="/" className="relative z-10 flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Southland Aerials"
            width={180}
            height={48}
            className="h-10 w-auto md:h-12"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-secondary-600 hover:text-primary-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/consultation"
            className={`btn ${
              scrolled
                ? "btn-primary"
                : "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 border border-white/20"
            }`}
          >
            Get Started
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden ${
            scrolled ? "text-secondary-600" : "text-white"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <div className="flex flex-col gap-1.5">
            <motion.span
              className={`block h-0.5 w-6 rounded-full ${
                scrolled ? "bg-secondary-600" : "bg-white"
              }`}
              animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className={`block h-0.5 w-6 rounded-full ${
                scrolled ? "bg-secondary-600" : "bg-white"
              }`}
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className={`block h-0.5 w-6 rounded-full ${
                scrolled ? "bg-secondary-600" : "bg-white"
              }`}
              animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-white lg:hidden"
          >
            <div className="container-wide py-6">
              <div className="space-y-1">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="block rounded-xl px-4 py-3 text-lg font-medium text-secondary-700 transition-colors hover:bg-secondary-50 hover:text-primary-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 pt-6 border-t border-secondary-100"
              >
                <Link
                  href="/consultation"
                  className="btn-primary w-full justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
