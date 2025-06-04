import { useState, useEffect } from 'react';

export function useScrollVisibility(threshold = 100) {
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setShowElement(true);
      } else {
        setShowElement(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return showElement;
}