'use client';

import { useLenis } from '@/hooks';

/** @param {import('react').PropsWithChildren<unknown>} */
export function ScrollProvider({ children }) {
  useLenis();
  return children;
}