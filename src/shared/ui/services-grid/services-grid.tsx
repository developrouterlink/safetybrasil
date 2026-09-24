'use client';

import { ServicesGridLeft } from './components/services-grid-left';
import { ServicesGridRight } from './components/services-grid-right';
import type { ServicesGridProps } from './services-grid.types';

export const ServicesGrid = ({
  variant = 'default',
  ...props
}: ServicesGridProps) => {
  if (variant === 'esocial') {
    return <ServicesGridRight {...props} />;
  }

  return <ServicesGridLeft {...props} />;
};
