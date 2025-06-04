'use client';

import { usePathname } from 'next/navigation';

import { NavbarBrand } from './brand';
import { NavbarList } from './list';

export function Navbar() {
  const pathname = usePathname();
  const textColorClass = pathname === '/' ? 'text-white' : 'text-black';

  return (
    <nav className='absolute inset-x-0 top-0 z-10'>
      <div className={`flex items-center justify-between px-8 py-4 ${textColorClass}`}>
        <NavbarBrand />
        <NavbarList />
      </div>
    </nav>
  );
}
