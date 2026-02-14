"use client";
import React, { useEffect, useRef } from 'react';

export default function MonumentSandbox() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sections = [
    { title: "Resonance", video: "/videos/s1.mp4", align: 'flex-start', shift: '10vw' },
    { title: "Fluidity", video: "/videos/s2.mp4", align: 'flex-end', shift: '-10vw' },
    { title: "Stillness", video: "/videos/s3.mp4", align: 'flex-start', shift: '4vw' },
    { title: "Refraction", video: "/videos/s4.mp4", align: 'flex-end', shift: '-4vw' },
    { title: "Ethereal", video: "/videos/s5.mp4", align: 'center', shift: '0' },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = () => {
      time += 0.008;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
      
      // 3D Particle Wave Logic (Inspired by your p5.js reference)
      const cols = 60;
      const rows = 25;
      const spacing = canvas.width / cols;
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const yBase = canvas.height * 0.75;
          // Breathing motion equation
          const wave = Math.sin(i * 0.15 + time) * Math.cos(j * 0.1 + time) * 35;
          const y = yBase + (j * 12) + wave;
          
          ctx.beginPath();
          ctx.arc(x, y, 0.7, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <main style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', overflowX: 'hidden', fontFamily: 'serif' }}>
      
      {/* 1. ATMOSPHERIC BACKGROUND: METALLIC RIBBON & PARTICLES */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #000 0%, #0c0c0e 40%, #1a1a24 60%, #000 100%)',
          backgroundSize: '400% 400%',
          animation: 'ribbonBreath 25s ease-in-out infinite',
          opacity: 0.8
        }} />
        <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ribbonBreath {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes bubbleRise {
          0% { transform: translateY(110vh) scale(0.5); opacity: 0; }
          20% { opacity: 0.4; }
          100% { transform: translateY(-20vh) scale(1.5); opacity: 0; }
        }
        .bubble {
          position: absolute;
          border-radius: 50%;
          border: 0.6px solid rgba(255, 255, 255, 0.3);
          background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1), transparent);
          box-shadow: inset -4px -4px 12px rgba(255, 0, 255, 0.2), 0 0 15px rgba(255, 255, 255, 0.05);
          pointer-events: none;
          animation: bubbleRise 20s linear infinite;
        }
      `}} />

      {/* 2. IRIDESCENT REFLECTIVE BUBBLES */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
        <div className="bubble" style={{ width: '110px', height: '110px', left: '5%', animationDelay: '0s' }} />
        <div className="bubble" style={{ width: '160px', height: '160px', left: '85%', animationDelay: '7s' }} />
        <div className="bubble" style={{ width: '50px', height: '50px', left: '42%', animationDelay: '14s' }} />
      </div>

      {/* 3. HERO */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 10 }}>
        <h1 style={{ fontSize: '11vw', fontStyle: 'italic', mixBlendMode: 'difference', letterSpacing: '-0.03em' }}>Monument</h1>
      </section>

      {/* 4. ASYMMETRIC STAGGERED ASSETS (BOX-LESS) */}
      <div style={{ position: 'relative', zIndex: 5, padding: '0 12vw' }}>
        {sections.map((s, i) => (
          <section key={i} style={{ 
            minHeight: '140vh', 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: s.align, 
            justifyContent: 'center',
            transform: `translateX(${s.shift})`,
            marginBottom: '15vh'
          }}>
            <div style={{ width: '100%', maxWidth: '680px', textAlign: 'center' }}>
              <video 
                src={s.video} 
                autoPlay loop muted playsInline 
                style={{ width: '100%', mixBlendMode: 'screen', opacity: 0.9, filter: 'contrast(1.1) brightness(1.1)' }} 
              />
              <h2 style={{ fontSize: '3.8rem', fontStyle: 'italic', marginTop: '35px', opacity: 0.5, fontWeight: 'normal' }}>{s.title}</h2>
            </div>
          </section>
        ))}
      </div>

      {/* 5. ANALOG FILM GRAIN OVERLAY */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', opacity: 0.04, zIndex: 100, background: "url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Static_Noise.gif')" }} />
    </main>
  );
}