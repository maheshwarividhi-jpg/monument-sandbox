export default function MonumentSandbox() {
  const sections = [
    { title: "Resonance", video: "/videos/s1.mp4" },
    { title: "Fluidity", video: "/videos/s2.mp4" },
    { title: "Stillness", video: "/videos/s3.mp4" },
    { title: "Refraction", video: "/videos/s4.mp4" },
    { title: "Ethereal", video: "/videos/s5.mp4" },
  ];

  return (
    <main style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', overflowX: 'hidden', fontFamily: 'serif' }}>
      
      {/* 1. ANIMATED LIQUID WAVE BACKGROUND */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        opacity: 0.5,
        background: 'linear-gradient(125deg, #000000 0%, #08080a 40%, #111118 60%, #000000 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientMove 18s ease infinite',
      }} />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes gradientMove {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
        @keyframes floatUp {
          0% { transform: translateY(110vh) scale(0.5); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.2; }
          100% { transform: translateY(-20vh) scale(1.5); opacity: 0; }
        }
        .bubble {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2), rgba(255, 0, 255, 0.1));
          box-shadow: inset -2px -2px 10px rgba(255, 0, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1);
          pointer-events: none;
          animation: floatUp 10s linear infinite;
        }
      `}} />

      {/* 2. IRIDESCENT BUBBLES WITH PURPLE/PINK REFLECTION */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
        <div className="bubble" style={{ width: '80px', height: '80px', left: '15%', animationDelay: '0s' }} />
        <div className="bubble" style={{ width: '120px', height: '120px', left: '75%', animationDelay: '3s' }} />
        <div className="bubble" style={{ width: '50px', height: '50px', left: '45%', animationDelay: '6s' }} />
        <div className="bubble" style={{ width: '100px', height: '100px', left: '30%', animationDelay: '8s' }} />
      </div>

      {/* 3. HERO SECTION */}
      <section style={{ position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
        <h1 style={{ fontSize: '14vw', fontStyle: 'italic', letterSpacing: '-0.05em', mixBlendMode: 'difference' }}>
          Monument
        </h1>
        <p style={{ fontSize: '10px', letterSpacing: '1.2em', textTransform: 'uppercase', opacity: 0.4, marginTop: '20px' }}>
          Sensory Sandbox
        </p>
      </section>

      {/* 4. THE VIDEO STREAM */}
      <div style={{ position: 'relative', zIndex: 5 }}>
        {sections.map((s, i) => (
          <section key={i} style={{ height: '140vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 20px' }}>
            <div style={{ width: '100%', maxWidth: '850px', marginBottom: '40px' }}>
              <video 
                src={s.video} 
                autoPlay loop muted playsInline 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
              />
            </div>
            <h2 style={{ fontSize: '4rem', fontStyle: 'italic', opacity: 0.8 }}>{s.title}</h2>
          </section>
        ))}
      </div>

      {/* 5. THE SPARKLE / FILM GRAIN OVERLAY */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', opacity: 0.05, zIndex: 100, background: "url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Static_Noise.gif')" }} />
    </main>
  );
}