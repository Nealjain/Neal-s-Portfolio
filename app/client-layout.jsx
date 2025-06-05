'use client';

import { Offcanvas } from '@/layout';
import { Navbar } from '@/layout';
import { Transition } from '@/layout';
import { Providers } from '@/providers';

export function ClientLayout({ children }) {
  return (
    <Providers>
      <div className="min-h-screen flex flex-col relative">
        <Navbar />
        <Transition>
          <main className="w-full flex-grow relative z-0">
            {children}
          </main>
        </Transition>
        <Offcanvas />
      </div>
    </Providers>
  );
}