'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

const Preloader = dynamic(() => import('./preloader/index.jsx'), {
  ssr: false,
});

export function Transition({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  const handlePreloaderFinished = () => {
    setIsLoading(false);
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading && <Preloader key="preloader" onPreloaderFinished={handlePreloaderFinished} pagePath={pathname} />} 
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
