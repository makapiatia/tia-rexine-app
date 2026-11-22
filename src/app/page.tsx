import classNames from "classnames";
import { About } from "@/components/About/About";
import { Hero } from "@/components/Hero/Hero";
import { SayHello } from "@/components/SayHello/SayHello";
import { MotionProvider } from "@/components/shared/MotionProvider";
import { Stickers } from "@/components/Stickers/Stickers";
import { Work } from "@/components/Work/Work";

export default function Home() {
  return (
    <div
      id="top"
      className={classNames(
        "relative isolate min-h-svh overflow-hidden bg-ink text-sand",
        "before:pointer-events-none before:fixed before:inset-0 before:-z-2 before:content-['']",
        "before:bg-[url(/mountain_haze.JPG)] before:bg-cover before:bg-no-repeat",
        "before:bg-position-[58%_center] md:before:bg-position-[center_57%]",
        "after:pointer-events-none after:fixed after:inset-0 after:-z-1 after:content-['']",
        "after:bg-[url(/overlay-mobile.png)] after:bg-size-[100%_100%] after:bg-no-repeat",
        "md:after:bg-[url(/overlay-desktop.png)]",
      )}
    >
      <div
        className="sky pointer-events-none fixed inset-0 -z-1 overflow-hidden opacity-80 mix-blend-hard-light"
        aria-hidden="true"
      >
        <div className="sky-layer sky-far" />
        <div className="sky-layer sky-near" />
      </div>
      <div className="scroll-scrim pointer-events-none fixed inset-0 -z-1 bg-night/50 opacity-0" aria-hidden="true" />
      <MotionProvider>
        <main>
          <Hero />
          <About />
          <Work />
          <Stickers />
        </main>
        <SayHello />
      </MotionProvider>
    </div>
  );
}
