import React from 'react';
import { Shield, Lock, Heart } from 'lucide-react';

const CURRENT_YEAR = 2026;

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-deep)',
        borderTop: '1px solid rgba(167, 139, 250, 0.15)',
        padding: '5rem 6vw 4rem 6vw',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem',
        }}
      >
        {/* Brand & Mission */}
        <div style={{ maxWidth: '380px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #8B5CF6 0%, #4C1D95 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Shield size={17} color="#ffffff" strokeWidth={2.4} />
            </div>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800 }}>
              SAFE<span style={{ color: 'var(--violet-bright)' }}>STREETS</span>
            </span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            Empowering every woman to move freely and fearlessly. Combining forensic IoT hardware with real-time predictive route safety intelligence.
          </p>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              padding: '0.3rem 0.8rem',
              borderRadius: '9999px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--emerald-safe)',
            }}
          >
            <Lock size={12} />
            <span>ZERO-KNOWLEDGE LOCATION ENCRYPTION</span>
          </div>
        </div>

        {/* Cinematic Journey Map */}
        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.25rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            Experience Roadmap
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            <li style={{ color: 'var(--violet-bright)', fontWeight: 600 }}>01 // Cinematic Hero Scene (Active)</li>
            <li style={{ color: 'var(--violet-bright)', fontWeight: 600 }}>02 // Camera Push-In &amp; Product Reveal (Active)</li>
            <li style={{ opacity: 0.5 }}>03 // Safe-Route Map Transformation (Phase 3)</li>
            <li style={{ opacity: 0.5 }}>04 // Intelligent Dual-Sensor SOS Activation (Phase 4)</li>
            <li style={{ opacity: 0.5 }}>05 // Safe Haven Navigation &amp; Arrival (Phase 5)</li>
          </ul>
        </div>

        {/* Hardware Prototype Spec */}
        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.25rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            Hardware Suite
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            <li>ESP32 Dual-Core IoT Node</li>
            <li>Adafruit MPU-6050 Accelerometer/Gyro</li>
            <li>Piezoresistive FSR Grip Sensor</li>
            <li>TinyGPS++ Active UART Telemetry</li>
            <li>Transistorized Haptic Motor &amp; Siren</li>
          </ul>
        </div>

        {/* Community & Safety */}
        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.25rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            Safe Havens Network
          </h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1rem' }}>
            Connected with local emergency dispatch, accredited 24/7 medical facilities, and verified community safe zones.
          </p>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--violet-bright)' }}>
            GLOBAL GLITCH INNOVATION INITIATIVE
          </div>
        </div>

      </div>

      {/* Sub-footer */}
      <div
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          fontSize: '0.82rem',
          color: 'var(--text-muted)',
        }}
      >
        <div>
          &copy; {CURRENT_YEAR} Safe Streets Technologies. All rights reserved.
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>Designed with care for women's safety everywhere</span>
          <Heart size={13} color="#EF4444" fill="#EF4444" />
        </div>
      </div>
    </footer>
  );
}
