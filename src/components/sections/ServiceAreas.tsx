"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";

const serviceAreas = [
  { name: "Birmingham", state: "AL", primary: true },
  { name: "Montgomery", state: "AL", primary: true },
  { name: "Mobile", state: "AL", primary: true },
  { name: "Huntsville", state: "AL", primary: true },
  { name: "Tuscaloosa", state: "AL", primary: false },
  { name: "Pensacola", state: "FL", primary: false },
  { name: "Atlanta Metro", state: "GA", primary: false },
  { name: "Gulf Shores", state: "AL", primary: false },
];

export function ServiceAreas() {
  return (
    <section className="section relative overflow-hidden bg-white">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Map visualization */}
          <FadeIn direction="right">
            <div className="relative aspect-square lg:aspect-auto lg:h-full">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-50 to-accent-50" />

              {/* Simplified map graphic */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative h-full w-full">
                  {/* State outline placeholder */}
                  <svg
                    viewBox="0 0 400 350"
                    className="h-full w-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Alabama-like shape */}
                    <path
                      d="M100 50 L300 50 L300 80 L320 80 L320 280 L280 320 L100 320 L100 50"
                      fill="none"
                      stroke="#0ea5e9"
                      strokeWidth="2"
                      strokeDasharray="5 5"
                      className="opacity-50"
                    />

                    {/* Service area dots with pulse */}
                    {[
                      { x: 180, y: 100, name: "Birmingham", delay: 0 },
                      { x: 200, y: 180, name: "Montgomery", delay: 0.2 },
                      { x: 280, y: 280, name: "Mobile", delay: 0.4 },
                      { x: 220, y: 60, name: "Huntsville", delay: 0.6 },
                      { x: 140, y: 140, name: "Tuscaloosa", delay: 0.8 },
                    ].map((city, i) => (
                      <g key={city.name}>
                        <motion.circle
                          cx={city.x}
                          cy={city.y}
                          r="20"
                          fill="#0ea5e9"
                          fillOpacity="0.2"
                          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.1, 0.2] }}
                          transition={{ duration: 2, repeat: Infinity, delay: city.delay }}
                        />
                        <circle cx={city.x} cy={city.y} r="8" fill="#0ea5e9" />
                        <circle cx={city.x} cy={city.y} r="4" fill="white" />
                      </g>
                    ))}

                    {/* Connection lines */}
                    <path
                      d="M180 100 L200 180 M200 180 L280 280 M180 100 L220 60 M180 100 L140 140"
                      stroke="#0ea5e9"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      className="opacity-30"
                    />
                  </svg>

                  {/* Drone flight path animation */}
                  <motion.div
                    className="absolute"
                    animate={{
                      x: [50, 200, 150, 250, 50],
                      y: [50, 100, 200, 150, 50],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-500 shadow-lg">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="left">
            <div className="flex h-full flex-col justify-center">
              <span className="badge-primary mb-4 inline-flex self-start">Coverage Area</span>
              <h2>Serving the Southeast</h2>
              <p className="mt-4 text-lg text-secondary-500">
                Based in Alabama, we provide professional drone services across the
                Southeast region. Our certified pilots are ready to capture your
                property from any location.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {serviceAreas.map((area, index) => (
                  <motion.div
                    key={area.name}
                    className={`flex items-center gap-3 rounded-xl border p-4 ${
                      area.primary
                        ? "border-primary-200 bg-primary-50"
                        : "border-secondary-100 bg-white"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                        area.primary
                          ? "bg-primary-500 text-white"
                          : "bg-secondary-100 text-secondary-600"
                      }`}
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-secondary-900">{area.name}</p>
                      <p className="text-sm text-secondary-500">{area.state}</p>
                    </div>
                    {area.primary && (
                      <span className="ml-auto text-xs font-medium text-primary-600">
                        Primary
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>

              <p className="mt-8 text-secondary-500">
                Don&apos;t see your area?{" "}
                <a href="/contact" className="link">
                  Contact us
                </a>{" "}
                to check availability for your location.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
