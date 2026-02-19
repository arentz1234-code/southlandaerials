"use client";

import { motion } from "framer-motion";

interface GradientBlobProps {
  className?: string;
  color?: "primary" | "accent" | "mixed";
}

export function GradientBlob({ className = "", color = "primary" }: GradientBlobProps) {
  const colors = {
    primary: "from-primary-400/30 via-primary-500/20 to-sky-light/30",
    accent: "from-accent-400/30 via-accent-500/20 to-accent-300/30",
    mixed: "from-primary-400/30 via-accent-400/20 to-sky-light/30",
  };

  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-to-br ${colors[color]} blur-3xl ${className}`}
      animate={{
        scale: [1, 1.1, 1],
        x: [0, 10, 0],
        y: [0, -10, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function GridPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute inset-0 h-full w-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeOpacity="0.1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

export function DotPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute inset-0 h-full w-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="dots"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1" fill="currentColor" fillOpacity="0.15" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}
