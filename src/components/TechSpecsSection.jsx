import React from 'react';
import { 
  Cpu, 
  Activity, 
  Compass, 
  Radio, 
  Volume2, 
  Layers, 
  CheckCircle2,
  Clock,
  Zap
} from 'lucide-react';

export default function TechSpecsSection() {
  const hardwareFeatures = [
    {
      icon: <Cpu className="text-violet-400" size={24} />,
      title: "ESP32 Core Microcontroller",
      subtitle: "Low-Power Dual-Core Processing",
      description: "Dedicated real-time IoT architecture running customized FreeRTOS firmware with encrypted TLS telemetry and fail-safe hardware watchdog.",
      badge: "Firmware v2.4",
      highlight: "240 MHz Clock"
    },
    {
      icon: <Activity className="text-violet-400" size={24} />,
      title: "MPU-6050 6-Axis Motion Suite",
      subtitle: "Gyroscopic & Acceleration Forensics",
      description: "Continuous 3-axis accelerometer and 3-axis gyro tracking. Triggers when kinematic acceleration exceeds the 68.0 m/s² violent disturbance threshold.",
      badge: "Kinematic Tracking",
      highlight: "68.0 Threshold"
    },
    {
      icon: <Zap className="text-violet-400" size={24} />,
      title: "FSR Force-Sensitive Resistor",
      subtitle: "Tactile Wrist Grip Detection",
      description: "Embedded piezoresistive sensor calibrated to 1900 ADC threshold. Instantly differentiates accidental touch from forceful grip or abduction struggle.",
      badge: "Analog Pin 34",
      highlight: "1900 Level Grip"
    },
    {
      icon: <Compass className="text-violet-400" size={24} />,
      title: "TinyGPS++ Satellite Engine",
      subtitle: "Sub-Meter Live Telemetry",
      description: "Hardware UART serial GPS (RX 16 / TX 17) refreshing coordinates continuously with an offline FIFO queue to protect against cellular dead-zones.",
      badge: "High Precision",
      highlight: "UART RX16 / TX17"
    },
    {
      icon: <Radio className="text-violet-400" size={24} />,
      title: "Haptic Deviation Engine",
      subtitle: "GPIO 25 Transistor Driven",
      description: "High-torque vibration motor provides directional tactical pulses when drifting from designated Safe Routes, keeping navigation eyes-up and hands-free.",
      badge: "Silent Alert",
      highlight: "1000Ω Transistor Base"
    },
    {
      icon: <Volume2 className="text-violet-400" size={24} />,
      title: "Acoustic Deterrence Siren",
      subtitle: "High-Decibel Audible Alert",
      description: "Buzzer on GPIO 26 triggers upon confirmed distress, emitting a distinct pulsating alarm frequency to disorient threats and attract bystander attention.",
      badge: "Pin 26 Alarm",
      highlight: "105 dB Siren"
    }
  ];

  return (
    <section id="tech-specs" className="tech-overview-section">
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(167, 139, 250, 0.25)',
              borderRadius: '9999px',
              padding: '0.4rem 1.1rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--violet-bright)',
              marginBottom: '1.25rem',
            }}
          >
            <Layers size={14} />
            <span>AUTHENTIC HARDWARE ARCHITECTURE</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              lineHeight: 1.15,
              fontWeight: 800,
              marginBottom: '1.25rem',
              letterSpacing: '-0.03em',
            }}
          >
            ENGINEERED FOR THE UNEXPECTED.
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Safe Streets bridges tactile consumer wearability with forensic hardware reliability. 
            Every sensor in the ESP32 prototype is correlated to eliminate false positives while guaranteeing emergency intervention.
          </p>
        </div>

        {/* Dual-Sensor Correlation Feature Spotlight */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(21, 15, 38, 0.8) 0%, rgba(13, 8, 24, 0.95) 100%)',
            border: '1px solid rgba(167, 139, 250, 0.25)',
            borderRadius: '24px',
            padding: '2.8rem 3.5vw',
            marginBottom: '4rem',
            boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--emerald-safe)',
                background: 'rgba(16, 185, 129, 0.1)',
                padding: '0.3rem 0.8rem',
                borderRadius: '6px',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                marginBottom: '1rem',
              }}
            >
              <Clock size={13} />
              <span>15-SECOND EVIDENCE WINDOW</span>
            </div>
            <h3 style={{ fontSize: '1.9rem', marginBottom: '1rem', lineHeight: 1.25 }}>
              Intelligent Dual-Distress Correlation
            </h3>
            <p style={{ color: '#94a3b8', lineHeight: 1.65, fontSize: '0.98rem', marginBottom: '1.5rem' }}>
              Unlike simple panic buttons that can be accidentally bumped, Safe Streets features a continuous 15-second algorithmic correlation window. 
              Distress is confirmed when sudden physical resistance on the <strong>FSR sensor (&gt;1900)</strong> aligns with sudden acceleration peaks on the <strong>MPU-6050 (&gt;68.0 m/s²)</strong>.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#e2e8f0', fontSize: '0.9rem' }}>
                <CheckCircle2 size={16} color="#10B981" />
                <span>Zero false triggers during running, dancing, or routine exercise</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#e2e8f0', fontSize: '0.9rem' }}>
                <CheckCircle2 size={16} color="#10B981" />
                <span>45-second discreet cancellation grace window on mobile and wrist</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#e2e8f0', fontSize: '0.9rem' }}>
                <CheckCircle2 size={16} color="#10B981" />
                <span>Instant dispatch to /api/hardware/sos with live coordinates and reason code</span>
              </div>
            </div>
          </div>

          {/* Forensic Telemetry Code Block Mockup */}
          <div
            style={{
              background: '#07040d',
              border: '1px solid rgba(167, 139, 250, 0.2)',
              borderRadius: '16px',
              padding: '1.8rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              lineHeight: 1.6,
              color: '#c4b5fd',
              boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.8)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '0.75rem' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
              </div>
              <span style={{ color: '#64748b', fontSize: '0.72rem' }}>ESP32_TELEMETRY.json</span>
            </div>
            <pre style={{ margin: 0, overflowX: 'auto' }}>
{`{
  "deviceId": "ESP32-SAFE-STREETS",
  "event": "SOS_TRIGGERED",
  "reason": "FSR_GRIP + MPU_MOTION_SPIKE",
  "evidenceWindowMs": 15000,
  "fsrValue": 2180,
  "mpuAcceleration": 74.32,
  "gpsAvailable": true,
  "latitude": 12.971598,
  "longitude": 77.594562,
  "countdownActive": true,
  "graceSecondsRemaining": 45
}`}
            </pre>
          </div>
        </div>

        {/* 6 Grid Hardware Features */}
        <div className="tech-grid">
          {hardwareFeatures.map((feat, idx) => (
            <div key={idx} className="tech-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(139, 92, 246, 0.12)',
                    border: '1px solid rgba(167, 139, 250, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {feat.icon}
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--violet-bright)',
                    background: 'rgba(139, 92, 246, 0.15)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(167, 139, 250, 0.25)',
                  }}
                >
                  {feat.badge}
                </span>
              </div>

              <h4 style={{ fontSize: '1.18rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                {feat.title}
              </h4>
              <h5 style={{ fontSize: '0.82rem', color: 'var(--violet-bright)', fontWeight: 500, marginBottom: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {feat.subtitle}
              </h5>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.55 }}>
                {feat.description}
              </p>

              <div
                style={{
                  marginTop: '1.25rem',
                  paddingTop: '0.9rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--emerald-safe)',
                }}
              >
                <span>SPEC:</span>
                <span style={{ fontWeight: 600 }}>{feat.highlight}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
