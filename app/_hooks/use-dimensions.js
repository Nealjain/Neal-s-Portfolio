'use client';

import { useState, useEffect } from 'react';

/**
 * Improved implementation with resize listener and state
 * to ensure dimensions are available immediately on component mount
 */
export function useDimensions() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Function to update dimensions
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Set dimensions immediately on mount
    updateDimensions();
    
    // Add event listener for window resize
    window.addEventListener('resize', updateDimensions);
    
    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return dimensions;
}
