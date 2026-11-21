import { About } from "@/components/About/About";
import { Hero } from "@/components/Hero/Hero";
import { SayHello } from "@/components/SayHello/SayHello";
import { MotionProvider } from "@/components/shared/MotionProvider";
import { Stickers } from "@/components/Stickers/Stickers";
import { Work } from "@/components/Work/Work";

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
