'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/about', label: 'About' },
    { href: '/cv', label: 'CV' },
    { href: '/projects', label: 'Projects' },
    { href: '/publications', label: 'Publications' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-40 border-b-2 border-foreground bg-background">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="text-[11px] font-semibold uppercase tracking-[0.22em]"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'border-2 px-2 py-1 text-[11px] font-medium uppercase tracking-[0.16em]',
                    isActive
                      ? 'border-foreground bg-secondary text-secondary-foreground'
                      : 'border-transparent hover:border-foreground hover:bg-secondary'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="border-t-2 border-foreground py-3 md:hidden">
            <div className="flex flex-col gap-1">
              {links.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'border-2 px-2 py-2 text-[11px] font-medium uppercase tracking-[0.16em]',
                      isActive
                        ? 'border-foreground bg-secondary text-secondary-foreground'
                        : 'border-transparent hover:border-foreground hover:bg-secondary'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
