"use client";

import Image from "next/image";
import { ArrowUpRight, Heart } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { GlassCard } from "@/components/shared/GlassCard";
import { chip, write } from "@/components/shared/motion";
import { neighbors, type AboutBlock } from "./aboutData";

const chips: Variants = {
  hidden: {},
  show: { transition: { delayChildren: 0.5, staggerChildren: 0.07 } },
};

export function AboutCard({ block }: { block: AboutBlock }) {
  const { icons, title, body, link, neighbors: showNeighbors } = block;

  return (
    <GlassCard className="about-card">
      <span className="about-icons">
        {icons.map((BlockIcon, index) => (
          <span className="about-icon" key={index}>
            <BlockIcon aria-hidden="true" />
          </span>
        ))}
      </span>
      <h3>{title}</h3>
      {body.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      {showNeighbors ? (
        <>
          <motion.ul className="neighbor-list" variants={chips}>
            {neighbors.map((name) => (
              <motion.li key={name} variants={chip}>
                {name}
              </motion.li>
            ))}
          </motion.ul>
          <motion.p className="hand-note neighbors-aside" variants={write}>
            yes, even the tarantulas <Heart aria-hidden="true" className="beat" />
          </motion.p>
        </>
      ) : null}
      {link ? (
        <a className="about-link" href={link.href} target="_blank" rel="noreferrer">
          <Image src={link.logo} alt={link.logoAlt} width={2925} height={2673} sizes="72px" />
          <span>Visit {link.label}</span>
          <span className="sr-only"> (opens in a new tab)</span>
          <ArrowUpRight aria-hidden="true" />
        </a>
      ) : null}
    </GlassCard>
  );
}
