'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './showroom.css';

export default function Home() {
  const router = useRouter();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 5);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      vehicle: '2024 BMW 5 Series',
      rating: 5,
      review: 'Exceptional service from start to finish! The team helped me find the perfect car and made the financing process seamless.',
      date: 'December 2024',
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      vehicle: '2023 Mercedes-Benz GLE',
      rating: 5,
      review: 'Best car buying experience I\'ve ever had. Professional staff, great selection, and competitive pricing.',
      date: 'November 2024',
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      vehicle: '2024 Tesla Model 3',
      rating: 5,
      review: 'Love my new electric vehicle! The dealership made the transition smooth and answered all my questions.',
      date: 'October 2024',
      avatar: 'ER'
    },
    {
      name: 'David Thompson',
      vehicle: '2023 Ford F-150',
      rating: 5,
      review: 'Outstanding customer service and a fantastic selection of trucks. Found exactly what I was looking for.',
      date: 'September 2024',
      avatar: 'DT'
    },
    {
      name: 'Lisa Anderson',
      vehicle: '2024 Audi A6',
      rating: 5,
      review: 'The trade-in process was fair and transparent. Highly recommend this dealership to anyone looking for a quality vehicle.',
      date: 'August 2024',
      avatar: 'LA'
    }
  ];

  const featuredVehicles = [
    {
      name: '2024 BMW 5 Series',
      year: '2024',
      horsepower: '335 HP',
      acceleration: '5.1s',
      fuelType: 'Hybrid',
      price: '$58,900',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80'
    },
    {
      name: '2024 Mercedes-Benz E-Class',
      year: '2024',
      horsepower: '362 HP',
      acceleration: '4.9s',
      fuelType: 'Gasoline',
      price: '$61,500',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80'
    },
    {
      name: '2024 Tesla Model S',
      year: '2024',
      horsepower: '670 HP',
      acceleration: '3.1s',
      fuelType: 'Electric',
      price: '$89,990',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80'
    },
    {
      name: '2024 Audi A6',
      year: '2024',
      horsepower: '335 HP',
      acceleration: '5.1s',
      fuelType: 'Gasoline',
      price: '$56,500',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="showroom-page">
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-logo">
            <h1 className="dealership-name">Karzone</h1>
            <div className="logo-divider"></div>
          </div>
          <h2 className="hero-tagline">Luxury Car Rental</h2>
          <p className="hero-subtitle">Experience Premium Mobility</p>
          <div className="hero-ctas">
            <button className="cta-primary" onClick={() => scrollToSection('featured')}>
              View Inventory
            </button>
            <button className="cta-secondary" onClick={() => scrollToSection('contact')}>
              Schedule Test Drive
            </button>
          </div>
          <div className="scroll-indicator" onClick={() => scrollToSection('featured')}>
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles Section */}
      <section id="featured" className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Collection</h2>
          <div className="vehicles-grid">
            {featuredVehicles.map((vehicle, index) => (
              <div key={index} className="vehicle-card">
                <div className="vehicle-image-wrapper">
                  <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />
                  <div className="vehicle-overlay"></div>
                </div>
                <div className="vehicle-info">
                  <h3 className="vehicle-name">{vehicle.name}</h3>
                  <p className="vehicle-year">{vehicle.year}</p>
                  <div className="vehicle-specs">
                    <div className="spec-item">
                      <span className="spec-label">Power</span>
                      <span className="spec-value">{vehicle.horsepower}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">0-60mph</span>
                      <span className="spec-value">{vehicle.acceleration}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Fuel</span>
                      <span className="spec-value">{vehicle.fuelType}</span>
                    </div>
                  </div>
                  <div className="vehicle-price">Starting at {vehicle.price}</div>
                  <button className="btn-view-details" onClick={() => router.push(`/cars/${index + 1}`)}>View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="why-choose-section">
        <div className="container">
          <h2 className="section-title">Why Drive With Us</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🏆</div>
              <h3 className="benefit-title">20+ Years of Excellence</h3>
              <p className="benefit-description">Two decades of trusted service and customer satisfaction</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">✓</div>
              <h3 className="benefit-title">Certified Pre-Owned Program</h3>
              <p className="benefit-description">Rigorous inspection and warranty on every pre-owned vehicle</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3 className="benefit-title">Flexible Financing Options</h3>
              <p className="benefit-description">Competitive rates and terms to fit your budget</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔧</div>
              <h3 className="benefit-title">Full-Service Maintenance</h3>
              <p className="benefit-description">Expert technicians and genuine parts for all your needs</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔄</div>
              <h3 className="benefit-title">Trade-In Assistance</h3>
              <p className="benefit-description">Fair appraisals and seamless trade-in process</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⭐</div>
              <h3 className="benefit-title">5-Star Customer Reviews</h3>
              <p className="benefit-description">Rated excellent by thousands of satisfied customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Categories Section */}
      <section id="categories" className="categories-section">
        <div className="container">
          <h2 className="section-title">Browse Our Collection</h2>
          <div className="categories-grid">
            <div className="category-card" onClick={() => router.push('/categories')}>
              <div className="category-image-wrapper">
                <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80" alt="Luxury Sedans" className="category-image" />
                <div className="category-overlay"></div>
              </div>
              <h3 className="category-title">Luxury Sedans</h3>
              <button className="btn-explore">Explore</button>
            </div>
            <div className="category-card" onClick={() => router.push('/categories')}>
              <div className="category-image-wrapper">
                <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80" alt="SUVs & Trucks" className="category-image" />
                <div className="category-overlay"></div>
              </div>
              <h3 className="category-title">SUVs & Trucks</h3>
              <button className="btn-explore">Explore</button>
            </div>
            <div className="category-card" onClick={() => router.push('/categories')}>
              <div className="category-image-wrapper">
                <img src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&q=80" alt="Electric Vehicles" className="category-image" />
                <div className="category-overlay"></div>
              </div>
              <h3 className="category-title">Electric Vehicles</h3>
              <button className="btn-explore">Explore</button>
            </div>
            <div className="category-card" onClick={() => router.push('/categories')}>
              <div className="category-image-wrapper">
                <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80" alt="Sports Cars" className="category-image" />
                <div className="category-overlay"></div>
              </div>
              <h3 className="category-title">Sports Cars</h3>
              <button className="btn-explore">Explore</button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title">Complete Automotive Solutions</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🚗</div>
              <h3 className="service-title">New & Pre-Owned Sales</h3>
              <p className="service-description">Extensive inventory of new and certified pre-owned vehicles</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3 className="service-title">Trade-In Appraisals</h3>
              <p className="service-description">Fair and transparent vehicle valuations</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💳</div>
              <h3 className="service-title">Auto Financing</h3>
              <p className="service-description">Competitive rates with flexible payment options</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3 className="service-title">Service & Maintenance</h3>
              <p className="service-description">Expert technicians using genuine parts</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🛡️</div>
              <h3 className="service-title">Extended Warranties</h3>
              <p className="service-description">Comprehensive coverage plans for peace of mind</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🚚</div>
              <h3 className="service-title">Home Delivery Available</h3>
              <p className="service-description">Convenient delivery service to your location</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonials-carousel">
            <div className="testimonials-wrapper" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-slide">
                  <div className="testimonial-card">
                    <div className="testimonial-avatar">{testimonial.avatar}</div>
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="star">⭐</span>
                      ))}
                    </div>
                    <p className="testimonial-text">"{testimonial.review}"</p>
                    <div className="testimonial-author">
                      <strong>{testimonial.name}</strong>
                      <span className="testimonial-vehicle">{testimonial.vehicle}</span>
                      <span className="testimonial-date">{testimonial.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section id="offers" className="offers-section">
        <div className="container">
          <div className="offers-banner">
            <div className="offer-main">
              <div className="offer-badge">Limited Time</div>
              <h2 className="offer-title">0% APR Financing for 60 Months</h2>
              <p className="offer-description">On select new vehicles. Subject to credit approval.</p>
              <div className="offer-expiry">Expires: January 31, 2025</div>
              <button className="btn-learn-more">Learn More</button>
            </div>
            <div className="offer-secondary">
              <div className="offer-item">
                <h3 className="offer-item-title">$500 Trade-In Bonus</h3>
                <p className="offer-item-desc">On any trade-in vehicle</p>
              </div>
              <div className="offer-item">
                <h3 className="offer-item-title">Free First Year Maintenance</h3>
                <p className="offer-item-desc">Complimentary service for new purchases</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom Gallery Section */}
      <section id="gallery" className="gallery-section">
        <div className="container">
          <h2 className="section-title">Visit Our Showroom</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" alt="Exterior" className="gallery-image" />
              <div className="gallery-overlay">
                <span className="gallery-label">Exterior Building</span>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" alt="Showroom" className="gallery-image" />
              <div className="gallery-overlay">
                <span className="gallery-label">Interior Showroom</span>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" alt="Service" className="gallery-image" />
              <div className="gallery-overlay">
                <span className="gallery-label">Service Department</span>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" alt="Lounge" className="gallery-image" />
              <div className="gallery-overlay">
                <span className="gallery-label">Customer Lounge</span>
              </div>
            </div>
          </div>
          <button className="btn-virtual-tour">360° Virtual Tour</button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-wrapper">
            <div className="contact-form-wrapper">
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} required></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-method">Preferred Contact Method</label>
                  <select id="contact-method" name="contact-method">
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="text">Text Message</option>
                  </select>
                </div>
                <button type="submit" className="btn-submit">Send Message</button>
              </form>
            </div>
            <div className="contact-info-wrapper">
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184132576012!2d-73.98811768459398!3d40.75889597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="contact-details">
                <div className="contact-detail-item">
                  <strong>Address</strong>
                  <p>123 Luxury Drive<br />New York, NY 10001</p>
                </div>
                <div className="contact-detail-item">
                  <strong>Phone</strong>
                  <p>(555) 123-4567</p>
                </div>
                <div className="contact-detail-item">
                  <strong>Email</strong>
                  <p>info@karzone.com</p>
                </div>
                <div className="contact-detail-item">
                  <strong>Hours</strong>
                  <p>
                    Mon-Fri: 9:00 AM - 8:00 PM<br />
                    Sat: 9:00 AM - 7:00 PM<br />
                    Sun: 11:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3 className="footer-logo">Karzone</h3>
              <p className="footer-tagline">Premium Luxury Car Rental Experience</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4 className="footer-column-title">Quick Links</h4>
                <ul className="footer-list">
                  <li><a href="#featured" onClick={(e) => { e.preventDefault(); scrollToSection('featured'); }}>Inventory</a></li>
                  <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Financing</a></li>
                  <li><a href="#why-choose-us" onClick={(e) => { e.preventDefault(); scrollToSection('why-choose-us'); }}>About Us</a></li>
                  <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4 className="footer-column-title">Services</h4>
                <ul className="footer-list">
                  <li><a href="#categories">Browse Collection</a></li>
                  <li><a href="#services">Service & Maintenance</a></li>
                  <li><a href="#offers">Special Offers</a></li>
                  <li><a href="#gallery">Visit Showroom</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-cta">
              <h4 className="footer-cta-title">Ready to Drive Home Your Dream Car?</h4>
              <button className="btn-footer-cta" onClick={() => scrollToSection('contact')}>
                Get Started Today
              </button>
            </div>
          </div>
          <div className="footer-social">
            <a href="#" className="social-icon" aria-label="Facebook">📘</a>
            <a href="#" className="social-icon" aria-label="Instagram">📷</a>
            <a href="#" className="social-icon" aria-label="Twitter">🐦</a>
            <a href="#" className="social-icon" aria-label="YouTube">📺</a>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">&copy; 2024 Karzone. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <span className="footer-separator">|</span>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
