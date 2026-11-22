import classNames from "classnames";
import type { ReactNode } from "react";

/**
 * The fixed mountain photo, drifting clouds and night scrim behind every page.
 * `dimmed` keeps the scrim on from the start, for text-heavy pages like the resume.
 */
export function DesertBackdrop({ children, dimmed = false }: { children: ReactNode; dimmed?: boolean }) {
  return (
    <div
      id="top"
      className={classNames(
        "relative isolate min-h-svh overflow-hidden bg-ink text-sand",
        "before:pointer-events-none before:fixed before:inset-x-0 before:top-0 before:-z-2 before:content-['']",
        "before:h-lvh",
        "before:bg-[url(/mountain_haze.JPG)] before:bg-cover before:bg-no-repeat",
        "before:bg-position-[58%_center] md:before:bg-position-[center_57%]",
        "after:pointer-events-none after:fixed after:inset-x-0 after:top-0 after:h-lvh after:-z-1 after:content-['']",
        "after:bg-[url(/overlay-mobile.png)] after:bg-size-[100%_100%] after:bg-no-repeat",
        "md:after:bg-[url(/overlay-desktop.png)]",
      )}
    >
      <div
        className={classNames(
          "sky pointer-events-none fixed inset-x-0 top-0 -z-1 h-lvh overflow-hidden",
          "opacity-80 mix-blend-hard-light",
        )}
        aria-hidden="true"
      >
        <div className="sky-layer sky-far" />
        <div className="sky-layer sky-near" />
      </div>
      <div
        className={classNames("pointer-events-none fixed inset-x-0 top-0 -z-1 h-lvh", {
          "scroll-scrim bg-night/50 opacity-0": !dimmed,
          "bg-night/60": dimmed,
        })}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
