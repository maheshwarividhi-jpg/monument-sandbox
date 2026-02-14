"use client";
import React, { useEffect, useRef } from 'react';

export default function MonumentSandbox() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorCanvasRef = useRef<HTMLCanvasElement>(null);

  const sections = [
    { title: "Resonance", video: "/videos/s1.mp4", align: 'flex-start', shift: '10vw' },
    { title: "Fluidity", video: "/videos/s2.mp4", align: 'flex-end', shift: '-10vw' },
    { title: "Stillness", video: "/videos/s3.mp4", align: 'flex-start', shift: '5vw' },
    { title: "Refraction", video: "/videos/s4.mp4", align: 'flex-end', shift: '-5vw' },
    { title: "Ethereal", video: "/videos/s5.mp4", align: 'center', shift: '0' },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const cursorCanvas = cursorCanvasRef.current;
    if (!canvas || !cursorCanvas) return;
    const ctx = canvas.getContext('2d');
    const cCtx = cursorCanvas.getContext('2d');
    if (!ctx || !cCtx) return;

    let time = 0;
    let mouse = { x: 0, y: 0 };
    let particles: any[] = [];

    const resize = () => {
      canvas.width = cursorCanvas.width = window.innerWidth;
      canvas.height = cursorCanvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      // Spawn stardust on move
      for(let i=0; i<3; i++) {
        particles.push({
          x: mouse.x,
          y: mouse.y,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1.0
        });
      }
    });

    const animate = () => {
      time += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cCtx.clearRect(0, 0, cursorCanvas.width, cursorCanvas.height);

      // 1. Particle Terrain (Background)
      ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
      for (let i = 0; i < 50; i++) {
        for (let j = 0; j < 20; j++) {
          const x = i * (canvas.width / 50);
          const yBase = canvas.height * 0.75;
          const wave = Math.sin(i * 0.2 + time) * Math.cos(j * 0.1 + time) * 30;
          ctx.beginPath();
          ctx.arc(x, yBase + (j * 15) + wave, 0.7, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 2. Cursor Sparkle Wave
      particles = particles.filter(p => p.life > 0);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.015;
        cCtx.fillStyle = `rgba(255, 255, 255, ${p.life * 0.5})`;
        cCtx.beginPath();
        cCtx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        cCtx.fill();
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <main style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', overflowX: 'hidden', fontFamily: 'serif', cursor: 'none' }}>
      
      {/* BACKGROUND ELEMENTS */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        {/* Metallic Ribbon Gradient */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #000 0%, #0c0c10 40%, #1a1a25 60%, #000 100%)',
          backgroundSize: '400% 400%',
          animation: 'ribbonBreath 30s ease-in-out infinite',
          opacity: 0.8
        }} />
        <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
        <canvas ref={cursorCanvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 100 }} />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ribbonBreath {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes drift {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 0.8; }
        }
      `}} />

      {/* HERO */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 10 }}>
        <h1 style={{ fontSize: '11vw', fontStyle: 'italic', mixBlendMode: 'difference', opacity: 0.9 }}>Monument</h1>
      </section>

      {/* STAGGERED FLUID CONTENT */}
      <div style={{ position: 'relative', zIndex: 5, padding: '0 12vw' }}>
        {sections.map((s, i) => (
          <section key={i} style={{ 
            minHeight: '130vh', 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: s.align, 
            justifyContent: 'center',
            transform: `translateX(${s.shift})`,
            marginBottom: '15vh',
            animation: 'drift 2s ease-out forwards'
          }}>
            <div style={{ width: '100%', maxWidth: '650px', textAlign: 'center' }}>
              <video 
                src={s.video} 
                autoPlay loop muted playsInline 
                style={{ width: '100%', mixBlendMode: 'screen', opacity: 0.85, filter: 'contrast(1.1) brightness(1.1)' }} 
              />
              <h2 style={{ fontSize: '3.5rem', fontStyle: 'italic', marginTop: '30px', opacity: 0.5, fontWeight: 'normal' }}>{s.title}</h2>
            </div>
          </section>
        ))}
      </div>

      {/* FILM GRAIN */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', opacity: 0.04, zIndex: 101, background: "url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Static_Noise.gif')" }} />
    </main>
  );
}