'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';

import { FixedOverlay } from '@/components';
import { MagneticButton } from '@/components';

import { OffcanvasFooter } from './footer';
import { OffcanvasLinks } from './links';
import { slideLeft } from './variants';

const MotionComponent = motion(FixedOverlay);

export function OffcanvasBody({ handleClose }) {
  return (
    <MotionComponent
      className='z-[500]' // Increased z-index to ensure it's above navbar and toggle but below preloader
      variants={slideLeft}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      {/* Content container with responsive width */}
      <div className='absolute right-0 top-0 h-screen w-full bg-foreground text-background overflow-y-auto md:w-2/3 lg:w-1/2'>
        <div className='flex h-full flex-col justify-between p-6 sm:p-12 md:p-16 lg:p-24'>
          {/* Close button */}
          <div className='absolute top-6 right-6 z-[600]'>
            <MagneticButton onClick={handleClose} className='text-white'>
              <X size={24} />
            </MagneticButton>
          </div>
          <OffcanvasLinks />
          <OffcanvasFooter />
        </div>
      </div>
    </MotionComponent>
  );
}
