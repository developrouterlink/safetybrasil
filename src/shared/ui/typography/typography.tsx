import React, { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type {
  TypographyProps,
  TypographyVariant,
} from './typography.types';

const typographyVariants = cva('transition-colors', {
  variants: {
    variant: {
      display:
        'text-5xl md:text-6xl font-bold tracking-tightest leading-tight',
      h1: 'text-3xl md:text-4xl font-bold tracking-tighter leading-tight',
      h2: 'text-2xl md:text-3xl font-bold tracking-tight leading-snug',
      h3: 'text-xl md:text-2xl font-semibold tracking-tight leading-snug',
      h4: 'text-lg md:text-xl font-semibold leading-normal',
      h5: 'text-base font-semibold leading-normal',
      h6: 'text-sm font-semibold leading-normal',
      lead: 'text-lg md:text-xl font-normal leading-relaxed',
      body: 'text-base font-normal leading-normal',
      'body-sm': 'text-sm font-normal leading-normal',
      caption: 'text-xs font-normal leading-normal',
      overline:
        'text-[11px] font-bold uppercase tracking-wider leading-none',
    },
    color: {
      default: 'text-[var(--color-fg)]',
      heading: 'text-[var(--color-fg-heading)]',
      muted: 'text-[var(--color-fg-muted)]',
      subtle: 'text-[var(--color-fg-subtle)]',
      brand: 'text-[var(--color-brand)]',
      inverse: 'text-white',
      success: 'text-[var(--color-success-600)]',
      warning: 'text-[var(--color-warning-600)]',
      danger: 'text-[var(--color-danger-600)]',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
  },
  defaultVariants: {
    variant: 'body',
    color: 'default',
    align: 'left',
  },
});

const defaultElementMap: Record<TypographyVariant, React.ElementType> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  lead: 'p',
  body: 'p',
  'body-sm': 'p',
  caption: 'span',
  overline: 'span',
};

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  (
    {
      as,
      variant = 'body',
      weight,
      color,
      align,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const Component = as || defaultElementMap[variant] || 'p';

    return (
      <Component
        ref={ref}
        className={twMerge(
          clsx(
            typographyVariants({
              variant,
              weight,
              color,
              align,
            }),
            className,
          ),
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Typography.displayName = 'Typography';

// Componentes convenientes para uso rápido
export const Heading = forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, 'as' | 'variant'> & { level?: 1 | 2 | 3 | 4 | 5 | 6 }
>(({ level = 1, ...props }, ref) => {
  const variantMap: Record<number, TypographyVariant> = {
    1: 'h1',
    2: 'h2',
    3: 'h3',
    4: 'h4',
    5: 'h5',
    6: 'h6',
  };

  return (
    <Typography
      ref={ref}
      as={`h${level}`}
      variant={variantMap[level]}
      color="heading"
      {...props}
    />
  );
});

Heading.displayName = 'Heading';

export const Text = forwardRef<HTMLElement, TypographyProps>((props, ref) => {
  return <Typography ref={ref} {...props} />;
});

Text.displayName = 'Text';
