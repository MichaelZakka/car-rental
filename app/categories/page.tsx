'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import '../showroom.css';
import Footer from '../components/Footer';

export default function CategoriesPage() {
  const router = useRouter();

  const categories = [
    {
      id: 'luxury-sedans',
      name: 'Luxury Sedans',
      description: 'Experience the pinnacle of comfort and elegance with our premium sedan collection.',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
      carCount: 24,
      startingPrice: '$45,000'
    },
    {
      id: 'suvs-trucks',
      name: 'SUVs & Trucks',
      description: 'Powerful, spacious, and ready for any adventure. Explore our robust SUV and truck lineup.',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
      carCount: 18,
      startingPrice: '$38,000'
    },
    {
      id: 'electric-vehicles',
      name: 'Electric Vehicles',
      description: 'Embrace the future of mobility with our cutting-edge electric vehicle collection.',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
      carCount: 15,
      startingPrice: '$42,000'
    },
    {
      id: 'sports-cars',
      name: 'Sports Cars',
      description: 'Feel the adrenaline rush with our high-performance sports car selection.',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
      carCount: 12,
      startingPrice: '$65,000'
    }
  ];

  const handleCategoryClick = (categoryId: string) => {
    router.push(`/categories/${categoryId}`);
  };

  const scrollToSection = (id: string) => {
    // For categories page, redirect to home page with hash
    if (typeof window !== 'undefined') {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <div className="showroom-page">
      {/* Hero Section */}
      <section className="brands-page-hero">
        <div className="brands-hero-content">
          <h1 className="brands-hero-title">Find Your Perfect Vehicle</h1>
          <p className="brands-hero-subtitle">
            Discover your dream car from our carefully curated categories. From luxury sedans to high-performance sports cars.
          </p>
          <div className="categories-hero-stats">
            <div className="hero-stat">
              <div className="stat-number">4</div>
              <div className="stat-label">CATEGORIES</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number">69+</div>
              <div className="stat-label">VEHICLES</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">VERIFIED</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="categories-page-section">
        <div className="container">
          <div className="categories-grid">
            {categories.map((category) => (
              <div
                key={category.id}
                className="category-card"
                onClick={() => handleCategoryClick(category.id)}
              >
                <div className="category-image-wrapper">
                  <img src={category.image} alt={category.name} className="category-image" />
                  <div className="category-overlay"></div>
                  <div className="category-name-overlay">
                    <h3 className="category-title">{category.name}</h3>
                  </div>
                  <div className="category-details-overlay">
                    <p className="category-description">{category.description}</p>
                    <div className="category-stats">
                      <span className="category-count">{category.carCount} Vehicles</span>
                      <span className="category-price">From {category.startingPrice}</span>
                    </div>
                    <button className="btn-explore">Explore</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="categories-cta-section">
        <div className="container">
          <div className="categories-cta-content">
            <h2 className="categories-cta-title">Can't Find What You're Looking For?</h2>
            <p className="categories-cta-text">Contact our team and we'll help you find the perfect vehicle</p>
            <Link href="/#contact" className="categories-cta-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

