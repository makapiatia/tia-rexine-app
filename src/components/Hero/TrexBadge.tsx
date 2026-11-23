"use client";

import classNames from "classnames";
import Image from "next/image";
import { motion } from "motion/react";
import { trexPop } from "@/components/shared/motion";

export function TrexBadge({ placement }: { placement: "hero" | "footer" }) {
  return (
    <motion.div
      className={classNames("drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]", {
        "mb-1.5 w-13.5 md:w-17": placement === "hero",
        "-mb-1 w-18 md:w-24": placement === "footer",
      })}
      variants={trexPop}
      whileHover={{ rotate: [0, -10, 8, -6, 0], transition: { duration: 0.6 } }}
    >
      <Image
        src="/trex-badge.png"
        alt=""
        width={512}
        height={512}
        className="block h-auto w-full animate-bob motion-reduce:animate-none"
        priority={placement === "hero"}
      />
    </motion.div>
  );
}
