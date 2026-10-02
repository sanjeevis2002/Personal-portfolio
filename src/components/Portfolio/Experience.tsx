"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative z-20 bg-[#050505] px-6 py-24 sm:px-12 md:px-20 lg:px-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-neutral-300 backdrop-blur-md">
            <Briefcase className="h-3.5 w-3.5 text-brand-orange" />
            <span>07 / Journey</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-display">
            Experience & <span className="text-gradient-orange">Milestones.</span>
          </h2>
          <p className="max-w-xl text-base text-neutral-400 font-light leading-relaxed">
            Collaborating with world-class agencies, innovative labs, and high-growth brands to engineer signature digital flagships.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-6">
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <motion.div
              key={exp.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-brand-orange/40 transition-all duration-300 flex flex-col md:flex-row md:items-start justify-between gap-6"
            >
              <div className="md:w-1/4">
                <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-brand-orange">
                  {exp.period}
                </span>
                <div className="mt-2 text-xs font-mono text-neutral-400">{exp.studio}</div>
              </div>

              <div className="md:w-3/4 space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center justify-between">
                  <span>{exp.role}</span>
                </h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
