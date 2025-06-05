'use client';

import { useEffect } from 'react';

import Lenis from '@studio-freight/lenis';

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      smoothWheel: true,
      smoothTouch: false,  // Disable smooth touch for better native scrolling
      syncTouch: true,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      normalizeWheel: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => cancelAnimationFrame(raf);
  }, []);
}
