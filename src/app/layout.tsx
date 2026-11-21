import type { Metadata } from "next";
import localFont from "next/font/local";
import { Caveat, Geist } from "next/font/google";
import "./globals.css";
import "./site.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const diamondGrotesk = localFont({
  src: "../../public/fonts/DiamondGrotesk-VF.ttf",
  variable: "--font-diamond-grotesk",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tia Rexine | Full Stack Software Engineer",
  description: "Tia Rexine | Full Stack Software Engineer",
  metadataBase: new URL("https://tiarexine.com"),
  icons: {
    icon: "/trex-icon.png",
    shortcut: "/trex-icon.png",
    apple: "/trex-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://tiarexine.com",
    title: "Tia Rexine | Full Stack Software Engineer",
    description: "Tia Rexine | Full Stack Software Engineer",
    images: [{ url: "/trex-icon.png", width: 256, height: 256, alt: "Tia Rexine" }],
  },
  twitter: {
    card: "summary",
    title: "Tia Rexine | Full Stack Software Engineer",
    description: "Tia Rexine | Full Stack Software Engineer",
    images: ["/trex-icon.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${caveat.variable} ${diamondGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
