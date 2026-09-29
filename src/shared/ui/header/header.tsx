'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../button';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { HeaderProps, HeaderNavLink } from './header.types';

const defaultNavLinks: HeaderNavLink[] = [
  { label: 'Serviços', href: '/#servicos' },
  { label: 'eSocial', href: '/esocial' },
  { label: 'Clientes', href: '/clientes' },
  { label: 'Rede Credenciada', href: '/#rede-credenciada' },
  { label: 'Contato', href: '/#contato' },
];

export const Header = ({
  className,
  navLinks = defaultNavLinks,
  ctaLabel = 'Fale Conosco',
  ctaHref = '/#contato',
}: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={twMerge(clsx('w-full max-w-[1280px] mx-auto', className))}>
      <div className="w-full bg-white rounded-[20px] shadow-[0px_12px_24px_rgba(0,0,0,0.08)] px-5 sm:px-8 h-[94px] max-h-[94px] flex items-center justify-between transition-all duration-300 border border-slate-100/90">
        <Link
          href="/"
          className="flex items-center shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] rounded-lg p-1"
          aria-label="Safety Brasil"
        >
          <Image
            src="/logo.png"
            alt="Safety Brasil"
            width={84}
            height={74}
            className="h-[60px] md:h-[64px] w-auto object-contain transition-transform group-hover:scale-105"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <nav aria-label="Navegação principal" className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[calc(var(--framer-root-font-size,1rem)*1.2)] font-medium text-[#1c2b33] hover:text-[var(--color-brand)] transition-colors py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] rounded-md"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Button
            as={Link}
            href={ctaHref}
            size="md"
            variant="primary"
            className="shadow-sm hover:shadow-md px-6 text-[15px]"
          >
            {ctaLabel}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-white rounded-[20px] shadow-[0px_12px_24px_rgba(0,0,0,0.08)] p-6 border border-slate-100 flex flex-col space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 text-[calc(var(--framer-root-font-size,1rem)*1.2)] font-medium text-[#1c2b33] hover:text-[var(--color-brand)] hover:bg-slate-50 rounded-xl transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-100">
            <Button
              as={Link}
              href={ctaHref}
              onClick={() => setIsMobileMenuOpen(false)}
              size="md"
              className="w-full text-[15px]"
            >
              {ctaLabel}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
