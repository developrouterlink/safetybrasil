'use client';

import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { Button } from '../button';
import type { HeroFridayProps } from './hero-friday.types';

export const HeroFriday = ({
  className,
  titlePrefix = 'Safety Brasil®',
  titleHighlight = 'Segurança e Medicina do Trabalho',
  description = 'Segurança é coisa séria e disso a gente entende!',
  ctaText = 'Saiba mais',
  ctaHref = '#servicos',
}: HeroFridayProps) => {
  return (
    <section className={twMerge(clsx('w-full max-w-[1280px] mx-auto', className))}>
      <div className="w-full min-h-[592px] lg:h-[592px] bg-[#f2f5f8] rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px] relative overflow-hidden flex flex-col lg:block">
        <div className="order-2 lg:order-none relative w-full h-[360px] sm:h-[420px] lg:h-full lg:absolute lg:inset-0 rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px] overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/hero.png"
              alt="Profissional da Safety Brasil com smartphone"
              fill
              sizes="(max-width: 1024px) 100vw, 1280px"
              className="object-cover object-[55%_center] lg:object-[60%_20%]"
              priority
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent lg:hidden" />

          <div className="absolute bottom-5 left-6 lg:bottom-14 lg:left-10 z-20">
            <Button
              as={Link}
              href={ctaHref}
              size="md"
              variant="primary"
              className="shadow-sm hover:shadow-md px-7 text-[15px]"
            >
              {ctaText}
            </Button>
          </div>
        </div>

        <div className="order-1 lg:order-none bg-[#f2f5f8] rounded-br-[24px] flex flex-col justify-center items-start gap-[22px] w-full lg:w-[48%] lg:min-w-[420px] p-6 sm:p-8 lg:p-[48px_40px_36px_0] relative lg:absolute lg:top-0 lg:left-0 lg:h-[416px] z-10">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="hidden lg:block absolute top-0 -right-[24px] pointer-events-none fill-[#f2f5f8]"
            aria-hidden="true"
          >
            <path d="M0 0 L24 0 C10.745 0 0 10.745 0 24 Z" />
          </svg>

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="hidden lg:block absolute -bottom-[24px] left-0 pointer-events-none fill-[#f2f5f8]"
            aria-hidden="true"
          >
            <path d="M0 0 L0 24 C0 10.745 10.745 0 24 0 Z" />
          </svg>

          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#111827] leading-[1.12] tracking-[-0.03em]">
            <span className="block text-[#111827]">{titlePrefix}</span>
            <span className="text-[var(--color-brand)] block mt-1">{titleHighlight}</span>
          </h1>
          <p className="text-base sm:text-lg text-[#6B7280] leading-[1.5] max-w-md font-normal">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
