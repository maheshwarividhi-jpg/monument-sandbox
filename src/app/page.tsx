"use client";
import { motion } from "framer-motion";

export default function MonumentSandbox() {
  // Reliable high-contrast stock videos for blending
  const immersiveVideos = [
    "https://cdn.pixabay.com/video/2021/09/01/87103-595393047_tiny.mp4", // Abstract Light
    "https://cdn.pixabay.com/video/2023/10/24/186358-877943566_tiny.mp4", // Fluid Smoke
    "https://cdn.pixabay.com/video/2022/09/14/131346-750051101_tiny.mp4", // Digital Waves
  ];

  return (
    <main className="bg-black text-white selection:bg-blue-500 overflow-x-hidden font-serif">
      
      {/* 1. HERO SECTION: Floating Title */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0 opacity-50">
          <video 
            src={immersiveVideos[0]} 
            autoPlay loop muted playsInline 
            className="w-full h-full object-cover mix-blend-screen scale-110"
          />
        </div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="relative z-10 text-[14vw] italic tracking-tighter mix-blend-difference"
        >
          Monument
        </motion.h1>
      </section>

      {/* 2. IMMERSIVE CONTENT: No Boxes */}
      <div className="space-y-[30vh] py-32">
        {immersiveVideos.map((url, i) => (
          <section key={i} className="relative h-screen flex flex-col items-center justify-center px-10">
            {/* The Floating Video Asset */}
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                className="w-full max-w-5xl h-full"
              >
                <video 
                  src={url} 
                  autoPlay loop muted playsInline 
                  className="w-full h-full object-contain mix-blend-lighten grayscale" 
                />
              </motion.div>
            </div>

            {/* The Floating Text */}
            <div className="relative z-10 text-center">
              <h2 className="text-7xl italic mb-4">Phase 0{i+1}</h2>
              <p className="text-[10px] tracking-[1.5em] uppercase opacity-30 font-sans">
                Sensory Sequence
              </p>
            </div>
          </section>
        ))}
      </div>

      {/* 3. COHESIVE GRAIN FILTER */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[100] bg-[url('https://media.giphy.com/media/oEI9uWU93A6Npx30rK/giphy.gif')]" />

      <footer className="h-screen flex items-center justify-center opacity-10">
        <p className="tracking-[2em] uppercase text-[9px] font-sans">End Sandbox</p>
      </footer>
    </main>
  );
}