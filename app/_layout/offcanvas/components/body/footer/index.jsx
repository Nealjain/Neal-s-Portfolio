'use client';

import Link from 'next/link';

import { MagneticButton } from '@/components';
import { socialMedias } from '@/data';
import { randomId } from '@/utils';

export function OffcanvasFooter() {
  const medias = socialMedias.map(({ href, title }) => {
    const id = randomId();
    return (
      <li key={id} className="mb-2 sm:mb-0">
        <Link href={href} target='_blank' rel='noopener' passHref>
          <MagneticButton>
            <span className="text-sm sm:text-base">{title}</span>
          </MagneticButton>
        </Link>
      </li>
    );
  });

  return (
    <ul className='flex flex-col sm:flex-row w-full justify-between gap-2 sm:gap-10'>
      {medias}
    </ul>
  );
}
