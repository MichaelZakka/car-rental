'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import '../showroom.css';

export default function BrandsPage() {
  const router = useRouter();
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);

  const brands = [
    {
      name: 'BMW',
      count: 12,
      description: 'German luxury vehicles combining performance and elegance',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
      tagline: 'The Ultimate Driving Machine'
    },
    {
      name: 'Mercedes-Benz',
      logo: '⭐',
      count: 15,
      description: 'Iconic luxury automobiles with cutting-edge technology',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
      tagline: 'The Best or Nothing'
    },
    {
      name: 'Audi',
      logo: '🔷',
      count: 10,
      description: 'Progressive design meets advanced engineering',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
      tagline: 'Vorsprung durch Technik'
    },
    {
      name: 'Tesla',
      logo: '⚡',
      count: 8,
      description: 'Revolutionary electric vehicles for sustainable mobility',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
      tagline: 'Electric Performance'
    },
    {
      name: 'Lexus',
      logo: '💎',
      count: 9,
      description: 'Japanese luxury with unparalleled refinement',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
      tagline: 'Experience Amazing'
    },
    {
      name: 'Porsche',
      logo: '🏎️',
      count: 7,
      description: 'Legendary sports cars and high-performance vehicles',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
      tagline: 'There is No Substitute'
    },
    {
      name: 'Genesis',
      logo: '✨',
      count: 6,
      description: 'Modern luxury with bold design and innovation',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
      tagline: 'Redefining Luxury'
    },
    {
      name: 'Cadillac',
      logo: '👑',
      count: 8,
      description: 'American luxury with style and sophistication',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
      tagline: 'Dare Greatly'
    },
    {
      name: 'Jaguar',
      logo: '🐆',
      count: 5,
      description: 'British elegance meets powerful performance',
      image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80',
      tagline: 'Grace, Space, Pace'
    },
    {
      name: 'Land Rover',
      logo: '🏔️',
      count: 7,
      description: 'Luxury SUVs built for adventure and capability',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
      tagline: 'Above and Beyond'
    },
  ];

  return (
    <div className="showroom-page">
      <section className="brands-page-hero">
        <div className="brands-hero-content">
          <h1 className="brands-hero-title">Explore Our Brands</h1>
          <p className="brands-hero-subtitle">
            Discover premium vehicles from the world's most prestigious automotive manufacturers
          </p>
        </div>
      </section>

      <section className="brands-grid-section">
        <div className="container">
          <div className="brands-grid">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="brand-grid-card"
                onMouseEnter={() => setHoveredBrand(brand.name)}
                onMouseLeave={() => setHoveredBrand(null)}
                onClick={() => router.push(`/brands/${brand.name.toLowerCase().replace(/\s+/g, '-')}`)}
              >
                <div className="brand-grid-image-wrapper">
                  <img 
                    src={brand.image} 
                    alt={brand.name} 
                    className="brand-grid-image"
                  />
                  <div className="brand-grid-overlay"></div>
                </div>
                <div className="brand-grid-content">
                  <h3 className="brand-grid-name">{brand.name}</h3>
                  <p className="brand-grid-tagline">{brand.tagline}</p>
                  <p className="brand-grid-description">{brand.description}</p>
                  <div className="brand-grid-footer">
                    <span className="brand-grid-count">{brand.count} Vehicles Available</span>
                    <button className="brand-grid-btn">
                      Explore {hoveredBrand === brand.name ? '→' : ''}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="brands-cta-section">
        <div className="container">
          <div className="brands-cta-content">
            <h2 className="brands-cta-title">Can't Find Your Preferred Brand?</h2>
            <p className="brands-cta-text">
              Contact our team and we'll help you find exactly what you're looking for
            </p>
            <button 
              className="brands-cta-btn"
              onClick={() => router.push('/#contact')}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

