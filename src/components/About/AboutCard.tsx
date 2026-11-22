"use client";

import classNames from "classnames";
import Image from "next/image";
import { ArrowUpRight, Heart } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { GlassCard } from "@/components/shared/GlassCard";
import { chip, write } from "@/components/shared/motion";
import { cardText, cardTitle, handNote } from "@/components/shared/styles";
import { neighbors, type AboutBlock } from "./aboutData";

const chips: Variants = {
  hidden: {},
  show: { transition: { delayChildren: 0.5, staggerChildren: 0.07 } },
};

export function AboutCard({ block }: { block: AboutBlock }) {
  const { icons, title, body, link, neighbors: showNeighbors } = block;

  return (
    <GlassCard
      className={classNames("grid justify-items-start gap-2 p-5 text-left md:p-6", {
        "grid-rows-[auto_auto_auto_1fr] content-stretch": link,
        "content-start": !link,
      })}
    >
      <span className="flex gap-2">
        {icons.map((BlockIcon, index) => (
          <span
            className="grid size-9 place-items-center rounded-full border border-sand/35 text-cream md:size-10"
            key={index}
          >
            <BlockIcon
              aria-hidden="true"
              className="size-4.75 group-hover:animate-wiggle motion-reduce:animate-none md:size-5.25"
            />
          </span>
        ))}
      </span>
      <h3 className={classNames(cardTitle, "mt-1 text-[17px] md:text-[20px]")}>{title}</h3>
      {body.map((paragraph, index) => (
        <p className={classNames(cardText, { "mt-1": index > 0 })} key={index}>
          {paragraph}
        </p>
      ))}
      {showNeighbors ? (
        <>
          <motion.ul className="dot-list mt-0.5" variants={chips}>
            {neighbors.map((name) => (
              <motion.li
                className="font-semibold text-cream text-[13px] leading-[1.6] md:text-[14px] md:leading-[1.7]"
                key={name}
                variants={chip}
              >
                {name}
              </motion.li>
            ))}
          </motion.ul>
          <motion.p
            className={classNames(handNote, "mt-1 -rotate-2 gap-2 leading-[1.1] text-[20px] md:text-[22px]")}
            variants={write}
          >
            even the tarantulas{" "}
            <Heart aria-hidden="true" className="size-4.5 animate-beat fill-current motion-reduce:animate-none" />
          </motion.p>
        </>
      ) : null}
      {link ? (
        <a
          className={classNames(
            "group/link mt-3 flex items-center self-end justify-self-stretch",
            "rounded-[14px] border border-sand/30 py-2.5 pr-4.5 pl-3 text-cream",
            "gap-3 text-[12.5px] md:gap-4 md:text-[14px]",
            "transition-[border-color,background-color] duration-200 hover:border-sand/60 hover:bg-sand/8",
          )}
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
            className={classNames(
              "h-auto w-13 flex-none md:w-16",
              "transition-transform duration-250 group-hover/link:scale-110",
            )}
          />
          <span className="flex-1">Visit {link.label}</span>
          <span className="sr-only"> (opens in a new tab)</span>
          <ArrowUpRight
            aria-hidden="true"
            className={classNames(
              "size-4.5 flex-none transition-transform duration-200",
              "group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5",
            )}
          />
        </a>
      ) : null}
    </GlassCard>
  );
}
