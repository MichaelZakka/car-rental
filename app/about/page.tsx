'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaBullseye, FaHandshake, FaGem, FaBolt } from 'react-icons/fa';
import Footer from '../components/Footer';
import '../showroom.css';
import logo from '../assets/solid-logo.png';
import bmwLogo from '../assets/logos/BMW LOGO.png';
import jaguarLogo from '../assets/logos/Jaguar_Logo.png';
import lamboLogo from '../assets/logos/Lambo_Logo.png';
import mercedesLogo from '../assets/logos/Mercedes-logo.png';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="showroom-page about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="container about-hero-content">
          <div className="hero-logo hero-fade-in" style={{ animationDelay: '0.2s', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Image 
              src={logo} 
              alt="Karzone" 
              width={300}
              height={100}
              style={{ 
                height: 'auto',
                width: 'auto',
                maxWidth: '400px',
                objectFit: 'contain',
                margin: '0 auto',
                display: 'block'
              }}
              priority
            />
            <div className="logo-divider"></div>
          </div>
          <h2 className="hero-tagline hero-fade-in" style={{ animationDelay: '0.4s' }}>
            Luxury Car Rental
          </h2>
          <p className="hero-subtitle hero-fade-in" style={{ animationDelay: '0.6s' }}>
            Experience Premium Mobility
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-story-section">
        <div className="container">
          <div className="about-story-content fade-in-section" id="story">
            <div className="about-story-text">
              <h2 className="section-title">Our Story</h2>
              <p className="about-story-paragraph">
                Founded in 2004, Karzone began with a simple mission: to provide exceptional luxury car rental 
                experiences that exceed expectations. Over the past two decades, we've grown from a small local 
                business to one of the region's most trusted premium car rental services.
              </p>
              <p className="about-story-paragraph">
                Our passion for automotive excellence drives everything we do. We carefully curate our fleet, 
                selecting only the finest vehicles from world-renowned manufacturers. Each car in our collection 
                is maintained to the highest standards, ensuring that every journey is safe, comfortable, and memorable.
              </p>
              <p className="about-story-paragraph">
                Today, Karzone serves thousands of satisfied customers annually, offering an extensive range of 
                luxury and premium vehicles for business trips, special occasions, weekend getaways, and everything in between.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Showcase Section */}
      <section className="about-luxury-showcase">
        <div className="container">
          <h2 className="section-title">Experience True Luxury</h2>
          <div className="about-showcase-grid">
            <div className="about-showcase-card fade-in-section" id="showcase-1">
              <div className="about-showcase-image">
                <img src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80" alt="Mercedes-Benz S-Class" />
                <div className="about-showcase-overlay">
                  <h3 className="about-showcase-title">Mercedes-Benz S-Class</h3>
                  <p className="about-showcase-subtitle">Ultimate Luxury Sedan</p>
                </div>
              </div>
            </div>
            <div className="about-showcase-card fade-in-section" id="showcase-2">
              <div className="about-showcase-image">
                <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80" alt="BMW 7 Series" />
                <div className="about-showcase-overlay">
                  <h3 className="about-showcase-title">BMW 7 Series</h3>
                  <p className="about-showcase-subtitle">Executive Performance</p>
                </div>
              </div>
            </div>
            <div className="about-showcase-card fade-in-section" id="showcase-3">
              <div className="about-showcase-image">
                <img src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80" alt="Audi A8" />
                <div className="about-showcase-overlay">
                  <h3 className="about-showcase-title">Audi A8</h3>
                  <p className="about-showcase-subtitle">Sophisticated Elegance</p>
                </div>
              </div>
            </div>
            <div className="about-showcase-card fade-in-section" id="showcase-4">
              <div className="about-showcase-image">
                <img src="https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80" alt="Porsche Panamera" />
                <div className="about-showcase-overlay">
                  <h3 className="about-showcase-title">Porsche Panamera</h3>
                  <p className="about-showcase-subtitle">Sports Car Luxury</p>
                </div>
              </div>
            </div>
            <div className="about-showcase-card fade-in-section" id="showcase-5">
              <div className="about-showcase-image">
                <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80" alt="Tesla Model S" />
                <div className="about-showcase-overlay">
                  <h3 className="about-showcase-title">Tesla Model S</h3>
                  <p className="about-showcase-subtitle">Electric Innovation</p>
                </div>
              </div>
            </div>
            <div className="about-showcase-card fade-in-section" id="showcase-6">
              <div className="about-showcase-image">
                <img src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80" alt="Range Rover" />
                <div className="about-showcase-overlay">
                  <h3 className="about-showcase-title">Range Rover</h3>
                  <p className="about-showcase-subtitle">Luxury SUV Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="about-values-section">
        <div className="container">
          <h2 className="section-title">Our Mission & Values</h2>
          <div className="about-values-grid">
            <div className="about-value-card fade-in-section" id="value-1">
              <div className="about-value-icon">
                <FaBullseye />
              </div>
              <h3 className="about-value-title">Excellence</h3>
              <p className="about-value-description">
                We are committed to providing the highest quality vehicles and service, 
                ensuring every detail meets our exacting standards.
              </p>
            </div>
            <div className="about-value-card fade-in-section" id="value-2">
              <div className="about-value-icon">
                <FaHandshake />
              </div>
              <h3 className="about-value-title">Trust</h3>
              <p className="about-value-description">
                Building lasting relationships with our customers through transparency, 
                honesty, and reliable service.
              </p>
            </div>
            <div className="about-value-card fade-in-section" id="value-3">
              <div className="about-value-icon">
                <FaGem />
              </div>
              <h3 className="about-value-title">Luxury</h3>
              <p className="about-value-description">
                Curating an exclusive collection of premium vehicles that deliver 
                unparalleled comfort and performance.
              </p>
            </div>
            <div className="about-value-card fade-in-section" id="value-4">
              <div className="about-value-icon">
                <FaBolt />
              </div>
              <h3 className="about-value-title">Innovation</h3>
              <p className="about-value-description">
                Staying ahead of industry trends and embracing new technologies 
                to enhance your rental experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats-section">
        <div className="container">
          <div className="about-stats-grid">
            <div className="about-stat-card fade-in-section" id="stat-1">
              <div className="about-stat-number">20+</div>
              <div className="about-stat-label">Years of Excellence</div>
            </div>
            <div className="about-stat-card fade-in-section" id="stat-2">
              <div className="about-stat-number">150+</div>
              <div className="about-stat-label">Premium Vehicles</div>
            </div>
            <div className="about-stat-card fade-in-section" id="stat-3">
              <div className="about-stat-number">10,000+</div>
              <div className="about-stat-label">Happy Customers</div>
            </div>
            <div className="about-stat-card fade-in-section" id="stat-4">
              <div className="about-stat-number">98%</div>
              <div className="about-stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="about-contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="about-contact-grid">
            <div className="about-contact-card fade-in-section" id="contact-1">
              <div className="about-contact-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z" fill="currentColor"/>
                  <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 00-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 00.043-1.391L6.859 3.513a1.001 1.001 0 00-1.391-.087l-2.17 1.861a1 1 0 00-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 00.648-.291l1.86-2.171a.997.997 0 00-.086-1.391l-4.064-3.696z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="about-contact-title">Phone</h3>
              <p className="about-contact-detail">+1 (555) 123-4567</p>
              <p className="about-contact-detail">+1 (555) 987-6543</p>
              <p className="about-contact-note">Mon-Sat: 9AM - 8PM</p>
            </div>

            <div className="about-contact-card fade-in-section" id="contact-2">
              <div className="about-contact-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 001.228 0L20 9.044 20.002 18H4z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="about-contact-title">Email</h3>
              <p className="about-contact-detail">info@karzone.com</p>
              <p className="about-contact-detail">support@karzone.com</p>
              <p className="about-contact-note">We reply within 24 hours</p>
            </div>

            <div className="about-contact-card fade-in-section" id="contact-3">
              <div className="about-contact-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="about-contact-title">Address</h3>
              <p className="about-contact-detail">123 Luxury Drive</p>
              <p className="about-contact-detail">Beverly Hills, CA 90210</p>
              <p className="about-contact-note">Visit our showroom</p>
            </div>

            <div className="about-contact-card fade-in-section" id="contact-4">
              <div className="about-contact-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" fill="currentColor"/>
                  <path d="M13 7h-2v6h6v-2h-4z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="about-contact-title">Business Hours</h3>
              <p className="about-contact-detail">Mon - Fri: 9:00 AM - 8:00 PM</p>
              <p className="about-contact-detail">Saturday: 10:00 AM - 6:00 PM</p>
              <p className="about-contact-note">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Brands Section */}
      <section className="about-brands-section">
        <div className="container">
          <h2 className="section-title">Premium Brands We Offer</h2>
          <p className="about-brands-subtitle">
            Access the world's most prestigious automotive brands, all maintained to perfection
          </p>
          <div className="about-brands-scroll-container">
            <div className="about-brands-scroll-track">
              {/* First set of brands */}
              <div className="about-brand-logo-card">
                <div className="about-brand-logo-wrapper">
                  <Image src={mercedesLogo} alt="Mercedes-Benz" width={100} height={100} style={{ objectFit: 'contain' }} />
                </div>
                <p className="about-brand-name">Mercedes-Benz</p>
              </div>
              
              <div className="about-brand-logo-card">
                <div className="about-brand-logo-wrapper">
                  <Image src={bmwLogo} alt="BMW" width={100} height={100} style={{ objectFit: 'contain' }} />
                </div>
                <p className="about-brand-name">BMW</p>
              </div>
              
              <div className="about-brand-logo-card">
                <div className="about-brand-logo-wrapper">
                  <Image src={jaguarLogo} alt="Jaguar" width={100} height={100} style={{ objectFit: 'contain' }} />
                </div>
                <p className="about-brand-name">Jaguar</p>
              </div>
              
              <div className="about-brand-logo-card">
                <div className="about-brand-logo-wrapper">
                  <Image src={lamboLogo} alt="Lamborghini" width={100} height={100} style={{ objectFit: 'contain' }} />
                </div>
                <p className="about-brand-name">Lamborghini</p>
              </div>
              
              <div className="about-brand-logo-card">
                <div className="about-brand-logo-wrapper">
                  <Image src={mercedesLogo} alt="Mercedes-Benz" width={100} height={100} style={{ objectFit: 'contain' }} />
                </div>
                <p className="about-brand-name">Mercedes-Benz</p>
              </div>
              
              <div className="about-brand-logo-card">
                <div className="about-brand-logo-wrapper">
                  <Image src={bmwLogo} alt="BMW" width={100} height={100} style={{ objectFit: 'contain' }} />
                </div>
                <p className="about-brand-name">BMW</p>
              </div>
              
              <div className="about-brand-logo-card">
                <div className="about-brand-logo-wrapper">
                  <Image src={jaguarLogo} alt="Jaguar" width={100} height={100} style={{ objectFit: 'contain' }} />
                </div>
                <p className="about-brand-name">Jaguar</p>
              </div>
              
              <div className="about-brand-logo-card">
                <div className="about-brand-logo-wrapper">
                  <Image src={lamboLogo} alt="Lamborghini" width={100} height={100} style={{ objectFit: 'contain' }} />
                </div>
                <p className="about-brand-name">Lamborghini</p>
              </div>


              <div className="about-brand-logo-card">
                <div className="about-brand-logo-wrapper">
                  <svg viewBox="0 0 200 200" className="about-brand-logo">
                    <rect x="40" y="60" width="120" height="80" fill="#001489" rx="5" />
                    <text x="100" y="110" fontSize="32" fontWeight="700" fill="#ffffff" textAnchor="middle">JAGUAR</text>
                  </svg>
                </div>
                <p className="about-brand-name">Jaguar</p>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="about-brand-logo-card">
                <div className="about-brand-logo-wrapper">
                  <Image src={mercedesLogo} alt="Mercedes-Benz" width={100} height={100} style={{ objectFit: 'contain' }} />
                </div>
                <p className="about-brand-name">Mercedes-Benz</p>
              </div>
              
              <div className="about-brand-logo-card">
                <div className="about-brand-logo-wrapper">
                  <Image src={bmwLogo} alt="BMW" width={100} height={100} style={{ objectFit: 'contain' }} />
                </div>
                <p className="about-brand-name">BMW</p>
              </div>
              
              <div className="about-brand-logo-card">
                <div className="about-brand-logo-wrapper">
                  <Image src={jaguarLogo} alt="Jaguar" width={100} height={100} style={{ objectFit: 'contain' }} />
                </div>
                <p className="about-brand-name">Jaguar</p>
              </div>
              
              <div className="about-brand-logo-card">
                <div className="about-brand-logo-wrapper">
                  <Image src={lamboLogo} alt="Lamborghini" width={100} height={100} style={{ objectFit: 'contain' }} />
                </div>
                <p className="about-brand-name">Lamborghini</p>
              </div>
              
              <div className="about-brand-logo-card">
                <div className="about-brand-logo-wrapper">
                  <Image src={mercedesLogo} alt="Mercedes-Benz" width={100} height={100} style={{ objectFit: 'contain' }} />
                </div>
                <p className="about-brand-name">Mercedes-Benz</p>
              </div>
              
              <div className="about-brand-logo-card">
                <div className="about-brand-logo-wrapper">
                  <Image src={bmwLogo} alt="BMW" width={100} height={100} style={{ objectFit: 'contain' }} />
                </div>
                <p className="about-brand-name">BMW</p>
              </div>
              
              <div className="about-brand-logo-card">
                <div className="about-brand-logo-wrapper">
                  <Image src={jaguarLogo} alt="Jaguar" width={100} height={100} style={{ objectFit: 'contain' }} />
                </div>
                <p className="about-brand-name">Jaguar</p>
              </div>
              
              <div className="about-brand-logo-card">
                <div className="about-brand-logo-wrapper">
                  <Image src={lamboLogo} alt="Lamborghini" width={100} height={100} style={{ objectFit: 'contain' }} />
                </div>
                <p className="about-brand-name">Lamborghini</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="about-why-section">
        <div className="container">
          <h2 className="section-title">Why Choose Karzone?</h2>
          <div className="about-why-grid">
            <div className="about-why-card fade-in-section" id="why-1">
              <div className="about-why-number">01</div>
              <h3 className="about-why-title">Premium Fleet</h3>
              <p className="about-why-description">
                Access to an exclusive collection of luxury vehicles from top manufacturers 
                including BMW, Mercedes-Benz, Audi, Tesla, and more.
              </p>
            </div>
            <div className="about-why-card fade-in-section" id="why-2">
              <div className="about-why-number">02</div>
              <h3 className="about-why-title">Flexible Terms</h3>
              <p className="about-why-description">
                Whether you need a car for a day, a week, or longer, we offer flexible 
                rental terms tailored to your specific needs.
              </p>
            </div>
            <div className="about-why-card fade-in-section" id="why-3">
              <div className="about-why-number">03</div>
              <h3 className="about-why-title">24/7 Support</h3>
              <p className="about-why-description">
                Our dedicated customer support team is available around the clock to 
                assist you with any questions or concerns.
              </p>
            </div>
            <div className="about-why-card fade-in-section" id="why-4">
              <div className="about-why-number">04</div>
              <h3 className="about-why-title">Competitive Pricing</h3>
              <p className="about-why-description">
                Premium quality doesn't have to mean premium prices. We offer competitive 
                rates and special packages for extended rentals.
              </p>
            </div>
            <div className="about-why-card fade-in-section" id="why-5">
              <div className="about-why-number">05</div>
              <h3 className="about-why-title">Delivery Service</h3>
              <p className="about-why-description">
                Enjoy the convenience of having your chosen vehicle delivered directly 
                to your location anywhere in the city.
              </p>
            </div>
            <div className="about-why-card fade-in-section" id="why-6">
              <div className="about-why-number">06</div>
              <h3 className="about-why-title">Pristine Condition</h3>
              <p className="about-why-description">
                Every vehicle is meticulously maintained and thoroughly cleaned before 
                each rental to ensure a perfect experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-content fade-in-section" id="cta">
            <h2 className="about-cta-title">Ready to Experience Luxury?</h2>
            <p className="about-cta-subtitle">
              Browse our exclusive collection and book your dream car today
            </p>
            <div className="about-cta-buttons">
              <a href="/showroom" className="about-cta-button primary">
                View Our Fleet
              </a>
              <a href="/#contact" className="about-cta-button secondary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

