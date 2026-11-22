"use client";

import classNames from "classnames";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { BrandIcon } from "@/components/shared/icons";
import { card, glareHandlers } from "@/components/shared/motion";
import { cardText, cardTitle, pill } from "@/components/shared/styles";
import type { Project } from "./projects";

const projectLink = classNames(
  pill,
  "group/pill justify-center py-2.25 text-[12.5px] md:py-1.75 md:text-[13px]",
  "[&_svg]:size-3.5 [&_svg]:transition-transform [&_svg]:duration-200 md:[&_svg]:size-3.75",
  "hover:[&_svg]:translate-x-px hover:[&_svg]:-translate-y-px",
);

export function ProjectCard({ project }: { project: Project }) {
  const circle = project.mobileLogoCircle;

  return (
    <motion.article
      className={classNames(
        "glass glare-card group relative grid",
        "grid-cols-1 justify-items-center gap-x-8 gap-y-2 p-5 text-center",
        "md:grid-cols-[200px_minmax(0,1fr)] md:items-center md:justify-items-stretch md:gap-8 md:p-6 md:text-left",
      )}
      variants={card}
      {...glareHandlers()}
    >
      <span
        className={classNames(
          "grid place-items-center justify-self-center",
          "md:self-stretch md:justify-self-auto md:border-r md:border-sand/18 md:p-0 md:pr-7",
          {
            "pb-2": !circle,
            "mb-1 size-30 rounded-full border-[1.5px] border-sand/45": circle,
            "transition-transform duration-300 group-hover:scale-110 md:group-hover:scale-100": circle,
            "md:mb-0 md:size-auto md:rounded-none md:border-y-0 md:border-l-0": circle,
          },
        )}
      >
        <Image
          src={project.logo.src}
          alt={project.logo.alt}
          width={project.logo.width}
          height={project.logo.height}
          sizes="(max-width: 767px) 120px, 160px"
          className={classNames(
            "object-contain transition-transform duration-300",
            "md:size-40 md:translate-0 md:group-hover:scale-110",
            {
              "size-[70%] translate-x-[1%] translate-y-[0.2%]": circle,
              "size-30 group-hover:scale-110": !circle,
            },
          )}
        />
      </span>
      <div className="contents md:grid md:justify-items-start md:gap-2">
        <h3 className={classNames(cardTitle, "text-[17px] leading-[1.2] md:text-[20px] md:leading-normal")}>
          {project.name}
        </h3>
        <p className={cardText}>{project.description}</p>
        <ul className="dot-list justify-center md:mt-0.5 md:justify-start" aria-label="Built with">
          {project.tags.map((tag) => (
            <li
              className="font-semibold text-cream text-[12px] leading-[1.6] md:text-[13px] md:leading-[1.7]"
              key={tag}
            >
              {tag}
            </li>
          ))}
        </ul>
        <div
          className={classNames(
            "mt-0.5 grid w-full gap-2",
            "md:mt-1.5 md:flex md:w-auto md:flex-wrap md:gap-2.5",
          )}
        >
          <a className={projectLink} href={project.url} target="_blank" rel="noreferrer">
            Visit {project.domain}
            <ArrowUpRight aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            className={projectLink}
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.name} on GitHub (opens in a new tab)`}
          >
            <BrandIcon icon={faGithub} />
            GitHub
          </a>
        </div>
        <ul
          className="mt-0.5 flex gap-2 justify-self-center md:mt-2 md:justify-self-auto"
          aria-label={`${project.name} color palette`}
        >
          {project.palette.map((color) => (
            <li
              key={color.hex}
              className={classNames(
                "rounded-full border-2 border-sand/55 shadow-[0_2px_8px_rgba(0,0,0,0.3)]",
                "size-5.5 md:size-6.5",
              )}
              style={{ background: color.hex }}
              title={`${color.name} ${color.hex}`}
            >
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
