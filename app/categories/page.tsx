'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import '../showroom.css';

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

  return (
    <div className="showroom-page">
      {/* Header */}
      <header className="categories-header">
        <div className="container">
          <Link href="/" className="back-link">
            ← Back to Home
          </Link>
          <h1 className="page-title">Browse by Category</h1>
          <p className="page-subtitle">Discover our premium collection organized by vehicle type</p>
        </div>
      </header>

      {/* Categories Grid */}
      <section className="categories-page-section">
        <div className="container">
          <div className="categories-page-grid">
            {categories.map((category) => (
              <div
                key={category.id}
                className="category-page-card"
                onClick={() => handleCategoryClick(category.id)}
              >
                <div className="category-page-image-wrapper">
                  <img src={category.image} alt={category.name} className="category-page-image" />
                  <div className="category-page-overlay"></div>
                  <div className="category-page-badge">{category.carCount} Vehicles</div>
                </div>
                <div className="category-page-content">
                  <h2 className="category-page-name">{category.name}</h2>
                  <p className="category-page-description">{category.description}</p>
                  <div className="category-page-footer">
                    <span className="category-page-price">From {category.startingPrice}</span>
                    <button className="category-page-btn">View All →</button>
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
    </div>
  );
}

