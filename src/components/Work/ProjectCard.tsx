"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { BrandIcon } from "@/components/shared/icons";
import { card, glareHandlers } from "@/components/shared/motion";
import type { Project } from "./projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article className="glass-card glare-card work-card" variants={card} {...glareHandlers()}>
      <span className={`work-logo${project.mobileLogoCircle ? " work-logo--circle" : ""}`}>
        <Image
          src={project.logo.src}
          alt={project.logo.alt}
          width={project.logo.width}
          height={project.logo.height}
          sizes="(max-width: 767px) 120px, 160px"
        />
      </span>
      <div className="work-info">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label="Built with">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="work-links">
          <a href={project.url} target="_blank" rel="noreferrer">
            Visit {project.domain}
            <ArrowUpRight aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.name} on GitHub (opens in a new tab)`}
          >
            <BrandIcon icon={faGithub} />
            GitHub
          </a>
        </div>
        <ul className="palette" aria-label={`${project.name} color palette`}>
          {project.palette.map((color) => (
            <li key={color.hex} style={{ background: color.hex }} title={`${color.name} ${color.hex}`}>
              <span className="sr-only">
                {color.name} {color.hex}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
