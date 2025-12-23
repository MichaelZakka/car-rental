'use client';

import { useRouter } from 'next/navigation';

export default function ShowroomGallery() {
  const router = useRouter();
  const galleryItems = [
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
      label: 'Exterior Building',
      alt: 'Exterior'
    },
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
      label: 'Interior Showroom',
      alt: 'Showroom'
    },
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
      label: 'Service Department',
      alt: 'Service'
    },
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
      label: 'Customer Lounge',
      alt: 'Lounge'
    }
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-title">Visit Our Showroom</h2>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item">
              <img src={item.image} alt={item.alt} className="gallery-image" />
              <div className="gallery-overlay">
                <span className="gallery-label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="btn-explore-gallery" onClick={() => router.push('/showroom')}>
          Explore Showroom
        </button>
      </div>
    </section>
  );
}

