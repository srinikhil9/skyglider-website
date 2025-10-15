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
    <footer className="bg-gray-900 text-gray-300 py-16 sm:py-20 lg:py-24 mt-20 sm:mt-24 lg:mt-32" style={{ backgroundColor: '#0A0A0A' }}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 xl:gap-16">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-black text-white mb-5 lg:mb-6">SkyGlider</h3>
            <p className="text-base lg:text-lg mb-4 lg:mb-6 leading-relaxed" style={{ color: '#D1D5DB' }}>
              Bringing effortless movement into your daily routine.
            </p>
            <p className="text-sm lg:text-base" style={{ color: '#9CA3AF' }}>
              Simple. Portable. Effective.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg lg:text-xl font-bold text-white mb-5 lg:mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-base lg:text-lg hover:text-accent transition-colors duration-200 font-medium"
                    style={{ color: '#D1D5DB' }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg lg:text-xl font-bold text-white mb-5 lg:mb-6">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@theskyglider.com"
                  className="text-base lg:text-lg hover:text-accent transition-colors duration-200 font-medium"
                  style={{ color: '#D1D5DB' }}
                >
                  hello@theskyglider.com
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-base lg:text-lg hover:text-accent transition-colors duration-200 font-medium"
                  style={{ color: '#D1D5DB' }}
                >
                  Contact Form
                </Link>
              </li>
            </ul>
            {/* Social Links Placeholder */}
            <div className="mt-4">
              <p className="text-sm" style={{ color: '#9CA3AF' }}>Follow us on TikTok</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 lg:mt-16 pt-8 lg:pt-10 text-center text-sm lg:text-base" style={{ borderColor: '#333333', color: '#9CA3AF' }}>
          <p>&copy; {currentYear} SkyGlider. All rights reserved.</p>
          <p className="mt-3">Made with care for your movement and wellness.</p>
        </div>
      </Container>
    </footer>
  );
}

