"use client";

import classNames from "classnames";
import { ChevronDown, Sun } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { Cactus } from "@/components/shared/icons";
import { group, rise, write } from "@/components/shared/motion";
import { handNote } from "@/components/shared/styles";
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
      className={classNames(
        "relative mx-auto grid min-h-svh grid-cols-[minmax(0,1fr)] content-end",
        "pt-8.5 pb-[clamp(180px,22vh,216px)]",
        "w-[min(100%-40px,560px)] max-[400px]:w-[calc(100%-32px)] md:w-[min(1200px,calc(100%-72px))]",
        "justify-items-center text-center md:justify-items-start md:pl-[7vw] md:text-left",
      )}
      aria-labelledby="hero-title"
      variants={sequence}
      initial="hidden"
      animate="show"
    >
      <motion.div className="flex flex-col items-center gap-1.75 md:items-start" variants={group}>
        <motion.p
          className={classNames(
            handNote,
            "mb-0.5 gap-1.5 text-[20px] md:justify-start md:gap-2 md:text-[26px]",
            "[&_svg]:size-4.5 [&_svg]:flex-none md:[&_svg]:size-5.5",
          )}
          variants={write}
        >
          <Sun aria-hidden="true" className="animate-spin-slow motion-reduce:animate-none" />
          hello from the Sonoran desert
          <Cactus className="origin-[50%_90%] animate-sway motion-reduce:animate-none" />
        </motion.p>
        <AnimatedName text="Tia Rexine" />
        <motion.p
          className={classNames(
            "mb-1 max-w-110 leading-[1.4] text-sand/92 [text-shadow:0_1px_8px_rgb(0_0_0/35%)]",
            "-mt-1.25 text-[13.5px] md:-mt-2.25 md:text-[15px]",
          )}
          variants={rise}
        >
          I&apos;m a full stack software engineer who designs and builds for the web. Away from the
          screen, I make time for art projects and admiring desert sunsets.
        </motion.p>
        <motion.div variants={rise}>
          <ContactLinks className="mt-1.5 md:justify-start" />
        </motion.div>
      </motion.div>

      <motion.a
        className={classNames(
          "absolute bottom-7 left-1/2 grid -translate-x-1/2 justify-items-center gap-0.5",
          "font-script font-semibold text-cream text-[20px] md:text-[21px]",
        )}
        href="#about"
        variants={rise}
        onClick={(event) => {
          const target = document.getElementById("about");
          if (!target) return;
          event.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <TrexBadge placement="hero" />
        <span className="leading-none">a bit about me</span>
        <ChevronDown aria-hidden="true" className="-mt-0.5 size-5 animate-nudge motion-reduce:animate-none" />
      </motion.a>
    </motion.section>
  );
}
