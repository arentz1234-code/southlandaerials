"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/FadeIn";

const services = [
  {
    title: "Aerial Photography",
    description:
      "Professional drone photography for commercial real estate, showcasing your property from stunning perspectives.",
    price: "Starting at $200",
    features: [
      "12-15 high-resolution images",
      "Professional editing included",
      "48-hour turnaround",
      "Multiple angles & elevations",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    color: "primary",
    href: "/investment",
  },
  {
    title: "3D Mapping",
    description:
      "Precise 3D models and orthomosaic maps for construction, land surveys, and detailed property analysis.",
    price: "Starting at $495",
    features: [
      "High-accuracy 3D models",
      "Orthomosaic mapping",
      "Volume calculations",
      "CAD-compatible exports",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    color: "accent",
    featured: true,
    href: "/investment",
  },
  {
    title: "Video Production",
    description:
      "Cinematic aerial video for property tours, marketing campaigns, and promotional content.",
    price: "Starting at $350",
    features: [
      "4K Ultra HD footage",
      "Professional editing",
      "Music & transitions",
      "Multiple format exports",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    color: "primary",
    href: "/investment",
  },
];

export function ServicesSection() {
  return (
    <section className="section relative overflow-hidden bg-gradient-subtle">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dots opacity-50" />

      <div className="container-wide relative">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="badge-accent mb-4">Our Services</span>
          <h2>Everything You Need to Showcase Your Property</h2>
          <p className="mt-4 text-lg text-secondary-500">
            Comprehensive aerial solutions tailored for commercial real estate
          </p>
        </FadeIn>

        <FadeInStagger className="mt-16 grid gap-8 lg:grid-cols-3" staggerDelay={0.15}>
          {services.map((service) => (
            <FadeInStaggerItem key={service.title}>
              <motion.div
                className={`group relative h-full ${
                  service.featured ? "lg:-mt-4 lg:mb-4" : ""
                }`}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className={`relative h-full rounded-3xl p-8 transition-all duration-300 ${
                    service.featured
                      ? "bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-2xl shadow-accent-500/25"
                      : "border border-secondary-100 bg-white shadow-lg group-hover:shadow-xl"
                  }`}
                >
                  {service.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-white px-4 py-1.5 text-sm font-bold text-accent-600 shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${
                      service.featured
                        ? "bg-white/20 text-white"
                        : "bg-primary-50 text-primary-600"
                    }`}
                  >
                    {service.icon}
                  </div>

                  <h3
                    className={`mt-6 text-2xl font-bold ${
                      service.featured ? "text-white" : ""
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`mt-3 ${
                      service.featured ? "text-white/80" : "text-secondary-500"
                    }`}
                  >
                    {service.description}
                  </p>

                  <div className="mt-6">
                    <span
                      className={`text-3xl font-bold ${
                        service.featured ? "text-white" : "text-primary-600"
                      }`}
                    >
                      {service.price}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg
                          className={`mt-0.5 h-5 w-5 flex-shrink-0 ${
                            service.featured
                              ? "text-accent-200"
                              : "text-success-500"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        <span
                          className={`text-sm ${
                            service.featured
                              ? "text-white/90"
                              : "text-secondary-600"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className={`mt-8 block w-full text-center ${
                      service.featured ? "btn-white" : "btn-primary"
                    }`}
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
