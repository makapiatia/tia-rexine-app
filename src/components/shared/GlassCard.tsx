"use client";

import classNames from "classnames";
import type { ReactNode } from "react";
import { motion } from "motion/react";
import { card, glareHandlers } from "./motion";

export function GlassCard({ className, children }: { className: string; children: ReactNode }) {
  return (
    <motion.article
      className={classNames("glass glare-card group relative", className)}
      variants={card}
      {...glareHandlers()}
    >
      {children}
    </motion.article>
  );
}
