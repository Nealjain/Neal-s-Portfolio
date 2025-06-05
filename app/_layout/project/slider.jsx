'use client';

import { CldVideoPlayer } from 'next-cloudinary';
import Image from 'next/image';
import { useState } from 'react';

import { Center } from '@/components';

/**
 * @param {Object} props
 * @param {'image' | 'video'} props.type
 * @param {string} props.source
 */
export function ProjectSlider({ type, source }) {
  const [isLoading, setIsLoading] = useState(true);

  const image =
    type === 'image' ? (
      <div className="relative w-full h-full">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <Image
          src={source}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          priority
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJcUdBLlwAAAABJRU5ErkJggg=="
          className={`object-contain transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          alt='project items'
          onLoad={() => setIsLoading(false)}
        />
      </div>
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
      className='relative w-2/3 overflow-hidden rounded'
      style={{
        minWidth: '350px',
        height: '20vw',
        maxHeight: '300px',
        maxWidth: '100vw'
      }}
    >
      {image}
      {video}
    </Center>
  );
}