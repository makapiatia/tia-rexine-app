"use client";

import Image from "next/image";
import { ChevronDown, Mail, Sun } from "lucide-react";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { motion, type Variants } from "motion/react";
import { BrandIcon, Cactus } from "./icons";
import { group, letter, rise, trexPop, write } from "./motion-presets";

const sequence: Variants = {
  hidden: {},
  show: { transition: { delayChildren: 0.2, staggerChildren: 0.14 } },
};

const letters: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045 } },
};

export function ContactLinks() {
  return (
    <div className="contact-links" aria-label="Contact and social profiles">
      <a href="mailto:tiarexine@gmail.com" aria-label="Email Tia">
        <Mail aria-hidden="true" />
        <span>Email me</span>
      </a>
      <a href="https://www.linkedin.com/in/tia-rexine-781528b6" target="_blank" rel="noreferrer">
        <BrandIcon icon={faLinkedinIn} />
        <span>LinkedIn</span>
      </a>
      <a href="https://github.com/makapiatia" target="_blank" rel="noreferrer">
        <BrandIcon icon={faGithub} />
        <span>GitHub</span>
      </a>
    </div>
  );
}

export function TrexBadge({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`trex-mascot ${className}`}
      variants={trexPop}
      whileHover={{ rotate: [0, -10, 8, -6, 0], transition: { duration: 0.6 } }}
    >
      <Image src="/trex-badge.png" alt="" width={512} height={512} className="bob" priority={className === "hero-trex"} />
    </motion.div>
  );
}

function AnimatedName({ text }: { text: string }) {
  return (
    <motion.h1 id="hero-title" aria-label={text} variants={letters}>
      {Array.from(text).map((char, index) => (
        <motion.span key={index} className="name-letter" aria-hidden="true" variants={letter}>
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}

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
        <motion.p className="hero-role" variants={rise}>
          Full Stack Software Engineer
        </motion.p>
        <motion.p className="hero-tagline" variants={rise}>
          I build software for a living. The rest of the time I&apos;m making art and admiring desert
          sunsets.
        </motion.p>
        <motion.div variants={rise}>
          <ContactLinks />
        </motion.div>
      </motion.div>

      <motion.a className="scroll-cue" href="#about" variants={rise}>
        <TrexBadge className="hero-trex" />
        <span>a bit about me</span>
        <ChevronDown aria-hidden="true" />
      </motion.a>
    </motion.section>
  );
}
