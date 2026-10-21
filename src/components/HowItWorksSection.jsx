import React from 'react';
import { 
  Navigation, 
  ShieldCheck, 
  Radio, 
  AlertOctagon, 
  Sparkles
} from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      icon: <Navigation size={22} />,
      title: "Select Safe vs. Fast Corridor",
      body: "Input your departure and destination. Safe Streets Predict evaluates urban street lighting, community safety data, and verified safe havens to generate an illuminated route corridor with dynamic safety scoring."
    },
    {
      num: "02",
      icon: <Radio size={22} />,
      title: "Eyes-Up Haptic Navigation",
      body: "Keep your phone safely put away. The wearable's high-torque vibration motor provides directional haptic pulses whenever you diverge from the recommended path, gently guiding you back on track."
    },
    {
      num: "03",
      icon: <ShieldCheck size={22} />,
      title: "Biomechanical Dual-Distress Forensics",
      body: "Our proprietary 15-second Evidence Window pairs FSR grip pressure (>1900 ADC) with 6-axis MPU kinematic struggle (>68 m/s²), or triggers immediately when the tactile side button is held."
    },
    {
      num: "04",
      icon: <AlertOctagon size={22} />,
      title: "Autonomous Safe Haven Guidance",
      body: "Following a 45-second discreet cancellation grace window, encrypted satellite coordinates are shared with your trusted emergency circle while the wearable directs you toward the nearest 24/7 safe zone."
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
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
            <Sparkles size={14} />
            <span>HOW SAFE STREETS WORKS</span>
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
            SEAMLESS SAFETY FROM START TO DESTINATION.
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Engineered to anticipate risk before it happens and respond autonomously if danger occurs.
          </p>
        </div>

        {/* 4 Step Workflow Grid */}
        <div className="workflow-steps-grid">
          {steps.map((st, idx) => (
            <div key={idx} className="workflow-step-card">
              <span className="step-card-num">{st.num} // STAGE</span>
              <div className="step-card-icon-wrap">
                {st.icon}
              </div>
              <h3 className="step-card-title">{st.title}</h3>
              <p className="step-card-body">{st.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
