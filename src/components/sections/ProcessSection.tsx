"use client";

import { motion } from "framer-motion";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/FadeIn";

const steps = [
  {
    number: "01",
    title: "Schedule",
    description:
      "Book your shoot online in minutes. We'll confirm availability and prepare for your location.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
      </svg>
    ),
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    title: "Capture",
    description:
      "Our FAA certified pilots fly your property, capturing stunning footage from optimal angles.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
    ),
    color: "from-primary-500 to-blue-500",
  },
  {
    number: "03",
    title: "Edit",
    description:
      "Expert editors enhance each image with color grading, perspective correction, and retouching.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    color: "from-violet-500 to-purple-500",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Receive your high-resolution images within 48 hours, ready for listings and marketing.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    color: "from-emerald-500 to-green-500",
  },
];

export function ProcessSection() {
  return (
    <section className="section relative overflow-hidden bg-white">
      <div className="container-wide">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="badge-primary mb-4">How It Works</span>
          <h2>Simple Process, Stunning Results</h2>
          <p className="mt-4 text-lg text-secondary-500">
            From booking to delivery in as little as 48 hours
          </p>
        </FadeIn>

        <FadeInStagger className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4" staggerDelay={0.15}>
          {steps.map((step, index) => (
            <FadeInStaggerItem key={step.number}>
              <motion.div
                className="group relative h-full"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative h-full rounded-2xl border border-secondary-100 bg-white p-6 transition-shadow duration-300 group-hover:shadow-xl">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />

                  {/* Icon */}
                  <div className={`relative inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} text-white shadow-lg`}>
                    {step.icon}
                  </div>

                  {/* Step number */}
                  <div className="mt-6 flex items-center gap-3">
                    <span className={`bg-gradient-to-r ${step.color} bg-clip-text text-sm font-bold text-transparent`}>
                      {step.number}
                    </span>
                    <div className="h-px flex-1 bg-secondary-100" />
                  </div>

                  <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-secondary-500">{step.description}</p>

                  {/* Connector line for desktop */}
                  {index < steps.length - 1 && (
                    <div className="absolute -right-3 top-10 hidden h-px w-6 bg-secondary-200 lg:block">
                      <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-secondary-300" />
                    </div>
                  )}
                </div>
              </motion.div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
