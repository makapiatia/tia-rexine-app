import { About } from "@/components/About/About";
import { Hero } from "@/components/Hero/Hero";
import { SayHello } from "@/components/SayHello/SayHello";
import { DesertBackdrop } from "@/components/shared/DesertBackdrop";
import { MotionProvider } from "@/components/shared/MotionProvider";
import { Stickers } from "@/components/Stickers/Stickers";
import { Work } from "@/components/Work/Work";

export default function Home() {
  return (
    <DesertBackdrop>
      <MotionProvider>
        <main>
          <Hero />
          <About />
          <Work />
          <Stickers />
        </main>
        <SayHello />
      </MotionProvider>
    </DesertBackdrop>
  );
}
