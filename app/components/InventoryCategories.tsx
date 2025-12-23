'use client';

import { useRouter } from 'next/navigation';

export default function InventoryCategories() {
  const router = useRouter();

  const categories = [
    {
      name: 'Luxury Sedans',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80',
      alt: 'Luxury Sedans',
      description: 'Experience the pinnacle of comfort and elegance',
      vehicleCount: '24 Vehicles',
      startingPrice: 'From $45,000'
    },
    {
      name: 'SUVs & Trucks',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80',
      alt: 'SUVs & Trucks',
      description: 'Powerful, spacious, and ready for any adventure',
      vehicleCount: '18 Vehicles',
      startingPrice: 'From $38,000'
    },
    {
      name: 'Electric Vehicles',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&q=80',
      alt: 'Electric Vehicles',
      description: 'Embrace the future of mobility',
      vehicleCount: '15 Vehicles',
      startingPrice: 'From $42,000'
    },
    {
      name: 'Sports Cars',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80',
      alt: 'Sports Cars',
      description: 'Feel the adrenaline rush with high performance',
      vehicleCount: '12 Vehicles',
      startingPrice: 'From $65,000'
    }
  ];

  return (
    <section id="categories" className="categories-section">
      <div className="container">
        <h2 className="section-title">Browse Our Collection</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card" onClick={() => router.push('/categories')}>
              <div className="category-image-wrapper">
                <img src={category.image} alt={category.alt} className="category-image" />
                <div className="category-overlay"></div>
                <div className="category-name-overlay">
                  <h3 className="category-title">{category.name}</h3>
                </div>
                <div className="category-details-overlay">
                  <p className="category-description">{category.description}</p>
                  <div className="category-stats">
                    <span className="category-count">{category.vehicleCount}</span>
                    <span className="category-price">{category.startingPrice}</span>
                  </div>
                  <button className="btn-explore">Explore</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="categories-view-all">
          <button className="btn-view-all-collections" onClick={() => router.push('/categories')}>
            View All Collections
          </button>
        </div>
      </div>
    </section>
  );
}

