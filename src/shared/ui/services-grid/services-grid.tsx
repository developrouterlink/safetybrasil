'use client';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ServicesGridProps } from './services-grid.types';

export const ServicesGrid = ({
  className,
  id = 'servicos',
  children,
}: ServicesGridProps) => {
  return (
    <section id={id} className={twMerge(clsx('w-full max-w-[1280px] mx-auto py-6 sm:py-10', className))}>
      <div className="w-full max-w-[1280px] mx-auto relative flex flex-col">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 relative">
          <div className="min-h-[220px] md:min-h-[240px] p-6 sm:p-10 md:p-14 bg-transparent rounded-br-[20px] relative">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="hidden md:block absolute bottom-0 right-0 pointer-events-none fill-[var(--color-brand)]"
              aria-hidden="true"
            >
              <path d="M0 20 L20 20 L20 0 C20 11.046 11.046 20 0 20 Z" />
            </svg>
          </div>

          <div className="min-h-[220px] md:min-h-[240px] p-6 sm:p-10 md:p-14 bg-gradient-to-br from-[#008f5d] via-[var(--color-brand)] to-[#00744e] rounded-t-[20px] md:rounded-tr-[20px] md:rounded-tl-[20px] md:rounded-br-[20px] shadow-sm relative" />
        </div>

        <div className="w-full flex flex-col md:flex-row relative">
          <div className="w-full md:w-[75%] min-h-[220px] md:min-h-[240px] p-6 sm:p-10 md:p-14 bg-gradient-to-r from-[#00744e] via-[var(--color-brand)] to-[#008f5d] rounded-b-[20px] md:rounded-tl-[20px] md:rounded-bl-[20px] md:rounded-br-[20px] shadow-sm relative" />

          <div className="w-full md:w-[25%] min-h-[220px] md:min-h-[240px] p-6 sm:p-10 md:p-14 bg-transparent relative">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="hidden md:block absolute top-0 left-0 pointer-events-none fill-[var(--color-brand)]"
              aria-hidden="true"
            >
              <path d="M20 0 L0 0 L0 20 C0 8.954 8.954 0 20 0 Z" />
            </svg>
          </div>
        </div>

        {children}
      </div>
    </section>
  );
};

