"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";

const portfolioItems = [
  {
    id: 1,
    title: "College Town Retail Center",
    location: "Alabama",
    description: "Comprehensive aerial coverage of multi-tenant retail center showcasing parking, building layout, and surrounding area for property marketing.",
    image: "/images/portfolio/college-town-aerial.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Commercial Property Analysis",
    location: "Southeast Region",
    description: "Professional drone image markup for property analysis, tenant identification, and site planning documentation.",
    image: "/images/portfolio/drone-markup-example.png",
  },
  {
    id: 3,
    title: "Commercial Development",
    location: "Alabama",
    description: "High-altitude aerial photography capturing commercial property development with surrounding infrastructure and access points.",
    image: "/images/portfolio/aerial-property-view.png",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-mesh pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-wide relative z-10">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <span className="badge bg-white/10 text-primary-300 mb-4">Our Work</span>
            <h1 className="text-white">Portfolio</h1>
            <p className="mt-6 text-lg text-secondary-300 md:text-xl">
              Professional aerial photography showcasing commercial properties
              across Alabama and the Southeast.
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Featured Project */}
      <section className="section-sm">
        <div className="container-wide">
          <FadeIn>
            <div className="group relative overflow-hidden rounded-3xl">
              <div className="relative aspect-[21/9] md:aspect-[21/7]">
                <Image
                  src={portfolioItems[0].image}
                  alt={portfolioItems[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                  <div className="p-8 md:p-12 lg:p-16 max-w-2xl">
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-4 py-1.5 text-sm font-semibold text-white">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                      </svg>
                      Featured Project
                    </span>
                    <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                      {portfolioItems[0].title}
                    </h2>
                    <p className="mt-3 text-white/80 text-lg hidden sm:block">
                      {portfolioItems[0].description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-white/60">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{portfolioItems[0].location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Other Projects */}
      <section className="section-sm pt-0">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2">
            {portfolioItems.slice(1).map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.1}>
                <motion.div
                  className="group relative overflow-hidden rounded-2xl"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                      <div className="flex items-center gap-2 text-white/60 text-sm">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{item.location}</span>
                      </div>
                      <h3 className="mt-2 text-2xl md:text-3xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-white/70 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="section bg-secondary-50">
        <div className="container-wide">
          <FadeIn className="text-center mb-12">
            <h2>What We Capture</h2>
            <p className="mt-4 text-secondary-500 max-w-2xl mx-auto">
              From retail centers to industrial complexes, we provide comprehensive aerial coverage for all commercial property types.
            </p>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Retail Centers", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { name: "Industrial Sites", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" },
              { name: "Land & Development", icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" },
              { name: "Construction Progress", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
            ].map((service, i) => (
              <FadeIn key={service.name} delay={i * 0.1}>
                <div className="rounded-xl bg-white p-6 text-center shadow-card">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-semibold text-secondary-900">{service.name}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
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
