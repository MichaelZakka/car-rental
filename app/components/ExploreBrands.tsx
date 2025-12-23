'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface Brand {
  name: string;
  count: number;
}

export default function ExploreBrands() {
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const brands: Brand[] = [
    { name: 'BMW', count: 12 },
    { name: 'Mercedes-Benz', count: 15 },
    { name: 'Audi', count: 10 },
    { name: 'Tesla', count: 8 },
    { name: 'Lexus', count: 9 },
    { name: 'Porsche', count: 7 },
    { name: 'Genesis', count: 6 },
    { name: 'Cadillac', count: 8 },
    { name: 'Jaguar', count: 5 },
    { name: 'Land Rover', count: 7 },
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
        <div className="section-header">
          <h2 className="section-title">Explore by Brand</h2>
          <button 
            className="view-all-brands-btn"
            onClick={() => router.push('/brands')}
          >
            View All Brands →
          </button>
        </div>
        
        <div className="brands-scroll-container" ref={scrollContainerRef}>
          <div className="brands-scroll-track">
            {/* Duplicate brands for seamless loop */}
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="brand-card"
                onClick={() => router.push(`/brands/${brand.name.toLowerCase().replace(/\s+/g, '-')}`)}
              >
                <div className="brand-placeholder">{brand.name}</div>
                <p className="brand-count">{brand.count} vehicles</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

