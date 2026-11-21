"use client";

import { motion, type Variants } from "motion/react";
import { letter } from "@/components/shared/motion";

const letters: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045 } },
};

export function AnimatedName({ text }: { text: string }) {
  return (
    <motion.h1 id="hero-title" aria-label={text} variants={letters}>
      {Array.from(text).map((char, index) => (
        <motion.span key={index} className="name-letter" aria-hidden="true" variants={letter}>
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}
