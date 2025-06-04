'use client';

import { Offcanvas } from '@/layout';
import { Navbar } from '@/layout';
import { Providers } from '@/providers';

export function ClientLayout({ children }) {
  return (
    <Providers>
      <Navbar />
      <main className="w-full">
        {children}
      </main>
      <Offcanvas />
    </Providers>
  );
}