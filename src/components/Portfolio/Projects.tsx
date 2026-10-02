"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowUpRight, Film, Terminal, ShieldCheck, Sparkles, Code2, ExternalLink } from "lucide-react";
import { PORTFOLIO_DATA, Project, ProjectType } from "@/data/portfolio";
import { ProjectModal } from "@/components/UI/ProjectModal";
import { VideoModal } from "@/components/UI/VideoModal";
import { usePortfolioMode } from "@/context/ModeContext";

export const Projects: React.FC = () => {
  const { mode } = usePortfolioMode();
  const [filter, setFilter] = useState<"all" | "video" | "code">("all");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<Project | null>(null);

  // Sync filter when global mode changes
  useEffect(() => {
    if (mode === "video") setFilter("video");
    else if (mode === "code") setFilter("code");
    else setFilter("all");
  }, [mode]);

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (filter === "all") return true;
    return p.type === filter;
  });

  return (
    <section
      id="projects"
      className="relative z-20 min-h-screen bg-[#050505] px-6 py-24 sm:px-12 md:px-20 lg:px-28"
    >
      {/* Background radial glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-brand-orange/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-brand-orange backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            <span>04 / Dual Discipline Portfolio</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-display">
                Selected <span className="text-gradient-orange">Productions.</span>
              </h2>
              <p className="mt-3 max-w-xl text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                A showcase spanning commercial films, viral YouTube narratives, and scalable full-stack web architectures.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-neutral-900/60 p-1.5 backdrop-blur-md">
              <button
                onClick={() => setFilter("all")}
                className={`rounded-full px-4 py-1.5 text-xs font-mono font-medium transition-all ${
                  filter === "all"
                    ? "bg-brand-orange text-white shadow-[0_0_15px_rgba(255,77,0,0.4)]"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                All Works ({PORTFOLIO_DATA.projects.length})
              </button>

              <button
                onClick={() => setFilter("video")}
                className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-mono font-medium transition-all ${
                  filter === "video"
                    ? "bg-red-600 text-white shadow-[0_0_15px_rgba(255,34,0,0.5)]"
                    : "text-neutral-400 hover:text-red-400"
                }`}
              >
                <Film className="h-3 w-3" />
                <span>Video & Motion</span>
              </button>

              <button
                onClick={() => setFilter("code")}
                className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-mono font-medium transition-all ${
                  filter === "code"
                    ? "bg-cyan-500 text-black font-semibold shadow-[0_0_15px_rgba(0,229,255,0.5)]"
                    : "text-neutral-400 hover:text-cyan-400"
                }`}
              >
                <Terminal className="h-3 w-3" />
                <span>Full Stack Apps</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Card Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const isVideo = project.type === "video";
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`group relative flex flex-col justify-between rounded-2xl border p-8 sm:p-10 backdrop-blur-xl transition-all duration-500 ${
                    isVideo
                      ? "border-red-500/20 bg-neutral-950/60 hover:border-red-500/60 hover:shadow-[0_0_45px_rgba(255,34,0,0.2)]"
                      : "border-cyan-500/20 bg-neutral-950/60 hover:border-cyan-400/60 hover:shadow-[0_0_45px_rgba(0,229,255,0.18)]"
                  }`}
                >
                  <div>
                    {/* Meta Header */}
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-6">
                      <span className="flex items-center gap-2">
                        <span
                          className={`font-bold ${
                            isVideo ? "text-red-500" : "text-cyan-400"
                          }`}
                        >
                          {isVideo ? "🎬 FILM" : "💻 APP"}
                        </span>
                        <span className="text-neutral-600">/</span>
                        <span>{project.category}</span>
                      </span>

                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-neutral-300">
                        {project.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-2xl sm:text-3xl font-bold tracking-tight text-white transition-colors duration-300 mb-4 flex items-center justify-between ${
                        isVideo
                          ? "group-hover:text-red-400"
                          : "group-hover:text-cyan-300"
                      }`}
                    >
                      <span>{project.title}</span>
                      {isVideo ? (
                        <Play className="h-6 w-6 text-neutral-500 transition-all duration-300 group-hover:text-red-500 group-hover:scale-110" />
                      ) : (
                        <ArrowUpRight className="h-6 w-6 text-neutral-500 transition-all duration-300 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      )}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-neutral-300 leading-relaxed font-light mb-6">
                      {project.description}
                    </p>

                    {/* Metrics Highlight Pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.metrics.map((metric, mIdx) => (
                        <span
                          key={mIdx}
                          className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-mono text-neutral-300"
                        >
                          <ShieldCheck
                            className={`h-3 w-3 ${
                              isVideo ? "text-red-500" : "text-cyan-400"
                            }`}
                          />
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Tags & Action Button */}
                  <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono text-neutral-400 bg-neutral-900/80 px-2 py-0.5 rounded border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {isVideo ? (
                      <button
                        onClick={() => setSelectedVideo(project)}
                        className="inline-flex items-center gap-2 rounded-full bg-red-600/90 hover:bg-red-500 px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(255,34,0,0.3)] transition-all"
                      >
                        <Play className="h-3.5 w-3.5 fill-current" />
                        <span>Watch Film</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => setSelectedCaseStudy(project)}
                        className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20 px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300 transition-all"
                      >
                        <Terminal className="h-3.5 w-3.5" />
                        <span>Architecture</span>
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <ProjectModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}

      {/* Video Cinema Lightbox */}
      {selectedVideo && (
        <VideoModal
          project={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </section>
  );
};
