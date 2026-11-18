import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const diamondGrotesk = localFont({
  src: "../../public/fonts/DiamondGrotesk-VF.ttf",
  variable: "--font-diamond-grotesk",
  weight: "100 900",
  display: "swap",
});

const workSans = localFont({
  src: "../../public/fonts/Work Sans/WorkSans-SemiBold.ttf",
  variable: "--font-work-sans",
  weight: "600",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tia Rexine | Full Stack Software Engineer",
  description:
    "Full stack software engineer building thoughtful, useful websites for people doing meaningful work. Selected projects by Tia Rexine.",
  metadataBase: new URL("https://tiarexine.com"),
  icons: { icon: "/trex-icon.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${diamondGrotesk.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
