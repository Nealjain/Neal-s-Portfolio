'use client';

import { motion } from 'framer-motion';
import { ArrowDownLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { MagneticButton } from '@/components';

import { Container, ImageWrapper, MainTitle, Row } from './index.styled';

/**
 * @param {Object} props
 * @param {import('framer-motion').MotionValue<number>} props.transformX
 */
export function UserDetails({ transformX }) {
  return (
    <Container>
      <Row>
        <div className='flex items-center gap-8'>
          <ImageWrapper>
            <Image
              src='/images/me2.png'
              fill
              sizes="(max-width: 768px) 100px, 150px"
              priority
              quality={90}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJcUdBLlwAAAABJRU5ErkJggg=="
              className='rounded-full object-top object-cover'
              alt='Neal Jain Profile Picture'
            />
          </ImageWrapper>
          <MainTitle>Let's work</MainTitle>
        </div>
        <div className='flex items-center justify-between'>
          <MainTitle>together</MainTitle>
          <div>
            <ArrowDownLeft size={28} strokeWidth={1.25} />
          </div>
        </div>
      </Row>

      <Row>
        <div className='relative w-full'>
          <div className='h-[1px] bg-muted-foreground' />
          <div className='absolute right-0 top-0 z-20 -translate-x-1/2 -translate-y-1/2'>
            <motion.div style={{ x: transformX }}>
              <Link href='/contact' passHref>
                <MagneticButton variant='primary' size='lg' className="hover:text-black transition-colors">
                  Get in touch
                </MagneticButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </Row>

      <Row>
        <div className='flex w-full flex-col gap-5 lg:flex-row'>
          <div>
            <a href='mailto:nealmanawat@gmail.com'>
              <MagneticButton
                variant='outline'
                size='lg'
                className='min-w-[360px] border-muted-foreground px-8 py-1.5 text-lg text-center whitespace-nowrap'
              >
                nealmanawat@gmail.com
              </MagneticButton>
            </a>
          </div>
          <div>
            <a href='tel:+919372820541'>
              <MagneticButton
                variant='outline'
                size='lg'
                className='min-w-[360px] border-muted-foreground px-8 py-1.5 text-lg text-center whitespace-nowrap'
              >
                +91 9372 820 541
              </MagneticButton>
            </a>
          </div>
        </div>
      </Row>
    </Container>
  );
}
