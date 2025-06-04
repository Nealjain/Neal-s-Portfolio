'use client';

import { forwardRef } from 'react';

import { cn } from '@/utils';

/**
 * Secondary button component with standard styling
 * @param {import('react').ButtonHTMLAttributes<HTMLButtonElement> & { size: 'default' | 'sm' | 'lg' | 'xl';}} props
 */
export const SecondaryButton = forwardRef(function SecondaryButton(
  { className, children, size = 'default', ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground ring-offset-background transition-colors hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        {
          'px-3 py-1 text-xs': size === 'sm',
          'px-4 py-2 text-sm': size === 'default',
          'px-6 py-3 text-base': size === 'lg',
          'px-8 py-4 text-lg': size === 'xl',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});