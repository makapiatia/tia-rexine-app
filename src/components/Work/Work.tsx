"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { group, inView, rise } from "@/components/shared/motion";
import { ProjectCard } from "./ProjectCard";
import { projects } from "./projects";

export function Work() {
  return (
    <motion.section className="page-section" id="work" aria-labelledby="work-title" variants={group} {...inView}>
      <SectionHeading kicker="stuff I've made" title="Things I've built" id="work-title" />
      <motion.p className="section-intro" variants={rise}>
        A couple of sites for small businesses, including my own.
      </motion.p>
      <motion.div className="work-grid" variants={group}>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </motion.div>
    </motion.section>
  );
}
