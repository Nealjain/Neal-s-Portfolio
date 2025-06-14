'use client';

import { useEffect, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { OffcanvasBody, OffcanvasToggle } from './components';

export function Offcanvas() {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const handleClose = () => setOpen(false);

  return (
    <>
      <AnimatePresence mode='wait'>
        {isOpen ? <OffcanvasBody handleClose={handleClose} /> : null}
      </AnimatePresence>
      <OffcanvasToggle isOpen={isOpen} handleOpen={setOpen} />
    </>
  );
}
