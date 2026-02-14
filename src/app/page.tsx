export default function MonumentSandbox() {
  const sections = [
    { title: "Resonance", video: "/videos/s1.mp4" },
    { title: "Fluidity", video: "/videos/s2.mp4" },
    { title: "Stillness", video: "/videos/s3.mp4" },
    { title: "Refraction", video: "/videos/s4.mp4" },
    { title: "Ethereal", video: "/videos/s5.mp4" },
  ];

  return (
    <main style={{ 
      backgroundColor: 'black', 
      color: 'white', 
      minHeight: '100vh', 
      overflowX: 'hidden', 
      fontFamily: 'serif' 
    }}>
      
      {/* 1. ANIMATED ABSTRACT WAVE BACKGROUND (Vanilla Moon Style) */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        opacity: 0.5,
        background: 'linear-gradient(125deg, #000000 0%, #08080a 40%, #111118 60%, #000000 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientMove 18s ease infinite',
      }} />

      {/* 2. SPARKLE / STARDUST LAYER */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1,
        backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')`,
        opacity: 0.15,
        pointerEvents: 'none'
      }} />

      <style jsx global>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
        video::-webkit-media-controls {
          display: none !important;
        }
      `}</style>

      {/* 3. HERO SECTION */}
      <section style={{ 
        position: 'relative', 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        zIndex: 10 
      }}>
        <h1 style={{ 
          fontSize: '14vw', 
          fontStyle: 'italic', 
          letterSpacing: '-0.05em', 
          margin: 0, 
          mixBlendMode: 'difference',
          fontWeight: 'normal'
        }}>
          Monument
        </h1>
        <p style={{ 
          fontSize: '10px', 
          letterSpacing: '1.4em', 
          textTransform: 'uppercase', 
          opacity: 0.4, 
          marginTop: '24px', 
          textAlign: 'center',
          fontFamily: 'sans-serif'
        }}>
          Sandbox Explorations
        </p>
      </section>

      {/* 4. IMMERSIVE VIDEO FEED (s1-s5) */}
      <div style={{ position: 'relative', zIndex: 5 }}>
        {sections.map((s, i) => (
          <section key={i} style={{ 
            height: '140vh', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: '0 20px' 
          }}>
            
            {/* The Video: Floating with Screen Blend (No Box) */}
            <div style={{ 
              width: '100%', 
              maxWidth: '900px', 
              marginBottom: '60px',
              filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.05))'
            }}>
              <video 
                src={s.video} 
                autoPlay 
                loop 
                muted 
                playsInline 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain', 
                  mixBlendMode: 'screen', 
                  filter: 'contrast(1.1) brightness(1.2)' 
                }} 
              />
            </div>

            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '5rem', fontStyle: 'italic', margin: 0, opacity: 0.9 }}>
                {s.title}
              </h2>
              <p style={{ 
                fontSize: '9px', 
                letterSpacing: '0.8em', 
                textTransform: 'uppercase', 
                opacity: 0.3, 
                marginTop: '15px',
                fontFamily: 'sans-serif'
              }}>
                Motion Study 0{i+1}
              </p>
            </div>
          </section>
        ))}
      </div>

      {/* 5. FILM GRAIN OVERLAY */}
      <div style={{ 
        position: 'fixed', 
        inset: 0, 
        pointerEvents: 'none', 
        opacity: 0.04, 
        zIndex: 100, 
        background: "url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Static_Noise.gif')" 
      }} />

      <footer style={{ 
        height: '60vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        opacity: 0.1 
      }}>
        <p style={{ letterSpacing: '2.5em', textTransform: 'uppercase', fontSize: '8px' }}>
          End Sandbox
        </p>
      </footer>
    </main>
  );
}