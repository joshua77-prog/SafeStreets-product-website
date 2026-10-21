import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import CinematicStage from './components/CinematicStage';
import HowItWorksSection from './components/HowItWorksSection';
import TechSpecsSection from './components/TechSpecsSection';
import PreOrderSection from './components/PreOrderSection';
import Footer from './components/Footer';
import { initSmoothScroll } from './utils/smoothScroll';
import './styles/cinematic.css';

export default function App() {
  useEffect(() => {
    // Initialize Lenis synchronized with GSAP ScrollTrigger
    const scrollInstance = initSmoothScroll();

    return () => {
      if (scrollInstance && scrollInstance.destroy) {
        scrollInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="safe-streets-app">
      {/* Pinned Navbar with live telemetry and Web Audio drone toggle */}
      <Navbar />

      {/* Main Cinematic Scroll Experience (Stages 1 to 5) */}
      <main id="main-content">
        <CinematicStage />
        
        {/* Step-by-Step How It Works Workflow Section */}
        <HowItWorksSection />

        {/* Forensic Hardware Architecture & Sensor Specs */}
        <TechSpecsSection />

        {/* Pre-Order & Safe Haven Community Network Section */}
        <PreOrderSection />
      </main>

      {/* Footer & Global Roadmap */}
      <Footer />
    </div>
  );
}
