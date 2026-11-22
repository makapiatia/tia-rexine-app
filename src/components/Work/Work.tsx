"use client";

import classNames from "classnames";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { group, inView, rise } from "@/components/shared/motion";
import { pageSection, sectionIntro, sectionPadding } from "@/components/shared/styles";
import { ProjectCard } from "./ProjectCard";
import { projects } from "./projects";

export function Work() {
  return (
    <motion.section
      className={classNames(pageSection, sectionPadding)}
      id="work"
      aria-labelledby="work-title"
      variants={group}
      {...inView}
    >
      <SectionHeading kicker="stuff I've made" title="Things I've built" id="work-title" />
      <motion.p className={sectionIntro} variants={rise}>
        A couple of sites for small businesses, including my own.
      </motion.p>
      <motion.div className="grid w-full gap-4" variants={group}>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </motion.div>
    </motion.section>
  );
}
