"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame } from "lucide-react";

interface PreloaderProps {
  loaded: number;
  total: number;
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({
  loaded,
  total,
  onComplete,
}) => {
  const [isDone, setIsDone] = useState(false);
  const percentage = Math.min(100, Math.round((loaded / Math.max(1, total)) * 100));

  useEffect(() => {
    // When at least 15% loaded (approx 25 2K frames, plenty for smooth start) or after 1.8s
    if (percentage >= 25 || loaded >= 25) {
      const timer = setTimeout(() => {
        setIsDone(true);
        onComplete?.();
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [percentage, loaded, onComplete]);

  // Fail-safe dismiss after 2.5 seconds regardless
  useEffect(() => {
    const safetyTimer = setTimeout(() => {
      setIsDone(true);
      onComplete?.();
    }, 2500);
    return () => clearTimeout(safetyTimer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#050505] p-8 md:p-14 select-none pointer-events-none"
        >
          {/* Top Brand Bar */}
          <div className="w-full flex items-center justify-between text-xs font-mono tracking-widest text-neutral-400">
            <span className="flex items-center gap-2">
              <Flame className="h-4 w-4 text-brand-orange animate-pulse" />
              DEEPAK AMAL WINSTAR J
            </span>
            <span className="text-neutral-300 font-mono">2K CANVASCROLL</span>
          </div>

          {/* Center Progress Counter */}
          <div className="flex flex-col items-center gap-6 my-auto">
            <div className="relative">
              <span className="text-7xl sm:text-9xl font-extrabold font-display tracking-tighter text-white">
                {Math.max(percentage, 10)}
              </span>
              <span className="text-xl sm:text-2xl font-mono text-brand-orange ml-1 font-bold">
                %
              </span>
            </div>

            <div className="w-64 sm:w-80 h-1 bg-neutral-900 rounded-full overflow-hidden border border-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-500 via-brand-orange to-brand-flame shadow-[0_0_12px_#ff4d00]"
                style={{ width: `${Math.max(percentage, 10)}%` }}
                transition={{ duration: 0.15 }}
              />
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-300 tracking-wider">
              <span>INITIALIZING 2K CINEMATIC SEQUENCE</span>
              <span>•</span>
              <span className="text-neutral-400 font-mono">
                {loaded}/{total} FRAMES
              </span>
            </div>
          </div>

          {/* Bottom Footer Details */}
          <div className="w-full flex items-center justify-between text-[11px] font-mono text-neutral-400">
            <span>2560 × 1440 ULTRA-HD</span>
            <span>60 FPS SCRUB</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
