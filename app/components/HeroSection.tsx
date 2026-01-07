'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import logo from '../assets/solid-logo.png';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      // Restart video 2 seconds before the end
      if (video.duration - video.currentTime <= 3) {
        video.currentTime = 0;
      }
    }
  };

  return (
    <section id="hero" ref={heroRef} className="hero-section">
      <video 
        ref={videoRef}
        className="hero-background"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`
        }}
        autoPlay
        loop
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-logo hero-fade-in" style={{ animationDelay: '0.2s', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Image 
            src={logo} 
            alt="Karzone" 
            width={300}
            height={100}
            style={{ 
              height: 'auto',
              width: 'auto',
              maxWidth: '400px',
              objectFit: 'contain',
              margin: '0 auto',
              display: 'block'
            }}
            priority
          />
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

