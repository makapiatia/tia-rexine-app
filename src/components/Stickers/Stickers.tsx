"use client";

import classNames from "classnames";
import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Droplet } from "lucide-react";
import { motion, type PanInfo, type Variants } from "motion/react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { group, inView, write } from "@/components/shared/motion";
import { handNoteText, pageSection, sectionPadding } from "@/components/shared/styles";
import { stickers } from "./stickerData";
import { useFinePointer } from "./useFinePointer";

const stickerClass = classNames(
  "sticker relative w-(--mw,100%) justify-self-center touch-pan-y",
  "filter-[drop-shadow(0_10px_18px_rgb(0_0_0/35%))_drop-shadow(0_2px_3px_rgb(0_0_0/30%))]",
  "collage:absolute collage:top-(--y) collage:left-(--x) collage:w-(--w) collage:justify-self-auto",
);

const captionClass = classNames(
  handNoteText,
  "mt-0.5 block text-center leading-[1.05] text-balance",
  "text-[18px] whitespace-normal",
  "collage:mx-[-35%] collage:w-[170%] collage:text-[21px] collage:whitespace-pre-line",
);

const GRABBING_CURSOR = 'url("/cursors/grabbing.png") 13 1, grabbing';

const slap: Variants = {
  hidden: (rotate: number) => ({ opacity: 0, scale: 1.6, rotate: rotate - 18, y: -30 }),
  show: (rotate: number) => ({
    opacity: 1,
    scale: 1,
    rotate,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 17 },
  }),
};

const board: Variants = {
  hidden: {},
  show: { transition: { delayChildren: 0.2, staggerChildren: 0.11 } },
};

export function Stickers() {
  const boardRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLElement | null>(null);
  const draggable = useFinePointer();
  const [order, setOrder] = useState(() => stickers.map((_, index) => index));

  useEffect(() => {
    pageRef.current = boardRef.current?.closest<HTMLElement>("#top") ?? null;
  }, []);

  const autoScroll = (_event: PointerEvent | MouseEvent | TouchEvent, info: PanInfo) => {
    const edge = 80;
    const y = info.point.y - window.scrollY;
    if (y < edge) window.scrollBy(0, -Math.ceil((edge - y) / 4));
    else if (y > window.innerHeight - edge) window.scrollBy(0, Math.ceil((y - (window.innerHeight - edge)) / 4));
  };

  const bringToFront = (index: number) => setOrder((current) => [...current.filter((i) => i !== index), index]);

  return (
    <motion.section
      className={classNames(pageSection, sectionPadding)}
      aria-labelledby="stickers-title"
      variants={group}
      {...inView}
    >
      <SectionHeading kicker="a few of my favorites" title="Things I love" id="stickers-title">
        <motion.p
          className={classNames(handNoteText, "hidden items-center text-[19px] opacity-80 fine:inline-flex")}
          variants={write}
        >
          (go ahead, drag them anywhere)
        </motion.p>
      </SectionHeading>

      <motion.div
        className={classNames(
          "relative w-full",
          "grid grid-cols-2 items-center gap-x-4.5 gap-y-5.5",
          "md:grid-cols-4 collage:block collage:aspect-16/10",
        )}
        ref={boardRef}
        variants={board}
      >
        {stickers.map((sticker, index) => (
          <motion.figure
            key={sticker.label}
            className={stickerClass}
            style={
              {
                "--x": `${sticker.x}%`,
                "--y": `${sticker.y}%`,
                "--w": `${sticker.width}%`,
                "--mw": `${sticker.mobileWidth ?? 100}%`,
                zIndex: order.indexOf(index) + 1,
              } as CSSProperties
            }
            custom={sticker.rotate}
            variants={slap}
            drag={draggable}
            dragConstraints={pageRef}
            onDrag={autoScroll}
            dragElastic={0.15}
            dragMomentum={false}
            onPointerDown={() => bringToFront(index)}
            whileHover={{ scale: 1.05, rotate: sticker.rotate + 3 }}
            whileDrag={{ scale: 1.1, rotate: 0, cursor: GRABBING_CURSOR }}
          >
            <Image
              src={sticker.image}
              alt={sticker.alt}
              sizes="(max-width: 767px) 45vw, 280px"
              draggable={false}
              className="block h-auto w-full select-none"
            />
            <figcaption
              className={captionClass}
              style={sticker.captionShift ? { translate: `${sticker.captionShift}% 0` } : undefined}
            >
              {sticker.label}
              {sticker.labelIcon === "droplet" ? (
                <Droplet aria-hidden="true" className="ml-1 inline-block size-[0.55em] align-baseline fill-cream/35" />
              ) : null}
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </motion.section>
  );
}
