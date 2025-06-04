'use client';

import { CldVideoPlayer } from 'next-cloudinary';
import Image from 'next/image';

import { Center } from '@/components';

/**
 * @param {Object} props
 * @param {'image' | 'video'} props.type
 * @param {string} props.source
 */
export function ProjectSlider({ type, source }) {
  const image =
    type === 'image' ? (
      <Image
        src={source}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        priority
        quality={85}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJcUdBLlwAAAABJRU5ErkJggg=="
        className='object-cover'
        alt='project items'
      />
    ) : null;
  const video =
    type === 'video' ? (
      <CldVideoPlayer
        src={source}
        loop={true}
        controls={false}
        muted={true}
        autoPlay='always'
        width='100%'
        height='100%'
        className='!static !bg-transparent'
      />
    ) : null;

  return (
    <Center
      className='relative w-1/4 rounded'
      style={{
        minWidth: '150px',
        height: '20vw',
      }}
    >
      {image}
      {video}
    </Center>
  );
}
