"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun } from "lucide-react";
import { motion } from "motion/react";
import { ContactLinks } from "@/components/Hero/ContactLinks";
import { TrexBadge } from "@/components/Hero/TrexBadge";
import { Cactus } from "@/components/shared/icons";
import { group, inView, rise } from "@/components/shared/motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { pageSection, sectionIntro } from "@/components/shared/styles";
import { MotionToggle } from "./MotionToggle";

export function SayHello() {
  const pathname = usePathname();

  return (
    <motion.footer
      className={classNames(pageSection, "pt-14 pb-4.5 md:pt-18 md:pb-10")}
      aria-labelledby="hello-title"
      variants={group}
      {...inView}
    >
      <Link
        href="/"
        className="-mb-4 rounded-full"
        aria-label="Back to the top of the home page"
        onClick={(event) => {
          // Already home: glide back up instead of reloading the route.
          if (pathname !== "/") return;
          event.preventDefault();
          const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
        }}
      >
        <TrexBadge placement="footer" />
      </Link>
      <SectionHeading kicker="my inbox is open" title="Let's connect" id="hello-title" />
      <motion.p className={sectionIntro} variants={rise}>
        Have a question, an idea or just want to chat? I&apos;d love to hear from you!
      </motion.p>
      <motion.div variants={rise}>
        <ContactLinks className="-mt-2.75" />
      </motion.div>
      <motion.div className="mt-8 grid justify-items-center gap-2.5" variants={rise}>
        <MotionToggle />
        <p className="inline-flex items-center gap-2 text-[12px] text-sand/72 [&_svg]:size-4">
          <Sun aria-hidden="true" className="animate-spin-slow motion-reduce:animate-none" />
          Made by Tia
          <Cactus className="origin-[50%_90%] animate-sway motion-reduce:animate-none" />
        </p>
      </motion.div>
    </motion.footer>
  );
}
