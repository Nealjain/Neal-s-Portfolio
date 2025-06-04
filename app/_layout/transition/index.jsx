'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

const Preloader = dynamic(() => import('./preloader/index.jsx'), {
  ssr: false,
});

export function Transition({ children }) {
  const [isLoading, setIsLoading] = useState(true); // Temporarily set to true for debugging
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Temporarily disable sessionStorage check for debugging
    // let hasShownPreloader = false;
    // try {
    //   hasShownPreloader = sessionStorage.getItem('preloader-shown') === 'true';
    // } catch (error) {
    //   console.error('Error accessing sessionStorage:', error);
    // }
    
    // if (!hasShownPreloader) {
    //   setIsLoading(true);
    // }
  }, []); // Empty dependency array ensures this only runs once on initial mount

  // Handle page transitions
  useEffect(() => {
    setIsPageTransitioning(true);
    // Short timeout to ensure transition is smooth
    const timer = setTimeout(() => {
      setIsPageTransitioning(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [pathname]);

  const handlePreloaderFinished = () => {
    setIsLoading(false);
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading && <Preloader key="preloader" onPreloaderFinished={handlePreloaderFinished} pagePath={pathname} />} 
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: { duration: 0.3, ease: 'easeInOut' }
        }}
        exit={{ 
          opacity: 0,
          transition: { duration: 0.2, ease: 'easeInOut' }
        }}
        className={isPageTransitioning ? 'pointer-events-none' : ''}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
