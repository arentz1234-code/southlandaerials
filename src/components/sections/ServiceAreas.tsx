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

// City positions on the map (approximate lat/long converted to SVG coordinates)
const cities = [
  { x: 195, y: 45, name: "Huntsville", label: true },
  { x: 175, y: 95, name: "Birmingham", label: true },
  { x: 130, y: 115, name: "Tuscaloosa", label: false },
  { x: 185, y: 165, name: "Montgomery", label: true },
  { x: 115, y: 275, name: "Mobile", label: true },
  { x: 155, y: 295, name: "Gulf Shores", label: false },
  { x: 175, y: 310, name: "Pensacola", label: false, outside: true },
  { x: 270, y: 100, name: "Atlanta", label: false, outside: true },
];

export function ServiceAreas() {
  return (
    <section className="section relative overflow-hidden bg-white">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Map visualization */}
          <FadeIn direction="right">
            <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[400px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-50 to-accent-50" />

              {/* Alabama map */}
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <svg
                  viewBox="0 0 300 340"
                  className="h-full w-full max-w-[350px]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Alabama state outline - accurate shape */}
                  <path
                    d="M95 20
                       L230 20
                       L230 25
                       L235 25
                       L235 30
                       L240 30
                       L245 35
                       L245 250
                       L240 255
                       L235 260
                       L230 265
                       L225 270
                       L220 275
                       L180 275
                       L175 280
                       L170 285
                       L165 290
                       L160 295
                       L155 300
                       L140 300
                       L135 295
                       L125 295
                       L115 290
                       L105 285
                       L100 280
                       L95 275
                       L95 20
                       Z"
                    fill="#0ea5e9"
                    fillOpacity="0.08"
                    stroke="#0ea5e9"
                    strokeWidth="2"
                    className="opacity-60"
                  />

                  {/* Mobile Bay indent */}
                  <path
                    d="M115 290 L125 295 L135 295 L140 300 L130 310 L115 315 L100 310 L95 300 L100 295 L105 290"
                    fill="#0ea5e9"
                    fillOpacity="0.05"
                    stroke="#0ea5e9"
                    strokeWidth="1.5"
                    className="opacity-40"
                  />

                  {/* State label */}
                  <text
                    x="165"
                    y="200"
                    textAnchor="middle"
                    className="fill-primary-300 text-[32px] font-bold opacity-30"
                  >
                    AL
                  </text>

                  {/* Neighboring states labels */}
                  <text x="270" y="60" textAnchor="middle" className="fill-secondary-300 text-[14px] font-medium">
                    GA
                  </text>
                  <text x="50" y="150" textAnchor="middle" className="fill-secondary-300 text-[14px] font-medium">
                    MS
                  </text>
                  <text x="165" y="335" textAnchor="middle" className="fill-secondary-300 text-[14px] font-medium">
                    FL
                  </text>
                  <text x="165" y="12" textAnchor="middle" className="fill-secondary-300 text-[14px] font-medium">
                    TN
                  </text>

                  {/* Connection lines between cities */}
                  <path
                    d="M195 45 L175 95 M175 95 L185 165 M185 165 L115 275 M175 95 L130 115 M115 275 L155 295"
                    stroke="#0ea5e9"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    className="opacity-30"
                  />

                  {/* City markers */}
                  {cities.map((city, i) => (
                    <g key={city.name}>
                      {/* Pulse animation ring */}
                      <motion.circle
                        cx={city.x}
                        cy={city.y}
                        r="15"
                        fill="#0ea5e9"
                        fillOpacity="0.2"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                        style={{ transformOrigin: `${city.x}px ${city.y}px` }}
                      />
                      {/* Main dot */}
                      <circle
                        cx={city.x}
                        cy={city.y}
                        r={city.outside ? "5" : "7"}
                        fill={city.outside ? "#94a3b8" : "#0ea5e9"}
                      />
                      {/* Inner dot */}
                      <circle
                        cx={city.x}
                        cy={city.y}
                        r={city.outside ? "2" : "3"}
                        fill="white"
                      />
                      {/* City label */}
                      {city.label && (
                        <text
                          x={city.x + 12}
                          y={city.y + 4}
                          className="fill-secondary-600 text-[11px] font-medium"
                        >
                          {city.name}
                        </text>
                      )}
                    </g>
                  ))}
                </svg>

                {/* Animated drone */}
                <motion.div
                  className="absolute"
                  style={{ left: "20%", top: "20%" }}
                  animate={{
                    x: [0, 80, 40, 100, 0],
                    y: [0, 40, 120, 80, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-500 shadow-lg shadow-accent-500/30">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                </motion.div>
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
