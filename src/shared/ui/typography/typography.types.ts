import type { ElementType, HTMLAttributes, ReactNode } from 'react';

export type TypographyVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'lead'
  | 'body'
  | 'body-sm'
  | 'caption'
  | 'overline';

export type TypographyWeight =
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold';

export type TypographyColor =
  | 'default'
  | 'heading'
  | 'muted'
  | 'subtle'
  | 'brand'
  | 'inverse'
  | 'success'
  | 'warning'
  | 'danger';

export type TypographyAlign = 'left' | 'center' | 'right' | 'justify';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  color?: TypographyColor;
  align?: TypographyAlign;
  children: ReactNode;
}
