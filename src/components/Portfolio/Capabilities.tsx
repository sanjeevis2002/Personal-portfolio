"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Film, Terminal, Sparkles, Layers, Cpu, Flame } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const Capabilities: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="capabilities"
      className="relative z-20 bg-[#050505] px-6 py-24 sm:px-12 md:px-20 lg:px-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-neutral-300 backdrop-blur-md">
            <Cpu className="h-3.5 w-3.5 text-brand-orange" />
            <span>05 / Dual Discipline Mastery</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-display">
            Dual <span className="text-gradient-orange">Capabilities.</span>
          </h2>

          <p className="max-w-2xl text-base text-neutral-400 font-light leading-relaxed">
            Where cinema post-production tools meet enterprise full-stack development. Every frame is timed; every API route is optimized.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-3 border-b border-white/10 pb-6 mb-10">
          {PORTFOLIO_DATA.capabilities.map((cat, idx) => {
            const isVideo = cat.type === "video";
            const isCode = cat.type === "code";
            const isActive = activeTab === idx;

            return (
              <button
                key={cat.title}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-mono font-medium transition-all duration-300 ${
                  isActive
                    ? isVideo
                      ? "bg-red-600 text-white shadow-[0_0_20px_rgba(255,34,0,0.5)]"
                      : isCode
                      ? "bg-cyan-500 text-black font-semibold shadow-[0_0_20px_rgba(0,229,255,0.5)]"
                      : "bg-brand-orange text-white shadow-[0_0_20px_rgba(255,77,0,0.5)]"
                    : "border border-white/10 bg-white/[0.02] text-neutral-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {isVideo && <Film className="h-3.5 w-3.5" />}
                {isCode && <Terminal className="h-3.5 w-3.5" />}
                {!isVideo && !isCode && <Sparkles className="h-3.5 w-3.5" />}
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {PORTFOLIO_DATA.capabilities[activeTab].skills.map((skill, sIdx) => {
            const isVideo = PORTFOLIO_DATA.capabilities[activeTab].type === "video";
            const isCode = PORTFOLIO_DATA.capabilities[activeTab].type === "code";

            return (
              <div
                key={skill.name}
                className={`glass-card rounded-xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                  isVideo
                    ? "hover:border-red-500/50 hover:shadow-[0_0_25px_rgba(255,34,0,0.15)]"
                    : isCode
                    ? "hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(0,229,255,0.15)]"
                    : "hover:border-brand-orange/50 hover:shadow-[0_0_25px_rgba(255,77,0,0.15)]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      <Flame
                        className={`h-4 w-4 ${
                          isVideo
                            ? "text-red-500"
                            : isCode
                            ? "text-cyan-400"
                            : "text-brand-orange"
                        }`}
                      />
                      {skill.name}
                    </h4>

                    <span
                      className={`text-xs font-mono font-bold ${
                        isVideo
                          ? "text-red-400"
                          : isCode
                          ? "text-cyan-400"
                          : "text-brand-orange"
                      }`}
                    >
                      {skill.level}%
                    </span>
                  </div>

                  <p className="text-xs text-neutral-400 font-mono mb-4">
                    {skill.note}
                  </p>
                </div>

                {/* Progress bar indicator */}
                <div className="w-full h-1.5 bg-neutral-900 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: sIdx * 0.08 }}
                    className={`h-full rounded-full ${
                      isVideo
                        ? "bg-gradient-to-r from-red-600 to-brand-orange"
                        : isCode
                        ? "bg-gradient-to-r from-blue-500 to-cyan-400"
                        : "bg-gradient-to-r from-amber-500 to-brand-orange"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
