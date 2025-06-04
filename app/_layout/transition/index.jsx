'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import the Preloader component
const Preloader = dynamic(() => import('./preloader'), {
  ssr: false,
});

export default function Transition({ children }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);

  // Handle page transitions when pathname changes
  useEffect(() => {
    setIsPageTransitioning(true);
    
    // Short timeout to allow transition to complete
    const transitionTimer = setTimeout(() => {
      setIsPageTransitioning(false);
    }, 800); // Match this with the duration in the motion.div
    
    return () => clearTimeout(transitionTimer);
  }, [pathname]);

  // Check if preloader should be shown on initial mount
  useEffect(() => {
    // We'll handle the preloader logic in the Preloader component
    // This is just for initial setup
    try {
      const hasShownPreloader = sessionStorage.getItem('preloader-shown') === 'true';
      if (hasShownPreloader) {
        // If preloader has been shown before, don't show it again
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error accessing sessionStorage:', error);
      // If there's an error, just hide the preloader
      setIsLoading(false);
    }
  }, []);

  // Function to handle when preloader is finished
  const handlePreloaderFinished = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader 
            key="preloader" 
            onPreloaderFinished={handlePreloaderFinished} 
            pagePath={pathname} // Pass the current path to the preloader
          />
        )}
      </AnimatePresence>

      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ 
          duration: 0.5, 
          ease: [0.22, 1, 0.36, 1] 
        }}
        className={`${isPageTransitioning ? 'pointer-events-none' : ''}`}
      >
        {children}
      </motion.div>
    </>
  );
}
