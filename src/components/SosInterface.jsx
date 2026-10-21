import React, { useState, useEffect } from 'react';
import { 
  AlertOctagon, 
  MapPin, 
  Radio, 
  Users, 
  Clock, 
  Activity, 
  Zap, 
  Hand, 
  CheckCircle2, 
  RotateCcw, 
  Info,
  Volume2
} from 'lucide-react';

export default function SosInterface({ isVisible = true }) {
  // Demonstration interactive state for grace countdown
  const [countdown, setCountdown] = useState(45);
  const [isCancelled, setIsCancelled] = useState(false);


  useEffect(() => {
    let timer;
    if (isVisible && countdown > 0 && !isCancelled) {
      timer = setInterval(() => {
        setCountdown((prev) => (prev > 1 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isVisible, countdown, isCancelled]);

  const handleResetSimulation = () => {
    setCountdown(45);
    setIsCancelled(false);
  };

  const handleCancelSos = () => {
    setIsCancelled(true);
  };

  return (
    <div className={`sos-experience-container ${isVisible ? 'active' : ''}`}>
      
      {/* Header */}
      <div className="sos-header-bar">
        <div className="sos-badge-group">
          <span className="sos-live-pill">
            <span className="sos-alert-dot" />
            <span>INTELLIGENT SOS PROTOCOL</span>
          </span>
          <span className="sos-sim-badge">
            SIMULATED DEMONSTRATION
          </span>
        </div>
        <h2 className="sos-main-heading">
          WHEN IT MATTERS, <span className="text-gradient-crimson">HELP IS CLOSER.</span>
        </h2>
        <p className="sos-subheading">
          Dual-sensor biometric correlation filters routine jostling from authentic distress. 
          If triggered, a 45-second cancellation grace window protects against false alarms before location dispatch.
        </p>
      </div>

      {/* Main SOS Layout: Detection Inputs + Emergency Card */}
      <div className="sos-content-grid">
        
        {/* Left Column: Illustrative Detection Inputs Feeding Safety Workflow */}
        <div className="sos-detection-column">
          <div className="sos-sensor-panel">
            <div className="panel-title-row">
              <span className="panel-section-label">DISTRESS DETECTION INPUTS</span>
              <span className="hardware-spec-tag">ESP32 SENSOR SUITE</span>
            </div>
            
            <p className="sensor-panel-intro">
              The wearable correlates biomechanical inputs before escalating to an emergency state:
            </p>

            <div className="detection-input-list">
              
              {/* Input 1: Force & Grip Sensor */}
              <div className="input-sensor-card active-trigger">
                <div className="input-icon-box fsr-icon">
                  <Zap size={18} />
                </div>
                <div className="input-info">
                  <div className="input-header-line">
                    <span className="input-name">Pressure &amp; Grip Sensor (FSR)</span>
                    <span className="trigger-status-badge triggered">THRESHOLD EXCEEDED</span>
                  </div>
                  <p className="input-detail">
                    Calibrated analog force threshold (reading: <strong>2,180 / 1,900 ADC</strong>). Differentiates accidental bumps from sudden forceful wrist grasping or pulling.
                  </p>
                </div>
              </div>

              {/* Input 2: Kinematic Motion & Gyro */}
              <div className="input-sensor-card active-trigger">
                <div className="input-icon-box mpu-icon">
                  <Activity size={18} />
                </div>
                <div className="input-info">
                  <div className="input-header-line">
                    <span className="input-name">6-Axis Motion Suite (MPU-6050)</span>
                    <span className="trigger-status-badge triggered">THRESHOLD EXCEEDED</span>
                  </div>
                  <p className="input-detail">
                    Kinematic acceleration peak (reading: <strong>74.3 / 68.0 m/s²</strong>). Detects sudden struggle or abrupt violent motion inside the 15-second evidence window.
                  </p>
                </div>
              </div>

              {/* Input 3: Manual SOS Button */}
              <div className="input-sensor-card">
                <div className="input-icon-box button-icon">
                  <Hand size={18} />
                </div>
                <div className="input-info">
                  <div className="input-header-line">
                    <span className="input-name">Tactile Emergency Trigger</span>
                    <span className="trigger-status-badge ready">STANDBY // INSTANT</span>
                  </div>
                  <p className="input-detail">
                    Physical side button with tactile feedback. Pressing and holding for 2 seconds immediately overrides automated thresholds to initiate SOS.
                  </p>
                </div>
              </div>

              {/* Conceptual / Future Roadmapped Input */}
              <div className="input-sensor-card conceptual-card">
                <div className="input-icon-box voice-icon">
                  <Volume2 size={18} />
                </div>
                <div className="input-info">
                  <div className="input-header-line">
                    <span className="input-name">Acoustic Distress Modeling</span>
                    <span className="trigger-status-badge conceptual">CONCEPTUAL ROADMAP</span>
                  </div>
                  <p className="input-detail">
                    Planned future companion smartphone integration for ambient vocal distress keywords. Not implemented on current ESP32 wearable hardware.
                  </p>
                </div>
              </div>

            </div>

            {/* Disclaimer notice */}
            <div className="disclaimer-callout">
              <Info size={13} className="text-slate-400" />
              <span>
                <strong>Hardware Architecture Note:</strong> Detection sensors interface through the ESP32 micro-controller board, separating biometric wrist measurement from backend cloud dispatch.
              </span>
            </div>

          </div>
        </div>

        {/* Right Column: Floating Emergency Card & Response Timeline */}
        <div className="sos-alert-column">
          <div className="floating-sos-card">
            
            {/* SOS Card Header */}
            <div className="sos-card-header">
              <div className="sos-title-cluster">
                <div className="sos-icon-pulse">
                  <AlertOctagon size={22} className="text-red-400" />
                </div>
                <div>
                  <h3 className="sos-card-title">SOS ALERT ACTIVATED</h3>
                  <span className="sos-card-subtitle">
                    {isCancelled 
                      ? 'ALERT CANCELLED BY USER' 
                      : countdown > 0 
                        ? `CONFIRMATION COUNTDOWN: ${countdown}s` 
                        : 'DISTRESS CONFIRMED // DISPATCH ACTIVE'}
                  </span>
                </div>
              </div>
              <span className={`sos-status-chip ${isCancelled ? 'cancelled' : countdown > 0 ? 'grace' : 'confirmed'}`}>
                {isCancelled ? 'DISARMED' : countdown > 0 ? 'GRACE WINDOW' : 'CONFIRMED'}
              </span>
            </div>

            {/* Interactive Grace Countdown Simulation Widget */}
            {!isCancelled ? (
              <div className="grace-countdown-bar">
                <div className="countdown-info-row">
                  <div className="countdown-time-display">
                    <Clock size={14} className="text-red-400" />
                    <span>Cancel Window: <strong>{countdown}s remaining</strong></span>
                  </div>
                  <button 
                    onClick={handleCancelSos}
                    className="btn-cancel-sos"
                    title="Cancel accidental trigger simulation"
                    aria-label="Cancel distress alert demonstration"
                  >
                    Cancel Alert (I'm Safe)
                  </button>
                </div>
                <div className="countdown-progress-track" role="progressbar" aria-valuenow={countdown} aria-valuemin={0} aria-valuemax={45} aria-label="SOS cancel countdown timer">
                  <div 
                    className="countdown-progress-fill" 
                    style={{ width: `${(countdown / 45) * 100}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="grace-cancelled-bar" role="status" aria-live="polite">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>Distress signal stood down. Emergency contacts not dispatched.</span>
                <button onClick={handleResetSimulation} className="btn-reset-sim" aria-label="Restart distress simulation countdown">
                  <RotateCcw size={12} />
                  <span>Restart Demo</span>
                </button>
              </div>
            )}

            {/* Live Location Telemetry & Mini-Map Inset */}
            <div className="telemetry-inset-grid">
              
              {/* Mini Map Inset */}
              <div className="mini-map-box">
                <div className="mini-map-header">
                  <MapPin size={12} className="text-red-400" />
                  <span>LAST KNOWN GPS COORDINATES</span>
                </div>
                <div className="mini-map-canvas">
                  <svg viewBox="0 0 200 110" className="mini-map-svg">
                    <rect width="200" height="110" fill="#0C0717" />
                    {/* Grid roads */}
                    <path d="M 0 35 L 200 35" stroke="#251842" strokeWidth="4" />
                    <path d="M 0 75 L 200 75" stroke="#251842" strokeWidth="4" />
                    <path d="M 60 0 L 60 110" stroke="#251842" strokeWidth="4" />
                    <path d="M 140 0 L 140 110" stroke="#251842" strokeWidth="4" />
                    {/* Pulsing Emergency Pin */}
                    <circle cx="100" cy="55" r="18" fill="rgba(239, 68, 68, 0.25)" className="sonar-ring" />
                    <circle cx="100" cy="55" r="6" fill="#EF4444" stroke="#ffffff" strokeWidth="2" />
                    <rect x="70" y="24" width="60" height="15" rx="3" fill="rgba(13, 8, 24, 0.9)" stroke="rgba(239, 68, 68, 0.5)" />
                    <text x="100" y="34" fill="#FCA5A5" fontSize="7" fontFamily="var(--font-mono)" textAnchor="middle">12.9715, 77.5945</text>
                  </svg>
                </div>
              </div>

              {/* Broadcast Telemetry Status List */}
              <div className="broadcast-status-list">
                
                {/* Status Item 1: Location Sharing */}
                <div className="broadcast-item">
                  <div className="broadcast-icon-wrap">
                    <Radio size={14} className="text-emerald-400" />
                  </div>
                  <div>
                    <span className="broadcast-label">Location Broadcast</span>
                    <span className="broadcast-val">Active Live GPS Telemetry</span>
                  </div>
                </div>

                {/* Status Item 2: Trusted Contacts */}
                <div className="broadcast-item">
                  <div className="broadcast-icon-wrap">
                    <Users size={14} className="text-violet-400" />
                  </div>
                  <div>
                    <span className="broadcast-label">Trusted Contacts Alert</span>
                    <span className="broadcast-val">3 Registered Contacts Notified</span>
                  </div>
                </div>

                {/* Status Item 3: Acoustic Deterrence */}
                <div className="broadcast-item">
                  <div className="broadcast-icon-wrap">
                    <Volume2 size={14} className="text-amber-400" />
                  </div>
                  <div>
                    <span className="broadcast-label">Hardware Siren Status</span>
                    <span className="broadcast-val">105dB Intermittent Alarm Armed</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Response Timeline: 6 Clear Stages */}
            <div className="emergency-timeline-section">
              <span className="timeline-title">INCIDENT RESPONSE TIMELINE</span>
              
              <div className="timeline-step-list">
                
                {/* Step 1 */}
                <div className="timeline-step done">
                  <div className="step-marker"><CheckCircle2 size={12} /></div>
                  <div className="step-content">
                    <span className="step-time">T+0.0s</span>
                    <span className="step-text">Potential distress detected via Dual-Sensor (FSR + MPU)</span>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="timeline-step done">
                  <div className="step-marker"><CheckCircle2 size={12} /></div>
                  <div className="step-content">
                    <span className="step-time">T+1.2s</span>
                    <span className="step-text">15-second Evidence Window satisfied; 45s grace countdown started</span>
                  </div>
                </div>

                {/* Step 3 */}
                <div className={`timeline-step ${countdown === 0 ? 'done' : 'active'}`}>
                  <div className="step-marker">{countdown === 0 ? <CheckCircle2 size={12} /> : '3'}</div>
                  <div className="step-content">
                    <span className="step-time">T+45.0s</span>
                    <span className="step-text">Grace window concludes; SOS payload dispatched to /api/hardware/sos</span>
                  </div>
                </div>

                {/* Step 4 */}
                <div className={`timeline-step ${countdown === 0 ? 'done' : 'pending'}`}>
                  <div className="step-marker">4</div>
                  <div className="step-content">
                    <span className="step-time">T+45.8s</span>
                    <span className="step-text">Live location broadcast URL transmitted to 3 trusted contacts</span>
                  </div>
                </div>

                {/* Step 5 */}
                <div className={`timeline-step ${countdown === 0 ? 'done' : 'pending'}`}>
                  <div className="step-marker">5</div>
                  <div className="step-content">
                    <span className="step-time">T+47.0s</span>
                    <span className="step-text">Haptic feedback navigates user toward nearest registered Safe Haven</span>
                  </div>
                </div>

                {/* Step 6 (Conceptual integration) */}
                <div className="timeline-step conceptual">
                  <div className="step-marker">6</div>
                  <div className="step-content">
                    <span className="step-time">Future</span>
                    <span className="step-text">Automated emergency services CAD dispatch (Conceptual Architecture)</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Mandatory Demonstration Safety Notice */}
            <div className="safety-simulation-footer">
              <span className="footer-warning-pill">SIMULATION ONLY</span>
              <p>
                This interactive demonstration does not connect to real emergency responders, dial 911, or transmit location data outside your local browser sandbox.
              </p>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
