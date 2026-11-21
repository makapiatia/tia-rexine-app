"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { trexPop } from "@/components/shared/motion";

export function TrexBadge({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`trex-mascot ${className}`}
      variants={trexPop}
      whileHover={{ rotate: [0, -10, 8, -6, 0], transition: { duration: 0.6 } }}
    >
      <Image
        src="/trex-badge.png"
        alt=""
        width={512}
        height={512}
        className="bob"
        priority={className === "hero-trex"}
      />
    </motion.div>
  );
}
