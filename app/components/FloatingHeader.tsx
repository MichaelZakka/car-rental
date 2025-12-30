'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '../assets/solid-logo.png';

export default function FloatingHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/categories', label: 'Collections' },
    { href: '/brands', label: 'Brands' },
    { href: '/showroom', label: 'Showroom' },
    { href: '/about', label: 'About' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  };

  return (
    <>
      <header className={`hero-floating-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="hero-floating-header-content">
          <Link href="/" className="hero-floating-header-logo">
            <Image 
              src={logo} 
              alt="Karzone" 
              width={100}
              height={30}
              style={{ 
                height: 'auto',
                width: 'auto',
                maxWidth: '100px',
                objectFit: 'contain',
                display: 'block'
              }}
              priority
            />
          </Link>
          <nav className="hero-floating-header-nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hero-floating-header-link ${isActive(link.href) ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            className={`hero-floating-header-burger ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`hero-floating-header-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <nav 
          className="hero-floating-header-mobile-nav"
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hero-floating-header-mobile-link ${isActive(link.href) ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}

