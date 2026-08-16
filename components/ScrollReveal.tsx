"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

type RevealVariant = "fade-up" | "fade-left" | "fade-right" | "zoom" | "scale";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number; // in ms
  duration?: number; // in ms
  className?: string;
  once?: boolean;
}

const variantsMap: Record<RevealVariant, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: -32 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: 32 },
    visible: { opacity: 1, x: 0 },
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.88 },
    visible: { opacity: 1, scale: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
};

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
  once = true,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "0px 0px -40px 0px" }}
      variants={variantsMap[variant]}
      transition={{
        duration: duration / 1000,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerReveal({
  children,
  variant = "fade-up",
  staggerDelay = 100,
  baseDelay = 0,
  className = "",
  childClassName = "",
}: {
  children: ReactNode[];
  variant?: RevealVariant;
  staggerDelay?: number;
  baseDelay?: number;
  className?: string;
  childClassName?: string;
}) {
  return (
    <div className={className}>
      {(children as ReactNode[]).map((child, i) => (
        <ScrollReveal
          key={i}
          variant={variant}
          delay={baseDelay + i * staggerDelay}
          className={childClassName}
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
}
