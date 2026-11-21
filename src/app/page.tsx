import { Hero } from "./hero";
import { MotionProvider } from "./motion-presets";
import { About, SayHello, Work } from "./sections";
import { Stickers } from "./stickers";

export default function Home() {
  return (
    <div className="dark-shell" id="top">
      <div className="sky" aria-hidden="true">
        <div className="sky-layer sky-far" />
        <div className="sky-layer sky-near" />
      </div>
      <div className="scroll-scrim" aria-hidden="true" />
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
