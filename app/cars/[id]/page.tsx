'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import '../../showroom.css';

export default function CarDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();

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
  const [selectedImage, setSelectedImage] = useState(car.image);

  return (
    <div className="showroom-page">
      {/* Header Navigation */}
      <header className="car-detail-header">
        <div className="container">
          <div className="car-detail-nav">
            <Link href="/categories" className="back-link">
              ← Back to Categories
            </Link>
            <Link href="/" className="back-link">
              Home
            </Link>
          </div>
        </div>
      </header>

      {/* Car Detail Content */}
      <section className="car-detail-section">
        <div className="container">
          <div className="car-detail-wrapper">
            {/* Image Gallery */}
            <div className="car-detail-gallery">
              <div className="car-detail-main-image">
                <img src={selectedImage} alt={car.name} />
              </div>
              <div className="car-detail-thumbnails">
                {car.images.map((img: string, index: number) => (
                  <div
                    key={index}
                    className={`car-detail-thumbnail ${selectedImage === img ? 'active' : ''}`}
                    onClick={() => setSelectedImage(img)}
                  >
                    <img src={img} alt={`${car.name} view ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Car Info */}
            <div className="car-detail-info">
              <div className="car-detail-header-info">
                <span className="car-detail-category">{car.category}</span>
                <h1 className="car-detail-name">{car.name}</h1>
                <p className="car-detail-year">{car.year}</p>
              </div>

              <div className="car-detail-price-section">
                <span className="car-detail-price-label">Price</span>
                <span className="car-detail-price">{car.price}</span>
              </div>

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

              <div className="car-detail-description">
                <h3 className="car-detail-description-title">Description</h3>
                <p className="car-detail-description-text">{car.description}</p>
              </div>

              <div className="car-detail-features">
                <h3 className="car-detail-features-title">Key Features</h3>
                <div className="car-detail-features-grid">
                  {car.features.map((feature: string, index: number) => (
                    <div key={index} className="car-detail-feature-item">
                      <span className="car-detail-feature-icon">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
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
        </div>
      </section>
    </div>
  );
}

