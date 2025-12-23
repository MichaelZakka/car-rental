'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import '../../showroom.css';

export default function CategoryDetailPage({ params }: { params: { categoryId: string } }) {
  const router = useRouter();

  const categoryData: { [key: string]: any } = {
    'luxury-sedans': {
      name: 'Luxury Sedans',
      description: 'Experience the pinnacle of comfort and elegance with our premium sedan collection.',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80'
    },
    'suvs-trucks': {
      name: 'SUVs & Trucks',
      description: 'Powerful, spacious, and ready for any adventure. Explore our robust SUV and truck lineup.',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80'
    },
    'electric-vehicles': {
      name: 'Electric Vehicles',
      description: 'Embrace the future of mobility with our cutting-edge electric vehicle collection.',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&q=80'
    },
    'sports-cars': {
      name: 'Sports Cars',
      description: 'Feel the adrenaline rush with our high-performance sports car selection.',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80'
    }
  };

  const categoryId = params.categoryId as string;
  const category = categoryData[categoryId] || categoryData['luxury-sedans'];

  const cars = [
    {
      id: '1',
      name: '2024 BMW 5 Series',
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
      name: '2024 Mercedes-Benz E-Class',
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
      name: '2024 Audi A6',
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
      name: '2024 Lexus ES',
      year: '2024',
      horsepower: '302 HP',
      acceleration: '6.2s',
      fuelType: 'Hybrid',
      price: '$52,000',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
      transmission: 'Automatic',
      seats: 5,
      mileage: '9,800 mi'
    },
    {
      id: '5',
      name: '2024 Genesis G90',
      year: '2024',
      horsepower: '409 HP',
      acceleration: '5.0s',
      fuelType: 'Gasoline',
      price: '$78,000',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
      transmission: 'Automatic',
      seats: 5,
      mileage: '7,500 mi'
    },
    {
      id: '6',
      name: '2024 Cadillac CT5',
      year: '2024',
      horsepower: '335 HP',
      acceleration: '5.3s',
      fuelType: 'Gasoline',
      price: '$48,500',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
      transmission: 'Automatic',
      seats: 5,
      mileage: '11,300 mi'
    }
  ];

  const handleCarClick = (carId: string) => {
    router.push(`/cars/${carId}`);
  };

  return (
    <div className="showroom-page">
      {/* Creative Hero Header */}
      <header className="categories-hero">
        <div className="categories-hero-background">
          <div 
            className="categories-hero-image" 
            style={{ backgroundImage: `url(${category.image})` }}
          ></div>
          <div className="categories-hero-overlay"></div>
        </div>

        <div className="categories-hero-content">
          <div className="container">
            <div className="categories-hero-inner">
              <h1 className="categories-hero-title">
                          <Link href="/categories" className="categories-back-link">
            ← Back to Collections
          </Link>

                <span className="title-line-1">{category.name}</span>
              </h1>
              <p className="categories-hero-description">
                {category.description}
              </p>
              <div className="categories-hero-stats">
                <div className="hero-stat">
                  <div className="stat-number">{cars.length}</div>
                  <div className="stat-label">VEHICLES</div>
                </div>
                <div className="hero-stat">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">VERIFIED</div>
                </div>
                <div className="hero-stat">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">AVAILABLE</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="categories-hero-scroll">
          <span className="scroll-text">Scroll to Explore</span>
          <div className="scroll-line"></div>
        </div>
      </header>

      {/* Cars Grid */}
      <section className="category-cars-section">
        <div className="container">
          <div className="category-detail-nav" style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/categories" className="back-link">
              ← Back to Categories
            </Link>
            <Link href="/" className="back-link">
              Home
            </Link>
          </div>
          <div className="category-cars-header">
            <h2 className="category-cars-title">Available Vehicles</h2>
            <p className="category-cars-subtitle">{cars.length} vehicles in this collection</p>
          </div>
          <div className="category-cars-grid">
            {cars.map((car) => (
              <div
                key={car.id}
                className="category-car-card"
                onClick={() => handleCarClick(car.id)}
              >
                <div className="category-car-image-wrapper">
                  <img src={car.image} alt={car.name} className="category-car-image" />
                  <div className="category-car-overlay"></div>
                </div>
                <div className="category-car-info">
                  <h3 className="category-car-name">{car.name}</h3>
                  <p className="category-car-year">{car.year}</p>
                  <div className="category-car-specs">
                    <div className="category-car-spec">
                      <span className="category-car-spec-label">Power</span>
                      <span className="category-car-spec-value">{car.horsepower}</span>
                    </div>
                    <div className="category-car-spec">
                      <span className="category-car-spec-label">0-60mph</span>
                      <span className="category-car-spec-value">{car.acceleration}</span>
                    </div>
                    <div className="category-car-spec">
                      <span className="category-car-spec-label">Fuel</span>
                      <span className="category-car-spec-value">{car.fuelType}</span>
                    </div>
                  </div>
                  <div className="category-car-details">
                    <span>{car.transmission}</span>
                    <span>•</span>
                    <span>{car.seats} Seats</span>
                    <span>•</span>
                    <span>{car.mileage}</span>
                  </div>
                  <div className="category-car-price">{car.price}</div>
                  <button className="category-car-btn" onClick={(e) => { e.stopPropagation(); handleCarClick(car.id); }}>View Details →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

