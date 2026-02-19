"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/FadeIn";

const photographyPackages = [
  {
    name: "Single Parcel",
    price: 200,
    description: "Perfect for individual properties",
    features: [
      "12-15 high-resolution images",
      "Multiple angles and elevations",
      "Professional editing included",
      "48-hour delivery",
      "Web and print ready formats",
    ],
    popular: false,
  },
  {
    name: "Shopping Center",
    price: 250,
    description: "Ideal for retail properties",
    features: [
      "15-20 high-resolution images",
      "Complete property coverage",
      "Parking lot aerial views",
      "Professional editing included",
      "48-hour delivery",
      "Drone video clip included",
    ],
    popular: true,
  },
  {
    name: "Premium Package",
    price: 400,
    description: "Full coverage solution",
    features: [
      "25+ high-resolution images",
      "4K video walkthrough",
      "360° panoramic shots",
      "Same-day rush available",
      "Social media optimized formats",
      "Unlimited revisions",
    ],
    popular: false,
  },
];

const advancedServices = [
  {
    name: "3D Mapping & Surveying",
    price: "Starting at $495",
    description:
      "Create detailed 3D models and orthomosaic maps of your property for surveying, planning, and documentation.",
    features: [
      "High-accuracy 3D models",
      "Orthomosaic mapping",
      "Volume calculations",
      "Topographic analysis",
      "CAD-compatible exports",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    name: "Construction Progress",
    price: "Starting at $495",
    description:
      "Document construction progress with regular aerial photography and mapping for project management.",
    features: [
      "Progress documentation",
      "Before/after comparisons",
      "Site planning support",
      "Safety inspections",
      "Stakeholder reports",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    name: "Solar Inspection",
    price: "Call for Pricing",
    description:
      "Thermal imaging and visual inspection for solar arrays to identify defects and optimize performance.",
    features: [
      "Thermal imaging analysis",
      "Hotspot detection",
      "Panel defect identification",
      "Performance reports",
      "Maintenance recommendations",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "How long does a typical shoot take?",
    answer:
      "Most single property shoots take 30-60 minutes on-site. Larger properties or those requiring 3D mapping may take longer. We'll provide a time estimate during your consultation.",
  },
  {
    question: "What's included in the editing process?",
    answer:
      "All images go through professional editing including color correction, exposure adjustment, horizon leveling, and minor retouching. We ensure every image meets our quality standards.",
  },
  {
    question: "Do you have insurance and certifications?",
    answer:
      "Yes, all our pilots are FAA Part 107 certified and we carry comprehensive liability insurance for every flight. We can provide certificates of insurance upon request.",
  },
  {
    question: "What happens if weather delays the shoot?",
    answer:
      "We monitor weather conditions closely and will reschedule at no extra cost if conditions are unsafe or unsuitable for quality photography. Your investment is protected.",
  },
];

export default function InvestmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-mesh pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-wide relative z-10">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <span className="badge bg-white/10 text-primary-300 mb-4">Pricing</span>
            <h1 className="text-white">Investment & Packages</h1>
            <p className="mt-6 text-lg text-secondary-300 md:text-xl">
              Transparent pricing for professional aerial photography and drone
              services. All packages include professional editing and fast turnaround.
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Photography Packages */}
      <section className="section-sm">
        <div className="container-wide">
          <FadeIn className="text-center mb-12">
            <h2>Aerial Photography</h2>
            <p className="mt-4 text-secondary-500">
              Professional drone photography packages for commercial properties
            </p>
          </FadeIn>

          <FadeInStagger className="grid gap-8 lg:grid-cols-3" staggerDelay={0.1}>
            {photographyPackages.map((pkg) => (
              <FadeInStaggerItem key={pkg.name}>
                <motion.div
                  className={`relative h-full rounded-3xl p-8 ${
                    pkg.popular
                      ? "bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-xl shadow-primary-500/25"
                      : "border border-secondary-200 bg-white"
                  }`}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-accent-500 px-4 py-1.5 text-sm font-bold text-white shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <h3 className={`text-2xl font-bold ${pkg.popular ? "text-white" : ""}`}>
                    {pkg.name}
                  </h3>
                  <p className={`mt-2 ${pkg.popular ? "text-white/80" : "text-secondary-500"}`}>
                    {pkg.description}
                  </p>

                  <div className="mt-6">
                    <span className={`text-5xl font-bold ${pkg.popular ? "text-white" : "text-primary-600"}`}>
                      ${pkg.price}
                    </span>
                  </div>

                  <ul className="mt-8 space-y-4">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg
                          className={`mt-0.5 h-5 w-5 flex-shrink-0 ${
                            pkg.popular ? "text-accent-300" : "text-success-500"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className={pkg.popular ? "text-white/90" : "text-secondary-600"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/consultation"
                    className={`mt-8 block w-full text-center ${
                      pkg.popular ? "btn-white" : "btn-primary"
                    }`}
                  >
                    Book Now
                  </Link>
                </motion.div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Advanced Services */}
      <section className="section bg-secondary-50">
        <div className="container-wide">
          <FadeIn className="text-center mb-12">
            <span className="badge-accent mb-4">Advanced Services</span>
            <h2>Specialized Solutions</h2>
            <p className="mt-4 text-secondary-500">
              Advanced aerial solutions for construction, surveying, and inspection
            </p>
          </FadeIn>

          <FadeInStagger className="grid gap-8 lg:grid-cols-3" staggerDelay={0.1}>
            {advancedServices.map((service) => (
              <FadeInStaggerItem key={service.name}>
                <motion.div
                  className="h-full rounded-2xl border border-secondary-200 bg-white p-8"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    {service.icon}
                  </div>

                  <h3 className="mt-6 text-xl font-bold">{service.name}</h3>
                  <p className="mt-2 text-secondary-500">{service.description}</p>

                  <div className="mt-4">
                    <span className="text-2xl font-bold text-primary-600">{service.price}</span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg
                          className="mt-0.5 h-5 w-5 flex-shrink-0 text-success-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="text-sm text-secondary-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/consultation" className="btn-secondary mt-8 w-full">
                    Get Quote
                  </Link>
                </motion.div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-narrow">
          <FadeIn className="text-center mb-12">
            <h2>Frequently Asked Questions</h2>
            <p className="mt-4 text-secondary-500">
              Common questions about our services
            </p>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="rounded-2xl border border-secondary-200 bg-white overflow-hidden"
                initial={false}
              >
                <button
                  className="flex w-full items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-secondary-900">{faq.question}</span>
                  <motion.svg
                    className="h-5 w-5 text-secondary-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-secondary-600">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm">
        <div className="container-narrow">
          <div className="rounded-3xl bg-gradient-to-br from-primary-500 to-accent-500 p-8 md:p-12 text-center">
            <FadeIn>
              <h2 className="text-white">Custom Projects Welcome</h2>
              <p className="mt-4 text-white/80 max-w-xl mx-auto">
                Have a unique project or need a custom quote? We&apos;re happy to work with
                you to create a package that fits your specific needs and budget.
              </p>
              <Link href="/contact" className="btn-white btn-lg mt-8">
                Contact Us
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
