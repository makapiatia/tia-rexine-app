"use client";

import { Sun } from "lucide-react";
import { motion } from "motion/react";
import { ContactLinks } from "@/components/Hero/ContactLinks";
import { TrexBadge } from "@/components/Hero/TrexBadge";
import { Cactus } from "@/components/shared/icons";
import { group, inView, rise } from "@/components/shared/motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MotionToggle } from "./MotionToggle";

export function SayHello() {
  return (
    <motion.footer className="page-section say-hello" aria-labelledby="hello-title" variants={group} {...inView}>
      <TrexBadge />
      <SectionHeading kicker="don't be a stranger" title="Say hello" id="hello-title" />
      <motion.p className="section-intro" variants={rise}>
        Building something, looking for a new team member, or just want to swap wildlife sightings?
        Send me a note. I reply faster than a roadrunner.
      </motion.p>
      <motion.div variants={rise}>
        <ContactLinks />
      </motion.div>
      <motion.div className="footer-meta" variants={rise}>
        <MotionToggle />
        <p className="signoff">
          <Sun aria-hidden="true" className="spin-slow" />
          Made by Tia
          <Cactus className="sway" />
        </p>
      </motion.div>
    </motion.footer>
  );
}
