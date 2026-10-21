import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Radio, 
  BellRing, 
  Activity, 
  ChevronDown, 
  ArrowRight,
  Compass,
  Navigation,
  AlertOctagon,
  Sparkles,
  ShieldCheck,
  Check
} from 'lucide-react';
import SafeRouteMap from './SafeRouteMap';
import SosInterface from './SosInterface';

gsap.registerPlugin(ScrollTrigger);

export default function CinematicStage() {
  const containerRef = useRef(null);
  const viewportRef = useRef(null);
  
  // Scene 1 refs (Hero Scene)
  const heroLayerRef = useRef(null);
  const heroWrapperRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroVignetteRef = useRef(null);
  const heroRimLightRef = useRef(null);
  const scrollPromptRef = useRef(null);

  // Scene 2 refs (Product Macro Reveal)
  const productLayerRef = useRef(null);
  const productImgContainerRef = useRef(null);
  const productImgRef = useRef(null);
  const productGlowRef = useRef(null);
  const radarRingRef = useRef(null);
  const lightSweepRef = useRef(null);
  const watchMiniTraceRef = useRef(null);

  // Scene 4 refs (Red Emergency States)
  const watchSosGlowRef = useRef(null);
  const watchSosPulseRingRef = useRef(null);
  const watchEmergencyFaceRef = useRef(null);

  // Annotation card refs
  const annoGpsRef = useRef(null);
  const annoSosRef = useRef(null);
  const annoSensorsRef = useRef(null);
  const annoHapticsRef = useRef(null);

  // Scene 3 refs (Safe Route Map)
  const mapLayerRef = useRef(null);

  // Scene 4 refs (SOS Interface)
  const sosLayerRef = useRef(null);

  // Scene 5 refs (Final Safe Arrival Resolution)
  const safeArrivalLayerRef = useRef(null);
  const safeArrivalWrapperRef = useRef(null);
  const safeArrivalContentRef = useRef(null);

  // Interactive Stage tracking (0: Hero, 1: Macro Reveal, 2: Safe Route Map, 3: SOS, 4: Safe Arrival)
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;
    const scrollDistance = isMobile ? '+=7500' : '+=12500';

    ScrollTrigger.config({ ignoreMobileResize: true });

    const ctx = gsap.context(() => {
      // Create master scrub timeline pinned to container
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: viewportRef.current,
          start: 'top top',
          end: scrollDistance, // Calibrated distance for mobile touch vs desktop wheel
          scrub: prefersReducedMotion ? false : 1.2,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            if (p < 0.18) {
              setActiveStage(0); // Hero
            } else if (p < 0.38) {
              setActiveStage(1); // Wearable Macro
            } else if (p < 0.58) {
              setActiveStage(2); // Safe Route Map
            } else if (p < 0.80) {
              setActiveStage(3); // Intelligent SOS
            } else {
              setActiveStage(4); // Safe Arrival
            }
          },
        },
      });

      if (prefersReducedMotion) {
        // Reduced Motion static fallback: gentle fades without 3D camera zooming
        masterTl
          .to(heroContentRef.current, { opacity: 0, duration: 1 })
          .to(heroLayerRef.current, { opacity: 0, duration: 1 })
          .to(productLayerRef.current, { opacity: 1, duration: 1 }, '-=0.5')
          .to([annoGpsRef.current, annoSosRef.current, annoSensorsRef.current, annoHapticsRef.current], {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 1,
          })
          .to([annoGpsRef.current, annoSosRef.current, annoSensorsRef.current, annoHapticsRef.current], {
            opacity: 0,
            duration: 1,
          })
          .to(mapLayerRef.current, {
            opacity: 1,
            duration: 1,
            onStart: () => {
              if (mapLayerRef.current) mapLayerRef.current.classList.add('interactive');
            }
          })
          .to(mapLayerRef.current, {
            opacity: 0,
            duration: 1,
            onStart: () => {
              if (mapLayerRef.current) mapLayerRef.current.classList.remove('interactive');
            }
          })
          .to(sosLayerRef.current, {
            opacity: 1,
            duration: 1,
            onStart: () => {
              if (sosLayerRef.current) sosLayerRef.current.classList.add('interactive');
            }
          })
          .to(sosLayerRef.current, {
            opacity: 0,
            duration: 1,
            onStart: () => {
              if (sosLayerRef.current) sosLayerRef.current.classList.remove('interactive');
            }
          })
          .to(safeArrivalLayerRef.current, {
            opacity: 1,
            duration: 1,
            onStart: () => {
              if (safeArrivalLayerRef.current) safeArrivalLayerRef.current.classList.add('interactive');
            }
          });
        return;
      }

      // ====================================================================
      // MASTER VIZCOM-STYLE CINEMATIC SCRUB TIMELINE (Complete 5-Act Odyssey)
      // ====================================================================

      masterTl
        // ------------------------------------------------------------------
        // STAGE 1: Hero Scene subtle drift & text fadeout (0.00 -> 0.12)
        // ------------------------------------------------------------------
        .addLabel('heroStart', 0)
        .to(heroContentRef.current, {
          x: -120,
          opacity: 0,
          ease: 'power2.in',
          duration: 0.12,
        }, 'heroStart')
        .to(scrollPromptRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.08,
        }, 'heroStart')

        // ------------------------------------------------------------------
        // STAGE 2A: Camera Push-In toward the character's wrist (0.05 -> 0.20)
        // Natural push-in toward wrist (57.5% X, 69% Y) without pixelating the wide shot
        // ------------------------------------------------------------------
        .addLabel('wristZoom', 0.05)
        .to(heroWrapperRef.current, {
          scale: 2.25,
          xPercent: -4,
          yPercent: -7,
          ease: 'power2.inOut',
          duration: 0.16,
        }, 'wristZoom')
        .to(heroVignetteRef.current, {
          opacity: 0.85,
          ease: 'power2.in',
          duration: 0.14,
        }, 'wristZoom+=0.02')
        .to(heroRimLightRef.current, {
          opacity: 1,
          scale: 1.3,
          ease: 'power2.out',
          duration: 0.14,
        }, 'wristZoom+=0.03')

        // ------------------------------------------------------------------
        // STAGE 2B: Seamless Cross-Fade into Crisp 2K Macro Product Reveal (0.11 -> 0.24)
        // Crossfades into the ultra-detailed product close-up matching wrist trajectory
        // ------------------------------------------------------------------
        .addLabel('macroReveal', 0.11)
        .to(heroLayerRef.current, {
          opacity: 0,
          duration: 0.10,
          ease: 'power1.inOut',
        }, 'macroReveal')
        .fromTo(productLayerRef.current, 
          { opacity: 0, scale: 0.76 },
          { 
            opacity: 1, 
            scale: 1, 
            duration: 0.13, 
            ease: 'power2.out',
            onStart: () => {
              if (productLayerRef.current) productLayerRef.current.classList.add('interactive');
            },
            onReverseComplete: () => {
              if (productLayerRef.current) productLayerRef.current.classList.remove('interactive');
            }
          }, 
          'macroReveal+=0.01'
        )
        .fromTo(productGlowRef.current,
          { scale: 0.7, opacity: 0 },
          { scale: 1.15, opacity: 0.8, duration: 0.13, ease: 'power2.out' },
          'macroReveal+=0.02'
        )
        .fromTo(radarRingRef.current,
          { scale: 0.6, opacity: 0 },
          { scale: 1, opacity: 0.9, duration: 0.13, ease: 'back.out(1.4)' },
          'macroReveal+=0.03'
        )
        .fromTo(lightSweepRef.current,
          { xPercent: -150, opacity: 0.8 },
          { xPercent: 180, opacity: 0, duration: 0.13, ease: 'power2.inOut' },
          'macroReveal+=0.04'
        )

        // ------------------------------------------------------------------
        // STAGE 2C: Hardware Feature Annotations Sequenced (0.26 -> 0.36)
        // ------------------------------------------------------------------
        .addLabel('annotations', 0.26)
        .to(annoGpsRef.current, { opacity: 1, y: 0, duration: 0.06, ease: 'back.out(1.4)' }, 'annotations')
        .to(annoSosRef.current, { opacity: 1, y: 0, duration: 0.06, ease: 'back.out(1.4)' }, 'annotations+=0.02')
        .to(annoSensorsRef.current, { opacity: 1, y: 0, duration: 0.06, ease: 'back.out(1.4)' }, 'annotations+=0.04')
        .to(annoHapticsRef.current, { opacity: 1, y: 0, duration: 0.06, ease: 'back.out(1.4)' }, 'annotations+=0.06')

        // ------------------------------------------------------------------
        // STAGE 3A: Watch Anchor Focus & Display Tracing Path (0.34 -> 0.42)
        // ------------------------------------------------------------------
        .addLabel('watchDisplayTrace', 0.34)
        .to([annoGpsRef.current, annoSosRef.current, annoSensorsRef.current, annoHapticsRef.current], {
          opacity: 0,
          y: -25,
          stagger: 0.02,
          duration: 0.06,
          ease: 'power2.in',
        }, 'watchDisplayTrace')
        .fromTo(watchMiniTraceRef.current,
          { opacity: 0, scale: 0.7 },
          { opacity: 1, scale: 1.15, duration: 0.08, ease: 'power2.out' },
          'watchDisplayTrace+=0.02'
        )
        .to(radarRingRef.current, {
          scale: 1.35,
          borderColor: 'rgba(52, 211, 153, 0.7)',
          duration: 0.08,
        }, 'watchDisplayTrace+=0.02')

        // ------------------------------------------------------------------
        // STAGE 3B: Display Expansion into Navigation Map (0.40 -> 0.54)
        // ------------------------------------------------------------------
        .addLabel('mapExpansion', 0.40)
        .to(watchMiniTraceRef.current, {
          opacity: 0,
          scale: 1.5,
          duration: 0.06,
        }, 'mapExpansion')
        .to(productImgContainerRef.current, {
          scale: 0.88,
          opacity: 0.3,
          duration: 0.12,
          ease: 'power2.out',
        }, 'mapExpansion')
        .fromTo(mapLayerRef.current,
          { opacity: 0, scale: 0.28, y: 30, filter: 'brightness(1.8) contrast(1.3)' },
          { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            filter: 'brightness(1) contrast(1)',
            duration: 0.14, 
            ease: 'power3.out',
            onStart: () => {
              if (mapLayerRef.current) mapLayerRef.current.classList.add('interactive');
            },
            onReverseComplete: () => {
              if (mapLayerRef.current) mapLayerRef.current.classList.remove('interactive');
            }
          },
          'mapExpansion+=0.02'
        )
        .fromTo('.map-path-safe',
          { strokeDashoffset: 1200, strokeDasharray: 1200 },
          { strokeDashoffset: 0, duration: 0.12, ease: 'power2.out' },
          'mapExpansion+=0.06'
        )
        .fromTo('.map-path-fast',
          { strokeDashoffset: 1000, strokeDasharray: 1000 },
          { strokeDashoffset: 0, duration: 0.12, ease: 'power2.out' },
          'mapExpansion+=0.08'
        )

        // ------------------------------------------------------------------
        // STAGE 4A: Map Collapses toward Watch Display (0.54 -> 0.62)
        // Navigation route fades; camera refocuses sharply on the watch
        // ------------------------------------------------------------------
        .addLabel('mapCollapse', 0.54)
        .to(['.map-path-safe', '.map-path-fast'], {
          opacity: 0,
          duration: 0.06,
        }, 'mapCollapse')
        .to(mapLayerRef.current, {
          opacity: 0,
          scale: 0.24,
          y: 35,
          duration: 0.1,
          ease: 'power2.in',
          onStart: () => {
            if (mapLayerRef.current) mapLayerRef.current.classList.remove('interactive');
          },
          onReverseComplete: () => {
            if (mapLayerRef.current) mapLayerRef.current.classList.add('interactive');
          }
        }, 'mapCollapse+=0.02')
        .to(productImgContainerRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.12,
          ease: 'power2.out',
        }, 'mapCollapse+=0.03')

        // ------------------------------------------------------------------
        // STAGE 4B: Watch Display Shifts to Crimson Emergency State (0.60 -> 0.70)
        // Restrained red ring, OLED emergency interface, and subtle outward pulse
        // ------------------------------------------------------------------
        .addLabel('sosTrigger', 0.60)
        .to(productGlowRef.current, {
          opacity: 0,
          duration: 0.08,
        }, 'sosTrigger')
        .fromTo(watchSosGlowRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 0.95, scale: 1.15, duration: 0.12, ease: 'power2.out' },
          'sosTrigger+=0.02'
        )
        .fromTo(watchEmergencyFaceRef.current,
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 0.1, ease: 'back.out(1.2)' },
          'sosTrigger+=0.03'
        )
        .fromTo(watchSosPulseRingRef.current,
          { opacity: 0.9, scale: 0.96 },
          { opacity: 0, scale: 1.45, duration: 0.14, ease: 'power1.out' },
          'sosTrigger+=0.04'
        )

        // ------------------------------------------------------------------
        // STAGE 4C: Floating Emergency Alert Card & Timeline Slide-In (0.68 -> 0.78)
        // Keep watch crisp and visible without blurring during alert card reveal
        // ------------------------------------------------------------------
        .addLabel('sosCardReveal', 0.68)
        .to(productImgContainerRef.current, {
          scale: 0.92,
          opacity: 0.7,
          filter: 'brightness(0.85)',
          duration: 0.12,
        }, 'sosCardReveal')
        .fromTo(sosLayerRef.current,
          { opacity: 0, scale: 0.88, y: 35 },
          { 
            opacity: 1, 
            scale: 1, 
            y: 0, 
            duration: 0.14, 
            ease: 'power3.out',
            onStart: () => {
              if (sosLayerRef.current) sosLayerRef.current.classList.add('interactive');
            },
            onReverseComplete: () => {
              if (sosLayerRef.current) sosLayerRef.current.classList.remove('interactive');
            }
          },
          'sosCardReveal+=0.02'
        )

        // ------------------------------------------------------------------
        // STAGE 5A: Emergency Card Fades & Red Calms (0.78 -> 0.86)
        // ------------------------------------------------------------------
        .addLabel('safeArrivalTransition', 0.78)
        .to(sosLayerRef.current, {
          opacity: 0,
          scale: 0.92,
          y: -30,
          duration: 0.1,
          ease: 'power2.in',
          onStart: () => {
            if (sosLayerRef.current) sosLayerRef.current.classList.remove('interactive');
          },
          onReverseComplete: () => {
            if (sosLayerRef.current) sosLayerRef.current.classList.add('interactive');
          }
        }, 'safeArrivalTransition')
        .to(watchSosGlowRef.current, {
          opacity: 0,
          duration: 0.1,
        }, 'safeArrivalTransition')
        .to(watchEmergencyFaceRef.current, {
          opacity: 0,
          duration: 0.1,
        }, 'safeArrivalTransition')
        .to(productLayerRef.current, {
          opacity: 0,
          duration: 0.1,
        }, 'safeArrivalTransition+=0.02')

        // ------------------------------------------------------------------
        // STAGE 5B: Full Safe Arrival Resolution Scene (0.84 -> 1.00)
        // Camera pulls back to reveal the same woman walking securely into the warm plaza
        // ------------------------------------------------------------------
        .addLabel('safeArrivalScene', 0.84)
        .fromTo(safeArrivalLayerRef.current,
          { opacity: 0 },
          { 
            opacity: 1, 
            duration: 0.14, 
            ease: 'power2.out',
            onStart: () => {
              if (safeArrivalLayerRef.current) safeArrivalLayerRef.current.classList.add('interactive');
            },
            onReverseComplete: () => {
              if (safeArrivalLayerRef.current) safeArrivalLayerRef.current.classList.remove('interactive');
            }
          },
          'safeArrivalScene'
        )
        .fromTo(safeArrivalWrapperRef.current,
          { scale: 1.08, xPercent: -2 },
          { scale: 1, xPercent: 0, duration: 0.16, ease: 'power2.out' },
          'safeArrivalScene'
        )
        .fromTo(safeArrivalContentRef.current,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.14, ease: 'power3.out' },
          'safeArrivalScene+=0.04'
        );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Scrub dot click navigation across all 5 stages (responsive calculation)
  const jumpToStage = (stageIdx) => {
    if (!containerRef.current) return;
    const isMobile = window.innerWidth < 768;
    const totalDistance = isMobile ? 7500 : 12500;
    const containerTop = containerRef.current.offsetTop;
    
    // Proportional progress points for the 5 narrative acts
    const progressMap = [0, 0.28, 0.48, 0.70, 0.92];
    const targetProgress = progressMap[stageIdx] ?? 0;
    const scrollTarget = containerTop + (targetProgress * totalDistance);

    window.scrollTo({
      top: scrollTarget,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="cinematic-master">
      <div ref={viewportRef} className="cinematic-viewport">
        
        {/* ================================================================= */}
        {/* LAYER 1: HERO SCENE (Woman Walking in Urban Dusk)                  */}
        {/* ================================================================= */}
        <div ref={heroLayerRef} className="hero-layer">
          <div ref={heroWrapperRef} className="hero-image-wrapper">
            <img
              src="/assets/hero-woman-urban.jpg"
              alt="Confident woman walking securely through nighttime city wearing Safe Streets smartband"
              className="hero-bg-img"
              loading="eager"
            />
          </div>

          {/* Atmospheric Lighting Overlays */}
          <div className="hero-gradient-overlay" />
          <div ref={heroVignetteRef} className="hero-vignette-darken" />
          
          {/* Violet Rim Light Bloom focused on the wrist */}
          <div
            ref={heroRimLightRef}
            style={{
              position: 'absolute',
              top: '68%',
              left: '57%',
              transform: 'translate(-50%, -50%)',
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(167, 139, 250, 0.45) 0%, rgba(139, 92, 246, 0.15) 50%, transparent 75%)',
              filter: 'blur(30px)',
              pointerEvents: 'none',
              opacity: 0,
              willChange: 'opacity, transform',
            }}
          />

          {/* Left-Aligned Hero Content */}
          <div ref={heroContentRef} className="hero-content">
            <div className="hero-text-box">
              {/* Telemetry Status Pill */}
              <div className="hero-status-pill">
                <span className="status-dot" />
                <span>INTELLIGENT WEARABLE SAFETY • ESP32 SUITE</span>
              </div>

              {/* Main Headline */}
              <h1 className="hero-title">
                A SAFER JOURNEY.<br />
                <span className="hero-title-accent">FOR EVERY HER.</span>
              </h1>

              {/* Supporting Text */}
              <p className="hero-description">
                Intelligent wearable safety. Smarter routes. Help when it matters.
                Engineered with real-time motion forensics, offline GPS caching, and dual-trigger distress response.
              </p>

              {/* CTA Group */}
              <div className="hero-cta-group">
                <button
                  onClick={() => jumpToStage(1)}
                  className="btn-primary"
                  id="hero-discover-btn"
                >
                  <span>Discover the Technology</span>
                  <ArrowRight size={17} />
                </button>
                <button
                  onClick={() => jumpToStage(2)}
                  className="btn-secondary"
                  id="hero-map-btn"
                >
                  <Navigation size={16} />
                  <span>Interactive Safe Routes</span>
                </button>
                <button
                  onClick={() => jumpToStage(3)}
                  className="btn-secondary"
                  style={{ borderColor: 'rgba(239, 68, 68, 0.35)', color: '#FCA5A5' }}
                  id="hero-sos-btn"
                >
                  <AlertOctagon size={16} />
                  <span>Intelligent SOS Demo</span>
                </button>
              </div>
            </div>
          </div>

          {/* Subtle Bottom Scroll Indicator */}
          <div ref={scrollPromptRef} className="hero-scroll-indicator">
            <div className="scroll-track-line">
              <div className="scroll-track-pulse" />
            </div>
            <span>Scroll to explore wrist wearable</span>
            <ChevronDown size={14} className="text-violet-400" />
          </div>
        </div>

        {/* ================================================================= */}
        {/* LAYER 2: PRODUCT REVEAL (8K Studio Macro Reveal)                  */}
        {/* ================================================================= */}
        <div ref={productLayerRef} className="product-reveal-layer">
          <div className="product-stage-container">
            
            {/* Center Product Canvas & Lighting */}
            <div ref={productImgContainerRef} className="product-image-container">
              
              {/* Atmospheric Violet Glow Orb (Stage 2 & 3) */}
              <div ref={productGlowRef} className="product-glow-orb" />

              {/* Macro Watch Photograph with High-Res Retina fidelity */}
              <img
                ref={productImgRef}
                src="/assets/wearable-macro-2k.jpg"
                srcSet="/assets/wearable-macro.jpg 1376w, /assets/wearable-macro-2k.jpg 2752w"
                sizes="(max-width: 1080px) 90vw, 980px"
                alt="Safe Streets Intelligent Wearable Device Macro Showcase"
                className="product-macro-img"
                loading="eager"
              />

              {/* Dedicated Watch-Face Surface Anchor Container:
                  Precisely centered on actual visible watch display (48.0% X, 44.9% Y) with -6deg tilt.
                  All indicators scale and rotate in lockstep with the watch chassis. */}
              <div className="watch-face-surface-anchor">
                
                {/* Atmospheric Crimson Glow (centered directly on the watch face) */}
                <div ref={watchSosGlowRef} className="watch-sos-glow" />

                {/* Restrained Rotating Status Radar Ring around watch face */}
                <div ref={radarRingRef} className="watch-highlight-ring" />

                {/* Subtle Expanding Crimson Pulse Ring expanding outward from watch chassis */}
                <div ref={watchSosPulseRingRef} className="watch-sos-pulse-ring" />

                {/* Mini Tracing Route Light on OLED Watch Face (Stage 3) */}
                <div ref={watchMiniTraceRef} className="watch-mini-trace">
                  <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
                    <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="2" strokeDasharray="4 3" />
                    <path d="M 28 65 Q 40 35, 68 32" fill="none" stroke="#34D399" strokeWidth="3.5" strokeLinecap="round" filter="drop-shadow(0 0 6px #10B981)" />
                    <circle cx="28" cy="65" r="3.5" fill="#8B5CF6" />
                    <circle cx="68" cy="32" r="4" fill="#10B981" />
                  </svg>
                </div>

                {/* Dedicated OLED Emergency Screen Overlay (Stage 4 SOS) */}
                <div ref={watchEmergencyFaceRef} className="watch-emergency-face">
                  <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
                    {/* Dark OLED glass face background with curved corners */}
                    <rect x="7" y="7" width="86" height="86" rx="27" fill="#080205" stroke="#EF4444" strokeWidth="1.6" strokeOpacity="0.85" />
                    <circle cx="50" cy="50" r="40" fill="rgba(239, 68, 68, 0.16)" stroke="#EF4444" strokeWidth="2" strokeDasharray="5 2.5" />
                    <circle cx="50" cy="50" r="33" fill="none" stroke="#F87171" strokeWidth="1" strokeDasharray="2.5 2" strokeOpacity="0.75" />
                    <path d="M 50 24 L 34 33 V 49 C 34 59 40 67 50 70 C 60 67 66 59 66 49 V 33 Z" fill="rgba(239, 68, 68, 0.45)" stroke="#EF4444" strokeWidth="2.2" strokeLinejoin="round" />
                    <text x="50" y="49" fill="#ffffff" fontSize="10.5" fontFamily="var(--font-heading)" fontWeight="800" textAnchor="middle" letterSpacing="0.04em">SOS</text>
                    <text x="50" y="58" fill="#FCA5A5" fontSize="4.8" fontFamily="var(--font-mono)" fontWeight="700" textAnchor="middle" letterSpacing="0.08em">ACTIVE</text>
                    <circle cx="43" cy="63.5" r="1.4" fill="#EF4444" />
                    <text x="52" y="65" fill="#F87171" fontSize="3.8" fontFamily="var(--font-mono)" textAnchor="middle" letterSpacing="0.05em">GPS LIVE</text>
                  </svg>
                </div>

              </div>

              {/* Light Sweep Reflection Line */}
              <div
                ref={lightSweepRef}
                style={{
                  position: 'absolute',
                  top: '15%',
                  left: '20%',
                  width: '60%',
                  height: '70%',
                  background: 'linear-gradient(105deg, transparent 35%, rgba(255, 255, 255, 0.3) 50%, transparent 65%)',
                  pointerEvents: 'none',
                  opacity: 0,
                  transform: 'skewX(-20deg)',
                }}
              />
            </div>

            {/* Hardware Feature Annotations (Stage 2) */}
            <div className="annotations-overlay">
              
              {/* 1. GPS Connectivity (Top-Right) */}
              <div ref={annoGpsRef} className="annotation-card anno-top-right">
                <div className="annotation-header">
                  <div className="annotation-icon-wrap">
                    <Compass size={17} />
                  </div>
                  <span className="annotation-title">GPS Connectivity</span>
                  <span className="annotation-badge">TinyGPS++</span>
                </div>
                <p className="annotation-body">
                  Dual-frequency active satellite positioning. Tracks coordinates with high precision and buffers offline telemetry when cell signals drop.
                </p>
              </div>

              {/* 2. Intelligent SOS Activation (Mid-Right) */}
              <div ref={annoSosRef} className="annotation-card anno-mid-right">
                <div className="annotation-header">
                  <div className="annotation-icon-wrap" style={{ background: 'rgba(239, 68, 68, 0.15)', borderColor: 'rgba(239, 68, 68, 0.35)', color: '#ef4444' }}>
                    <BellRing size={17} />
                  </div>
                  <span className="annotation-title">Intelligent SOS</span>
                  <span className="annotation-badge" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444', borderColor: 'rgba(239, 68, 68, 0.3)' }}>
                    Tactile + Auto
                  </span>
                </div>
                <p className="annotation-body">
                  Physical instant-hold emergency button paired with automated distress trigger. Initiates a 45-second cancellation grace window before dispatching.
                </p>
              </div>

              {/* 3. Movement & Pressure Sensing (Bottom-Left) */}
              <div ref={annoSensorsRef} className="annotation-card anno-bottom-left">
                <div className="annotation-header">
                  <div className="annotation-icon-wrap">
                    <Activity size={17} />
                  </div>
                  <span className="annotation-title">Pressure &amp; Motion</span>
                  <span className="annotation-badge">MPU + FSR</span>
                </div>
                <p className="annotation-body">
                  Dual-sensor evidence correlation: MPU-6050 6-axis gyro detects violent acceleration spikes while the FSR sensor registers sudden wrist grip force within 15s.
                </p>
              </div>

              {/* 4. Safety Notifications & Haptics (Top-Left) */}
              <div ref={annoHapticsRef} className="annotation-card anno-top-left">
                <div className="annotation-header">
                  <div className="annotation-icon-wrap">
                    <Radio size={17} />
                  </div>
                  <span className="annotation-title">Tactile Notifications</span>
                  <span className="annotation-badge">Haptic Alert</span>
                </div>
                <p className="annotation-body">
                  Directional haptic vibration motor pulses if you deviate from your calculated Safe Route, backed by a 105dB acoustic deterrence siren.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* ================================================================= */}
        {/* LAYER 3: SAFE ROUTE MAP TRANSFORMATION (Phase 3 Nav HUD)          */}
        {/* ================================================================= */}
        <div ref={mapLayerRef} className="map-layer">
          <SafeRouteMap isVisible={activeStage === 2} />
        </div>

        {/* ================================================================= */}
        {/* LAYER 4: INTELLIGENT SOS EMERGENCY INTERFACE (Phase 4 SOS HUD)    */}
        {/* ================================================================= */}
        <div ref={sosLayerRef} className="sos-layer">
          <SosInterface isVisible={activeStage === 3} />
        </div>

        {/* ================================================================= */}
        {/* LAYER 5: CONFIDENT SAFE ARRIVAL RESOLUTION (Phase 5 Grand Finale)  */}
        {/* ================================================================= */}
        <div ref={safeArrivalLayerRef} className="safe-arrival-layer">
          <div ref={safeArrivalWrapperRef} className="safe-arrival-img-wrapper">
            <img
              src="/assets/safe-arrival-woman.jpg"
              alt="Woman arriving safely and confidently at well-lit destination plaza wearing Safe Streets wearable"
              className="safe-arrival-bg-img"
              loading="eager"
            />
          </div>

          {/* Warm Ambient Destination Plaza Overlay */}
          <div className="safe-arrival-overlay" />

          {/* Left-Aligned Safe Arrival Resolution Content */}
          <div ref={safeArrivalContentRef} className="safe-arrival-content">
            <div className="safe-arrival-text-box">
              
              {/* Safe Status Pill */}
              <div className="safe-arrival-pill">
                <span className="safe-dot" />
                <span>JOURNEY COMPLETED SAFELY • SAFE HAVEN REACHED</span>
              </div>

              {/* Final Headline */}
              <h2 className="safe-arrival-title">
                SAFETY SHOULD <br />
                <span className="text-gradient-emerald">MOVE WITH YOU.</span>
              </h2>

              {/* Supporting Text */}
              <p className="safe-arrival-description">
                From smarter routes to intelligent alerts, Safe Streets brings personal safety technology closer to everyday life. 
                Move with total freedom, backed by continuous forensic monitoring and community safe havens.
              </p>

              {/* CTA Group connecting to valid sections */}
              <div className="safe-arrival-cta-group">
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="btn-primary"
                  id="arrival-explore-btn"
                >
                  <Sparkles size={17} />
                  <span>Explore Safe Streets</span>
                </button>
                <button
                  onClick={() => scrollToSection('tech-specs')}
                  className="btn-secondary"
                  id="arrival-tech-btn"
                >
                  <ShieldCheck size={16} />
                  <span>Discover How It Works</span>
                </button>
                <button
                  onClick={() => scrollToSection('pre-order')}
                  className="btn-secondary"
                  style={{ borderColor: 'rgba(16, 185, 129, 0.4)', color: '#A7F3D0' }}
                  id="arrival-preorder-btn"
                >
                  <Check size={16} />
                  <span>Reserve Early Access</span>
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* INTERACTIVE STAGE PROGRESS SCRUBBER (Right Side - 5 Acts)          */}
        {/* ================================================================= */}
        <nav className="stage-progress-nav" aria-label="Cinematic scroll stages">
          <button
            onClick={() => jumpToStage(0)}
            className={`progress-nav-item ${activeStage === 0 ? 'active' : ''}`}
            title="Stage 1: Hero"
            aria-label="Navigate to Stage 1: Hero Journey"
          >
            <span className="nav-item-label">01 // Hero Journey</span>
            <span className="nav-item-dot" />
          </button>
          <button
            onClick={() => jumpToStage(1)}
            className={`progress-nav-item ${activeStage === 1 ? 'active' : ''}`}
            title="Stage 2: Product Reveal"
            aria-label="Navigate to Stage 2: Wearable Architecture"
          >
            <span className="nav-item-label">02 // Wearable Architecture</span>
            <span className="nav-item-dot" />
          </button>
          <button
            onClick={() => jumpToStage(2)}
            className={`progress-nav-item ${activeStage === 2 ? 'active' : ''}`}
            title="Stage 3: Safe-Route Map"
            aria-label="Navigate to Stage 3: Safe-Route Map"
          >
            <span className="nav-item-label">03 // Safe-Route Map</span>
            <span className="nav-item-dot" />
          </button>
          <button
            onClick={() => jumpToStage(3)}
            className={`progress-nav-item ${activeStage === 3 ? 'active' : ''}`}
            title="Stage 4: Intelligent SOS"
            aria-label="Navigate to Stage 4: Intelligent SOS"
          >
            <span className="nav-item-label">04 // Intelligent SOS</span>
            <span className="nav-item-dot" style={activeStage === 3 ? { background: '#EF4444', boxShadow: '0 0 12px #EF4444' } : {}} />
          </button>
          <button
            onClick={() => jumpToStage(4)}
            className={`progress-nav-item ${activeStage === 4 ? 'active' : ''}`}
            title="Stage 5: Confident Safe Arrival"
            aria-label="Navigate to Stage 5: Confident Safe Arrival"
          >
            <span className="nav-item-label">05 // Confident Arrival</span>
            <span className="nav-item-dot" style={activeStage === 4 ? { background: '#10B981', boxShadow: '0 0 12px #10B981' } : {}} />
          </button>
        </nav>

      </div>
    </div>
  );
}
