'use client';

import { clsx } from 'clsx';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import type { ServicesGridProps } from '../services-grid.types';

export const ServicesGridRight = ({
  className,
  id = 'servicos',
}: Omit<ServicesGridProps, 'variant'>) => {
  return (
    <section id={id} className={twMerge(clsx('w-full max-w-[1280px] mx-auto py-4 sm:py-10', className))}>
      <div className="w-full max-w-[1280px] mx-auto relative rounded-[20px] overflow-hidden bg-gradient-to-br from-[#008f5d] via-[var(--color-brand)] to-[#00744e]">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 relative items-stretch">
          <div className="w-full h-full min-h-[220px] sm:min-h-[260px] md:min-h-[280px] p-6 sm:p-10 md:p-14 bg-transparent relative flex flex-col justify-center order-1 md:order-1">
            <p className="text-2xl sm:text-3xl lg:text-[44px] font-normal tracking-tight text-white leading-[1.28] sm:leading-[1.25]">
              a{' '}
              <span className="inline-flex items-center px-3 py-0.5 sm:px-5 sm:py-1.5 rounded-[20px] bg-white text-[var(--color-brand)] font-bold shadow-xs mx-1 align-baseline text-xl sm:text-2xl lg:text-[38px]">
                Safety Brasil
              </span>{' '}
              cuida do envio do seu eSocial e gestão completa de SST!
            </p>
          </div>

          <div className="w-[85%] sm:w-[80%] md:w-full h-full min-h-[220px] sm:min-h-[260px] md:min-h-[280px] bg-[#f2f5f8] rounded-bl-[20px] pt-0 px-2 sm:px-3 pb-2 sm:pb-3 relative flex flex-col items-stretch order-2 md:order-2 ml-auto">
            <div className="w-full h-full flex-1 relative rounded-[14px] sm:rounded-[18px] overflow-hidden shadow-xs">
              <Image
                src="/hero.png"
                alt="Safety Brasil eSocial"
                fill
                sizes="(max-width: 768px) 85vw, (max-width: 1280px) 50vw, 600px"
                className="object-cover object-[58%_25%]"
                priority
              />
            </div>

            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="block absolute top-0 -left-[20px] pointer-events-none fill-[#f2f5f8]"
              aria-hidden="true"
            >
              <path d="M 20 0 L 0 0 C 8.954 0 20 11.046 20 20 Z" />
            </svg>

            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="block absolute -bottom-[20px] right-0 pointer-events-none fill-[#f2f5f8]"
              aria-hidden="true"
            >
              <path d="M 20 0 L 20 20 C 20 8.954 11.046 0 0 0 Z" />
            </svg>
          </div>
        </div>

        <div className="w-full flex flex-row relative items-stretch">
          <div className="w-[18%] sm:w-[20%] md:w-[25%] min-h-[140px] sm:min-h-[200px] md:min-h-[260px] bg-[#f2f5f8] rounded-tr-[20px] relative self-stretch">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="block absolute -top-[20px] left-0 pointer-events-none fill-[#f2f5f8]"
              aria-hidden="true"
            >
              <path d="M 0 20 L 0 0 C 0 11.046 8.954 20 20 20 Z" />
            </svg>

            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="block absolute bottom-0 -right-[20px] pointer-events-none fill-[#f2f5f8]"
              aria-hidden="true"
            >
              <path d="M 0 20 L 20 20 C 8.954 20 0 11.046 0 0 Z" />
            </svg>
          </div>

          <div className="w-[82%] sm:w-[80%] md:w-[75%] min-h-[140px] sm:min-h-[200px] md:min-h-[260px] p-5 sm:p-10 md:p-14 bg-transparent relative flex flex-col justify-center">
            <p className="text-lg sm:text-2xl lg:text-[40px] font-normal tracking-tight text-white leading-[1.3] max-w-3xl">
              Mais de{' '}
              <span className="inline-flex items-center px-3 py-0.5 sm:px-5 sm:py-1.5 rounded-[20px] bg-white text-[var(--color-brand)] font-bold shadow-xs mx-1 align-baseline text-base sm:text-xl lg:text-[34px]">
                45 anos
              </span>{' '}
              integrando PGR, PCMSO e LTCAT para sua empresa evitar multas e processos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
