"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/FadeIn";

const portfolioItems = [
  {
    title: "Birmingham Shopping Plaza",
    category: "Retail",
    gradient: "from-blue-600 to-cyan-500",
    stats: "150,000 sq ft",
  },
  {
    title: "Montgomery Industrial Park",
    category: "Industrial",
    gradient: "from-slate-700 to-slate-500",
    stats: "12 acres",
  },
  {
    title: "Mobile Office Complex",
    category: "Commercial",
    gradient: "from-violet-600 to-purple-500",
    stats: "8 buildings",
  },
  {
    title: "Gulf Shores Development",
    category: "Land",
    gradient: "from-emerald-600 to-teal-500",
    stats: "45 acres",
  },
];

export function PortfolioPreview() {
  return (
    <section className="section relative overflow-hidden bg-secondary-900">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="portfolio-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.05" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#portfolio-grid)" />
        </svg>
      </div>

      <div className="container-wide relative">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <FadeIn>
            <span className="badge bg-white/10 text-primary-300 mb-4">Portfolio</span>
            <h2 className="text-white">See Our Work in Action</h2>
            <p className="mt-3 text-secondary-400 max-w-xl">
              Browse examples of our aerial photography across various commercial property types
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/portfolio" className="btn-primary group">
              View Full Portfolio
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </FadeIn>
        </div>

        <FadeInStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
          {portfolioItems.map((item, index) => (
            <FadeInStaggerItem key={item.title}>
              <motion.div
                className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />

                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id={`pattern-${index}`} width="10" height="10" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="1" fill="white" />
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill={`url(#pattern-${index})`} />
                  </svg>
                </div>

                {/* Drone icon placeholder */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30 transition-opacity group-hover:opacity-40">
                  <svg className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      {item.stats}
                    </span>
                  </div>
                  <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-white/70">
                    {item.category}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-white">
                    {item.title}
                  </h3>
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
              </motion.div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        {/* Testimonial */}
        <FadeIn delay={0.4}>
          <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-12">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="flex-1">
                <svg className="h-10 w-10 text-primary-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="mt-4 text-xl text-white md:text-2xl">
                  &quot;The aerial photos completely transformed our property listing. We received multiple offers within the first week.&quot;
                </p>
                <div className="mt-6">
                  <p className="font-semibold text-white">Sarah Mitchell</p>
                  <p className="text-sm text-secondary-400">Commercial Real Estate Broker</p>
                </div>
              </div>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-12 w-12 rounded-full border-2 border-secondary-900 bg-gradient-to-br from-primary-400 to-primary-600"
                  />
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
