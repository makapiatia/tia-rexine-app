"use client";

import classNames from "classnames";
import type { ReactNode } from "react";
import { motion } from "motion/react";
import { group, rise, write } from "./motion";
import { handNote } from "./styles";

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
    <motion.div className="grid justify-items-center gap-1" variants={group}>
      <motion.p className={classNames(handNote, "gap-2 text-cream text-[20px] md:text-[24px]")} variants={write}>
        {kicker}
      </motion.p>
      <motion.h2
        id={id}
        className={classNames(
          "text-sunset font-display font-medium leading-[1.1] text-[clamp(32px,4vw,44px)]",
          "drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]",
        )}
        variants={rise}
      >
        {title}
      </motion.h2>
      {children}
    </motion.div>
  );
}
