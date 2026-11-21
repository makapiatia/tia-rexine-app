"use client";

import { ChevronDown, Sun } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { Cactus } from "@/components/shared/icons";
import { group, rise, write } from "@/components/shared/motion";
import { AnimatedName } from "./AnimatedName";
import { ContactLinks } from "./ContactLinks";
import { TrexBadge } from "./TrexBadge";

const sequence: Variants = {
  hidden: {},
  show: { transition: { delayChildren: 0.2, staggerChildren: 0.14 } },
};

export function Hero() {
  return (
    <motion.section
      className="dark-hero"
      aria-labelledby="hero-title"
      variants={sequence}
      initial="hidden"
      animate="show"
    >
      <motion.div className="dark-identity" variants={group}>
        <motion.p className="hand-note" variants={write}>
          <Sun aria-hidden="true" className="spin-slow" />
          hello from the Sonoran desert
          <Cactus className="sway" />
        </motion.p>
        <AnimatedName text="Tia Rexine" />
        <motion.p className="hero-tagline" variants={rise}>
          I&apos;m a full stack software engineer who designs and builds for the web. Away from the
          screen, I make time for art projects and admiring desert sunsets.
        </motion.p>
        <motion.div variants={rise}>
          <ContactLinks />
        </motion.div>
      </motion.div>

      <motion.a
        className="scroll-cue"
        href="#about"
        variants={rise}
        onClick={(event) => {
          const target = document.getElementById("about");
          if (!target) return;
          event.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <TrexBadge className="hero-trex" />
        <span>a bit about me</span>
        <ChevronDown aria-hidden="true" />
      </motion.a>
    </motion.section>
  );
}
