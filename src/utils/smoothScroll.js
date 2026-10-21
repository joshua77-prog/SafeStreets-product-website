import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initializes buttery-smooth scrolling with Lenis synchronized to GSAP ScrollTrigger
 */
export const initSmoothScroll = () => {
  // If reduced motion is preferred, do not initialize smooth inertia
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    return null;
  }

  const lenis = new Lenis({
    duration: 1.25,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 0.95,
    touchMultiplier: 1.5,
  });

  // Synchronize Lenis scroll with GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  // Link GSAP ticker to Lenis requestAnimationFrame
  const tickerCallback = (time) => {
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(tickerCallback);
  gsap.ticker.lagSmoothing(0);

  return {
    lenis,
    destroy: () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    }
  };
};
