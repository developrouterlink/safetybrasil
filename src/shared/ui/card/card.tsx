import React, { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type {
  CardProps,
  CardHeaderProps,
  CardTitleProps,
  CardDescriptionProps,
  CardContentProps,
  CardFooterProps,
} from './card.types';

export const cardVariants = cva(
  'rounded-[var(--radius-lg)] transition-all duration-[var(--duration-base)] overflow-hidden',
  {
    variants: {
      variant: {
        bordered:
          'bg-[var(--color-surface)] border border-[color:var(--color-border)] shadow-[var(--shadow-sm)]',
        elevated:
          'bg-[var(--color-bg-elevated)] border border-[color:var(--color-border-hairline)] shadow-[var(--shadow-md)]',
        sunken:
          'bg-[var(--color-surface-sunken)] border border-transparent',
        flat: 'bg-transparent border-none shadow-none',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
    },
    defaultVariants: {
      variant: 'bordered',
      padding: 'md',
    },
  },
);

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      as: Component = 'div',
      className,
      variant = 'bordered',
      padding = 'md',
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={twMerge(
          clsx(cardVariants({ variant, padding }), className),
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(clsx('flex flex-col space-y-1.5 mb-4', className))}
        {...props}
      >
        {children}
      </div>
    );
  },
);

CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ as: Component = 'h3', className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={twMerge(
          clsx(
            'text-lg md:text-xl font-semibold text-[var(--color-fg-heading)] tracking-tight leading-snug',
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

CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ className, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={twMerge(
        clsx('text-sm text-[var(--color-fg-muted)] leading-normal', className),
      )}
      {...props}
    >
      {children}
    </p>
  );
});

CardDescription.displayName = 'CardDescription';

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={twMerge(clsx('space-y-3', className))} {...props}>
        {children}
      </div>
    );
  },
);

CardContent.displayName = 'CardContent';

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          clsx(
            'flex items-center pt-4 mt-4 border-t border-[color:var(--color-border-hairline)]',
            className,
          ),
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

CardFooter.displayName = 'CardFooter';
