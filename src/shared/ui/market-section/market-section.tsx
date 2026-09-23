'use client';

import React from 'react';
import Image from 'next/image';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Text } from '../typography';
import { useMarketSection } from './hooks';
import type { MarketSectionProps } from './market-section.types';

export const MarketSection = (props: MarketSectionProps) => {
  const { id, className, imageSrc, imageAlt, copy } = useMarketSection(props);

  return (
    <section
      id={id}
      className={twMerge(clsx('w-full max-w-[1280px] mx-auto py-6 sm:py-10', className))}
    >
      <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
        <div className="shrink-0 w-full max-w-[260px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={420}
            height={420}
            className="w-full h-auto object-contain mix-blend-multiply"
            priority
          />
        </div>

        <div className="flex-1">
          <Text
            variant="lead"
            className="text-lg sm:text-xl lg:text-[22px] text-[#1c2b33] leading-relaxed font-normal"
          >
            {copy}
          </Text>
        </div>
      </div>
    </section>
  );
};
