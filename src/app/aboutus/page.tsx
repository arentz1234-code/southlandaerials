"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/FadeIn";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { DroneGraphic } from "@/components/ui/DroneGraphic";

const stats = [
  { value: 5, suffix: "+", label: "Years in Business" },
  { value: 100, suffix: "%", label: "FAA Certified" },
];

const values = [
  {
    title: "Quality First",
    description:
      "We never compromise on quality. Every image we deliver meets our professional standards.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Safety Certified",
    description:
      "All pilots are FAA Part 107 certified and follow strict safety protocols on every flight.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "Fast Turnaround",
    description:
      "We understand deadlines matter. Most projects are delivered within 48 hours.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Client Focused",
    description:
      "Your success is our priority. We work closely with you to ensure every project exceeds expectations.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    color: "from-violet-500 to-purple-500",
  },
];

const timeline = [
  {
    year: "2018",
    title: "Founded",
    description: "Southland Aerials was established with a mission to provide professional aerial photography services.",
  },
  {
    year: "2019",
    title: "Expanded Services",
    description: "Added 3D mapping and surveying capabilities to serve construction and development clients.",
  },
  {
    year: "2021",
    title: "Regional Growth",
    description: "Expanded service area to cover the entire Southeast region including Georgia, Florida, and Mississippi.",
  },
  {
    year: "2023",
    title: "Statewide Coverage",
    description: "Achieved full coverage across Alabama with rapid response times for all major cities.",
  },
  {
    year: "2024",
    title: "New Technology",
    description: "Invested in latest drone technology for enhanced 4K video and thermal imaging capabilities.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-mesh pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-wide relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <span className="badge bg-white/10 text-primary-300 mb-4">About Us</span>
              <h1 className="text-white">
                Elevating Properties Since{" "}
                <span className="text-gradient-light">2018</span>
              </h1>
              <p className="mt-6 text-lg text-secondary-300">
                Based in Alabama, we&apos;ve been providing professional drone
                photography and videography services to commercial real estate
                clients across the Southeast for over 5 years.
              </p>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div className="hidden lg:block">
                <DroneGraphic className="w-full max-w-md mx-auto" />
              </div>
            </FadeIn>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Stats */}
      <section className="relative -mt-16 z-20">
        <div className="container-wide">
          <FadeIn>
            <div className="grid gap-6 rounded-2xl bg-white p-8 shadow-xl sm:grid-cols-2">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center ${
                    index !== stats.length - 1 ? "sm:border-r sm:border-secondary-100" : ""
                  }`}
                >
                  <div className="text-4xl font-bold text-primary-600 md:text-5xl">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2} />
                  </div>
                  <p className="mt-2 text-secondary-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <span className="badge-primary mb-4">Our Story</span>
              <h2>
                A Passion for Aviation Meets Commercial Real Estate
              </h2>
              <div className="mt-6 space-y-4 text-secondary-600">
                <p>
                  Southland Aerials was founded with a simple mission: to provide
                  commercial real estate professionals with stunning aerial imagery
                  that helps them market and document their properties more effectively.
                </p>
                <p>
                  What started as a passion project combining our love of aviation
                  with photography has grown into a trusted service provider for
                  property owners, developers, and real estate professionals across
                  the Southeast.
                </p>
                <p>
                  With over 5 years of experience serving Alabama and the Southeast, we
                  bring the expertise, equipment, and dedication needed to capture
                  your property at its absolute best.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-100 to-accent-100 p-8">
                  <div className="h-full rounded-2xl bg-white/50 backdrop-blur-sm flex items-center justify-center">
                    <svg className="h-32 w-32 text-primary-300" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>
                </div>
                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-4 -right-4 rounded-2xl bg-white p-4 shadow-xl"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success-100">
                      <svg className="h-6 w-6 text-success-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-secondary-900">FAA Certified</p>
                      <p className="text-xs text-secondary-500">Part 107 Licensed</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-secondary-50">
        <div className="container-wide">
          <FadeIn className="mx-auto max-w-2xl text-center mb-12">
            <span className="badge-accent mb-4">Our Values</span>
            <h2>The Principles That Guide Us</h2>
          </FadeIn>

          <FadeInStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {values.map((value) => (
              <FadeInStaggerItem key={value.title}>
                <motion.div
                  className="h-full rounded-2xl bg-white p-6 text-center shadow-card"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${value.color} text-white`}>
                    {value.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{value.title}</h3>
                  <p className="mt-2 text-sm text-secondary-500">{value.description}</p>
                </motion.div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container-narrow">
          <FadeIn className="mx-auto max-w-2xl text-center mb-12">
            <span className="badge-primary mb-4">Our Journey</span>
            <h2>Milestones Along the Way</h2>
          </FadeIn>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500 md:left-1/2 md:-translate-x-px" />

            {timeline.map((item, index) => (
              <FadeIn key={item.year} delay={index * 0.1}>
                <div className={`relative mb-12 last:mb-0 md:flex ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                    <div className="rounded-2xl bg-white p-6 shadow-card">
                      <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-bold text-primary-600">
                        {item.year}
                      </span>
                      <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                      <p className="mt-2 text-secondary-500">{item.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 top-6 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-primary-500 shadow-lg md:left-1/2">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>
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
            <h2 className="text-white">Ready to Work Together?</h2>
            <p className="mt-4 text-primary-100 max-w-xl mx-auto">
              Let&apos;s discuss how we can help elevate your property marketing with
              professional aerial photography.
            </p>
            <Link href="/consultation" className="btn-white btn-lg mt-8">
              Book a Consultation
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
