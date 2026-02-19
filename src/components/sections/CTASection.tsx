"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { DroneGraphic } from "@/components/ui/DroneGraphic";

export function CTASection() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 p-8 md:p-16">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="cta-dots" width="8" height="8" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="white" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#cta-dots)" />
            </svg>
          </div>

          {/* Floating elements */}
          <motion.div
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-white/10"
            animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <h2 className="text-white text-balance">
                Ready to Elevate Your Property Marketing?
              </h2>
              <p className="mt-6 text-lg text-white/80 md:text-xl">
                Book a free consultation and discover how professional aerial
                photography can transform your listings and help you close deals
                faster.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/consultation" className="btn-white btn-lg group">
                  Book Free Consultation
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
                  href="/contact"
                  className="btn btn-lg border-2 border-white/30 text-white hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-accent-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-white/80">48-Hour Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-accent-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-white/80">No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-accent-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-white/80">100% Satisfaction</span>
                </div>
              </div>
            </FadeIn>

            {/* Drone illustration */}
            <FadeIn direction="left" delay={0.2}>
              <div className="hidden lg:block">
                <DroneGraphic className="w-full max-w-md mx-auto" />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
