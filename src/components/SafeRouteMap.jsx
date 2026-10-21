import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Navigation, 
  AlertTriangle, 
  Sparkles, 
  Check, 
  Radio, 
  HelpCircle,
  Eye
} from 'lucide-react';

export default function SafeRouteMap({ isVisible = true }) {
  // 0: Safe Route (Default), 1: Fast Route
  const [selectedRoute, setSelectedRoute] = useState(0);

  // SVG route path lengths for stroke animation
  const safePathD = "M 130 370 C 130 290, 160 250, 230 250 C 310 250, 350 200, 420 180 C 490 160, 560 160, 620 150 C 660 145, 680 130, 690 110";
  const fastPathD = "M 130 370 C 240 370, 340 340, 430 270 C 520 200, 610 150, 690 110";

  return (
    <div className={`map-experience-container ${isVisible ? 'active' : ''}`}>
      {/* Map Header & Title */}
      <div className="map-header-bar">
        <div className="map-badge-group">
          <span className="map-live-pill">
            <span className="live-dot" />
            <span>SAFE STREETS — PREDICT HUD</span>
          </span>
          <span className="map-sim-badge" title="Data shown is an illustrative simulation">
            PROTOTYPE DEMONSTRATION
          </span>
        </div>
        <h2 className="map-main-heading">
          YOUR JOURNEY, <span className="text-gradient-violet">MADE SAFER.</span>
        </h2>
        <p className="map-subheading">
          Dynamic multi-criteria routing balances travel speed with verified safe corridors, lit avenues, and emergency safe havens.
        </p>
      </div>

      {/* Main Map + Controls Layout */}
      <div className="map-canvas-grid">
        
        {/* =============================================================== */}
        {/* Interactive SVG City Map Canvas                                  */}
        {/* =============================================================== */}
        <div className="map-frame-surface">
          
          {/* Subtle Map Top Bar */}
          <div className="map-status-overlay">
            <div className="map-hud-stat">
              <Navigation size={14} className="text-violet-400" />
              <span>ACTIVE ROUTING: <strong style={{ color: selectedRoute === 0 ? '#34D399' : '#F59E0B' }}>{selectedRoute === 0 ? 'SAFE CORRIDOR' : 'FASTEST PATH'}</strong></span>
            </div>
            <div className="map-hud-stat">
              <Radio size={13} className="text-emerald-400" />
              <span>OFF-ROUTE HAPTIC SHIELD: <strong>ENGAGED</strong></span>
            </div>
          </div>

          <svg 
            viewBox="0 0 800 480" 
            className="city-map-svg" 
            role="img" 
            aria-label="Stylized safe route navigation map illustration"
          >
            <defs>
              {/* Safe Route Gradient */}
              <linearGradient id="safeRouteGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#8B5CF6" />
                <stop offset="60%" stop-color="#A78BFA" />
                <stop offset="100%" stop-color="#10B981" />
              </linearGradient>

              {/* Fast Route Gradient */}
              <linearGradient id="fastRouteGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#64748B" />
                <stop offset="60%" stop-color="#94A3B8" />
                <stop offset="100%" stop-color="#F59E0B" />
              </linearGradient>

              {/* Glowing Filters */}
              <filter id="safeGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="fastGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* City Grid Background Blocks */}
            <g className="map-city-blocks" opacity="0.35">
              {/* District Zones */}
              <rect x="70" y="50" width="120" height="90" rx="8" fill="#140D26" stroke="#251842" strokeWidth="1.5" />
              <rect x="210" y="50" width="170" height="90" rx="8" fill="#140D26" stroke="#251842" strokeWidth="1.5" />
              <rect x="400" y="50" width="130" height="90" rx="8" fill="#140D26" stroke="#251842" strokeWidth="1.5" />
              <rect x="550" y="50" width="180" height="90" rx="8" fill="#140D26" stroke="#251842" strokeWidth="1.5" />

              <rect x="70" y="160" width="120" height="110" rx="8" fill="#140D26" stroke="#251842" strokeWidth="1.5" />
              <rect x="210" y="160" width="170" height="110" rx="8" fill="#17102C" stroke="#2D1D50" strokeWidth="1.5" />
              <rect x="400" y="160" width="130" height="110" rx="8" fill="#140D26" stroke="#251842" strokeWidth="1.5" />
              <rect x="550" y="160" width="180" height="110" rx="8" fill="#140D26" stroke="#251842" strokeWidth="1.5" />

              <rect x="70" y="290" width="120" height="130" rx="8" fill="#140D26" stroke="#251842" strokeWidth="1.5" />
              <rect x="210" y="290" width="170" height="130" rx="8" fill="#140D26" stroke="#251842" strokeWidth="1.5" />
              <rect x="400" y="290" width="130" height="130" rx="8" fill="#17102C" stroke="#2D1D50" strokeWidth="1.5" />
              <rect x="550" y="290" width="180" height="130" rx="8" fill="#140D26" stroke="#251842" strokeWidth="1.5" />

              {/* Park / Green Safe Corridor Zone */}
              <rect x="230" y="180" width="130" height="70" rx="12" fill="#062319" stroke="#0D4432" strokeWidth="1" opacity="0.6" />
              <text x="245" y="220" fill="#10B981" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="1px" opacity="0.7">VERIFIED LIT CORRIDOR</text>
            </g>

            {/* City Street Grid Roads */}
            <g className="map-roads-network" stroke="#2E1F54" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.65">
              {/* Horizontal Avenues */}
              <path d="M 50 150 L 750 150" />
              <path d="M 50 280 L 750 280" />
              {/* Vertical Boulevards */}
              <path d="M 200 40 L 200 440" />
              <path d="M 390 40 L 390 440" />
              <path d="M 540 40 L 540 440" />
              {/* Minor Cut-through alleys */}
              <path d="M 50 380 L 750 380" strokeWidth="7" stroke="#1D1438" />
              <path d="M 130 40 L 130 440" strokeWidth="7" stroke="#1D1438" />
            </g>

            {/* Street Names Labels */}
            <g className="map-street-labels" fill="#64748B" fontSize="8" fontFamily="var(--font-mono)" letterSpacing="1.5px">
              <text x="60" y="142">NORTH METRO BLVD</text>
              <text x="60" y="272">AVENUE CENTRAL</text>
              <text x="60" y="372">SOUTH ROW WAY</text>
              <text x="548" y="70" transform="rotate(90 548 70)">HARBOR COMMONS</text>
              <text x="398" y="310" transform="rotate(90 398 310)">CIVIC PLAZA AVE</text>
            </g>

            {/* Verified Safe Haven Checkpoints along Safe Route */}
            <g className="safe-haven-pins">
              {/* Safe Haven 1: Police Station Precinct */}
              <circle cx="230" cy="250" r="14" fill="rgba(139, 92, 246, 0.2)" stroke="#8B5CF6" strokeWidth="1.5" />
              <circle cx="230" cy="250" r="4" fill="#8B5CF6" />
              <text x="248" y="254" fill="#C4B5FD" fontSize="8" fontFamily="var(--font-mono)" fontWeight="600">POLICE PRECINCT 04</text>

              {/* Safe Haven 2: 24/7 Lit Station & Hospital */}
              <circle cx="420" cy="180" r="14" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" strokeWidth="1.5" />
              <circle cx="420" cy="180" r="4" fill="#10B981" />
              <text x="438" y="184" fill="#6EE7B7" fontSize="8" fontFamily="var(--font-mono)" fontWeight="600">CIVIC 24/7 SAFE ZONE</text>
            </g>

            {/* =========================================================== */}
            {/* FAST ROUTE (Underlying / Muted or Highlighted)             */}
            {/* =========================================================== */}
            <path
              d={fastPathD}
              fill="none"
              stroke="url(#fastRouteGrad)"
              strokeWidth={selectedRoute === 1 ? 6 : 3.5}
              strokeDasharray={selectedRoute === 1 ? "none" : "8 6"}
              opacity={selectedRoute === 1 ? 1 : 0.4}
              filter={selectedRoute === 1 ? "url(#fastGlow)" : "none"}
              style={{ transition: 'all 0.4s ease' }}
              className="map-path-fast"
            />

            {/* =========================================================== */}
            {/* SAFE ROUTE (Glowing Violet-Emerald Primary Path)            */}
            {/* =========================================================== */}
            <path
              d={safePathD}
              fill="none"
              stroke="url(#safeRouteGrad)"
              strokeWidth={selectedRoute === 0 ? 7 : 3.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={selectedRoute === 0 ? 1 : 0.35}
              filter={selectedRoute === 0 ? "url(#safeGlow)" : "none"}
              style={{ transition: 'all 0.4s ease' }}
              className="map-path-safe"
            />

            {/* Animated Traveling Location Beacon (Pulsing radar on current selected route) */}
            {selectedRoute === 0 ? (
              <g className="location-traveler-beacon">
                {/* Simulated live user marker progressing along Safe Route */}
                <circle cx="350" cy="205" r="16" fill="rgba(139, 92, 246, 0.25)" className="sonar-ring" />
                <circle cx="350" cy="205" r="7" fill="#8B5CF6" stroke="#ffffff" strokeWidth="2" />
                <circle cx="350" cy="205" r="2.5" fill="#ffffff" />
                <rect x="365" y="196" width="105" height="18" rx="4" fill="rgba(13, 8, 24, 0.85)" stroke="rgba(167, 139, 250, 0.4)" />
                <text x="372" y="209" fill="#E2E8F0" fontSize="8" fontFamily="var(--font-mono)">LIVE WRIST TRACK</text>
              </g>
            ) : (
              <g className="location-traveler-beacon">
                <circle cx="430" cy="270" r="16" fill="rgba(245, 158, 11, 0.25)" className="sonar-ring" />
                <circle cx="430" cy="270" r="7" fill="#F59E0B" stroke="#ffffff" strokeWidth="2" />
                <circle cx="430" cy="270" r="2.5" fill="#ffffff" />
                <rect x="445" y="261" width="115" height="18" rx="4" fill="rgba(13, 8, 24, 0.85)" stroke="rgba(245, 158, 11, 0.4)" />
                <text x="452" y="274" fill="#FDE68A" fontSize="8" fontFamily="var(--font-mono)">SHORTCUT ROUTE</text>
              </g>
            )}

            {/* ORIGIN PIN (Bottom-Left: 130, 370) */}
            <g className="map-origin-pin" transform="translate(130, 370)">
              <circle r="12" fill="rgba(99, 102, 241, 0.2)" stroke="#818CF8" strokeWidth="1.5" />
              <circle r="5" fill="#6366F1" />
              <rect x="-65" y="-38" width="130" height="22" rx="6" fill="rgba(13, 8, 24, 0.9)" stroke="rgba(129, 140, 248, 0.35)" />
              <text x="0" y="-24" textAnchor="middle" fill="#E0E7FF" fontSize="8" fontFamily="var(--font-mono)" fontWeight="600">
                ORIGIN // Tech Quarter
              </text>
            </g>

            {/* DESTINATION PIN (Top-Right: 690, 110) */}
            <g className="map-dest-pin" transform="translate(690, 110)">
              <circle r="14" fill="rgba(16, 185, 129, 0.25)" stroke="#10B981" strokeWidth="2" />
              <circle r="5" fill="#10B981" />
              <rect x="-70" y="-40" width="140" height="24" rx="6" fill="rgba(13, 8, 24, 0.9)" stroke="rgba(52, 211, 153, 0.45)" />
              <text x="0" y="-24" textAnchor="middle" fill="#A7F3D0" fontSize="8.5" fontFamily="var(--font-mono)" fontWeight="700">
                DEST // Harbor Station
              </text>
            </g>
          </svg>

          {/* Bottom HUD Legend */}
          <div className="map-legend-row">
            <div className="legend-item">
              <span className="legend-bar safe-bar" />
              <span>Safe Route (Lit + Monitored)</span>
            </div>
            <div className="legend-item">
              <span className="legend-bar fast-bar" />
              <span>Fast Route (Standard)</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot haven-dot" />
              <span>Registered Safe Haven</span>
            </div>
          </div>
        </div>

        {/* =============================================================== */}
        {/* Functional Route Selection & Comparison Control Panel           */}
        {/* =============================================================== */}
        <div className="route-controls-panel" role="region" aria-label="Route comparison controls">
          <div className="panel-inner-card" role="tablist" aria-label="Route selection options">
            
            <div className="panel-title-row">
              <span className="panel-section-label">CHOOSE ROUTE PROFILE</span>
              <span className="panel-telemetry-tag">ESP32 SYNCED</span>
            </div>

            {/* Route Option 1: Safe Route (Button) */}
            <button
              onClick={() => setSelectedRoute(0)}
              className={`route-select-card ${selectedRoute === 0 ? 'selected safe-active' : ''}`}
              role="tab"
              aria-selected={selectedRoute === 0}
              aria-controls="route-panel-safe"
              id="tab-safe-route"
            >
              <div className="route-card-top">
                <div className="route-name-group">
                  <div className="route-icon-box safe-icon">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h3 className="route-name">Safe Route</h3>
                    <p className="route-intent">Prioritize safer surroundings</p>
                  </div>
                </div>
                <div className="route-score-pill safe-score">
                  <Sparkles size={11} />
                  <span>94/100 SAFETY</span>
                </div>
              </div>

              {/* Route Metric Grid */}
              <div className="route-metric-strip">
                <div className="metric-cell">
                  <Clock size={12} className="text-slate-400" />
                  <span>18 min</span>
                </div>
                <div className="metric-cell">
                  <MapPin size={12} className="text-slate-400" />
                  <span>1.8 km</span>
                </div>
                <div className="metric-cell">
                  <Eye size={12} className="text-emerald-400" />
                  <span className="text-emerald-300">98% Lit</span>
                </div>
              </div>

              {/* Status / Feature description */}
              <div className="route-feature-bullet">
                <Check size={13} className="text-emerald-400" />
                <span>Wearable haptic deviation pulses enabled</span>
              </div>
            </button>

            {/* Route Option 2: Fast Route (Button) */}
            <button
              onClick={() => setSelectedRoute(1)}
              className={`route-select-card ${selectedRoute === 1 ? 'selected fast-active' : ''}`}
              role="tab"
              aria-selected={selectedRoute === 1}
              aria-controls="route-panel-fast"
              id="tab-fast-route"
            >
              <div className="route-card-top">
                <div className="route-name-group">
                  <div className="route-icon-box fast-icon">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h3 className="route-name">Fast Route</h3>
                    <p className="route-intent">Prioritize travel time</p>
                  </div>
                </div>
                <div className="route-score-pill fast-score">
                  <AlertTriangle size={11} />
                  <span>72/100 SAFETY</span>
                </div>
              </div>

              {/* Route Metric Grid */}
              <div className="route-metric-strip">
                <div className="metric-cell">
                  <Clock size={12} className="text-slate-400" />
                  <span>12 min</span>
                </div>
                <div className="metric-cell">
                  <MapPin size={12} className="text-slate-400" />
                  <span>1.4 km</span>
                </div>
                <div className="metric-cell">
                  <Eye size={12} className="text-amber-400" />
                  <span className="text-amber-300">61% Lit</span>
                </div>
              </div>

              {/* Status / Feature description */}
              <div className="route-feature-bullet">
                <AlertTriangle size={13} className="text-amber-400" />
                <span>Traverses dimly-lit shortcut; standard telemetry</span>
              </div>
            </button>

            {/* Active Selection Feedback Box */}
            <div 
              className="active-route-summary" 
              id={selectedRoute === 0 ? 'route-panel-safe' : 'route-panel-fast'}
              role="tabpanel"
              aria-labelledby={selectedRoute === 0 ? 'tab-safe-route' : 'tab-fast-route'}
            >
              <div className="summary-indicator">
                <span className="pulse-indicator-dot" style={{ backgroundColor: selectedRoute === 0 ? '#10B981' : '#F59E0B' }} />
                <span className="summary-title">
                  {selectedRoute === 0 
                    ? 'Safe Route Selected: Full Guard Protocol' 
                    : 'Fast Route Selected: Expedited Commute'}
                </span>
              </div>
              <p className="summary-detail">
                {selectedRoute === 0
                  ? 'Your wrist wearable will gently vibrate if you veer off the verified green corridor, keeping you guided toward 24/7 safe zones.'
                  : 'Saves 6 minutes by routing through alleyways. Emergency dual-trigger SOS remains active on the wearable at all times.'}
              </p>
            </div>

            {/* Realistic Technical Demonstration Disclaimer */}
            <div className="demonstration-disclaimer-box">
              <HelpCircle size={13} className="text-slate-500" />
              <span>
                <strong>Demonstration Mode:</strong> Illustrative sample data modeled after Safe Streets Predict specifications. Real-time routing correlates municipal lighting with crime index feeds.
              </span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
