'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Container from './Container';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Product', href: '/product' },
  { name: 'How to Use', href: '/how-to-use' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <Container>
        <nav className="flex items-center justify-between py-5">
          <Link href="/" className="text-2xl font-bold text-white hover:text-gray-300 transition-colors tracking-tight">
            SkyGlider
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wider"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-gray-300 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </nav>
      </Container>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <Container>
            <div className="py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors uppercase tracking-wider"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

