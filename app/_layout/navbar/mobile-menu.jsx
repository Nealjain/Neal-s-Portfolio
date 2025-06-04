'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { navItems } from '@/data';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();
  const isDarkBackground = pathname === '/';

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="lg:hidden relative z-[200]" ref={menuRef}>
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center p-2 rounded-md focus:outline-none ${isDarkBackground ? 'text-white' : 'text-black'}`}
        aria-label="Toggle mobile menu"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <Menu size={24} />
        )}
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`absolute right-0 mt-2 w-56 ${isDarkBackground ? 'bg-gray-800 text-white' : 'bg-white text-black'} shadow-lg rounded-md overflow-hidden z-50`}
          >
            <ul className="py-2">
              {navItems.map(({ href, title }, index) => (
                <li key={index}>
                  <Link 
                    href={href}
                    className={`block px-4 py-3 text-sm capitalize ${pathname === href ? 'font-bold' : 'font-normal'} ${isDarkBackground ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}