'use client';

import { Offcanvas } from '@/layout';
import { Navbar } from '@/layout';
import { Transition } from '@/layout';
import { Providers } from '@/providers';

export function ClientLayout({ children }) {
  return (
    <Providers>
      <Navbar />
      <Transition>
        <main className="w-full">
          {children}
        </main>
      </Transition>
      <Offcanvas />
    </Providers>
  );
}