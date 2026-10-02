import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ModeProvider } from "@/context/ModeContext";
import { SoundProvider } from "@/components/UI/SoundManager";
import { Navbar } from "@/components/Navigation/Navbar";
import { CustomCursor } from "@/components/Navigation/CustomCursor";
import { SmoothScrollProvider } from "@/components/UI/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "DEEPAK AMAL WINSTAR J — Video Editor & Full Stack Developer",
  description:
    "Official Portfolio of Deepak Amal Winstar J. Builds | Edits | Creates. One Mind, Two Worlds, Limitless Possibilities. Cinematic Post-Production & Scalable Full Stack Engineering.",
  keywords: [
    "Deepak Amal Winstar J",
    "Video Editor",
    "Full Stack Developer",
    "Premiere Pro",
    "After Effects",
    "DaVinci Resolve",
    "CapCut",
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
    "Color Grading",
    "Creative Technologist",
  ],
  authors: [{ name: "Deepak Amal Winstar J" }],
  creator: "Deepak Amal Winstar J",
  openGraph: {
    title: "DEEPAK AMAL WINSTAR J — Video Editor & Full Stack Developer",
    description:
      "One Mind. Two Worlds. Limitless Possibilities. Awwwards-level interactive portfolio featuring 2K Canvas Scrollytelling.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#050505] text-[#f5f5f5] antialiased selection:bg-brand-orange selection:text-white">
        <SmoothScrollProvider>
          <ModeProvider>
            <SoundProvider>
              <CustomCursor />
              <Navbar />
              <main className="relative">{children}</main>
            </SoundProvider>
          </ModeProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
