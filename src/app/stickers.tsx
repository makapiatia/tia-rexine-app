"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Droplet } from "lucide-react";
import { motion, type PanInfo, type Variants } from "motion/react";
import { group, inView, rise, write } from "./motion-presets";
import burro from "../../public/stickers/burro.webp";
import catCurled from "../../public/stickers/cat-curled.webp";
import catGrey from "../../public/stickers/cat-grey.webp";
import catTabby from "../../public/stickers/cat-tabby.webp";
import cobaltVase from "../../public/stickers/cobalt-vase.webp";
import potteryShelf from "../../public/stickers/pottery-shelf.webp";
import scallopedBowl from "../../public/stickers/scalloped-bowl.webp";
import tarantula from "../../public/stickers/tarantula.webp";

type Sticker = {
  image: StaticImageData;
  alt: string;
  label: string;
  labelIcon?: "droplet";

  x: number;
  y: number;
  width: number;
  rotate: number;

  mobileWidth?: number;
};

const stickers: Sticker[] = [
  { image: scallopedBowl, alt: "Scalloped ceramic bowl in blue, green and amber glazes", label: "glaze tests", x: 1, y: 6, width: 23, rotate: -6 },
  { image: catGrey, alt: "Grey cat with green eyes looking up at the camera", label: "resident drooler", labelIcon: "droplet", x: 26, y: 0, width: 23, rotate: 4 },
  { image: potteryShelf, alt: "A shelf of glazed ceramic bowls and cups", label: "cups for days", x: 52, y: 8, width: 30, rotate: -3 },
  { image: cobaltVase, alt: "Cobalt blue ceramic lamp base with a paper shade", label: "lighting is a passion", x: 85, y: 0, width: 13, rotate: 6, mobileWidth: 52 },
  { image: catCurled, alt: "Spotted cat curled up asleep in a fluffy bed", label: "our dreamer, and our alarm clock", x: 4, y: 52, width: 21, rotate: 8 },
  { image: burro, alt: "Wild burro walking through the desert", label: "wild burro crossing", x: 29, y: 60, width: 26, rotate: -4 },
  { image: catTabby, alt: "Tabby cat standing on a couch", label: "mr. united nations", x: 59, y: 42, width: 15, rotate: -7, mobileWidth: 68 },
  { image: tarantula, alt: "Desert tarantula crawling over gravel", label: "our friend Francisco", x: 77, y: 56, width: 21, rotate: 10 },
];

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

function useFinePointer() {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(pointer: fine) and (min-width: 768px)");
    const update = () => setFine(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return fine;
}

export function Stickers() {
  const boardRef = useRef<HTMLDivElement>(null);

  const pageRef = useRef<HTMLElement | null>(null);
  const draggable = useFinePointer();

  useEffect(() => {
    pageRef.current = boardRef.current?.closest(".dark-shell") ?? null;
  }, []);

  const autoScroll = (_event: PointerEvent | MouseEvent | TouchEvent, info: PanInfo) => {
    const edge = 80;
    const y = info.point.y - window.scrollY;
    if (y < edge) window.scrollBy(0, -Math.ceil((edge - y) / 4));
    else if (y > window.innerHeight - edge) window.scrollBy(0, Math.ceil((y - (window.innerHeight - edge)) / 4));
  };
  const [order, setOrder] = useState(() => stickers.map((_, index) => index));

  const bringToFront = (index: number) => setOrder((current) => [...current.filter((i) => i !== index), index]);

  return (
    <motion.section className="page-section" aria-labelledby="stickers-title" variants={group} {...inView}>
      <motion.div className="casual-heading" variants={group}>
        <motion.p className="hand-note" variants={write}>
          a few of my favorites
        </motion.p>
        <motion.h2 id="stickers-title" variants={rise}>
          Things I love
        </motion.h2>
        <motion.p className="hand-note sticker-hint" variants={write}>
          (go ahead, drag them anywhere)
        </motion.p>
      </motion.div>

      <motion.div className="sticker-board" ref={boardRef} variants={board}>
        {stickers.map((sticker, index) => (
          <motion.figure
            key={sticker.label}
            className="sticker"
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
            />
            <figcaption className="hand-note">
              {sticker.label}
              {sticker.labelIcon === "droplet" ? <Droplet aria-hidden="true" className="caption-icon" /> : null}
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </motion.section>
  );
}
