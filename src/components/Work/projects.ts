export type Project = {
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

export const projects: Project[] = [
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
    tags: ["Next.js", "React", "Tailwind CSS", "Logo design"],
    palette: [
      { name: "Rexine blue", hex: "#0f52ba" },
      { name: "Deep blue", hex: "#0b387e" },
      { name: "Sky", hex: "#5cc8ff" },
      { name: "Aqua", hex: "#a6f1ff" },
      { name: "Mascot green", hex: "#62d8a8" },
    ],
  },
  {
    name: "Free Space Psychotherapy",
    url: "https://www.freespace-therapy.com/",
    domain: "freespace-therapy.com",
    github: "https://github.com/makapiatia/freespace-therapy",
    logo: {
      src: "/free-space-logo.svg",
      width: 180,
      height: 180,
      alt: "Free Space Psychotherapy logo",
    },
    description:
      "A welcoming home for a New Jersey psychotherapy practice. " +
      "Warm colors and a calm, simple layout help visitors feel at ease. " +
      "Contentful lets the therapist update the copy and design on her own.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Contentful", "Logo design"],
    palette: [
      { name: "Sage", hex: "#5a9376" },
      { name: "Gold", hex: "#ceaf2c" },
      { name: "Butter", hex: "#f6e2b3" },
      { name: "Plum", hex: "#4a1e28" },
      { name: "Ink", hex: "#1c2133" },
    ],
  },
];
