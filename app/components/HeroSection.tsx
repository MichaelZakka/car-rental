'use client';

import { useEffect, useState, useRef } from 'react';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" ref={heroRef} className="hero-section">
      <div 
        className="hero-background"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      ></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-logo hero-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="dealership-name">Karzone</h1>
          <div className="logo-divider"></div>
        </div>
        <h2 className="hero-tagline hero-fade-in" style={{ animationDelay: '0.4s' }}>
          Luxury Car Rental
        </h2>
        <p className="hero-subtitle hero-fade-in" style={{ animationDelay: '0.6s' }}>
          Experience Premium Mobility
        </p>
      </div>
      <div className="hero-ctas-container hero-fade-in" style={{ animationDelay: '0.8s' }}>
        {/* <div className="hero-ctas">
          <button className="cta-primary" onClick={() => scrollToSection('featured')}>
            View Inventory
          </button>
          <button className="cta-secondary" onClick={() => scrollToSection('contact')}>
            Schedule Test Drive
          </button>
        </div> */}
        <div 
          className="scroll-indicator" 
          onClick={() => scrollToSection('featured')}
        >
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
}

