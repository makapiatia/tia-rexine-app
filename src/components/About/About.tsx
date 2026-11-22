"use client";

import classNames from "classnames";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { group, inView } from "@/components/shared/motion";
import { pageSection, sectionPadding } from "@/components/shared/styles";
import { AboutCard } from "./AboutCard";
import { aboutBlocks } from "./aboutData";

export function About() {
  return (
    <motion.section
      className={classNames(pageSection, sectionPadding)}
      id="about"
      aria-labelledby="about-title"
      variants={group}
      {...inView}
    >
      <SectionHeading kicker="nice to meet you" title="A bit about me" id="about-title" />
      <motion.div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2" variants={group}>
        {aboutBlocks.map((block) => (
          <AboutCard block={block} key={block.title} />
        ))}
      </motion.div>
    </motion.section>
  );
}
