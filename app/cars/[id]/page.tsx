'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import '../../showroom.css';

export default function CarDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'specs' | 'description' | 'features'>('specs');

  const carData: { [key: string]: any } = {
    '1': {
      name: '2024 BMW 5 Series',
      year: '2024',
      category: 'Luxury Sedans',
      price: '$58,900',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80',
      images: [
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80',
        'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80',
        'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=80'
      ],
      specs: {
        horsepower: '335 HP',
        acceleration: '5.1s',
        fuelType: 'Hybrid',
        transmission: 'Automatic',
        seats: 5,
        mileage: '12,000 mi',
        engine: '3.0L I6 Hybrid',
        drivetrain: 'AWD',
        mpg: '28 City / 36 Highway'
      },
      description: 'The 2024 BMW 5 Series combines luxury, performance, and cutting-edge technology. With its refined interior, powerful hybrid engine, and advanced safety features, this sedan delivers an exceptional driving experience.',
      features: [
        'Premium Leather Interior',
        'Panoramic Sunroof',
        'Advanced Driver Assistance',
        'Wireless Charging',
        'Premium Sound System',
        'Navigation System',
        'Heated & Ventilated Seats',
        '360° Camera System'
      ]
    },
    '2': {
      name: '2024 Mercedes-Benz E-Class',
      year: '2024',
      category: 'Luxury Sedans',
      price: '$61,500',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80',
      images: [
        'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80',
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80',
        'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=80'
      ],
      specs: {
        horsepower: '362 HP',
        acceleration: '4.9s',
        fuelType: 'Gasoline',
        transmission: 'Automatic',
        seats: 5,
        mileage: '8,500 mi',
        engine: '3.0L V6 Turbo',
        drivetrain: 'RWD',
        mpg: '23 City / 31 Highway'
      },
      description: 'The Mercedes-Benz E-Class represents the perfect balance of elegance and performance. With its sophisticated design, powerful engine, and luxurious amenities, it sets the standard for executive sedans.',
      features: [
        'MBUX Infotainment System',
        'AMG Line Package',
        'Burmester Sound System',
        'Air Suspension',
        'Active Brake Assist',
        'Keyless-Go',
        'Ambient Lighting',
        'Comfort Seats'
      ]
    }
  };

  const carId = params.id as string;
  const car = carData[carId] || carData['1'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentImageIndex < car.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
    if (isRightSwipe && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % car.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? car.images.length - 1 : prev - 1));
  };

  return (
    <div className="showroom-page">
      {/* Image Carousel as Hero */}
      <header className="car-detail-image-section car-detail-hero-carousel">
        <Link href="/categories" className="car-detail-back-link">
          ← Back to Categories
        </Link>
        
        <div 
          className="car-detail-image-carousel"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="car-detail-image-slider"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {car.images.map((img: string, index: number) => (
              <div key={index} className="car-detail-image-slide">
                <img src={img} alt={`${car.name} view ${index + 1}`} />
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            className="car-image-arrow car-image-arrow-left"
            onClick={prevImage}
            aria-label="Previous image"
          >
            ←
          </button>
          <button 
            className="car-image-arrow car-image-arrow-right"
            onClick={nextImage}
            aria-label="Next image"
          >
            →
          </button>

          {/* Dots Indicator */}
          <div className="car-image-dots">
            {car.images.map((_: string, index: number) => (
              <button
                key={index}
                className={`car-image-dot ${currentImageIndex === index ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Image Counter */}
          <div className="car-image-counter">
            {currentImageIndex + 1} / {car.images.length}
          </div>

          {/* Hero Content Overlay */}
          <div className="car-detail-hero-content-overlay">
            <div className="container">
              <div className="car-detail-hero-inner">
                <div className="car-detail-hero-badge">
                  <span className="badge-text">{car.category}</span>
                </div>
                <h1 className="car-detail-hero-title">
                  <span className="title-line-2">{car.name}</span>
                </h1>
                <p className="car-detail-hero-description">
                  {car.description}
                </p>
                <div className="car-detail-hero-stats">
                  <div className="hero-stat">
                    <div className="stat-number">{car.price}</div>
                    <div className="stat-label">PRICE</div>
                  </div>
                  <div className="hero-stat">
                    <div className="stat-number">{car.specs.horsepower}</div>
                    <div className="stat-label">HORSEPOWER</div>
                  </div>
                  <div className="hero-stat">
                    <div className="stat-number">{car.specs.acceleration}</div>
                    <div className="stat-label">0-60 MPH</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Car Info with Tabs */}
      <section className="car-detail-section">
        <div className="container">
          <div className="car-detail-info-wrapper">
            <div className="car-detail-header-info">
              <span className="car-detail-category">{car.category}</span>
              <h1 className="car-detail-name">{car.name}</h1>
              <div className="car-detail-price-section">
                <span className="car-detail-price-label">Price</span>
                <span className="car-detail-price">{car.price}</span>
              </div>
            </div>

            {/* Tabs */}
            <div className="car-detail-tabs">
              <button
                className={`car-detail-tab ${activeTab === 'specs' ? 'active' : ''}`}
                onClick={() => setActiveTab('specs')}
              >
                Specifications
              </button>
              <button
                className={`car-detail-tab ${activeTab === 'description' ? 'active' : ''}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button
                className={`car-detail-tab ${activeTab === 'features' ? 'active' : ''}`}
                onClick={() => setActiveTab('features')}
              >
                Features
              </button>
            </div>

            {/* Tab Content */}
            <div className="car-detail-tab-content">
              {activeTab === 'specs' && (

                <div className="car-detail-specs-grid">
                <div className="car-detail-spec-item">
                  <span className="car-detail-spec-label">Horsepower</span>
                  <span className="car-detail-spec-value">{car.specs.horsepower}</span>
                </div>
                <div className="car-detail-spec-item">
                  <span className="car-detail-spec-label">0-60mph</span>
                  <span className="car-detail-spec-value">{car.specs.acceleration}</span>
                </div>
                <div className="car-detail-spec-item">
                  <span className="car-detail-spec-label">Fuel Type</span>
                  <span className="car-detail-spec-value">{car.specs.fuelType}</span>
                </div>
                <div className="car-detail-spec-item">
                  <span className="car-detail-spec-label">Transmission</span>
                  <span className="car-detail-spec-value">{car.specs.transmission}</span>
                </div>
                <div className="car-detail-spec-item">
                  <span className="car-detail-spec-label">Seats</span>
                  <span className="car-detail-spec-value">{car.specs.seats}</span>
                </div>
                <div className="car-detail-spec-item">
                  <span className="car-detail-spec-label">Mileage</span>
                  <span className="car-detail-spec-value">{car.specs.mileage}</span>
                </div>
                <div className="car-detail-spec-item">
                  <span className="car-detail-spec-label">Engine</span>
                  <span className="car-detail-spec-value">{car.specs.engine}</span>
                </div>
                <div className="car-detail-spec-item">
                  <span className="car-detail-spec-label">Drivetrain</span>
                  <span className="car-detail-spec-value">{car.specs.drivetrain}</span>
                </div>
                <div className="car-detail-spec-item">
                  <span className="car-detail-spec-label">MPG</span>
                  <span className="car-detail-spec-value">{car.specs.mpg}</span>
                  </div>
                </div>
              )}

              {activeTab === 'description' && (
                <div className="car-detail-description-content">
                  <p className="car-detail-description-text">{car.description}</p>
                </div>
              )}

              {activeTab === 'features' && (
                <div className="car-detail-features-grid">
                  {car.features.map((feature: string, index: number) => (
                    <div key={index} className="car-detail-feature-item">
                      <span className="car-detail-feature-icon">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="car-detail-actions">
              <button className="car-detail-btn-primary" onClick={() => router.push('/#contact')}>
                Schedule Test Drive
              </button>
              <button className="car-detail-btn-secondary" onClick={() => router.push('/#contact')}>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
