"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { group, inView } from "@/components/shared/motion";
import { AboutCard } from "./AboutCard";
import { aboutBlocks } from "./aboutData";

export function About() {
  return (
    <motion.section className="page-section" id="about" aria-labelledby="about-title" variants={group} {...inView}>
      <SectionHeading kicker="pull up a chair" title="A bit about me" id="about-title" />
      <motion.div className="about-grid" variants={group}>
        {aboutBlocks.map((block) => (
          <AboutCard block={block} key={block.title} />
        ))}
      </motion.div>
    </motion.section>
  );
}
