"use client";

import React from "react";
import { motion, MotionValue, useTransform, useScroll } from "framer-motion";
import { ArrowDown, Sparkles, Film, Terminal, Layers, Scissors, Code2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { useScrolly } from "./ScrollyCanvas";

interface OverlayProps {
  scrollYProgress?: MotionValue<number>;
  onOpenVideo?: () => void;
}

export const Overlay: React.FC<OverlayProps> = ({
  scrollYProgress: propScroll,
  onOpenVideo,
}) => {
  const context = useScrolly();
  const { scrollYProgress: fallbackScroll } = useScroll();
  const scrollYProgress = propScroll || context?.scrollYProgress || fallbackScroll;

  // Section 1: Hero (0% to ~22%)
  const s1Opacity = useTransform(scrollYProgress, [0, 0.12, 0.22], [1, 0.9, 0]);
  const s1Y = useTransform(scrollYProgress, [0, 0.22], [0, -90]);
  const s1Scale = useTransform(scrollYProgress, [0, 0.22], [1, 0.94]);

  // Section 2: Video World (25% to ~48%)
  const s2Opacity = useTransform(
    scrollYProgress,
    [0.22, 0.28, 0.44, 0.50],
    [0, 1, 1, 0]
  );
  const s2Y = useTransform(
    scrollYProgress,
    [0.22, 0.32, 0.44, 0.50],
    [60, 0, 0, -60]
  );

  // Section 3: Code World (52% to ~74%)
  const s3Opacity = useTransform(
    scrollYProgress,
    [0.50, 0.56, 0.70, 0.76],
    [0, 1, 1, 0]
  );
  const s3Y = useTransform(
    scrollYProgress,
    [0.50, 0.58, 0.70, 0.76],
    [60, 0, 0, -60]
  );

  // Section 4: Dual Synthesis Climax (78% to ~98%)
  const s4Opacity = useTransform(
    scrollYProgress,
    [0.76, 0.82, 0.94, 0.99],
    [0, 1, 1, 0]
  );
  const s4Y = useTransform(
    scrollYProgress,
    [0.76, 0.84, 0.94, 0.99],
    [70, 0, 0, -40]
  );
  const s4Scale = useTransform(scrollYProgress, [0.80, 0.92], [0.95, 1]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative h-full w-full pointer-events-none select-none">
      {/* ============================================================ */}
      {/* SECTION 1: 0% Scroll - Deepak Amal Winstar J (Dual Hero)     */}
      {/* ============================================================ */}
      <motion.div
        style={{ opacity: s1Opacity, y: s1Y, scale: s1Scale }}
        className="absolute inset-0 flex flex-col items-center justify-between py-12 md:py-16 px-6 text-center"
      >
        {/* Top Status & Timecode HUD */}
        <div className="pt-14 md:pt-10 flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-black/60 px-4 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>
            <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-300">
              {PORTFOLIO_DATA.hero.status}
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono text-neutral-400 backdrop-blur-md">
            <span className="text-red-500 font-bold">REC ●</span>
            <span>{PORTFOLIO_DATA.hero.timecode}</span>
          </div>
        </div>

        {/* Center Editorial Title */}
        <div className="max-w-4xl space-y-4 my-auto">
          <div className="inline-block">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase font-display text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
              {PORTFOLIO_DATA.hero.name}
            </h1>
            <div className="h-1 w-full bg-gradient-to-r from-red-600 via-brand-orange to-cyan-400 mt-1 opacity-90" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-base sm:text-2xl md:text-3xl font-light text-neutral-200">
            <span className="text-gradient-fire font-bold">VIDEO EDITOR</span>
            <span className="text-neutral-500">×</span>
            <span className="text-cyan-400 font-bold">FULL STACK DEVELOPER</span>
          </div>

          <p className="mx-auto max-w-xl text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
            {PORTFOLIO_DATA.hero.tagline} — {PORTFOLIO_DATA.hero.subtagline}
          </p>

          {/* Quick Tools Row */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            {/* Video Tools */}
            {PORTFOLIO_DATA.hero.videoSkills.map((s) => (
              <span
                key={s.name}
                className="rounded-md border border-red-500/20 bg-red-500/10 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-red-400"
              >
                {s.name}
              </span>
            ))}
            <span className="text-neutral-600 text-xs hidden sm:inline">|</span>
            {/* Code Tools */}
            {PORTFOLIO_DATA.hero.codeSkills.map((s) => (
              <span
                key={s.name}
                className="rounded-md border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-cyan-400"
              >
                {s.name}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Scroll Prompt */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400">
            Scroll to scrub universe
          </span>
          <div className="relative h-10 w-6 rounded-full border border-white/20 p-1 flex justify-center">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="h-2 w-2 rounded-full bg-brand-orange shadow-[0_0_8px_#ff4d00]"
            />
          </div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* SECTION 2: ~30% Scroll - Video Editing Discipline (Left)     */}
      {/* ============================================================ */}
      <motion.div
        style={{ opacity: s2Opacity, y: s2Y }}
        className="absolute inset-0 flex items-center justify-start px-6 sm:px-12 md:px-20 lg:px-28"
      >
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-red-400 backdrop-blur-md">
            <Film className="h-3.5 w-3.5" />
            <span>01 / Cinematic Post-Production</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            TURNING FOOTAGE <br />
            <span className="text-gradient-fire">INTO EMOTIONS.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-light leading-relaxed max-w-xl">
            Editing isn&apos;t just cutting clips; it&apos;s pacing, psychological rhythm, sound foley, and color science that turns ordinary video into goosebumps.
          </p>

          {/* Mini NLE Timeline Graphic */}
          <div className="glass-card rounded-xl p-4 border border-red-500/20 max-w-lg space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span className="flex items-center gap-1.5 text-red-400">
                <Scissors className="h-3 w-3" />
                <span>NLE TIMELINE [24.00 FPS]</span>
              </span>
              <span>AUDIO STEMS: 32 CH</span>
            </div>
            {/* V1 Track */}
            <div className="h-4 bg-neutral-900 rounded flex gap-1 p-0.5 overflow-hidden">
              <div className="h-full w-1/4 bg-red-600/80 rounded-sm" />
              <div className="h-full w-2/5 bg-brand-orange/80 rounded-sm" />
              <div className="h-full w-1/3 bg-amber-500/80 rounded-sm" />
            </div>
            {/* A1 Audio Track with Waveform effect */}
            <div className="h-3 bg-neutral-900 rounded flex gap-0.5 p-0.5 items-center overflow-hidden">
              {Array.from({ length: 24 }).map((_, i) => (
                <span
                  key={i}
                  style={{ height: `${(i % 5 + 2) * 20}%` }}
                  className="w-1 bg-cyan-500/60 rounded-full"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <div className="glass-card flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-mono text-neutral-200">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              <span>Cinematic Pacing & Ramping</span>
            </div>
            <div className="glass-card flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-mono text-neutral-200">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
              <span>DaVinci Color Science</span>
            </div>
            <div className="glass-card flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-mono text-neutral-200">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span>Sound Design Foley</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* SECTION 3: ~60% Scroll - Full Stack Discipline (Right)       */}
      {/* ============================================================ */}
      <motion.div
        style={{ opacity: s3Opacity, y: s3Y }}
        className="absolute inset-0 flex items-center justify-end px-6 sm:px-12 md:px-20 lg:px-28 text-right"
      >
        <div className="max-w-2xl space-y-6 flex flex-col items-end">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-cyan-400 backdrop-blur-md">
            <Terminal className="h-3.5 w-3.5" />
            <span>02 / Full Stack Architecture</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            BUILDING IDEAS <br />
            <span className="text-cyan-400">INTO REAL SOLUTIONS.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-light leading-relaxed max-w-xl text-right">
            Scalable, high-performance web applications built from scratch. Next.js App Router, Node.js microservices, MongoDB schemas, and 60 FPS Canvas visual computing.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md pt-2">
            <div className="glass-card p-3.5 rounded-xl text-left border border-cyan-500/30 hover:border-cyan-400 transition-colors">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <Code2 className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white">Next.js & React</span>
              </div>
              <p className="text-[11px] text-neutral-400">Server Actions, edge rendering, Framer Motion, and Tailwind CSS.</p>
            </div>
            <div className="glass-card p-3.5 rounded-xl text-left border border-cyan-500/30 hover:border-cyan-400 transition-colors">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <Terminal className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white">Node.js & MongoDB</span>
              </div>
              <p className="text-[11px] text-neutral-400">RESTful APIs, WebSockets, real-time sync, and database modeling.</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* SECTION 4: ~85% Scroll - The Dual Climax (Center)           */}
      {/* ============================================================ */}
      <motion.div
        style={{ opacity: s4Opacity, y: s4Y, scale: s4Scale }}
        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center pointer-events-auto"
      >
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-black/70 px-4 py-1.5 backdrop-blur-lg">
            <span className="h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-brand-orange">
              03 / The Complete Synthesis
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[1.05] drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
            ONE MIND. <br />
            <span className="text-gradient-orange">TWO WORLDS.</span>
          </h2>

          <p className="mx-auto max-w-xl text-base sm:text-lg text-neutral-300 font-light">
            Whether directing a commercial film or architecting a mission-critical web application — I deliver extraordinary results.
          </p>

          {/* Dual Action CTAs */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-red-600 to-brand-orange px-8 py-4 font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-white shadow-[0_0_35px_rgba(255,34,0,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Film className="h-4 w-4" />
              <span>Explore Video Works</span>
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-cyan-500/40 bg-cyan-500/10 px-8 py-4 font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-cyan-300 shadow-[0_0_35px_rgba(0,229,255,0.15)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-cyan-500/20 hover:border-cyan-400 active:scale-95"
            >
              <Terminal className="h-4 w-4" />
              <span>Explore Full Stack Apps</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
