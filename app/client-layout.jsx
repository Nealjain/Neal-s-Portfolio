'use client';

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
    </Providers>
  );
}