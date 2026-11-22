import type { Variants } from "motion/react";
import type { PointerEvent } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export const group: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export const rise: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease } },
};

export const card: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.94, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { type: "spring", stiffness: 90, damping: 16 } },
};

export const write: Variants = {
  hidden: { clipPath: "inset(-20% 100% -20% 0)" },
  show: { clipPath: "inset(-20% 0% -20% 0)", transition: { duration: 1.2, ease: "easeInOut" } },
};

export const letter: Variants = {
  hidden: { opacity: 0, y: 36, rotate: 8, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 260, damping: 18 },
  },
};

export const chip: Variants = {
  hidden: { opacity: 0, scale: 0.4, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 380, damping: 16 } },
};

export const trexPop: Variants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -14, y: 20 },
  show: { opacity: 1, scale: 1, rotate: 0, y: 0, transition: { type: "spring", stiffness: 200, damping: 12 } },
};

export const inView = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.2 },
} as const;

export function glareHandlers() {
  return {
    onPointerMove(event: PointerEvent<HTMLElement>) {
      if (event.pointerType !== "mouse") return;
      const target = event.currentTarget.querySelector<HTMLElement>("[data-glare]") ?? event.currentTarget;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--glare-x", `${((event.clientX - rect.left) / rect.width) * 100}%`);
      target.style.setProperty("--glare-y", `${((event.clientY - rect.top) / rect.height) * 100}%`);
    },
  };
}
