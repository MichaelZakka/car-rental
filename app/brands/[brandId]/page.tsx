'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import '../../showroom.css';
import Footer from '../../components/Footer';

export default function BrandDetailPage({ params }: { params: { brandId: string } }) {
  const router = useRouter();
  const [hoveredCar, setHoveredCar] = useState<string | null>(null);

  const brandData: { [key: string]: any } = {
    'bmw': {
      name: 'BMW',
      logo: '🚗',
      tagline: 'The Ultimate Driving Machine',
      description: 'BMW has been at the forefront of automotive innovation for decades, delivering vehicles that combine luxury, performance, and cutting-edge technology. From sporty sedans to powerful SUVs, BMW offers a driving experience like no other.',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80',
      founded: '1916',
      headquarters: 'Munich, Germany'
    },
    'mercedes-benz': {
      name: 'Mercedes-Benz',
      logo: '⭐',
      tagline: 'The Best or Nothing',
      description: 'Mercedes-Benz stands as a symbol of automotive excellence, crafting vehicles that epitomize luxury, sophistication, and engineering prowess. With a rich heritage dating back over a century, Mercedes-Benz continues to set the standard for premium automobiles.',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80',
      founded: '1926',
      headquarters: 'Stuttgart, Germany'
    },
    'audi': {
      name: 'Audi',
      logo: '🔷',
      tagline: 'Vorsprung durch Technik',
      description: 'Audi represents progressive design and advanced engineering. Known for their quattro all-wheel-drive system and sleek designs, Audi vehicles deliver a perfect blend of performance, luxury, and innovation.',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=80',
      founded: '1909',
      headquarters: 'Ingolstadt, Germany'
    },
    'tesla': {
      name: 'Tesla',
      logo: '⚡',
      tagline: 'Electric Performance',
      description: 'Tesla has revolutionized the automotive industry with their all-electric vehicles. Combining cutting-edge technology, impressive performance, and sustainable energy solutions, Tesla is leading the charge toward a cleaner, more efficient future.',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&q=80',
      founded: '2003',
      headquarters: 'Austin, Texas, USA'
    },
    'lexus': {
      name: 'Lexus',
      logo: '💎',
      tagline: 'Experience Amazing',
      description: 'Lexus delivers Japanese luxury with meticulous attention to detail and unparalleled refinement. Known for their reliability, comfort, and innovative hybrid technology, Lexus vehicles offer a serene and sophisticated driving experience.',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80',
      founded: '1989',
      headquarters: 'Nagoya, Japan'
    },
    'porsche': {
      name: 'Porsche',
      logo: '🏎️',
      tagline: 'There is No Substitute',
      description: 'Porsche is synonymous with high-performance sports cars and legendary driving dynamics. With a rich motorsport heritage and iconic designs, Porsche continues to produce vehicles that thrill enthusiasts and collectors worldwide.',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
      founded: '1931',
      headquarters: 'Stuttgart, Germany'
    },
    'genesis': {
      name: 'Genesis',
      logo: '✨',
      tagline: 'Redefining Luxury',
      description: 'Genesis brings a fresh perspective to luxury automobiles with bold designs, advanced technology, and exceptional value. As Hyundai\'s luxury division, Genesis is quickly establishing itself as a formidable competitor in the premium segment.',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80',
      founded: '2015',
      headquarters: 'Seoul, South Korea'
    },
    'cadillac': {
      name: 'Cadillac',
      logo: '👑',
      tagline: 'Dare Greatly',
      description: 'Cadillac represents American luxury at its finest. With a storied history of innovation and style, Cadillac continues to create vehicles that blend bold design, advanced technology, and powerful performance.',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
      founded: '1902',
      headquarters: 'Detroit, Michigan, USA'
    },
    'jaguar': {
      name: 'Jaguar',
      logo: '🐆',
      tagline: 'Grace, Space, Pace',
      description: 'Jaguar embodies British elegance and sporting performance. Known for their graceful designs and exhilarating driving dynamics, Jaguar vehicles deliver a unique blend of luxury, style, and power.',
      image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=80',
      founded: '1922',
      headquarters: 'Whitley, England'
    },
    'land-rover': {
      name: 'Land Rover',
      logo: '🏔️',
      tagline: 'Above and Beyond',
      description: 'Land Rover is renowned for creating luxury SUVs with unmatched off-road capability. Combining refinement with ruggedness, Land Rover vehicles are built for adventure while providing premium comfort and style.',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&q=80',
      founded: '1948',
      headquarters: 'Gaydon, England'
    }
  };

  const brand = brandData[params.brandId] || brandData['bmw'];

  const scrollToSection = (id: string) => {
    // For brand detail page, redirect to home page with hash
    if (typeof window !== 'undefined') {
      window.location.href = `/#${id}`;
    }
  };

  // Sample cars - in real app, filter by brand
  const cars = [
    {
      id: '1',
      name: `2024 ${brand.name} 5 Series`,
      year: '2024',
      horsepower: '335 HP',
      acceleration: '5.1s',
      fuelType: 'Hybrid',
      price: '$58,900',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
      transmission: 'Automatic',
      seats: 5,
      mileage: '12,000 mi'
    },
    {
      id: '2',
      name: `2024 ${brand.name} X5`,
      year: '2024',
      horsepower: '362 HP',
      acceleration: '4.9s',
      fuelType: 'Gasoline',
      price: '$61,500',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
      transmission: 'Automatic',
      seats: 5,
      mileage: '8,500 mi'
    },
    {
      id: '3',
      name: `2024 ${brand.name} Sedan`,
      year: '2024',
      horsepower: '335 HP',
      acceleration: '5.1s',
      fuelType: 'Gasoline',
      price: '$56,500',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
      transmission: 'Automatic',
      seats: 5,
      mileage: '10,200 mi'
    },
    {
      id: '4',
      name: `2024 ${brand.name} Coupe`,
      year: '2024',
      horsepower: '402 HP',
      acceleration: '4.2s',
      fuelType: 'Gasoline',
      price: '$72,000',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
      transmission: 'Automatic',
      seats: 4,
      mileage: '5,800 mi'
    },
    {
      id: '5',
      name: `2024 ${brand.name} SUV`,
      year: '2024',
      horsepower: '375 HP',
      acceleration: '5.5s',
      fuelType: 'Hybrid',
      price: '$68,900',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
      transmission: 'Automatic',
      seats: 7,
      mileage: '9,200 mi'
    },
    {
      id: '6',
      name: `2023 ${brand.name} Sport`,
      year: '2023',
      horsepower: '450 HP',
      acceleration: '3.8s',
      fuelType: 'Gasoline',
      price: '$85,000',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
      transmission: 'Automatic',
      seats: 4,
      mileage: '15,500 mi'
    }
  ];

  return (
    <div className="showroom-page">
      {/* Brand Hero */}
      <section className="brands-page-hero">
        <div className="brands-hero-content">
          <h1 className="brands-hero-title">{brand.name}</h1>
          <p className="brands-hero-subtitle">
            {brand.tagline}
          </p>
          <p className="brands-hero-description" style={{ 
            marginTop: '2rem', 
            fontSize: '1.125rem', 
            lineHeight: '1.8', 
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            {brand.description}
          </p>
        </div>
      </section>

      {/* Available Vehicles */}
      <section className="brand-vehicles-section">
        <div className="container">
          <h2 className="section-title">Available {brand.name} Vehicles</h2>
          <div className="brand-vehicles-grid">
            {cars.map((car) => (
              <div
                key={car.id}
                className="brand-vehicle-card"
                onMouseEnter={() => setHoveredCar(car.id)}
                onMouseLeave={() => setHoveredCar(null)}
                onClick={() => router.push(`/cars/${car.id}`)}
              >
                <div className="brand-vehicle-image-wrapper">
                  <img src={car.image} alt={car.name} className="brand-vehicle-image" />
                  <div className="brand-vehicle-overlay"></div>
                </div>
                <div className="brand-vehicle-info">
                  <h3 className="brand-vehicle-name">{car.name}</h3>
                  <p className="brand-vehicle-year">{car.year}</p>
                  <div className="brand-vehicle-specs">
                    <div className="spec-item">
                      <span className="spec-label">Power</span>
                      <span className="spec-value">{car.horsepower}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">0-60mph</span>
                      <span className="spec-value">{car.acceleration}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Fuel</span>
                      <span className="spec-value">{car.fuelType}</span>
                    </div>
                  </div>
                  <div className="brand-vehicle-footer">
                    <span className="brand-vehicle-price">{car.price}</span>
                    <button className="brand-vehicle-btn">
                      {hoveredCar === car.id ? 'View Details →' : 'View Details'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="brand-cta-section">
        <div className="container">
          <div className="brand-cta-content">
            <h2 className="brand-cta-title">Interested in a {brand.name}?</h2>
            <p className="brand-cta-text">
              Schedule a test drive or contact our sales team to learn more about these exceptional vehicles
            </p>
            <div className="brand-cta-buttons">
              <button 
                className="brand-cta-btn-primary"
                onClick={() => router.push('/#contact')}
              >
                Schedule Test Drive
              </button>
              <button 
                className="brand-cta-btn-secondary"
                onClick={() => router.push('/brands')}
              >
                View All Brands
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

