import React from 'react';
import Link from 'next/link';
import Container from './Container';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Product', href: '/product' },
  { name: 'How to Use', href: '/how-to-use' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 mt-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">SkyGlider</h3>
            <p className="text-slate-400 mb-4 leading-relaxed">
              Bringing effortless movement into your daily routine.
            </p>
            <p className="text-sm text-slate-500">
              Simple. Portable. Effective.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-sky-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello@theskyglider.com"
                  className="text-sm hover:text-sky-400 transition-colors"
                >
                  hello@theskyglider.com
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-sky-400 transition-colors"
                >
                  Contact Form
                </Link>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm text-slate-500">Follow us on TikTok</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {currentYear} SkyGlider. All rights reserved.</p>
          <p className="mt-2">Made with care for your movement and wellness.</p>
        </div>
      </Container>
    </footer>
  );
}

