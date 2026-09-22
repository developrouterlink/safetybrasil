export interface HeaderNavLink {
  label: string;
  href: string;
}

export interface HeaderProps {
  className?: string;
  navLinks?: HeaderNavLink[];
  ctaLabel?: string;
  ctaHref?: string;
}
