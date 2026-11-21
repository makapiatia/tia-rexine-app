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

const title = "Tia Rexine | Full Stack Software Engineer";
const description =
  "Full stack software engineer in the Sonoran desert, building calm, easy-to-use web apps. Also a " +
  "painter, ceramicist, cat mom and small business owner.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://tiarexine.com"),
  openGraph: {
    type: "website",
    url: "https://tiarexine.com",
    siteName: "Tia Rexine",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
