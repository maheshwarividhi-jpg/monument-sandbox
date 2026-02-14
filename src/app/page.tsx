export default function MonumentSandbox() {
  const sections = [
    { title: "Resonance", video: "/videos/s1.mp4", align: 'flex-start', shift: '-5vw' },
    { title: "Fluidity", video: "/videos/s2.mp4", align: 'flex-end', shift: '5vw' },
    { title: "Stillness", video: "/videos/s3.mp4", align: 'flex-start', shift: '0' },
    { title: "Refraction", video: "/videos/s4.mp4", align: 'flex-end', shift: '-2vw' },
    { title: "Ethereal", video: "/videos/s5.mp4", align: 'center', shift: '0' },
  ];

  return (
    <main style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', overflowX: 'hidden', fontFamily: 'serif' }}>
      
      {/* 1. METALLIC RIBBON & STARFIELD BACKGROUND */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        {/* Metallic Ribbon SVG */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.2 }}>
          <defs>
            <linearGradient id="ribbon-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 0.8)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path d="M-100 200 Q 300 50 600 300 T 1200 200" fill="none" stroke="url(#ribbon-grad)" strokeWidth="1">
            <animate attributeName="d" dur="20s" repeatCount="indefinite"
              values="M-100 200 Q 300 50 600 300 T 1200 200; M-100 300 Q 400 150 700 400 T 1200 300; M-100 200 Q 300 50 600 300 T 1200 200" />
          </path>
        </svg>

        {/* Space Star Particles */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          opacity: 0.1,
          animation: 'starDrift 120s linear infinite'
        }} />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes starDrift {
          from { transform: translateY(0); }
          to { transform: translateY(-1000px); }
        }
        @keyframes floatUp {
          0% { transform: translateY(110vh) scale(0.5); opacity: 0; }
          20% { opacity: 0.6; }
          80% { opacity: 0.3; }
          100% { transform: translateY(-20vh) scale(1.5); opacity: 0; }
        }
        .bubble {
          position: absolute;
          border-radius: 50%;
          border: 0.5px solid rgba(255, 255, 255, 0.4);
          background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1), transparent);
          box-shadow: inset -5px -5px 15px rgba(255, 0, 255, 0.2), 0 0 10px rgba(255, 255, 255, 0.05);
          pointer-events: none;
          animation: floatUp 15s linear infinite;
        }
      `}} />

      {/* 2. IRIDESCENT BUBBLES */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
        <div className="bubble" style={{ width: '100px', height: '100px', left: '10%', animationDelay: '0s' }} />
        <div className="bubble" style={{ width: '140px', height: '140px', left: '75%', animationDelay: '5s' }} />
        <div className="bubble" style={{ width: '60px', height: '60px', left: '40%', animationDelay: '10s' }} />
      </div>

      {/* 3. HERO */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 10 }}>
        <h1 style={{ fontSize: '12vw', fontStyle: 'italic', mixBlendMode: 'difference', opacity: 0.9 }}>Monument</h1>
      </section>

      {/* 4. STAGGERED & BOX-LESS ASSETS */}
      <div style={{ position: 'relative', zIndex: 5, padding: '0 8vw' }}>
        {sections.map((s, i) => (
          <section key={i} style={{ 
            minHeight: '130vh', 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: s.align, 
            justifyContent: 'center',
            transform: `translateX(${s.shift})`
          }}>
            <div style={{ width: '100%', maxWidth: '650px', textAlign: 'center' }}>
              <video 
                src={s.video} 
                autoPlay loop muted playsInline 
                style={{ width: '100%', mixBlendMode: 'screen', opacity: 0.8 }} 
              />
              <h2 style={{ fontSize: '3.5rem', fontStyle: 'italic', marginTop: '25px', opacity: 0.7 }}>{s.title}</h2>
            </div>
          </section>
        ))}
      </div>

      {/* 5. FILM GRAIN */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', opacity: 0.03, zIndex: 100, background: "url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Static_Noise.gif')" }} />
    </main>
  );
}