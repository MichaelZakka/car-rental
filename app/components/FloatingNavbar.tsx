'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import logo from '../assets/solid-logo.png';

export default function FloatingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === '/') {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push('/#contact');
    }
    setIsMobileMenuOpen(false);
  };

  type NavLink = {
    href: string;
    label: string;
    type: 'link' | 'scroll';
    onClick?: (e: React.MouseEvent) => void;
  };

  const navLinks: NavLink[] = [
    { href: '/', label: 'Home', type: 'link' },
    { href: '/categories', label: 'Collections', type: 'link' },
    { href: '/brands', label: 'Brands', type: 'link' },
    { href: '/showroom', label: 'Showroom', type: 'link' },
    { href: '/about', label: 'About', type: 'link' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    if (href.startsWith('#')) {
      return false; // Scroll links don't get active state
    }
    return pathname?.startsWith(href);
  };

  return (
    <>
      <nav className={`floating-navbar ${isScrolled ? 'floating-navbar-scrolled' : ''}`}>
        <div className="floating-navbar-container">
          <Link href="/" className="floating-navbar-logo">
            <Image 
              src={logo} 
              alt="Karzone" 
              width={120}
              height={35}
              style={{ 
                height: 'auto',
                width: 'auto',
                maxWidth: '120px',
                minWidth: '80px',
                objectFit: 'contain',
                display: 'block'
              }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="floating-navbar-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.type === 'scroll' ? (
                  <a
                    href={link.href}
                    className={`floating-navbar-link ${isActive(link.href) ? 'floating-navbar-link-active' : ''}`}
                    onClick={link.onClick}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className={`floating-navbar-link ${isActive(link.href) ? 'floating-navbar-link-active' : ''}`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={`floating-navbar-toggle ${isMobileMenuOpen ? 'floating-navbar-toggle-open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`floating-navbar-mobile-menu ${isMobileMenuOpen ? 'floating-navbar-mobile-menu-open' : ''}`}>
        <ul className="floating-navbar-mobile-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.type === 'scroll' ? (
                <a
                  href={link.href}
                  className={`floating-navbar-mobile-link ${isActive(link.href) ? 'floating-navbar-mobile-link-active' : ''}`}
                  onClick={link.onClick}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className={`floating-navbar-mobile-link ${isActive(link.href) ? 'floating-navbar-mobile-link-active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

