"use client";
import { motion } from "framer-motion";

export default function MonumentSandbox() {
  const visuals = {
    waves: "https://cdn.pixabay.com/video/2021/09/01/87103-595393047_tiny.mp4",
    stars: "https://cdn.pixabay.com/video/2023/10/24/186358-877943566_tiny.mp4",
    bubbles: "https://cdn.pixabay.com/video/2021/04/12/70860-537443187_tiny.mp4"
  };

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden selection:bg-white/20">
      
      {/* BACKGROUND 1: THE ETHER (Space Stars) */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <video src={visuals.stars} autoPlay loop muted playsInline className="w-full h-full object-cover mix-blend-screen" />
      </div>

      {/* HERO SECTION: THE MONUMENT */}
      <section className="relative h-screen flex flex-col items-center justify-center z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, ease: "circOut" }}
          className="text-[12vw] font-serif italic tracking-tighter mix-blend-difference"
        >
          Monument
        </motion.h1>
        <p className="text-[10px] tracking-[1.5em] uppercase opacity-40 mt-6">Subconscious Explorations</p>
      </section>

      {/* SECTION 2: THE WAVES */}
      <section className="relative h-[150vh] flex items-center justify-center px-10">
        <div className="absolute inset-0 z-0 opacity-60">
           <video src={visuals.waves} autoPlay loop muted playsInline className="w-full h-full object-contain mix-blend-lighten" />
        </div>
        <div className="relative z-10 max-w-2xl text-center">
          <h2 className="text-6xl font-serif italic mb-6">Celestial Motion</h2>
          <div className="w-24 h-[1px] bg-white/20 mx-auto mb-8" />
          <p className="text-sm font-light leading-relaxed text-white/50 tracking-wide">
            A study in fluid dynamics and the weight of digital silence.
          </p>
        </div>
      </section>

      {/* SECTION 3: THE BUBBLES (ASMR POP) */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0 opacity-50">
           <video src={visuals.bubbles} autoPlay loop muted playsInline className="w-full h-full object-cover mix-blend-screen grayscale" />
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-7xl font-serif italic">Ephemeral</h2>
          <p className="text-[9px] tracking-[1.2em] uppercase opacity-20 mt-4">Breaking the Surface</p>
        </div>
      </section>

      {/* FILM GRAIN OVERLAY */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Static_Noise.gif')]" />
    </main>
  );
}