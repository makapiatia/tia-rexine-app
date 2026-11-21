import type { StaticImageData } from "next/image";
import burro from "../../../public/stickers/burro.webp";
import catCurled from "../../../public/stickers/cat-curled.webp";
import catGrey from "../../../public/stickers/cat-grey.webp";
import catTabby from "../../../public/stickers/cat-tabby.webp";
import cobaltVase from "../../../public/stickers/cobalt-vase.webp";
import potteryShelf from "../../../public/stickers/pottery-shelf.webp";
import scallopedBowl from "../../../public/stickers/scalloped-bowl.webp";
import tarantula from "../../../public/stickers/tarantula.webp";

export type Sticker = {
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

export const stickers: Sticker[] = [
  {
    image: scallopedBowl,
    alt: "Scalloped ceramic bowl in blue, green and amber glazes",
    label: "glaze tests",
    x: 1,
    y: 6,
    width: 23,
    rotate: -6,
  },
  {
    image: catGrey,
    alt: "Grey cat with green eyes looking up at the camera",
    label: "resident drooler",
    labelIcon: "droplet",
    x: 26,
    y: 0,
    width: 23,
    rotate: 4,
  },
  {
    image: potteryShelf,
    alt: "A shelf of glazed ceramic bowls and cups",
    label: "cups for days",
    x: 52,
    y: 8,
    width: 30,
    rotate: -3,
  },
  {
    image: cobaltVase,
    alt: "Cobalt blue ceramic lamp base with a paper shade",
    label: "lighting is a passion",
    x: 85,
    y: 0,
    width: 13,
    rotate: 6,
    mobileWidth: 52,
  },
  {
    image: catCurled,
    alt: "Spotted cat curled up asleep in a fluffy bed",
    label: "our dreamer, and our alarm clock",
    x: 4,
    y: 52,
    width: 21,
    rotate: 8,
  },
  {
    image: burro,
    alt: "Wild burro walking through the desert",
    label: "wild burro crossing",
    x: 29,
    y: 60,
    width: 26,
    rotate: -4,
  },
  {
    image: catTabby,
    alt: "Tabby cat standing on a couch",
    label: "mr. united nations",
    x: 59,
    y: 42,
    width: 15,
    rotate: -7,
    mobileWidth: 68,
  },
  {
    image: tarantula,
    alt: "Desert tarantula crawling over gravel",
    label: "our friend Francisco",
    x: 77,
    y: 56,
    width: 21,
    rotate: 10,
  },
];
