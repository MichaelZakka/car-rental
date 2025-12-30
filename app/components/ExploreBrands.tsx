'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import bmwLogo from '../assets/logos/BMW LOGO.png';
import mercedesLogo from '../assets/logos/Mercedes-logo.png';
import jaguarLogo from '../assets/logos/Jaguar_Logo.png';
import lamboLogo from '../assets/logos/Lambo_Logo.png';

interface Brand {
  name: string;
  count: number;
  logo: any;
}

export default function ExploreBrands() {
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const brands: Brand[] = [
    { name: 'BMW', count: 12, logo: bmwLogo },
    { name: 'Mercedes-Benz', count: 15, logo: mercedesLogo },
    { name: 'Jaguar', count: 5, logo: jaguarLogo },
    { name: 'Lamborghini', count: 6, logo: lamboLogo },
  ];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    let animationFrameId: number;
    const scrollSpeed = 0.5;

    const autoScroll = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId);
    };

    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="explore-brands-section">
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center',paddingBottom:"50px" }}>Explore by Brand</h2>
        
        <div className="brands-scroll-container" ref={scrollContainerRef}>
          <div className="brands-scroll-track">
            {/* Duplicate brands for seamless loop */}
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="brand-card"
                onClick={() => router.push(`/brands/${brand.name.toLowerCase().replace(/\s+/g, '-')}`)}
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '280px' }}
              >
                <div className="brand-placeholder" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: '1', gap: '1rem' }}>
                  <Image 
                    src={brand.logo} 
                    alt={brand.name}
                    width={120}
                    height={80}
                    style={{ objectFit: 'contain' }}
                  />
                  <h3 className="brand-name">{brand.name}</h3>
                </div>
                <p className="brand-count" style={{ marginTop: 'auto', textAlign: 'center' }}>{brand.count} vehicles</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
          <button 
            className="view-all-brands-btn"
            onClick={() => router.push('/brands')}
          >
            View All Brands →
          </button>
        </div>
      </div>
    </section>
  );
}

