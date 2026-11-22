"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { write } from "@/components/shared/motion";

export function NameLettering() {
  return (
    <motion.h1
      id="hero-title"
      className="my-1 w-65 drop-shadow-[0_3px_12px_rgba(46,14,34,0.45)] md:w-90 short:w-72"
      variants={write}
    >
      <Image
        src="/name-lettering.webp"
        alt=""
        width={1200}
        height={456}
        priority
        sizes="(max-width: 767px) 260px, 360px"
        className="block h-auto w-full"
      />
      <span className="sr-only">Tia Rexine</span>
    </motion.h1>
  );
}
