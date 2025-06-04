'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { preloaderWords as defaultPreloaderWords } from '/app/_data/preloader-words';

const pageSpecificPreloaderWords = {
  '/about': ['About', 'Us', 'Page'],
  '/contact': ['Contact', 'Us', 'Here'],
  // Add more page-specific words as needed
};

export default function Preloader({ onPreloaderFinished, pagePath }) {
  const [index, setIndex] = useState(0);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const hasShownPreloader = sessionStorage.getItem('preloader-shown');
    const excludedPaths = ['/about', '/work', '/contact'];
 
    const isComingFromExcludedPath = document.referrer && excludedPaths.some(path => document.referrer.includes(path));
    const shouldDisplayPreloader = (!hasShownPreloader || window.performance.navigation.type === 1) && !excludedPaths.includes(pagePath) && !(isComingFromExcludedPath && pagePath === '/');

    if (shouldDisplayPreloader) {
      setShouldShow(true);
      sessionStorage.setItem('preloader-shown', 'true');

      const hideTimer = setTimeout(() => {
        if (onPreloaderFinished) onPreloaderFinished();
      }, 2500); // show for 2.5 seconds

      const wordsToDisplay = pageSpecificPreloaderWords[pagePath] || defaultPreloaderWords;
      let currentWordIndex = 0;
      const interval = setInterval(() => {
        currentWordIndex++;
        if (currentWordIndex < wordsToDisplay.length) {
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
      if (onPreloaderFinished) onPreloaderFinished();
    }
  }, [pagePath, onPreloaderFinished]);

  const wordsToDisplay = pageSpecificPreloaderWords[pagePath] || defaultPreloaderWords;

  return (
    shouldShow ? (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
        <motion.div
          key="preloader-text"
          className="text-white text-4xl font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span>{wordsToDisplay[index]}</span>
        </motion.div>
      </div>
    ) : null
  );
}