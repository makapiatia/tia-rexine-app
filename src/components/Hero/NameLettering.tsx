"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { write } from "@/components/shared/motion";
import nameArt from "../../../public/tia-rexine-name.webp";

export function NameLettering() {
  return (
    <motion.h1 id="hero-title" className="my-1 w-75 md:w-110 short:w-90" variants={write}>
      <Image
        src={nameArt}
        alt=""
        priority
        sizes="(max-width: 767px) 300px, 440px"
        className="block h-auto w-full"
      />
      <span className="sr-only">Tia Rexine</span>
    </motion.h1>
  );
}
