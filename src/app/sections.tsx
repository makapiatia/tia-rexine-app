"use client";

import Image from "next/image";
import type { ComponentType, ReactNode, SVGProps } from "react";
import {
  ArrowUpRight,
  Cat,
  CodeXml,
  Heart,
  Palette,
  Store,
  Sun,
  Sunset,
} from "lucide-react";
import { motion, type Variants } from "motion/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { BrandIcon, Burro, Cactus, SmileyFace } from "./icons";
import { ContactLinks, TrexBadge } from "./hero";
import { MotionToggle } from "./motion-toggle";
import {
  card,
  chip,
  glareHandlers,
  group,
  inView,
  rise,
  write,
} from "./motion-presets";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

type AboutLink = { href: string; label: string; logo: string; logoAlt: string };

const aboutBlocks: {
  icons: Icon[];
  title: string;
  body: ReactNode[];
  link?: AboutLink;
  neighbors?: boolean;
}[] = [
  {
    icons: [CodeXml],
    title: "Engineer by profession",
    body: [(
      <>
        I build web experiences that look beautiful and feel effortless, and I&apos;m happiest where
        design and engineering meet. With almost a decade&apos;s worth of experience, I&apos;m building a headless
        ecommerce storefront in React, Next.js and TypeScript, turning Figma designs into polished,
        accessible pages. Our team was even featured in{" "}
        <a
          className="inline-link"
          href="https://www.figma.com/customers/ruggable-reimagines-design-to-development-10x-faster-with-figma/"
          target="_blank"
          rel="noreferrer"
        >
          Figma&apos;s customer story
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        .
      </>
    )],
  },
  {
    icons: [Store],
    title: "Small business owner",
    body: [(
      <>
        In my off hours and on weekends I run Rexine Spa Care. And yes, that&apos;s a Tyrannosaurus
        rex in a hot{" "}
        <span className="nowrap">tub. <SmileyFace className="inline-icon" aria-hidden={false} aria-label="smiley face" role="img" /></span>
      </>
    )],
    link: {
      href: "https://www.rexinespacare.com/",
      label: "rexinespacare.com",
      logo: "/rexine-spa-logo.png",
      logoAlt:
        "Rexine Spa Care logo: a Tyrannosaurus rex relaxing in a hot tub",
    },
  },
  {
    icons: [Sunset, Burro],
    title: "Desert dweller by heart",
    body: [
      "I live in Arizona and wouldn't trade it for anywhere. My favorite time of day is sunset, when the light goes gold and the mountains turn every shade of purple. Some mornings you'll find me tending my garden of succulents, cacti and native desert shrubs.",
      "The best part of desert life is the company. I love every one of these locals:",
    ],
    neighbors: true,
  },
  {
    icons: [Palette, Cat],
    title: "Painter, ceramicist & cat mom",
    body: [
      "When I log off, I might sketch, pick up a paintbrush or wedge a lump of clay. I'm also an amateur interior decorator, always finding little ways to make my space feel more like home.",
      "Three cats, three personalities. One is pure energy: he runs laps on his cat wheel and even skateboards. One gets the zoomies at night but is a cuddle bug around the clock. And one is our peacekeeper, the missing link who keeps the whole crew together. Every painting, pot and pull request still has to pass their strict quality check.",
    ],
  },
];

const neighbors = [
  "wild burros",
  "jackrabbits",
  "javelinas",
  "quail",
  "coyotes",
  "owls",
  "hummingbirds",
  "tortoises",
  "lizards",
  "tarantulas",
];

type Project = {
  name: string;
  url: string;
  domain: string;
  github: string;
  logo: { src: string; width: number; height: number; alt: string };

  mobileLogoCircle?: boolean;
  description: string;

  tags: string[];
  palette: { name: string; hex: string }[];
};

const projects: Project[] = [
  {
    name: "Rexine Spa Care",
    url: "https://www.rexinespacare.com/",
    domain: "rexinespacare.com",
    mobileLogoCircle: true,
    github: "https://github.com/makapiatia/rexine-spa-care",
    logo: {
      src: "/rexine-spa-logo.png",
      width: 2925,
      height: 2673,
      alt: "Rexine Spa Care logo: a Tyrannosaurus rex relaxing in a hot tub",
    },
    description:
      "A playful mascot, a bright blue brand and a mobile-first site built to turn visitors into calls and texts.",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Logo design",
    ],
    palette: [
      { name: "Rexine blue", hex: "#0f52ba" },
      { name: "Deep blue", hex: "#0b387e" },
      { name: "Sky", hex: "#5cc8ff" },
      { name: "Aqua", hex: "#a6f1ff" },
      { name: "Mascot green", hex: "#62d8a8" },
    ],
  },
  {
    name: "Free Space Therapy",
    url: "https://www.freespace-therapy.com/",
    domain: "freespace-therapy.com",
    github: "https://github.com/makapiatia/freespace-therapy",
    logo: {
      src: "/free-space-logo.svg",
      width: 180,
      height: 180,
      alt: "Free Space Therapy logo",
    },
    description:
      "The client wanted a calm, straightforward site with no motion, so warm, grounding colors set the mood instead. A Contentful model lets her update the copy and design on her own.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Contentful",
      "Logo design",
    ],
    palette: [
      { name: "Sage", hex: "#5a9376" },
      { name: "Gold", hex: "#ceaf2c" },
      { name: "Butter", hex: "#f6e2b3" },
      { name: "Plum", hex: "#4a1e28" },
      { name: "Ink", hex: "#1c2133" },
    ],
  },
];

const chips: Variants = {
  hidden: {},
  show: { transition: { delayChildren: 0.5, staggerChildren: 0.07 } },
};

function SectionHeading({
  kicker,
  title,
  id,
}: {
  kicker: string;
  title: string;
  id: string;
}) {
  return (
    <motion.div className="casual-heading" variants={group}>
      <motion.p className="hand-note" variants={write}>
        {kicker}
      </motion.p>
      <motion.h2 id={id} variants={rise}>
        {title}
      </motion.h2>
    </motion.div>
  );
}

function GlassCard({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return (
    <motion.article
      className={`glass-card glare-card ${className}`}
      variants={card}
      {...glareHandlers()}
    >
      {children}
    </motion.article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      className="glass-card glare-card work-card"
      variants={card}
      {...glareHandlers()}
    >
      <span
        className={`work-logo${project.mobileLogoCircle ? " work-logo--circle" : ""}`}
      >
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
            <li
              key={color.hex}
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

export function About() {
  return (
    <motion.section
      className="page-section"
      id="about"
      aria-labelledby="about-title"
      variants={group}
      {...inView}
    >
      <SectionHeading
        kicker="pull up a chair"
        title="A bit about me"
        id="about-title"
      />

      <motion.div className="about-grid" variants={group}>
        {aboutBlocks.map(({ icons, title, body, link, neighbors: showNeighbors }) => (
          <GlassCard className="about-card" key={title}>
            <span className="about-icons">
              {icons.map((BlockIcon, index) => (
                <span className="about-icon" key={index}>
                  <BlockIcon aria-hidden="true" />
                </span>
              ))}
            </span>
            <h3>{title}</h3>
            {body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            {showNeighbors ? (
              <>
                <motion.ul className="neighbor-list" variants={chips}>
                  {neighbors.map((name) => (
                    <motion.li key={name} variants={chip}>
                      {name}
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.p className="hand-note neighbors-aside" variants={write}>
                  yes, even the tarantulas{" "}
                  <Heart aria-hidden="true" className="beat" />
                </motion.p>
              </>
            ) : null}
            {link ? (
              <a
                className="about-link"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={link.logo}
                  alt={link.logoAlt}
                  width={2925}
                  height={2673}
                  sizes="72px"
                />
                <span>Visit {link.label}</span>
                <span className="sr-only"> (opens in a new tab)</span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            ) : null}
          </GlassCard>
        ))}
      </motion.div>
    </motion.section>
  );
}

export function Work() {
  return (
    <motion.section
      className="page-section"
      id="work"
      aria-labelledby="work-title"
      variants={group}
      {...inView}
    >
      <SectionHeading
        kicker="stuff I've made"
        title="Things I've built"
        id="work-title"
      />
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

export function SayHello() {
  return (
    <motion.footer
      className="page-section say-hello"
      aria-labelledby="hello-title"
      variants={group}
      {...inView}
    >
      <TrexBadge />
      <SectionHeading
        kicker="don't be a stranger"
        title="Say hello"
        id="hello-title"
      />
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
