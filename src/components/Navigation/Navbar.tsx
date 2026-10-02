"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Flame, Film, Terminal, Sparkles, Menu, X } from "lucide-react";
import { SoundButton } from "@/components/UI/SoundManager";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { usePortfolioMode, PortfolioMode } from "@/context/ModeContext";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { mode, setMode } = usePortfolioMode();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Story", href: "#scrolly-section" },
    { label: "Works", href: "#projects" },
    { label: "Color Science", href: "#color-grade" },
    { label: "Terminal", href: "#terminal" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center p-3 sm:p-5 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-4 rounded-full border px-4 sm:px-6 py-2 transition-all duration-500 max-w-6xl w-full ${
          scrolled
            ? "border-white/15 bg-neutral-950/85 shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            : "border-white/10 bg-black/45 backdrop-blur-md"
        }`}
      >
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-brand-orange transition-colors flex-shrink-0"
        >
          <Flame className="h-4 w-4 text-brand-orange animate-pulse" />
          <span className="font-display tracking-tight text-sm sm:text-base">
            {PORTFOLIO_DATA.hero.shortName}
          </span>
        </a>

        {/* The 3-Way Mode Switcher (Global HUD) */}
        <div className="hidden lg:flex items-center rounded-full border border-white/10 bg-neutral-900/80 p-1 backdrop-blur-md">
          <button
            onClick={() => setMode("video")}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-mono transition-all ${
              mode === "video"
                ? "bg-red-600 text-white font-semibold shadow-[0_0_12px_rgba(255,34,0,0.6)]"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <Film className="h-3 w-3" />
            <span>VIDEO</span>
          </button>

          <button
            onClick={() => setMode("dual")}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-mono transition-all ${
              mode === "dual"
                ? "bg-brand-orange text-white font-semibold shadow-[0_0_12px_rgba(255,77,0,0.6)]"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <Sparkles className="h-3 w-3" />
            <span>DUAL</span>
          </button>

          <button
            onClick={() => setMode("code")}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-mono transition-all ${
              mode === "code"
                ? "bg-cyan-500 text-black font-semibold shadow-[0_0_12px_rgba(0,229,255,0.6)]"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <Terminal className="h-3 w-3" />
            <span>CODE</span>
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-5 text-xs font-mono text-neutral-300">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-brand-orange"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Controls: Audio & Contact CTA */}
        <div className="flex items-center gap-2.5">
          <SoundButton />

          <a
            href="#contact"
            className="hidden sm:inline-flex rounded-full bg-gradient-to-r from-red-600 to-brand-orange px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(255,77,0,0.3)] transition-all hover:scale-105 active:scale-95"
          >
            Let&apos;s Talk
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 text-neutral-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="pointer-events-auto absolute top-18 left-4 right-4 rounded-2xl border border-white/15 bg-neutral-950/95 p-6 backdrop-blur-2xl shadow-2xl flex flex-col gap-4 text-center md:hidden"
        >
          {/* Mobile Mode Switcher */}
          <div className="flex items-center justify-center rounded-full border border-white/10 bg-neutral-900/80 p-1 mb-2">
            {(["video", "dual", "code"] as PortfolioMode[]).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 py-1.5 text-xs font-mono uppercase rounded-full transition-all ${
                  mode === m
                    ? m === "video"
                      ? "bg-red-600 text-white font-bold"
                      : m === "code"
                      ? "bg-cyan-500 text-black font-bold"
                      : "bg-brand-orange text-white font-bold"
                    : "text-neutral-400"
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-mono text-neutral-300 hover:text-brand-orange py-2"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 rounded-full bg-brand-orange py-3 text-xs font-mono font-bold uppercase text-white shadow-[0_0_20px_rgba(255,77,0,0.4)]"
          >
            Let&apos;s Talk
          </a>
        </motion.div>
      )}
    </header>
  );
};
