import type { Metadata } from "next";
import { Resume } from "@/components/Resume/Resume";
import { SayHello } from "@/components/SayHello/SayHello";
import { DesertBackdrop } from "@/components/shared/DesertBackdrop";
import { MotionProvider } from "@/components/shared/MotionProvider";

const title = "Resume | Tia Rexine";
const description =
  "Software engineer with almost a decade of experience in React, Next.js, Tailwind CSS and Contentful " +
  "for headless ecommerce.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/resume" },
  openGraph: { type: "website", siteName: "Tia Rexine", url: "https://tiarexine.com/resume", title, description },
  twitter: { title, description },
};

export default function ResumePage() {
  return (
    <DesertBackdrop dimmed>
      <MotionProvider>
        <Resume />
        <SayHello />
      </MotionProvider>
    </DesertBackdrop>
  );
}
