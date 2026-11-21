import type { ComponentType, ReactNode, SVGProps } from "react";
import { Cat, CodeXml, Palette, Store, Sunset } from "lucide-react";
import { Burro, SmileyFace } from "@/components/shared/icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export type AboutLink = { href: string; label: string; logo: string; logoAlt: string };

export type AboutBlock = {
  icons: Icon[];
  title: string;
  body: ReactNode[];
  link?: AboutLink;
  neighbors?: boolean;
};

export const aboutBlocks: AboutBlock[] = [
  {
    icons: [CodeXml],
    title: "Engineer by profession",
    body: [
      <>
        I build web experiences that look beautiful and feel effortless, and I&apos;m happiest where
        design and engineering meet. With almost a decade&apos;s worth of experience, I&apos;m building
        a headless ecommerce storefront in React, Next.js and TypeScript, turning Figma designs into
        polished, accessible pages. Our team was even featured in{" "}
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
      </>,
    ],
  },
  {
    icons: [Store],
    title: "Small business owner",
    body: [
      <>
        In my off hours and on weekends I run Rexine Spa Care. And yes, that&apos;s a Tyrannosaurus
        rex in a hot{" "}
        <span className="nowrap">
          tub. <SmileyFace className="inline-icon" aria-hidden={false} aria-label="smiley face" role="img" />
        </span>
      </>,
    ],
    link: {
      href: "https://www.rexinespacare.com/",
      label: "rexinespacare.com",
      logo: "/rexine-spa-logo.png",
      logoAlt: "Rexine Spa Care logo: a Tyrannosaurus rex relaxing in a hot tub",
    },
  },
  {
    icons: [Sunset, Burro],
    title: "Desert dweller by heart",
    body: [
      "I live in Arizona and wouldn't trade it for anywhere. My favorite time of day is sunset, when the " +
      "light goes gold and the mountains turn every shade of purple. Some mornings you'll find me tending " +
      "my garden of succulents, cacti and native desert shrubs.",
      "The best part of desert life is the company. I love every one of these locals:",
    ],
    neighbors: true,
  },
  {
    icons: [Palette, Cat],
    title: "Painter, ceramicist & cat mom",
    body: [
      "When I log off, I might sketch, pick up a paintbrush or wedge a lump of clay. I'm also an amateur " +
      "interior decorator, always finding little ways to make my space feel more like home.",
      "Three cats, three personalities. One is pure energy: he runs laps on his cat wheel and even " +
      "skateboards. One gets the zoomies at night but is a cuddle bug around the clock. And one is our " +
      "peacekeeper, the missing link who keeps the whole crew together. Every painting, pot and pull " +
      "request still has to pass their strict quality check.",
    ],
  },
];

export const neighbors = [
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
