"use client";
import { motion } from "framer-motion";

export default function MonumentSandbox() {
  const sections = [
    { title: "Resonance", subtitle: "01", video: "/videos/s1.mp4" },
    { title: "Fluidity", subtitle: "02", video: "/videos/s2.mp4" },
    { title: "Stillness", subtitle: "03", video: "/videos/s3.mp4" },
    { title: "Texture", subtitle: "04", video: "/videos/s4.mp4" },
    { title: "Ethereal", subtitle: "05", video: "/videos/s5.mp4" },
  ];

  return (
    <main className="bg-[#080808] text-white selection:bg-white selection:text-black font-sans">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
           <video 
             src="/videos/s1.mp4" 
             autoPlay loop muted playsInline preload="metadata"
             className="w-full h-full object-cover" 
           />
        </div>
        
        <div className="relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-[14vw] font-serif italic tracking-tighter leading-none"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Monument
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1, duration: 2 }}
            className="text-[10px] tracking-[1.2em] uppercase mt-4"
          >
            Sandbox • Vol. 01
          </motion.p>
        </div>
      </section>

      {/* ASMR Grid Section */}
      <div className="px-8 py-32 space-y-48 max-w-6xl mx-auto">
        {sections.map((s, i) => (
          <motion.section 
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <div className={i % 2 === 0 ? "order-1" : "order-1 md:order-2"}>
              <span className="text-blue-500 font-mono text-[10px] tracking-widest">{s.subtitle}</span>
              <h2 className="text-5xl font-serif italic mt-4 mb-8" style={{ fontFamily: 'Georgia, serif' }}>{s.title}</h2>
              <div className="w-16 h-[1px] bg-white/10 mb-8" />
              <p className="text-sm text-white/40 leading-relaxed font-light tracking-wide">
                Digital ASMR exploration. A study in abstract motion, focusing on the intersection of light, shadow, and fluid mechanics.
              </p>
            </div>
            
            <div className={`relative aspect-[3/4] bg-zinc-900/50 overflow-hidden rounded-sm ${i % 2 === 0 ? "order-2" : "order-2 md:order-1"}`}>
               <video 
                 src={s.video} 
                 autoPlay loop muted playsInline preload="metadata"
                 className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-1000" 
               />
            </div>
          </motion.section>
        ))}
      </div>

      {/* Footer */}
      <footer className="py-40 border-t border-white/5 text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          className="text-[10px] uppercase tracking-[1em]"
        >
          End of Sandbox
        </motion.div>
      </footer>
    </main>
  );
}