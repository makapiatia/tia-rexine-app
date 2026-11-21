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
import { BrandIcon, Burro, Cactus } from "./icons";
import { ContactLinks, TrexBadge } from "./hero";
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
  icon: Icon;
  title: string;
  body: string;
  link?: AboutLink;
}[] = [
  {
    icon: CodeXml,
    title: "Engineer by profession",
    body: "I build full stack web apps, from the database to the last pixel. I like software that feels calm and obvious, the kind you never have to think twice about.",
  },
  {
    icon: Sunset,
    title: "Desert dweller by heart",
    body: "I live in the Sonoran desert and wouldn't trade it. My favorite time of day is sunset, when the light goes gold and the mountains turn every shade of purple.",
  },
  {
    icon: Palette,
    title: "Painter & ceramicist after hours",
    body: "When I log off, I pick up a brush or sit down at the wheel. I'm also an amateur interior decorator, always finding little ways to make my space feel more like home.",
  },
  {
    icon: Cat,
    title: "Cat mom, around the clock",
    body: "Every painting, pot, and pull request has to pass a strict feline quality check. Standards are high. Approval is rare.",
  },
  {
    icon: Store,
    title: "Small business owner on weekends",
    body: "In my off hours and on weekends I run Rexine Spa Care. And yes, that's a Tyrannosaurus rex in a hot tub.",
    link: {
      href: "https://www.rexinespacare.com/",
      label: "rexinespacare.com",
      logo: "/rexine-spa-logo.png",
      logoAlt:
        "Rexine Spa Care logo: a Tyrannosaurus rex relaxing in a hot tub",
    },
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
      "Calm and straightforward by design: the client asked for no motion, so warm, grounding colors set the mood. A Contentful model lets her update the copy and design on her own.",
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
    <motion.header className="casual-heading" variants={group}>
      <motion.p className="hand-note" variants={write}>
        {kicker}
      </motion.p>
      <motion.h2 id={id} variants={rise}>
        {title}
      </motion.h2>
    </motion.header>
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
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.name} on GitHub`}
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
        {aboutBlocks.map(({ icon: BlockIcon, title, body, link }) => (
          <GlassCard className="about-card" key={title}>
            <span className="about-icon">
              <BlockIcon aria-hidden="true" />
            </span>
            <h3>{title}</h3>
            <p>{body}</p>
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
                <ArrowUpRight aria-hidden="true" />
              </a>
            ) : null}
          </GlassCard>
        ))}

        <GlassCard className="about-card neighbors-card">
          <span className="about-icon">
            <Burro />
          </span>
          <h3>My neighbors</h3>
          <p>
            The best part of desert life is the company. I love every one of
            these locals:
          </p>
          <motion.ul className="neighbor-list" variants={chips}>
            {neighbors.map((name) => (
              <motion.li key={name} variants={chip} whileHover={{ y: -2 }}>
                {name}
              </motion.li>
            ))}
          </motion.ul>
          <motion.p className="hand-note neighbors-aside" variants={write}>
            yes, even the tarantulas{" "}
            <Heart aria-hidden="true" className="beat" />
          </motion.p>
        </GlassCard>
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
        Building something, hiring, or just want to swap wildlife sightings?
        Send me a note. I reply faster than a roadrunner, and I&apos;m only
        slightly less chatty than a quail.
      </motion.p>
      <motion.div variants={rise}>
        <ContactLinks />
      </motion.div>
      <motion.p className="signoff" variants={rise}>
        <Sun aria-hidden="true" className="spin-slow" />
        Made by Tia in the Sonoran desert
        <Cactus className="sway" />
      </motion.p>
    </motion.footer>
  );
}
