"use client";
import { motion } from "framer-motion";

export default function MonumentSandbox() {
  const stockVideos = [
    "https://assets.mixkit.co/videos/preview/mixkit-abstract-flowing-teal-and-pink-ink-2402-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-slow-motion-of-a-colorful-ink-drop-in-water-3401-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-dust-particles-flying-in-the-air-1153-large.mp4"
  ];

  return (
    <main className="bg-black text-white min-h-[300vh] selection:bg-blue-500 overflow-x-hidden">
      
      {/* 1. THE FLOATING HERO */}
      <section className="h-screen flex flex-col items-center justify-center sticky top-0">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 3 }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <video 
            src={stockVideos[0]} 
            autoPlay loop muted playsInline 
            className="w-full h-full object-cover mix-blend-screen opacity-60" 
          />
        </motion.div>
        
        <h1 className="relative z-10 text-[12vw] font-serif italic tracking-tighter mix-blend-difference">
          Monument
        </h1>
      </section>

      {/* 2. THE IMMERSIVE SCROLL CONTENT */}
      <div className="relative z-20">
        {stockVideos.map((url, i) => (
          <section key={i} className="h-screen flex items-center justify-around px-10">
            <motion.div 
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="max-w-md"
            >
              <h2 className="text-4xl font-serif mb-4 italic">Phase 0{i+1}</h2>
              <p className="text-zinc-500 text-sm tracking-widest leading-loose">
                IMMERSED IN MOTION. NO BORDERS. NO BOXES. 
                SENSORY EXPERIMENT {i+1}.
              </p>
            </motion.div>

            {/* This is the "Floating PNG" effect video */}
            <div className="w-1/2 h-[60vh] relative">
              <video 
                src={url} 
                autoPlay loop muted playsInline 
                className="w-full h-full object-contain mix-blend-screen grayscale contrast-125"
              />
            </div>
          </section>
        ))}
      </div>

      <footer className="h-screen flex items-center justify-center bg-zinc-950">
        <p className="opacity-20 tracking-[2em] uppercase text-[10px]">End Sandbox</p>
      </footer>
    </main>
  );
}