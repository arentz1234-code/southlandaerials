"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/FadeIn";

const categories = [
  { id: "all", name: "All Projects" },
  { id: "retail", name: "Retail" },
  { id: "industrial", name: "Industrial" },
  { id: "commercial", name: "Commercial" },
  { id: "land", name: "Land" },
];

const portfolioItems = [
  {
    id: 1,
    title: "College Town Retail Center",
    category: "retail",
    description: "Comprehensive aerial coverage of retail center with parking",
    stats: "Aerial View",
    image: "/images/portfolio/college-town-aerial.jpg",
  },
  {
    id: 2,
    title: "Drone Image Markup",
    category: "commercial",
    description: "Professional markup and annotation for property analysis",
    stats: "Markup Example",
    image: "/images/portfolio/drone-markup-example.png",
  },
  {
    id: 3,
    title: "Commercial Property Aerial",
    category: "commercial",
    description: "High-quality aerial photography for commercial properties",
    stats: "Aerial Shot",
    image: "/images/portfolio/aerial-property-view.png",
  },
  {
    id: 4,
    title: "Huntsville Tech Campus",
    category: "commercial",
    description: "Multi-building tech campus documentation",
    stats: "8 buildings",
    gradient: "from-indigo-600 to-blue-500",
  },
  {
    id: 5,
    title: "Tuscaloosa Retail Center",
    category: "retail",
    description: "Strip mall and parking lot aerial views",
    stats: "45,000 sq ft",
    gradient: "from-rose-600 to-pink-500",
  },
  {
    id: 6,
    title: "Gulf Shores Development",
    category: "land",
    description: "Coastal land survey and mapping project",
    stats: "45 acres",
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    id: 7,
    title: "Prattville Distribution Center",
    category: "industrial",
    description: "Large-scale warehouse and logistics facility",
    stats: "500,000 sq ft",
    gradient: "from-amber-600 to-orange-500",
  },
  {
    id: 8,
    title: "Dothan Medical Complex",
    category: "commercial",
    description: "Medical office park aerial documentation",
    stats: "5 buildings",
    gradient: "from-cyan-600 to-blue-500",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-mesh pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-wide relative z-10">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <span className="badge bg-white/10 text-primary-300 mb-4">Our Work</span>
            <h1 className="text-white">Portfolio</h1>
            <p className="mt-6 text-lg text-secondary-300 md:text-xl">
              Explore our collection of aerial photography projects showcasing
              commercial properties across the Southeast.
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Portfolio Grid */}
      <section className="section-sm">
        <div className="container-wide">
          {/* Category Filter */}
          <FadeIn>
            <div className="mb-12 flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                    activeCategory === category.id
                      ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25"
                      : "bg-secondary-100 text-secondary-600 hover:bg-secondary-200"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </FadeIn>

          {/* Grid */}
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                    {/* Image or gradient background */}
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    ) : (
                      <>
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                        {/* Pattern overlay */}
                        <div className="absolute inset-0 opacity-20">
                          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                              <pattern id={`grid-${item.id}`} width="10" height="10" patternUnits="userSpaceOnUse">
                                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                              </pattern>
                            </defs>
                            <rect width="100" height="100" fill={`url(#grid-${item.id})`} />
                          </svg>
                        </div>
                        {/* Placeholder icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-30 transition-opacity group-hover:opacity-40">
                          <svg className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                          </svg>
                        </div>
                      </>
                    )}

                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/30" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                      >
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                          {item.stats}
                        </span>
                      </motion.div>
                      <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-white/70">
                        {categories.find((c) => c.id === item.category)?.name}
                      </span>
                      <h3 className="mt-1 text-xl font-bold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm text-white/70 opacity-0 transition-opacity group-hover:opacity-100">
                        {item.description}
                      </p>
                    </div>

                    {/* View button */}
                    <div className="absolute right-4 top-4 scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="container-narrow text-center">
          <FadeIn>
            <h2 className="text-white">Ready to Showcase Your Property?</h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-100">
              Get professional aerial photography that makes your listings stand out.
            </p>
            <Link href="/consultation" className="btn-white btn-lg mt-8">
              Get Started
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
