'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { homePreloaderWords } from '/app/_data/preloader-words';

export default function Preloader({ onPreloaderFinished, pagePath }) {
  const [index, setIndex] = useState(0);
  const [shouldShow, setShouldShow] = useState(true); // Start with true to avoid flicker

  useEffect(() => {
    // Check if this is the first visit in this session
    let hasShownPreloader = false;
    try {
      hasShownPreloader = sessionStorage.getItem('preloader-shown') === 'true';
    } catch (error) {
      console.error('Error accessing sessionStorage:', error);
    }
    
    // Only show preloader on first visit to the site
    const shouldDisplayPreloader = !hasShownPreloader;
    
    if (shouldDisplayPreloader) {
      setShouldShow(true);
      // Mark that we've shown the preloader
      try {
        sessionStorage.setItem('preloader-shown', 'true');
      } catch (error) {
        console.error('Error setting sessionStorage:', error);
      }

      const hideTimer = setTimeout(() => {
        if (onPreloaderFinished) onPreloaderFinished();
      }, 3000); // show for 3 seconds

      let currentWordIndex = 0;
      const interval = setInterval(() => {
        currentWordIndex++;
        if (currentWordIndex < homePreloaderWords.length) {
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
      if (onPreloaderFinished) {
        // Use setTimeout to ensure this runs after component is mounted
        setTimeout(() => {
          onPreloaderFinished();
        }, 0);
      }
    }
  }, []); // No dependencies to ensure it only runs once

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
        <span>{homePreloaderWords[index] || ''}</span>
      </motion.div>
    </div>
  );
}