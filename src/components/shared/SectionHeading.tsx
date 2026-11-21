"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { group, rise, write } from "./motion";

export function SectionHeading({
  kicker,
  title,
  id,
  children,
}: {
  kicker: string;
  title: string;
  id: string;
  children?: ReactNode;
}) {
  return (
    <motion.div className="casual-heading" variants={group}>
      <motion.p className="hand-note" variants={write}>
        {kicker}
      </motion.p>
      <motion.h2 id={id} variants={rise}>
        {title}
      </motion.h2>
      {children}
    </motion.div>
  );
}
