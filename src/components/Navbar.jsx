import React, { useState, useEffect, useRef } from 'react';
import { Shield, Volume2, VolumeX, Radio, Cpu } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [audioActive, setAudioActive] = useState(false);
  const audioCtxRef = useRef(null);
  const oscRef = useRef(null);
  const gainRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Web Audio API Synthesized Ambient Atmosphere (Zero external dependencies)
  const toggleAmbientAudio = () => {
    if (!audioActive) {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        // Sub-bass drone (55Hz / A1)
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(55, ctx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(140, ctx.currentTime);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 2);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        oscRef.current = osc;
        gainRef.current = gain;
        setAudioActive(true);
      } catch (e) {
        console.warn('Audio context unavailable:', e);
      }
    } else {
      if (gainRef.current && audioCtxRef.current) {
        gainRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.8);
        setTimeout(() => {
          if (oscRef.current) oscRef.current.stop();
          if (audioCtxRef.current) audioCtxRef.current.close();
          setAudioActive(false);
        }, 800);
      } else {
        setAudioActive(false);
      }
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[rgba(6,3,12,0.85)] backdrop-blur-md border-b border-[rgba(167,139,250,0.15)] shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent'
      }`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(7, 4, 14, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(167, 139, 250, 0.16)' : '1px solid transparent',
        padding: scrolled ? '0.75rem 4vw' : '1.25rem 4vw',
      }}
    >
      {/* Accessible skip link for keyboard users */}
      <a href="#main-content" className="skip-link">Skip to main story</a>

      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Safe Streets Logo */}
        <a
          href="#"
          aria-label="Safe Streets Home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            color: '#ffffff',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #8B5CF6 0%, #4C1D95 100%)',
              border: '1px solid rgba(196, 181, 253, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 16px rgba(139, 92, 246, 0.4)',
            }}
          >
            <Shield size={19} color="#ffffff" strokeWidth={2.4} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.15rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1,
              }}
            >
              SAFE<span style={{ color: 'var(--violet-bright)' }}>STREETS</span>
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginTop: '3px',
              }}
            >
              Intelligent Wearable System
            </span>
          </div>
        </a>

        {/* Live Hardware Telemetry Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
          className="hidden-mobile"
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              background: 'rgba(13, 8, 24, 0.75)',
              border: '1px solid rgba(167, 139, 250, 0.2)',
              borderRadius: '9999px',
              padding: '0.35rem 0.85rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: '#c4b5fd',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span className="status-dot" />
            <span>ESP32 ARMED</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>|</span>
            <Radio size={12} color="#10B981" />
            <span style={{ color: '#10B981', fontWeight: 600 }}>GPS LOCKED</span>
          </div>
        </div>

        {/* Action Controls & Sound Toggle */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          {/* Ambient Sound Mode */}
          <button
            onClick={toggleAmbientAudio}
            title={audioActive ? 'Mute Atmospheric Audio' : 'Enable Atmospheric Audio'}
            aria-label={audioActive ? 'Mute Atmospheric Audio' : 'Enable Atmospheric Audio'}
            style={{
              background: audioActive ? 'rgba(139, 92, 246, 0.25)' : 'rgba(255, 255, 255, 0.05)',
              border: audioActive ? '1px solid #8b5cf6' : '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: audioActive ? '#c4b5fd' : '#94a3b8',
              transition: 'all 0.2s ease',
            }}
          >
            {audioActive ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* Technology Jump CTA */}
          <button
            onClick={() => scrollToSection('tech-specs')}
            className="btn-secondary"
            style={{
              padding: '0.55rem 1.1rem',
              fontSize: '0.85rem',
            }}
          >
            <Cpu size={14} style={{ marginRight: '4px' }} />
            <span>Tech Specs</span>
          </button>

          {/* Pre-Order CTA */}
          <button
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight * 1.5,
                behavior: 'smooth',
              });
            }}
            className="btn-primary"
            style={{
              padding: '0.55rem 1.25rem',
              fontSize: '0.85rem',
            }}
          >
            <span>Explore Wearable</span>
          </button>
        </div>
      </div>
    </header>
  );
}
