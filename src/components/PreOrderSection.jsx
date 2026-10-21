import React, { useState } from 'react';
import { Shield, CheckCircle2, Lock, HeartHandshake, ArrowRight } from 'lucide-react';

export default function PreOrderSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubmitted(true);
    }
  };

  return (
    <section id="pre-order" className="preorder-section">
      <div className="preorder-inner-box">
        
        {/* Section Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            background: 'rgba(16, 185, 129, 0.12)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '9999px',
            padding: '0.35rem 0.95rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: '#34D399',
            marginBottom: '1.5rem',
          }}
        >
          <Shield size={14} />
          <span>EARLY ADOPTER INITIATIVE</span>
        </div>

        <h2
          style={{
            fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            marginBottom: '1.25rem',
          }}
        >
          BE PART OF A SAFER FUTURE.
        </h2>

        <p
          style={{
            color: '#cbd5e1',
            fontSize: '1.1rem',
            lineHeight: 1.6,
            maxWidth: '620px',
            margin: '0 auto 2.5rem auto',
          }}
        >
          Register for priority access to the Safe Streets wearable release, developer hardware kits, and community safe haven network updates.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="preorder-form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              required
              className="preorder-input"
              aria-label="Email for priority access"
            />
            <button type="submit" className="btn-primary">
              <span>Reserve Priority Spot</span>
              <ArrowRight size={16} />
            </button>
          </form>
        ) : (
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              borderRadius: '14px',
              padding: '1rem 1.8rem',
              color: '#A7F3D0',
              fontSize: '0.95rem',
            }}
          >
            <CheckCircle2 size={20} color="#10B981" />
            <span>Thank you! Your priority spot has been reserved in the demonstration queue.</span>
          </div>
        )}

        {/* Trust Badges */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2.5rem',
            marginTop: '3.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            flexWrap: 'wrap',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: '#94a3b8',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Lock size={14} className="text-emerald-400" />
            <span>Zero-Knowledge Data Privacy</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <HeartHandshake size={14} className="text-violet-400" />
            <span>24/7 Verified Safe Haven Alliance</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Shield size={14} className="text-cyan-400" />
            <span>Global Glitch Innovation Award</span>
          </div>
        </div>

      </div>
    </section>
  );
}
