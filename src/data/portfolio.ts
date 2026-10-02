export type ProjectType = "video" | "code";

export interface Project {
  id: string;
  type: ProjectType;
  title: string;
  category: string;
  year: string;
  client: string;
  description: string;
  longDescription: string;
  metrics: string[];
  tags: string[];
  accentColor: string;
  featured: boolean;
  videoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  duration?: string;
  aspectRatio?: string;
}

export interface SkillCategory {
  title: string;
  type: "video" | "code" | "motion";
  subtitle: string;
  skills: { name: string; level: number; note: string }[];
}

export const PORTFOLIO_DATA = {
  hero: {
    name: "DEEPAK AMAL WINSTAR J",
    shortName: "DEEPAK",
    title: "Video Editor & Full Stack Developer",
    tagline: "BUILDS | EDITS | CREATES",
    subtagline: "One Mind. Two Worlds. Limitless Possibilities.",
    status: "Available for High-Impact Editing & Engineering",
    timecode: "00:01:24:12",
    videoSkills: [
      { name: "Premiere Pro", tag: "Pr", color: "#ea77ff" },
      { name: "After Effects", tag: "Ae", color: "#9999ff" },
      { name: "DaVinci Resolve", tag: "Color", color: "#ff8c00" },
      { name: "CapCut Desktop", tag: "Fast Cuts", color: "#ffffff" },
    ],
    codeSkills: [
      { name: "React", tag: "UI", color: "#61dafb" },
      { name: "Next.js", tag: "App Router", color: "#ffffff" },
      { name: "Node.js", tag: "Backend", color: "#68a063" },
      { name: "MongoDB", tag: "Database", color: "#47a248" },
      { name: "Tailwind CSS", tag: "Design", color: "#38bdf8" },
    ],
    narrative: [
      {
        progress: [0, 0.22],
        heading: "DEEPAK AMAL WINSTAR J",
        subheading: "Video Editor & Full Stack Developer",
        details: "One mind bridging cinematic post-production and scalable full-stack engineering.",
        align: "center" as const,
      },
      {
        progress: [0.25, 0.48],
        heading: "TURNING FOOTAGE INTO EMOTIONS.",
        subheading: "Cinematic Pacing • Color Grading • Sound Design",
        details: "Cutting for rhythm, viewer retention, and emotional resonance using Premiere Pro, After Effects, and DaVinci Resolve.",
        align: "left" as const,
      },
      {
        progress: [0.52, 0.75],
        heading: "BUILDING IDEAS INTO REAL SOLUTIONS.",
        subheading: "Next.js • React • Node.js • MongoDB",
        details: "Architecting high-performance web applications, fluid motion systems, and rock-solid backend APIs.",
        align: "right" as const,
      },
      {
        progress: [0.80, 0.98],
        heading: "ONE MIND. TWO WORLDS.",
        subheading: "Limitless Possibilities at 60 FPS",
        details: "Ready to direct your visual narrative or engineer your next-generation digital platform.",
        align: "center" as const,
      },
    ],
  },
  stats: [
    { label: "Video Views Generated", value: "10M+", detail: "Across YouTube & Reels" },
    { label: "Rendering Performance", value: "60 FPS", detail: "Hardware-accelerated web" },
    { label: "Projects Completed", value: "45+", detail: "Films, Commercials & Apps" },
    { label: "Dual Disciplines", value: "100%", detail: "Cinema & Code mastery" },
  ],
  projects: [
    // ==========================================
    // 1. VIDEO EDITING & POST-PRODUCTION
    // ==========================================
    {
      id: "cinematic-brand-film",
      type: "video" as ProjectType,
      title: "APEX HORIZONS — CINEMATIC FILM",
      category: "Commercial & Sound Design",
      year: "2024",
      client: "Apex Media Group",
      description: "An evocative cinematic commercial featuring dynamic speed ramps, sound foley, and custom DaVinci color grading.",
      longDescription: "Directed the post-production workflow from raw log camera footage to 4K delivery. Engineered a rich soundscape with 32 audio stems (risers, whooshes, atmospheric hums), precision beat-synced cuts, and film-emulated 35mm grain.",
      metrics: ["2.4M Organic Views", "DaVinci Rec.709 Color Grade", "32 Audio Stem Foley"],
      tags: ["Premiere Pro", "DaVinci Resolve", "Sound Foley", "4K Mastering"],
      accentColor: "#ff2200",
      featured: true,
      duration: "02:15",
      aspectRatio: "2.39:1 Anamorphic",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    },
    {
      id: "high-retention-youtube",
      type: "video" as ProjectType,
      title: "TECH HORIZONS DOCUMENTARY",
      category: "High-Retention YouTube Longform",
      year: "2024",
      client: "Horizon Tech Channel",
      description: "Fast-paced documentary edit optimized for YouTube retention with kinetic typography and 3D mockups.",
      longDescription: "Structured an engaging visual narrative designed for 65%+ average viewer retention. Built bespoke After Effects kinetic title cards, lower-thirds, sound effects punctuation, and visual B-roll pacing that keeps audiences hooked.",
      metrics: ["72% Avg Viewer Retention", "+185K New Subscribers", "1080p60 Delivery"],
      tags: ["After Effects", "Premiere Pro", "Kinetic Typography", "Motion Graphics"],
      accentColor: "#ff4d00",
      featured: true,
      duration: "14:20",
      aspectRatio: "16:9 Cinema",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: "neon-music-video",
      type: "video" as ProjectType,
      title: "CYBER CITY — MUSIC VISUALIZER",
      category: "Music Video & VFX Sync",
      year: "2023",
      client: "Velvet Synth Records",
      description: "Atmospheric electronic music video featuring RGB glitch transitions, neon glows, and audio-reactive pacing.",
      longDescription: "Crafted a futuristic visual journey synced to a synthesizer beat. Implemented complex speed ramping, optical flow retiming, chromatic aberration shifts, and multi-layered video overlays that pulse to the bassline.",
      metrics: ["100% Beat Synchronized", "Custom LUT Creation", "CapCut & Premiere Pro"],
      tags: ["Premiere Pro", "CapCut Desktop", "RGB VFX", "Music Sync"],
      accentColor: "#ff8c00",
      featured: true,
      duration: "03:45",
      aspectRatio: "2.35:1 Widescreen",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    {
      id: "viral-social-reels",
      type: "video" as ProjectType,
      title: "VIRAL SOCIAL MEDIA CAMPAIGN",
      category: "Vertical Short-Form / 9:16",
      year: "2024",
      client: "Fitness Elite Brand",
      description: "Hyper-dynamic 9:16 vertical reels featuring micro-sound design, pop-in graphics, and thumb-stopping hooks.",
      longDescription: "Executed a suite of 15 short-form videos engineered for Instagram Reels and TikTok. Engineered 1.5-second visual hooks, animated auto-captions, audio risers, and punchy color contrast that drove viral reach.",
      metrics: ["4.8M Viral Views", "240% Engagement Lift", "15 Video Deliverables"],
      tags: ["CapCut Desktop", "After Effects", "Vertical 9:16", "Sound Design"],
      accentColor: "#ff3700",
      featured: true,
      duration: "00:45",
      aspectRatio: "9:16 Vertical",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },

    // ==========================================
    // 2. FULL STACK ENGINEERING & WEB APPS
    // ==========================================
    {
      id: "cloud-saas-platform",
      type: "code" as ProjectType,
      title: "NEXUS CLOUD — WORKFLOW SAAS",
      category: "Full Stack Next.js 14 / MongoDB",
      year: "2024",
      client: "Nexus Labs",
      description: "End-to-end cloud collaboration platform with real-time editing, team workspaces, and MongoDB storage.",
      longDescription: "Architected a full-stack SaaS application using Next.js 14 App Router, Server Actions, and MongoDB Atlas. Features OAuth authentication, role-based access control, Stripe subscription billing, and sub-100ms API response latency.",
      metrics: ["Sub-100ms API Latency", "100% Server Components", "Docker Containerized"],
      tags: ["Next.js 14", "React", "Node.js", "MongoDB", "Tailwind CSS"],
      accentColor: "#00e5ff",
      featured: true,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: "realtime-chat-engine",
      type: "code" as ProjectType,
      title: "SYNCHRONY — REALTIME COLLAB",
      category: "Node.js WebSockets & State Engine",
      year: "2024",
      client: "Synchrony Protocol",
      description: "High-concurrency collaborative canvas with bi-directional WebSockets and low-latency state sync.",
      longDescription: "Engineered a distributed real-time collaborative workspace allowing multiple users to edit simultaneously. Built on Node.js, Socket.io, and Redis pub/sub with operational transformation algorithms resolving conflicting user inputs.",
      metrics: ["10K Concurrent Sockets", "Sub-15ms Round-trip", "Zero Disconnect Loss"],
      tags: ["Node.js", "WebSockets", "Express", "MongoDB", "Redis"],
      accentColor: "#38bdf8",
      featured: true,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: "scrollytelling-canvas-engine",
      type: "code" as ProjectType,
      title: "2K CANVAS SCROLLYTELLING ENGINE",
      category: "HTML5 Canvas & Framer Motion",
      year: "2024",
      client: "Deepak Amal Winstar J",
      description: "60 FPS 2K image sequence scrubbing engine with progressive preloading and spring inertia.",
      longDescription: "Engineered this portfolio's core rendering engine: 180 frames of 2560x1440 WebP images scrubbed via Framer Motion useSpring and HTML5 Canvas 2D context with hardware DPI scaling and Lenis momentum scroll physics.",
      metrics: ["60-120 FPS Benchmark", "2560x1440 2K Master", "Zero Layout Shift"],
      tags: ["HTML5 Canvas", "Framer Motion", "Lenis", "TypeScript", "Next.js"],
      accentColor: "#00f59b",
      featured: true,
      liveUrl: "http://localhost:3000",
      githubUrl: "https://github.com",
    },
    {
      id: "rest-microservices-api",
      type: "code" as ProjectType,
      title: "CORE MATRIX — API GATEWAY",
      category: "Backend Architecture & Microservices",
      year: "2023",
      client: "Matrix Systems",
      description: "High-throughput RESTful API gateway with JWT authentication, rate limiting, and MongoDB indexing.",
      longDescription: "Designed an enterprise-grade backend architecture handling media processing jobs and user management. Includes asynchronous background worker queues, automated image/video transcoding webhooks, and comprehensive Swagger documentation.",
      metrics: ["99.99% Uptime", "500 Req/sec Throughput", "Automated Webhooks"],
      tags: ["Node.js", "Express", "MongoDB", "JWT", "Docker"],
      accentColor: "#818cf8",
      featured: true,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ] as Project[],
  colorGradeDemo: {
    title: "COLOR GRADING COMPARISON",
    subtitle: "From Flat RAW Camera Log to Final Film Emulation",
    description: "Drag the slider to compare uncorrected Flat Log camera footage with my custom DaVinci Resolve color grade (Rec.709, Kodak 2383 film LUT emulation, skin-tone preservation, and contrast expansion).",
    beforeLabel: "RAW Flat Log",
    afterLabel: "DaVinci Resolve Grade",
  },
  terminalCommands: [
    { cmd: "whoami", output: "Deepak Amal Winstar J — Video Editor & Full Stack Developer." },
    { cmd: "skills", output: "Post-Production: Premiere Pro, After Effects, DaVinci Resolve, CapCut\nFull Stack: React, Next.js 14, Node.js, MongoDB, TypeScript, Tailwind CSS" },
    { cmd: "projects", output: "Found 8 production projects: 4 Cinematic Video Edits + 4 Scalable Full Stack Web Applications." },
    { cmd: "contact", output: "Email: deepak.winstar@gmail.com | Telegram: @deepak_winstar | Open for Global Work" },
    { cmd: "status", output: "Available for Q3/Q4 Visionary Projects (Video Editing & Full Stack Web Apps)" },
  ],
  capabilities: [
    {
      title: "Post-Production Suite",
      type: "video" as const,
      subtitle: "Cinematic pacing, narrative rhythm, and visual storytelling",
      skills: [
        { name: "Adobe Premiere Pro (Master Editing)", level: 98, note: "Pacing, multi-cam, speed ramping & delivery" },
        { name: "DaVinci Resolve (Color Grading)", level: 94, note: "Color science, LUTs, Rec.709 & skin tones" },
        { name: "After Effects (Motion Graphics & VFX)", level: 92, note: "Kinetic titles, lower thirds, tracking & clean plate" },
        { name: "Sound Design & Audio Foley", level: 90, note: "Audio mastering, dialogue cleanup, risers & impacts" },
        { name: "CapCut Desktop (Social Media / 9:16)", level: 96, note: "Fast hooks, animated auto-captions & viral trends" },
      ],
    },
    {
      title: "Full Stack Engineering",
      type: "code" as const,
      subtitle: "Robust, scalable architectures and modern web apps",
      skills: [
        { name: "Next.js 14 App Router & React 18", level: 96, note: "Server Components, streaming & edge delivery" },
        { name: "Node.js & Express API Development", level: 94, note: "RESTful architecture, WebSockets & middleware" },
        { name: "MongoDB & Database Modeling", level: 92, note: "Aggregation pipelines, indexing & schemas" },
        { name: "TypeScript & Software Architecture", level: 95, note: "Type-safe systems, clean code & design patterns" },
        { name: "Tailwind CSS & Responsive UI", level: 98, note: "Awwwards-level glassmorphism & micro-interactions" },
      ],
    },
    {
      title: "Creative Technology",
      type: "motion" as const,
      subtitle: "Where video aesthetics meet browser physics",
      skills: [
        { name: "HTML5 Canvas 2D Scrubbing", level: 98, note: "60 FPS 2K image sequence rendering" },
        { name: "Framer Motion & Spring Physics", level: 95, note: "Inertia scrolling & fluid choreography" },
        { name: "Lenis Momentum Scrolling", level: 94, note: "Silky trackpad & wheel physics" },
        { name: "Web Audio API Synthesizer", level: 90, note: "Browser-generated ambient chimes" },
      ],
    },
  ] as SkillCategory[],
  experience: [
    {
      period: "2023 — Present",
      role: "Lead Video Editor & Full Stack Engineer",
      studio: "Deepak Studio & Autonomous Collaborations",
      description: "Directing high-stakes video post-production for brands and content creators while architecting full-stack web applications with Next.js, Node.js, and MongoDB.",
    },
    {
      period: "2021 — 2023",
      role: "Video Post-Production & Frontend Developer",
      studio: "Apex Media Labs",
      description: "Edited commercial campaigns, color-graded short films in DaVinci Resolve, and developed interactive digital web platforms.",
    },
    {
      period: "2020 — 2021",
      role: "Motion Designer & Web Developer",
      studio: "Creative Pulse Studio",
      description: "Designed kinetic typography in After Effects, edited YouTube content, and built responsive web interfaces.",
    },
  ],
  socials: [
    { name: "GitHub", handle: "github.com/deepak", url: "https://github.com" },
    { name: "LinkedIn", handle: "linkedin.com/in/deepak-amal-winstar", url: "https://linkedin.com" },
    { name: "YouTube", handle: "@deepak_creates", url: "https://youtube.com" },
    { name: "Instagram", handle: "@deepak_edits", url: "https://instagram.com" },
  ],
  contact: {
    email: "deepak.winstar@gmail.com",
    telegram: "@deepak_winstar",
    location: "Global / Available Worldwide",
  },
};
