"use client";

import { motion } from "framer-motion";

interface DroneGraphicProps {
  className?: string;
  animate?: boolean;
}

export function DroneGraphic({ className = "", animate = true }: DroneGraphicProps) {
  return (
    <motion.svg
      viewBox="0 0 200 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      animate={animate ? { y: [0, -8, 0] } : {}}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Propeller blurs - animated */}
      <motion.ellipse
        cx="30"
        cy="30"
        rx="25"
        ry="8"
        fill="url(#propGradient)"
        animate={{ rotate: 360 }}
        transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "30px 30px" }}
      />
      <motion.ellipse
        cx="170"
        cy="30"
        rx="25"
        ry="8"
        fill="url(#propGradient)"
        animate={{ rotate: -360 }}
        transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "170px 30px" }}
      />
      <motion.ellipse
        cx="30"
        cy="90"
        rx="25"
        ry="8"
        fill="url(#propGradient)"
        animate={{ rotate: -360 }}
        transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "30px 90px" }}
      />
      <motion.ellipse
        cx="170"
        cy="90"
        rx="25"
        ry="8"
        fill="url(#propGradient)"
        animate={{ rotate: 360 }}
        transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "170px 90px" }}
      />

      {/* Arms */}
      <path
        d="M30 35 L70 55 M170 35 L130 55 M30 85 L70 65 M170 85 L130 65"
        stroke="#64748b"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Body */}
      <rect x="70" y="50" width="60" height="20" rx="10" fill="#334155" />

      {/* Camera gimbal */}
      <rect x="90" y="68" width="20" height="12" rx="4" fill="#1e293b" />
      <circle cx="100" cy="74" r="5" fill="#0ea5e9" />
      <circle cx="100" cy="74" r="3" fill="#0f172a" />

      {/* Motor housings */}
      <circle cx="30" cy="30" r="10" fill="#475569" />
      <circle cx="170" cy="30" r="10" fill="#475569" />
      <circle cx="30" cy="90" r="10" fill="#475569" />
      <circle cx="170" cy="90" r="10" fill="#475569" />

      {/* LED lights */}
      <motion.circle
        cx="30"
        cy="30"
        r="3"
        fill="#22c55e"
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <motion.circle
        cx="170"
        cy="30"
        r="3"
        fill="#22c55e"
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
      />
      <motion.circle
        cx="30"
        cy="90"
        r="3"
        fill="#ef4444"
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.25 }}
      />
      <motion.circle
        cx="170"
        cy="90"
        r="3"
        fill="#ef4444"
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.75 }}
      />

      <defs>
        <linearGradient id="propGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#94a3b8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

export function DroneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="4" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5.5 5.5L9 9M18.5 5.5L15 9M5.5 18.5L9 15M18.5 18.5L15 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}
