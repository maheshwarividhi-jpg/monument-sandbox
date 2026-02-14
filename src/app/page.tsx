export default function MonumentSandbox() {
  const sections = [
    { title: "Resonance", video: "/videos/s1.mp4", align: 'flex-start' },
    { title: "Fluidity", video: "/videos/s2.mp4", align: 'flex-end' },
    { title: "Stillness", video: "/videos/s3.mp4", align: 'flex-start' },
    { title: "Refraction", video: "/videos/s4.mp4", align: 'flex-end' },
    { title: "Ethereal", video: "/videos/s5.mp4", align: 'center' },
  ];

  return (
    <main style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', overflowX: 'hidden', fontFamily: 'serif' }}>
      
      {/* 1. METALLIC RIBBON & STARFIELD BACKGROUND */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        {/* Metallic Wave */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(125deg, #000 0%, #0a0a0c 30%, #1a1a20 50%, #0a0a0c 70%, #000 100%)',
          backgroundSize: '400% 400%',
          animation: 'ribbonMove 20s ease-in-out infinite',
          opacity: 0.6
        }} />
        {/* Star Particles */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(white 1px, transparent 0)',
          backgroundSize: '40px 40px',
          opacity: 0.1,
          animation: 'starDrift 100s linear infinite'
        }} />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ribbonMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
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
          box-shadow: inset -5px -5px 15px rgba(255, 0, 255, 0.15), 0 0 10px rgba(255, 255, 255, 0.05);
          pointer-events: none;
          animation: floatUp 15s linear infinite;
        }
      `}} />

      {/* 2. IRIDESCENT BUBBLES */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
        <div className="bubble" style={{ width: '100px', height: '100px', left: '5%', animationDelay: '0s' }} />
        <div className="bubble" style={{ width: '150px', height: '150px', left: '85%', animationDelay: '5s' }} />
        <div className="bubble" style={{ width: '60px', height: '60px', left: '40%', animationDelay: '10s' }} />
      </div>

      {/* 3. HERO */}
      <section style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
        <h1 style={{ fontSize: '12vw', fontStyle: 'italic', mixBlendMode: 'difference' }}>Monument</h1>
      </section>

      {/* 4. STAGGERED FADING CONTENT */}
      <div style={{ position: 'relative', zIndex: 5, padding: '0 10vw' }}>
        {sections.map((s, i) => (
          <section key={i} style={{ 
            height: '120vh', 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: s.align, 
            justifyContent: 'center',
            opacity: 0.9
          }}>
            <div style={{ width: '100%', maxWidth: '600px', transition: 'opacity 1s' }}>
              <video 
                src={s.video} 
                autoPlay loop muted playsInline 
                style={{ width: '100%', filter: 'contrast(1.1)', mixBlendMode: 'screen' }} 
              />
              <h2 style={{ fontSize: '3rem', fontStyle: 'italic', marginTop: '20px', textAlign: 'center' }}>{s.title}</h2>
            </div>
          </section>
        ))}
      </div>

      {/* 5. GRAIN */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', opacity: 0.03, zIndex: 100, background: "url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Static_Noise.gif')" }} />
    </main>
  );
}