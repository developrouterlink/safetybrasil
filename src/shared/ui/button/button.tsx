import React, { forwardRef, type ElementType, type ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ButtonProps } from './button.types';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2',
    'font-semibold whitespace-nowrap select-none',
    'rounded-[var(--radius-full)] border border-transparent',
    'transition-[background-color,color,box-shadow,transform,border-color] duration-[var(--duration-base)] ease-[var(--ease-out)]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'active:scale-[0.98] cursor-pointer',
  ],
  {
    variants: {
      variant: {
        primary:
          'bg-[var(--color-brand)] text-white shadow-sm hover:bg-[var(--color-brand-hover)] hover:shadow-md active:bg-[var(--color-brand-active)]',
        secondary:
          'border-[color:var(--color-border-strong)] text-[var(--color-fg)] bg-white hover:bg-[var(--color-bg-muted)] hover:border-[#bec3c9] shadow-sm',
        outline:
          'border-[color:var(--color-brand)] text-[var(--color-brand)] bg-transparent hover:bg-[var(--color-brand-soft)]',
        ghost:
          'text-[var(--color-fg)] hover:bg-[var(--color-bg-muted)] hover:text-[var(--color-brand)]',
        danger:
          'bg-[var(--color-danger-500)] text-white shadow-sm hover:bg-[var(--color-danger-600)]',
      },
      size: {
        sm: 'h-9 px-4 text-[13px]',
        md: 'h-11 px-5 text-[14px]',
        lg: 'h-12 px-7 text-[15px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export const Button = forwardRef(function Button(
  {
    as,
    className,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    disabled,
    leftIcon,
    rightIcon,
    children,
    ...props
  }: ButtonProps<ElementType>,
  ref: React.ForwardedRef<HTMLElement>,
) {
  const Component = (as || 'button') as ElementType;

  return (
    <Component
      ref={ref}
      disabled={disabled || isLoading}
      className={twMerge(
        clsx(buttonVariants({ variant, size }), className),
      )}
      {...props}
    >
      {isLoading ? (
        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        leftIcon
      )}
      {children}
      {!isLoading && rightIcon}
    </Component>
  );
}) as <T extends ElementType = 'button'>(
  props: ButtonProps<T> & { ref?: React.Ref<HTMLElement> },
) => ReactNode;
