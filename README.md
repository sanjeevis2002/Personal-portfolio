# Deepak Amal Winstar J — Personal Portfolio

> **Dual-Discipline Showcase: High-End Video Editor & Full Stack Developer**  
> An Awwwards-inspired scrollytelling web experience featuring 60 FPS 2K image sequence scrubbing, interactive timeline color grading slider, developer terminal emulator, and cinema showreel player.

---

## 🌟 Key Highlights & Features

- 🎞️ **60 FPS 2K Scrollytelling Sequence**: 180 high-fidelity frames scrubbed smoothly via HTML5 Canvas with physics-based spring inertia (`useSpring`).
- 🎛️ **Dual-Discipline Mode Switcher**: Seamless 3-way toggle between **Dual**, **Video Editor**, and **Full Stack Developer** perspectives with dynamic UI accent theming (Cyber Neon Emerald for Dev, Hollywood Amber Gold for Video).
- 🎨 **Interactive Color Grading Comparison Slider**: Live split-view slider comparing RAW Flat Log footage directly against polished DaVinci Resolve color-graded master with split handle scrubbing.
- 💻 **Interactive Developer Terminal**: Fully functional bash shell emulator (`skills`, `projects`, `contact`, `clear`, `help`, `mode`) with live command execution and quick command chips.
- 🍿 **Cinema Video Showreel Lightbox**: Immersive modal video player with custom controls, timecode display, and technical metadata.
- ⚡ **Lenis Momentum Scrolling**: Ultra-smooth inertia scrolling synchronized with canvas frame rendering.
- 📱 **Fully Responsive**: Optimized for desktop monitors, laptops, tablets, and mobile devices.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server & Client Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom Glassmorphism Utilities
- **Animation & Physics**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll**: [@studio-freight/lenis](https://github.com/darkroomengineering/lenis)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Sequence Processing**: Python + Pillow (Lanczos 2K Upscaling & WebP compression)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ or higher
- npm / yarn / pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/DeepakAmalWinstarJ/Personal-portfolio.git
cd Personal-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the local development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Architecture

```
├── public/
│   └── sequence/            # 180 optimized 2K WebP sequence frames
├── scripts/                 # Image sequence upscaling and WebP conversion scripts
├── src/
│   ├── app/
│   │   ├── globals.css      # Custom styling, glow utilities, and typography
│   │   ├── layout.tsx       # Root layout with Lenis provider
│   │   └── page.tsx         # Main portfolio assembly
│   ├── components/
│   │   ├── CanvasScroller/  # HTML5 Canvas scrubber & narrative overlays
│   │   ├── Code/            # Interactive Developer Terminal
│   │   ├── Navigation/      # Floating glassmorphism navbar & mode switcher
│   │   ├── UI/              # Cinema showreel & project modal lightboxes
│   │   └── Video/           # Color grading slider & showreel cards
│   ├── context/
│   │   └── ModeContext.tsx  # Dual / Video / Code global state
│   └── data/
│       └── portfolio.ts     # Profile, projects, skills, and terminal data
├── tailwind.config.ts
└── tsconfig.json
```

---

## 📬 Contact & Connect

- **Portfolio**: [Deepak Amal Winstar J](https://github.com/DeepakAmalWinstarJ)
- **Email**: deepakamalwinstar@gmail.com
- **LinkedIn**: [linkedin.com/in/deepak-amal-winstar-j](https://linkedin.com/in/deepak-amal-winstar-j)
- **GitHub**: [@DeepakAmalWinstarJ](https://github.com/DeepakAmalWinstarJ)

---

Developed with ❤️ by **Deepak Amal Winstar J**
# Personal-portfolio
