"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { DroneGraphic } from "@/components/ui/DroneGraphic";
import { GradientBlob, GridPattern } from "@/components/ui/GradientBlob";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FadeIn } from "@/components/ui/FadeIn";

const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "FAA Certified" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-mesh">
      {/* Background elements */}
      <GridPattern className="text-white opacity-20" />
      <GradientBlob
        className="h-[600px] w-[600px] -left-48 -top-48"
        color="primary"
      />
      <GradientBlob
        className="h-[500px] w-[500px] -right-32 top-1/4"
        color="mixed"
      />
      <GradientBlob
        className="h-[400px] w-[400px] left-1/3 -bottom-32"
        color="accent"
      />

      <div className="container-wide relative z-10 py-20 md:py-28 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <FadeIn delay={0.1}>
              <span className="badge-primary mb-6 inline-flex">
                <span className="mr-2 h-2 w-2 rounded-full bg-success-400 animate-pulse" />
                FAA Part 107 Certified
              </span>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-white">
                Elevate Your Property with{" "}
                <span className="text-gradient-light">Stunning Aerials</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-6 text-lg text-secondary-300 md:text-xl lg:max-w-xl">
                Professional drone photography and videography for commercial
                real estate. Capture your property from breathtaking angles that
                make buyers stop and look.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <Link href="/consultation" className="btn-accent btn-lg group">
                  Get Drone Photos Now
                  <motion.svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                </Link>
                <Link
                  href="/portfolio"
                  className="btn btn-lg border-2 border-white/20 text-white hover:bg-white/10"
                >
                  View Portfolio
                </Link>
              </div>
            </FadeIn>

          </div>

          {/* Right - Drone graphic */}
          <FadeIn delay={0.4} direction="left">
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-80 w-80 rounded-full bg-primary-500/20 blur-3xl" />
              </div>
              <DroneGraphic className="relative z-10 w-full max-w-lg mx-auto" />

              {/* Floating cards */}
              <motion.div
                className="absolute -left-8 top-8 glass-dark rounded-xl px-4 py-3"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success-500/20">
                    <svg className="h-5 w-5 text-success-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-secondary-400">Status</p>
                    <p className="text-sm font-semibold text-white">Flight Ready</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-4 bottom-16 glass-dark rounded-xl px-4 py-3"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500/20">
                    <svg className="h-5 w-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-secondary-400">Resolution</p>
                    <p className="text-sm font-semibold text-white">4K Ultra HD</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>

        {/* Stats */}
        <FadeIn delay={0.6}>
          <div className="mt-20 grid gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:grid-cols-2 lg:mt-28">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center ${
                  index !== stats.length - 1
                    ? "sm:border-r sm:border-white/10"
                    : ""
                }`}
              >
                <div className="text-4xl font-bold text-white md:text-5xl">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>
                <p className="mt-2 text-secondary-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
