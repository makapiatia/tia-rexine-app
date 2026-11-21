import type { SVGProps } from "react";
import type { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export function BrandIcon({ icon }: { icon: typeof faGithub | typeof faLinkedinIn }) {
  const [width, height, , , path] = icon.icon;

  return (
    <svg aria-hidden="true" fill="currentColor" viewBox={`0 0 ${width} ${height}`}>
      {Array.isArray(path)
        ? path.map((segment, index) => <path d={segment} key={index} />)
        : <path d={path} />}
    </svg>
  );
}

const lineIcon: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function Cactus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...lineIcon} {...props}>
      <path d="M10 21V5a2 2 0 0 1 4 0v16" />
      <path d="M10 14H7.5A1.5 1.5 0 0 1 6 12.5V9a1 1 0 0 1 2 0v3h2" />
      <path d="M14 12h2.5a1.5 1.5 0 0 0 1.5-1.5V7a1 1 0 0 0-2 0v3h-2" />
      <path d="M4 21h16" />
    </svg>
  );
}

export function Burro(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...lineIcon} {...props}>
      <path d="M6.4 6.2 5.7 2.7a.7.7 0 0 1 1.3-.4l1.3 3.6" />
      <path d="M8.1 6.5 9.4 3.4a.7.7 0 0 1 1.2.5l-.8 3.4" />
      <path d="M9.8 7.3 11 10h6.5a2.5 2.5 0 0 1 2.5 2.5v1A2.5 2.5 0 0 1 17.5 16h-6A2.5 2.5 0 0 1 9 14l-.7-2.2-2.6.9a1.6 1.6 0 0 1-2-.8l-.5-1a1.6 1.6 0 0 1 .5-2l2.7-2.3a2 2 0 0 1 3.4.7z" />
      <path d="M11 16v5M13.2 16v5M16.8 16v5M19 15v6" />
      <path d="M20 11.5c.9.6 1.3 1.9 1.3 3.5" />
      <circle cx="6.2" cy="9" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
