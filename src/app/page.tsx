"use client";
import React, { useEffect, useRef } from 'react';

export default function MonumentSandbox() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fluidCanvasRef = useRef<HTMLCanvasElement>(null);

  const sections = [
    { title: "Resonance", video: "/videos/s1.mp4", align: 'flex-start', x: '10%' },
    { title: "Fluidity", video: "/videos/s2.mp4", align: 'flex-end', x: '-10%' },
    { title: "Stillness", video: "/videos/s3.mp4", align: 'flex-start', x: '5%' },
    { title: "Refraction", video: "/videos/s4.mp4", align: 'flex-end', x: '-5%' },
    { title: "Ethereal", video: "/videos/s5.mp4", align: 'center', x: '0' },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const fCanvas = fluidCanvasRef.current;
    if (!canvas || !fCanvas) return;
    const ctx = canvas.getContext('2d');
    const fCtx = fCanvas.getContext('2d');
    if (!ctx || !fCtx) return;

    let particles: any[] = [];
    let time = 0;

    const resize = () => {
      canvas.width = fCanvas.width = window.innerWidth;
      canvas.height = fCanvas.height = window.innerHeight;
    };

    const handleInput = (x: number, y: number) => {
      for (let i = 0; i < 5; i++) {
        particles.push({
          x, y,
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3,
          life: 1.0,
          color: Math.random() > 0.5 ? '#ff00ff' : '#00ffff'
        });
      }
    };

    // Touch and Mouse listeners
    window.addEventListener('mousemove', (e) => handleInput(e.clientX, e.clientY));
    window.addEventListener('touchmove', (e) => {
      const touch = e.touches[0];
      handleInput(touch.clientX, touch.clientY);
    }, { passive: false });

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      fCtx.clearRect(0, 0, fCanvas.width, fCanvas.height);

      // 1. Background Metallic/Neon Ripple Waves
      ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * 0.5 + i * 20);
        for (let x = 0; x < canvas.width; x += 20) {
          const y = (canvas.height * 0.5) + Math.sin(x * 0.005 + time + i) * 50;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // 2. Mobile Touch Stardust
      particles = particles.filter(p => p.life > 0);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.life -= 0.02;
        fCtx.fillStyle = p.color;
        fCtx.globalAlpha = p.life;
        fCtx.beginPath(); fCtx.arc(p.x, p.y, 2, 0, Math.PI * 2); fCtx.fill();
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize(); animate();
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <main style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', overflowX: 'hidden', fontFamily: 'serif' }}>
      
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        {/* Metallic Ribbon Gradient */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #000, #0a0a0c, #000)', opacity: 0.8 }} />
        <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
        <canvas ref={fluidCanvasRef} style={{ position: 'absolute', inset: 0, zIndex: 50, pointerEvents: 'none' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 10, padding: '0 5vw' }}>
        <h1 style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12vw', fontStyle: 'italic', mixBlendMode: 'difference' }}>
          Monument
        </h1>
        
        {sections.map((s, i) => (
          <section key={i} style={{ minHeight: '130vh', display: 'flex', justifyContent: s.align, alignItems: 'center', transform: `translateX(${s.x})` }}>
            <div style={{ width: '100%', maxWidth: '600px', textAlign: 'center' }}>
              <video src={s.video} autoPlay loop muted playsInline style={{ width: '100%', mixBlendMode: 'screen', opacity: 0.9 }} />
              <h2 style={{ fontSize: '3.5rem', fontStyle: 'italic', marginTop: '20px', opacity: 0.6 }}>{s.title}</h2>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}