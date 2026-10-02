"use client";

import React, { useState } from "react";
import { ScrollyCanvas } from "@/components/CanvasScroller/ScrollyCanvas";
import { Overlay } from "@/components/CanvasScroller/Overlay";
import { Preloader } from "@/components/CanvasScroller/Preloader";
import { Projects } from "@/components/Portfolio/Projects";
import { ColorGradeSlider } from "@/components/Video/ColorGradeSlider";
import { DeveloperTerminal } from "@/components/Code/DeveloperTerminal";
import { Capabilities } from "@/components/Portfolio/Capabilities";
import { Philosophy } from "@/components/Portfolio/Philosophy";
import { Experience } from "@/components/Portfolio/Experience";
import { Contact } from "@/components/Portfolio/Contact";
import { Footer } from "@/components/Portfolio/Footer";

export default function HomePage() {
  const [loadedFrames, setLoadedFrames] = useState(0);
  const totalFrames = 180;

  return (
    <>
      {/* 2K Cinematic Sequence Preloader */}
      <Preloader loaded={loadedFrames} total={totalFrames} />

      {/* Scrollytelling 500vh Sticky Canvas & Dual Parallax Overlay */}
      <ScrollyCanvas
        totalFrames={totalFrames}
        onLoadingProgress={(loaded) => setLoadedFrames(loaded)}
      >
        <Overlay />
      </ScrollyCanvas>

      {/* Dual Productions: Video Editing & Full Stack Apps */}
      <Projects />

      {/* Signature Module 1: Color Grading Comparison Slider */}
      <div id="color-grade">
        <ColorGradeSlider />
      </div>

      {/* Signature Module 2: Interactive Developer Terminal */}
      <div id="terminal">
        <DeveloperTerminal />
      </div>

      {/* Dual Capabilities Matrix: Post-Production & Full Stack */}
      <Capabilities />

      {/* Editorial Ethos & Impact Stats */}
      <Philosophy />

      {/* Journey & Experience */}
      <Experience />

      {/* Contact Deepak */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  );
}
