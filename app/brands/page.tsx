'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import '../showroom.css';
import bmwLogo from '../assets/logos/BMW LOGO.png';
import mercedesLogo from '../assets/logos/Mercedes-logo.png';
import jaguarLogo from '../assets/logos/Jaguar_Logo.png';
import lamboLogo from '../assets/logos/Lambo_Logo.png';

export default function BrandsPage() {
  const router = useRouter();
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);

  const brands = [
    {
      name: 'BMW',
      count: 12,
      description: 'German luxury vehicles combining performance and elegance',
      logo: bmwLogo,
      tagline: 'The Ultimate Driving Machine'
    },
    {
      name: 'Mercedes-Benz',
      count: 15,
      description: 'Iconic luxury automobiles with cutting-edge technology',
      logo: mercedesLogo,
      tagline: 'The Best or Nothing'
    },
    {
      name: 'Jaguar',
      count: 5,
      description: 'British elegance meets powerful performance',
      logo: jaguarLogo,
      tagline: 'Grace, Space, Pace'
    },
    {
      name: 'Lamborghini',
      count: 6,
      description: 'Italian supercars with extreme performance and design',
      logo: lamboLogo,
      tagline: 'Expect the Unexpected'
    },
    {
      name: 'Audi',
      count: 10,
      description: 'Progressive design meets advanced engineering',
      tagline: 'Vorsprung durch Technik'
    },
    {
      name: 'Tesla',
      count: 8,
      description: 'Revolutionary electric vehicles for sustainable mobility',
      tagline: 'Electric Performance'
    },
    {
      name: 'Lexus',
      count: 9,
      description: 'Japanese luxury with unparalleled refinement',
      tagline: 'Experience Amazing'
    },
    {
      name: 'Porsche',
      count: 7,
      description: 'Legendary sports cars and high-performance vehicles',
      tagline: 'There is No Substitute'
    },
    {
      name: 'Genesis',
      count: 6,
      description: 'Modern luxury with bold design and innovation',
      tagline: 'Redefining Luxury'
    },
    {
      name: 'Cadillac',
      count: 8,
      description: 'American luxury with style and sophistication',
      tagline: 'Dare Greatly'
    },
    {
      name: 'Land Rover',
      count: 7,
      description: 'Luxury SUVs built for adventure and capability',
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
                <div className="brand-grid-image-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f8f8', minHeight: '200px' }}>
                  {brand.logo ? (
                    <Image 
                      src={brand.logo} 
                      alt={brand.name} 
                      width={180}
                      height={120}
                      style={{ objectFit: 'contain' }}
                    />
                  ) : (
                    <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#0a0a0a' }}>{brand.name}</h3>
                  )}
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

