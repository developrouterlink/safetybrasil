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
  { label: 'Serviços', href: '#servicos' },
  { label: 'eSocial', href: '#esocial' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Rede Credenciada', href: '#rede-credenciada' },
  { label: 'Contato', href: '#contato' },
];

export const Header = ({
  className,
  navLinks = defaultNavLinks,
  ctaLabel = 'Fale Conosco',
  ctaHref = '#contato',
}: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={twMerge(clsx('w-full max-w-[1240px] mx-auto px-4', className))}>
      <div
        className="w-full bg-white rounded-[20px] shadow-[0px_12px_24px_rgba(0,0,0,0.08)] px-6 py-4 flex items-center justify-between transition-all duration-300 border border-slate-100/80"
      >
        {/* Marca / Logo — apenas a logo, sem o nome */}
        <Link href="/" className="flex items-center group" aria-label="Safety Brasil - Página Inicial">
          <Image
            src="/logo.png"
            alt="Safety Brasil"
            width={50}
            height={44}
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
            priority
          />
        </Link>

        {/* Links de navegação Desktop */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[14px] font-medium text-[var(--color-fg-muted)] hover:text-[var(--color-brand)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Ação / CTA Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <Button as={Link} href={ctaHref} size="sm" variant="primary">
            {ctaLabel}
          </Button>
        </div>

        {/* Botão Mobile */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Abrir Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Menu Dropdown Mobile */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-white rounded-[20px] shadow-[0px_12px_24px_rgba(0,0,0,0.08)] p-5 border border-slate-100 flex flex-col space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-[var(--color-fg-muted)] hover:text-[var(--color-brand)] hover:bg-slate-50 rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-slate-100">
            <Button
              as={Link}
              href={ctaHref}
              onClick={() => setIsMobileMenuOpen(false)}
              size="md"
              className="w-full"
            >
              {ctaLabel}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
