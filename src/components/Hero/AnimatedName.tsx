"use client";

import classNames from "classnames";
import { motion, type Variants } from "motion/react";
import { letter } from "@/components/shared/motion";

const letters: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045 } },
};

export function AnimatedName({ text }: { text: string }) {
  return (
    <motion.h1
      id="hero-title"
      aria-label={text}
      className={classNames(
        "mt-0.75 font-display font-medium leading-[1.1]",
        "text-[46px] max-[400px]:text-[40px] md:text-[clamp(44px,4.8vw,58px)] short:text-[40px]",
        "drop-shadow-[0_3px_12px_rgba(46,14,34,0.5)]",
      )}
      variants={letters}
    >
      {Array.from(text).map((char, index) => (
        <motion.span key={index} className="text-sunset inline-block" aria-hidden="true" variants={letter}>
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}
