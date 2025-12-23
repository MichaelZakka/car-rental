'use client';

import { useState } from 'react';
import Link from 'next/link';
import '../showroom.css';
import Footer from '../components/Footer';

export default function ShowroomPage() {
  const showroomSections = [
    {
      id: 'exterior',
      title: 'Exterior Building',
      description: 'Our state-of-the-art facility welcomes you with modern architecture and elegant design. The exterior showcases contemporary aesthetics with premium materials, creating an inviting atmosphere that reflects the quality of vehicles within. Large glass facades provide natural lighting while maintaining an air of sophistication.',
      images: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1400&q=80'
      ]
    },
    {
      id: 'interior',
      title: 'Interior Showroom',
      description: 'Step into our spacious showroom where luxury meets comfort. Our carefully curated display features premium vehicles in an environment designed to inspire. High ceilings, ambient lighting, and thoughtful layout create the perfect setting to explore your dream car. Every detail has been considered to enhance your viewing experience.',
      images: [
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400&q=80',
        'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1400&q=80',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80'
      ]
    },
    {
      id: 'service',
      title: 'Service Department',
      description: 'Our service department is equipped with cutting-edge diagnostic tools and staffed by certified technicians. We maintain the highest standards in vehicle maintenance and repair, ensuring your luxury automobile receives the care it deserves. From routine maintenance to complex repairs, our team delivers excellence.',
      images: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1400&q=80'
      ]
    },
    {
      id: 'lounge',
      title: 'Customer Lounge',
      description: 'Relax in our premium customer lounge while we service your vehicle. Featuring comfortable seating, complimentary refreshments, high-speed WiFi, and entertainment options, our lounge ensures your wait is as pleasant as possible. We believe your comfort is as important as your vehicle\'s care.',
      images: [
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400&q=80',
        'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1400&q=80',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80'
      ]
    },
    {
      id: 'parking',
      title: 'Parking Facilities',
      description: 'Our expansive parking area provides convenient and secure spaces for all visitors. With ample room for test drives and vehicle deliveries, covered parking options, and 24/7 security surveillance, your peace of mind is our priority. Easy access and clear signage ensure a seamless visit.',
      images: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1400&q=80'
      ]
    }
  ];

  // State to track current image index for each section
  const [currentImageIndexes, setCurrentImageIndexes] = useState<Record<string, number>>(
    showroomSections.reduce((acc, section) => ({ ...acc, [section.id]: 0 }), {} as Record<string, number>)
  );

  const nextImage = (sectionId: string, totalImages: number) => {
    setCurrentImageIndexes(prev => ({
      ...prev,
      [sectionId]: (prev[sectionId] + 1) % totalImages
    }));
  };

  const prevImage = (sectionId: string, totalImages: number) => {
    setCurrentImageIndexes(prev => ({
      ...prev,
      [sectionId]: prev[sectionId] === 0 ? totalImages - 1 : prev[sectionId] - 1
    }));
  };

  const goToImage = (sectionId: string, index: number) => {
    setCurrentImageIndexes(prev => ({
      ...prev,
      [sectionId]: index
    }));
  };

  const scrollToSection = (id: string) => {
    // For showroom page, redirect to home page with hash
    if (typeof window !== 'undefined') {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <div className="showroom-page">
      {/* Creative Hero Header */}
      <header className="showroom-hero">
        
        <div className="showroom-hero-background">
          <div className="showroom-hero-image"></div>
          <div className="showroom-hero-overlay"></div>
        </div>

        <div className="showroom-hero-content">
          <div className="container">
            <div className="showroom-hero-inner">
              <div className="showroom-hero-badge">
                <span className="badge-text">Virtual Tour</span>
              </div>
              <h1 className="showroom-hero-title">
                <span className="title-line-1">Experience</span>
                <span className="title-line-2">Our Showroom</span>
              </h1>
              <p className="showroom-hero-description">
                Step into a world of automotive excellence. Explore our state-of-the-art facility designed for the ultimate luxury experience.
              </p>
              <div className="showroom-hero-stats">
                <div className="hero-stat">
                  <div className="stat-number">25,000</div>
                  <div className="stat-label">SQ FT FACILITY</div>
                </div>
                <div className="hero-stat">
                  <div className="stat-number">150+</div>
                  <div className="stat-label">VEHICLES</div>
                </div>
                <div className="hero-stat">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">SERVICE</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="showroom-hero-scroll">
          <span className="scroll-text">Scroll to Explore</span>
          <div className="scroll-line"></div>
        </div>
      </header>

      {/* Magazine-style Sections */}
      <section className="showroom-magazine-section">
        <div className="showroom-magazine-container">
          {showroomSections.map((section, index) => (
            <article 
              key={section.id} 
              className={`showroom-magazine-article ${index % 2 === 0 ? 'layout-left' : 'layout-right'}`}
            >
              <div className="magazine-image-section">
                <div className="magazine-image-carousel">
                  <img 
                    src={section.images[currentImageIndexes[section.id]]} 
                    alt={`${section.title} - Image ${currentImageIndexes[section.id] + 1}`}
                    className="magazine-main-image"
                  />
                  
                  {/* Navigation Arrows */}
                  <button 
                    className="carousel-arrow carousel-arrow-left"
                    onClick={() => prevImage(section.id, section.images.length)}
                    aria-label="Previous image"
                  >
                    ←
                  </button>
                  <button 
                    className="carousel-arrow carousel-arrow-right"
                    onClick={() => nextImage(section.id, section.images.length)}
                    aria-label="Next image"
                  >
                    →
                  </button>

                  {/* Dots Indicator */}
                  <div className="carousel-dots">
                    {section.images.map((_, imgIndex) => (
                      <button
                        key={imgIndex}
                        className={`carousel-dot ${currentImageIndexes[section.id] === imgIndex ? 'active' : ''}`}
                        onClick={() => goToImage(section.id, imgIndex)}
                        aria-label={`Go to image ${imgIndex + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Image Counter */}
                <div className="image-counter">
                  {currentImageIndexes[section.id] + 1} / {section.images.length}
                </div>
              </div>

              <div className="magazine-content-section">
                <div className="magazine-content-inner">
                  <span className="section-number">0{index + 1}</span>
                  <h2 className="magazine-title">{section.title}</h2>
                  <p className="magazine-description">{section.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="showroom-page-cta">
        <div className="container">
          <div className="showroom-cta-content">
            <h2 className="showroom-cta-title">Visit Us Today</h2>
            <p className="showroom-cta-text">Experience our showroom in person and discover the perfect vehicle for you</p>
            <div className="showroom-cta-buttons">
              <Link href="/#contact" className="showroom-cta-btn-primary">
                Schedule a Visit
              </Link>
              <Link href="/#contact" className="showroom-cta-btn-secondary">
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

