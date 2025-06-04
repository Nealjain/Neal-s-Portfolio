'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  homePreloaderWords, 
  aboutPreloaderWords, 
  workPreloaderWords, 
  contactPreloaderWords 
} from '/app/_data/preloader-words';

export default function Preloader({ onPreloaderFinished, pagePath }) {
  const [index, setIndex] = useState(0);
  const [shouldShow, setShouldShow] = useState(true); // Start with true to avoid flicker

  // Determine which preloader words to use based on the page path
  const getPreloaderWords = () => {
    if (pagePath.includes('/about')) {
      return aboutPreloaderWords;
    } else if (pagePath.includes('/work')) {
      return workPreloaderWords;
    } else if (pagePath.includes('/contact')) {
      return contactPreloaderWords;
    } else {
      return homePreloaderWords;
    }
  };

  const preloaderWords = getPreloaderWords();

  // Memoize the preloader finish callback to prevent unnecessary re-renders
  const finishPreloader = useCallback(() => {
    if (onPreloaderFinished) onPreloaderFinished();
  }, [onPreloaderFinished]);

  useEffect(() => {
    // For page-specific preloaders, we need to track which pages have been visited
    let visitedPages = {};
    try {
      const storedVisitedPages = sessionStorage.getItem('visited-pages');
      visitedPages = storedVisitedPages ? JSON.parse(storedVisitedPages) : {};
    } catch (error) {
      console.error('Error accessing sessionStorage:', error);
    }
    
    // Only show preloader if this specific page hasn't been visited yet
    const shouldDisplayPreloader = !visitedPages[pagePath];
    
    if (shouldDisplayPreloader) {
      setShouldShow(true);
      // Mark that we've shown the preloader for this page
      try {
        visitedPages[pagePath] = true;
        sessionStorage.setItem('visited-pages', JSON.stringify(visitedPages));
        // Also set the general preloader-shown flag for backward compatibility
        sessionStorage.setItem('preloader-shown', 'true');
      } catch (error) {
        console.error('Error setting sessionStorage:', error);
      }

      // Preload images specific to the current page
      const preloadImages = () => {
        let imagesToPreload = [];
        
        if (pagePath.includes('/about')) {
          imagesToPreload = [
            '/images/profile.jpg'
          ];
        } else if (pagePath.includes('/work')) {
          imagesToPreload = [
            '/images/1234567890.png',
            '/images/beyound hunger.png'
          ];
        } else if (pagePath.includes('/contact')) {
          // Contact page may not have critical images to preload
          imagesToPreload = [];
        } else {
          // Home page
          imagesToPreload = [
            '/images/beyound hunger.png',
            '/images/Homepage-Design-Crazy-Egg.png',
            '/images/1234567890.png'
          ];
        }
        
        imagesToPreload.forEach(src => {
          const img = new Image();
          img.src = src;
        });
      };
      
      preloadImages();

      const hideTimer = setTimeout(() => {
        finishPreloader();
      }, 3000); // show for 3 seconds

      let currentWordIndex = 0;
      const interval = setInterval(() => {
        currentWordIndex++;
        if (currentWordIndex < preloaderWords.length) {
          setIndex(currentWordIndex);
        } else {
          clearInterval(interval);
        }
      }, 250);

      return () => {
        clearInterval(interval);
        clearTimeout(hideTimer);
      };
    } else {
      // If preloader should not be displayed, hide it immediately
      setShouldShow(false);
      // Use requestAnimationFrame for smoother transition
      requestAnimationFrame(() => {
        finishPreloader();
      });
    }
  }, [finishPreloader, pagePath, preloaderWords]); // Add pagePath and preloaderWords as dependencies

  // Don't render anything if we shouldn't show the preloader
  if (!shouldShow) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden">
      <motion.div
        key="preloader-text"
        className="text-white text-4xl font-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span>{preloaderWords[index] || ''}</span>
      </motion.div>
    </div>
  );
}