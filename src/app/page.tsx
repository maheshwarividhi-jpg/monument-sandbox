"use client";
import { motion } from "framer-motion";

export default function MonumentSandbox() {
  // These are high-quality hosted stock videos (Abstract Motion)
  const immersiveStock = [
    "https://assets.mixkit.co/videos/preview/mixkit-abstract-flowing-teal-and-pink-ink-2402-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-slow-motion-of-a-colorful-ink-drop-in-water-3401-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-dust-particles-flying-in-the-air-1153-large.mp4"
  ];

  return (
    <main className="bg-black text-white min-h-screen selection:bg-blue-500 overflow-x-hidden font-serif">
      
      {/* 1. FLOATING HERO (The Entrance) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
           <video 
             src={immersiveStock[0]} 
             autoPlay loop muted playsInline 
             className="w-full h-full object-cover mix-blend-screen scale-110" 
           />
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, letterSpacing: "1em" }}
          animate={{ opacity: 1, letterSpacing: "-0.02em" }}
          transition={{ duration: 3, ease: "circOut" }}
          className="relative z-10 text-[12vw] italic tracking-tighter"
        >
          Monument
        </motion.h1>
      </section>

      {/* 2. OVERLAPPING TEXTURES (No Borders) */}
      <div className="relative">
        {immersiveStock.map((url, i) => (
          <section key={i} className="relative h-screen flex items-center justify-center">
            {/* The Floating Asset */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.7, scale: 1 }}
                transition={{ duration: 2 }}
                className="w-full h-full md:w-3/4 md:h-3/4"
              >
                <video 
                  src={url} 
                  autoPlay loop muted playsInline 
                  className="w-full h-full object-contain mix-blend-plus-lighter grayscale contrast-125" 
                />
              </motion.div>
            </div>

            {/* The Floating Text */}
            <div className="relative z-10 text-center space-y-4">
              <h2 className="text-7xl italic opacity-90">Phase 0{i + 1}</h2>
              <p className="text-[10px] tracking-[1.5em] uppercase opacity-20 font-sans">
                Subconscious Motion
              </p>
            </div>
          </section>
        ))}
      </div>

      {/* 3. THE "ASMR" GRAIN FILTER */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Static_Noise.gif')]" />

      <footer className="h-[50vh] flex items-center justify-center opacity-10">
        <p className="tracking-[2em] uppercase text-[9px] font-sans">End Sandbox</p>
      </footer>
    </main>
  );
}