'use client';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ServicesGridProps } from '../services-grid.types';

export const ServicesGridLeft = ({
  className,
  id = 'servicos',
}: Omit<ServicesGridProps, 'variant'>) => {
  return (
    <section id={id} className={twMerge(clsx('w-full max-w-[1280px] mx-auto py-4 sm:py-10', className))}>
      <div className="w-full max-w-[1280px] mx-auto relative rounded-[20px] overflow-hidden bg-gradient-to-br from-[#008f5d] via-[var(--color-brand)] to-[#00744e]">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 relative items-stretch">
          <div className="w-[85%] sm:w-[80%] md:w-full min-h-[140px] sm:min-h-[200px] md:min-h-[260px] p-5 sm:p-10 md:p-14 bg-[#f2f5f8] rounded-br-[20px] relative flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-normal tracking-tight text-[var(--color-brand)] leading-[1.18] sm:leading-[1.15]">
              Você cuida da sua empresa
            </h2>

            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="block absolute top-0 -right-[20px] pointer-events-none fill-[#f2f5f8]"
              aria-hidden="true"
            >
              <path d="M0 0 L20 0 C8.954 0 0 8.954 0 20 Z" />
            </svg>

            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="block absolute -bottom-[20px] left-0 pointer-events-none fill-[#f2f5f8]"
              aria-hidden="true"
            >
              <path d="M0 0 L0 20 C0 8.954 8.954 0 20 0 Z" />
            </svg>
          </div>

          <div className="w-full min-h-[140px] sm:min-h-[200px] md:min-h-[260px] p-5 sm:p-10 md:p-14 bg-transparent relative flex flex-col justify-center">
            <p className="text-2xl sm:text-3xl lg:text-[44px] font-normal tracking-tight text-white leading-[1.28] sm:leading-[1.25]">
              a{' '}
              <span className="inline-flex items-center px-3 py-0.5 sm:px-5 sm:py-1.5 rounded-[20px] bg-white text-[var(--color-brand)] font-bold shadow-xs mx-1 align-baseline text-xl sm:text-2xl lg:text-[38px]">
                Safety Brasil
              </span>{' '}
              cuida de todas as suas NRs!
            </p>
          </div>
        </div>

        <div className="w-full flex flex-row relative items-stretch">
          <div className="w-[82%] sm:w-[80%] md:w-[75%] min-h-[140px] sm:min-h-[200px] md:min-h-[260px] p-5 sm:p-10 md:p-14 bg-transparent relative flex flex-col justify-center">
            <p className="text-lg sm:text-2xl lg:text-[40px] font-normal tracking-tight text-white leading-[1.3] max-w-3xl">
              Mais de{' '}
              <span className="inline-flex items-center px-3 py-0.5 sm:px-5 sm:py-1.5 rounded-[20px] bg-white text-[var(--color-brand)] font-bold shadow-xs mx-1 align-baseline text-base sm:text-xl lg:text-[34px]">
                45 anos
              </span>{' '}
              garantindo a segurança e medicina do trabalho.
            </p>
          </div>

          <div className="w-[18%] sm:w-[20%] md:w-[25%] min-h-[140px] sm:min-h-[200px] md:min-h-[260px] bg-[#f2f5f8] rounded-tl-[20px] relative self-stretch">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="block absolute -top-[20px] right-0 pointer-events-none fill-[#f2f5f8]"
              aria-hidden="true"
            >
              <path d="M20 20 L20 0 C20 11.046 11.046 20 0 20 Z" />
            </svg>

            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="block absolute bottom-0 -left-[20px] pointer-events-none fill-[#f2f5f8]"
              aria-hidden="true"
            >
              <path d="M20 20 L0 20 C11.046 20 20 11.046 20 0 Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
