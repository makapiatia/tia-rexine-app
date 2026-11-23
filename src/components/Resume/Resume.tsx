"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import type { ComponentType, ReactNode, SVGProps } from "react";
import { ArrowLeft, ArrowUpRight, Award, Globe, GraduationCap, Mail, MapPin } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { GlassCard } from "@/components/shared/GlassCard";
import { BrandIcon } from "@/components/shared/icons";
import { chip, group, rise, write } from "@/components/shared/motion";
import { cardText, cardTitle, handNote } from "@/components/shared/styles";
import nameArt from "../../../public/tia-rexine-name.webp";
import { focus, highlightedSkills, roles, skillGroups, summary, type Role } from "./resumeData";

const sequence: Variants = {
  hidden: {},
  show: { transition: { delayChildren: 0.15, staggerChildren: 0.12 } },
};

const chips: Variants = {
  hidden: {},
  show: { transition: { delayChildren: 0.3, staggerChildren: 0.025 } },
};

const kicker = classNames(handNote, "gap-2 text-cream text-[19px] md:text-[21px]");
const heading = classNames("font-display font-medium text-sunset leading-[1.1] text-[24px] md:text-[28px]");
const label = "text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/75";
const inlineLink = classNames(
  "underline decoration-cream/40 underline-offset-[3px]",
  "transition-[text-decoration-color,color] duration-200 hover:text-white hover:decoration-cream",
);

export function Resume() {
  return (
    <motion.main
      className={classNames(
        "mx-auto grid grid-cols-[minmax(0,1fr)] gap-4 pt-6 pb-6 md:pt-8",
        "w-[calc(100%-32px)] md:w-[min(1100px,calc(100%-48px))]",
        "lg:grid-cols-[300px_minmax(0,1fr)] lg:grid-rows-[auto_auto_1fr] lg:gap-5",
      )}
      variants={sequence}
      initial="hidden"
      animate="show"
    >
      <motion.nav className="flex items-center lg:col-span-2" variants={rise} aria-label="Resume">
        <Link
          href="/"
          className={classNames(
            "group/back -my-1 inline-flex items-center gap-1.5 py-1 text-[13px] text-sand/82",
            "transition-colors duration-200 hover:text-white",
          )}
        >
          <ArrowLeft
            aria-hidden="true"
            className="size-4 transition-transform duration-200 group-hover/back:-translate-x-0.5"
          />
          Back home
        </Link>
      </motion.nav>

      <Profile />

      <div
        className={classNames(
          "grid grid-cols-[minmax(0,1fr)] content-start gap-4",
          "lg:col-start-2 lg:row-span-2 lg:row-start-2 lg:gap-5",
        )}
      >
        <GlassCard className="grid gap-2.5 p-5 text-left md:p-7">
          <motion.p className={kicker} variants={write}>
            the highlights
          </motion.p>
          <h2 className={heading}>Summary</h2>
          <p className={classNames(cardText, "mt-1 md:text-[15px] md:leading-[1.75]")}>{summary}</p>
        </GlassCard>

        <section aria-labelledby="experience-title" className="grid gap-4">
          <motion.div className="grid gap-1 px-1 pt-3 md:pt-5" variants={group}>
            <motion.p className={kicker} variants={write}>
              where I&apos;ve been
            </motion.p>
            <motion.h2 id="experience-title" className={heading} variants={rise}>
              Relevant Experience
            </motion.h2>
          </motion.div>
          <motion.ol
            className={classNames(
              "relative grid gap-4 pl-6 md:pl-8",
              "before:absolute before:top-6 before:bottom-6 before:left-[6px] before:w-px before:content-['']",
              "before:bg-linear-to-b before:from-cream/70 before:via-sand/35 before:to-sand/10",
            )}
            variants={group}
          >
            {roles.map((role) => (
              <RoleEntry role={role} key={role.company} />
            ))}
          </motion.ol>
        </section>
      </div>

      <Details />
    </motion.main>
  );
}

function Profile() {
  return (
    <GlassCard
      className="grid content-start justify-items-start gap-4 p-5 text-left md:p-6 lg:col-start-1 lg:row-start-2"
    >
      <div className="grid gap-2">
        <h1 className="w-56 md:w-64">
          <Image src={nameArt} alt="" priority sizes="256px" className="block h-auto w-full" />
          <span className="sr-only">Tia Rexine</span>
        </h1>
        <p className={classNames(cardTitle, "text-[18px] leading-[1.25] md:text-[19px]")}>
          Software Engineer
        </p>
        <ul className="dot-list text-[12.5px] font-semibold text-cream" aria-label="Focus areas">
          {focus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <Divider label="Contact" />
      <ul className="grid gap-2.5 text-[13px] text-sand/86 [&_svg]:size-4 [&_svg]:flex-none [&_svg]:text-cream/85">
        <ContactItem icon={MapPin}>Greater Phoenix Area, AZ</ContactItem>
        <ContactItem icon={Mail} href="mailto:tiarexine@gmail.com">
          tiarexine@gmail.com
        </ContactItem>
        <ContactItem icon={Globe} href="https://tiarexine.com" external>
          tiarexine.com
        </ContactItem>
        <ContactItem
          icon={() => <BrandIcon icon={faLinkedinIn} />}
          href="https://www.linkedin.com/in/tia-rexine-781528b6"
          external
        >
          linkedin.com/in/tia-rexine
        </ContactItem>
        <ContactItem icon={() => <BrandIcon icon={faGithub} />} href="https://github.com/makapiatia" external>
          github.com/makapiatia
        </ContactItem>
      </ul>
    </GlassCard>
  );
}

function Details() {
  return (
    <GlassCard className="grid content-start gap-4 p-5 text-left md:p-6 lg:col-start-1 lg:row-start-3">
      <Divider label="Skills" />
      <div className="grid gap-4">
        {skillGroups.map((skillGroup) => (
          <div className="grid gap-2" key={skillGroup.label}>
            <h3 className="text-[13.5px] font-medium text-white">{skillGroup.label}</h3>
            <motion.ul className="flex flex-wrap gap-1.5" variants={chips}>
              {skillGroup.skills.map((skill) => {
                const highlighted = highlightedSkills.has(skill);
                return (
                  <motion.li
                    key={skill}
                    variants={chip}
                    className={classNames("rounded-full border px-2.5 py-0.75 text-[12px] leading-[1.4]", {
                      "border-cream bg-cream font-semibold text-ink": highlighted,
                      "border-sand/28 text-sand/88": !highlighted,
                    })}
                  >
                    {skill}
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        ))}
      </div>

      <Divider label="Certification" />
      <Credential icon={Award} title="UX Certificate" detail="Nielsen Norman Group" note="UXC# 1045944" />

      <Divider label="Education" />
      <Credential
        icon={GraduationCap}
        title="Bachelor's in Computer Science"
        detail="Pace University, New York, NY · 2016"
        note="Minors in Art and Information Technology"
      />
    </GlassCard>
  );
}

function RoleEntry({ role }: { role: Role }) {
  return (
    <li className="relative">
      <span
        aria-hidden="true"
        className={classNames(
          "absolute top-6.5 -left-6 size-3.25 rounded-full border-2 md:-left-8",
          role.current
            ? "border-coral bg-coral shadow-[0_0_0_4px_rgb(240_128_97/22%),0_0_14px_rgb(240_128_97/60%)]"
            : "border-cream/80 bg-ink",
        )}
      />
      <GlassCard className="grid gap-2 p-5 text-left md:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className={classNames(cardTitle, "text-[16.5px] leading-[1.3] md:text-[18px]")}>
            {role.title}
            <span className="text-sand/70"> · </span>
            <span className="text-cream">
              {role.companyUrl ? (
                <a
                  className={classNames(inlineLink, "py-0.75")}
                  href={role.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {role.company}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                role.company
              )}
            </span>
          </h3>
          <p className="text-[12px] font-semibold tracking-[0.06em] whitespace-nowrap text-cream/80 tabular-nums">
            {role.dates}
            {role.current ? <span className="sr-only"> (current)</span> : null}
          </p>
        </div>
        <p className="-mt-1 text-[12.5px] text-sand/62">{role.location}</p>
        {role.badge ? (
          <p
            className={classNames(
              "justify-self-start rounded-full border border-coral/55 bg-coral/10 px-3 py-1",
              "text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#ffb59f]",
            )}
          >
            {role.badge}
          </p>
        ) : null}
        <ul className="mt-1 grid gap-1.5">
          {role.bullets.map((bullet) => (
            <li
              key={bullet}
              className={classNames(
                cardText,
                "relative pl-4",
                "before:absolute before:top-[0.7em] before:left-0.5 before:size-1.25 before:rounded-full",
                "before:bg-cream/70 before:content-['']",
              )}
            >
              {bullet}
            </li>
          ))}
        </ul>
      </GlassCard>
    </li>
  );
}

function Divider({ label: text }: { label: string }) {
  return (
    <h2 className="flex w-full items-center gap-3">
      <span className={label}>{text}</span>
      <span aria-hidden="true" className="h-px flex-1 bg-linear-to-r from-sand/35 to-transparent" />
    </h2>
  );
}

function ContactItem({
  icon: Icon,
  href,
  external,
  children,
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  href?: string;
  external?: boolean;
  children: ReactNode;
}) {
  const content = (
    <>
      <Icon aria-hidden="true" />
      <span className="min-w-0 break-words">{children}</span>
    </>
  );

  return (
    <li>
      {href ? (
        <a
          className={classNames(
            "group/contact -my-0.5 inline-flex items-center gap-2.5 py-0.5",
            "transition-colors duration-200 hover:text-white",
          )}
          href={href}
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          {content}
          {external ? (
            <>
              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5! opacity-0 transition-opacity duration-200 group-hover/contact:opacity-70"
              />
              <span className="sr-only"> (opens in a new tab)</span>
            </>
          ) : null}
        </a>
      ) : (
        <span className="inline-flex items-center gap-2.5">{content}</span>
      )}
    </li>
  );
}

function Credential({
  icon: Icon,
  title,
  detail,
  note,
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  detail: string;
  note?: string;
}) {
  return (
    <div className="flex w-full items-start gap-3 rounded-[12px] border border-sand/22 bg-sand/5 p-3.5">
      <span className="grid size-9 flex-none place-items-center rounded-full border border-sand/35 text-cream">
        <Icon aria-hidden="true" className="size-4.5 group-hover:animate-wiggle motion-reduce:animate-none" />
      </span>
      <div className="grid gap-0.5 text-[13px] leading-[1.45]">
        <p className="font-medium text-white">{title}</p>
        <p className="text-sand/80">{detail}</p>
        {note ? <p className="text-sand/62">{note}</p> : null}
      </div>
    </div>
  );
}
