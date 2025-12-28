'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useRef, use } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, EffectCoverflow } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/effect-coverflow';
import '../../showroom.css';
import bmwCar from '../../assets/cars/bmw_Isolated.png';
import mercedesCar from '../../assets/cars/Mercedes_Isolated.png';
import jaguarCar from '../../assets/cars/Jaguar_Isolated2.png';
import lamboCar from '../../assets/cars/Lambo_Isolated.png';
import bmwLogo from '../../assets/logos/BMW LOGO.png';
import mercedesLogo from '../../assets/logos/Mercedes-logo.png';
import jaguarLogo from '../../assets/logos/Jaguar_Logo.png';
import lamboLogo from '../../assets/logos/Lambo_Logo.png';

export default function CategoryDetailPage({ params }: { params: Promise<{ categoryId: string }> }) {
  const router = useRouter();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { categoryId } = use(params);

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

  const category = categoryData[categoryId] || categoryData['luxury-sedans'];

  const cars = [
    {
      id: '1',
      name: '2024 BMW M5',
      brand: 'BMW',
      year: '2024',
      horsepower: '617 HP',
      acceleration: '3.3s',
      fuelType: 'Hybrid',
      price: '$114,500',
      image: bmwCar,
      logo: bmwLogo,
      transmission: 'Automatic',
      seats: 5,
      mileage: '3,200 mi',
      topSpeed: '189 mph',
      drivetrain: 'AWD',
      description: 'Every tap of the accelerator is a gut punch. It\'s a special engine, a true talisman against boredom and the indignities of daily life.',
      brandDescription: 'BMW represents the perfect blend of luxury and performance. Their vehicles combine cutting-edge technology with timeless design, delivering an unparalleled driving experience.'
    },
    {
      id: '2',
      name: '2024 Mercedes-AMG GT',
      brand: 'Mercedes-Benz',
      year: '2024',
      horsepower: '523 HP',
      acceleration: '3.7s',
      fuelType: 'Gasoline',
      price: '$139,900',
      image: mercedesCar,
      logo: mercedesLogo,
      transmission: 'Automatic',
      seats: 4,
      mileage: '2,800 mi',
      topSpeed: '195 mph',
      drivetrain: 'RWD',
      description: 'A masterpiece of engineering and design. The Mercedes-AMG GT delivers breathtaking performance wrapped in elegant sophistication.',
      brandDescription: 'Mercedes-Benz stands for luxury, innovation, and performance. Their vehicles embody the pinnacle of automotive excellence and craftsmanship.'
    },
    {
      id: '3',
      name: '2024 Jaguar F-Type R',
      brand: 'Jaguar',
      year: '2024',
      horsepower: '444 HP',
      acceleration: '4.4s',
      fuelType: 'Gasoline',
      price: '$73,900',
      image: jaguarCar,
      logo: jaguarLogo,
      transmission: 'Automatic',
      seats: 2,
      mileage: '5,100 mi',
      topSpeed: '177 mph',
      drivetrain: 'RWD',
      description: 'Every tap of the accelerator is a gut punch. It\'s a special engine, a true talisman against boredom and the indignities of daily life.',
      brandDescription: 'Jaguar represents British luxury and performance. Their vehicles combine elegant design with thrilling driving dynamics.'
    },
    {
      id: '4',
      name: '2024 Lamborghini Huracán',
      brand: 'Lamborghini',
      year: '2024',
      horsepower: '631 HP',
      acceleration: '2.9s',
      fuelType: 'Gasoline',
      price: '$274,390',
      image: lamboCar,
      logo: lamboLogo,
      transmission: 'Automatic',
      seats: 2,
      mileage: '1,200 mi',
      topSpeed: '202 mph',
      drivetrain: 'AWD',
      description: 'No automotive brand is so alluring as Lamborghini. Scissor doors, V10 and V12 engines, howling exhaust notes - their exotic models are the very definition of ostentatious.',
      brandDescription: 'No automotive brand is so alluring as Lamborghini. Scissor doors, V10 and V12 engines, howling exhaust notes - their exotic models are the very definition of ostentatious.'
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

      {/* Cars Swiper Section */}
      <section className="category-cars-section" style={{ padding: '6rem 0', background: '#ffffff' }}>
        {/* Main Car Image Swiper - Full Width */}
        <div style={{ 
          width: '100vw', 
          marginLeft: 'calc(-50vw + 50%)', 
          marginBottom: '4rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <Swiper
            onSwiper={(swiper) => {
              if (swiper) {
                setMainSwiper(swiper);
              }
            }}
            spaceBetween={30}
            slidesPerView={1.8}
            centeredSlides={true}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex);
            }}
            className="car-main-swiper-full"
            style={{
              width: '100%',
              maxWidth: '100%'
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.8,
                spaceBetween: 30,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 40,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 50,
                centeredSlides: true,
              },
            }}
          >
              {cars.map((car, index) => {
                const isActive = activeIndex === index;
                return (
                  <SwiperSlide key={car.id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '4rem 2rem',
                      minHeight: '500px',
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      margin: '0 auto',
                      opacity: isActive ? 1 : 0.5,
                      transform: isActive ? 'scale(1)' : 'scale(0.8)',
                      transition: 'all 0.3s ease',
                      pointerEvents: isActive ? 'auto' : 'auto'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%'
                      }}>
                        <Image 
                          src={car.image} 
                          alt={car.name}
                          width={800}
                          height={450}
                          style={{ 
                            objectFit: 'contain',
                            maxWidth: '100%',
                            height: 'auto',
                            filter: isActive 
                              ? 'drop-shadow(0 20px 60px rgba(0,0,0,0.8)) drop-shadow(0 10px 30px rgba(0,0,0,0.6)) drop-shadow(0 5px 15px rgba(0,0,0,0.4))'
                              : 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))',
                            display: 'block',
                            margin: '0 auto',
                            transition: 'all 0.3s ease'
                          }}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
        </div>

          <style dangerouslySetInnerHTML={{__html: `
            @media (max-width: 1024px) {
              .luxury-car-info-grid {
                grid-template-columns: 1fr !important;
                text-align: center !important;
              }
              .luxury-car-info-left,
              .luxury-car-info-right {
                align-items: center !important;
                text-align: center !important;
              }
              .luxury-car-info-right > div {
                text-align: center !important;
              }
              .luxury-car-info-left > div[style*="width: 40px"],
              .luxury-car-info-right > div[style*="width: 40px"] {
                margin: 0 auto !important;
                background: linear-gradient(90deg, transparent 0%, #0a0a0a 50%, transparent 100%) !important;
              }
            }
          `}} />

          {/* Car Information Section - Luxurious Layout */}
          <div style={{
            position: 'relative',
            width: '100%',
            marginBottom: '4rem',
            padding: 'clamp(1.5rem, 4vw, 3rem)'
          }}>
            {/* Main Info Grid - Elegant Layout */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr 1fr',
              gap: 'clamp(1.5rem, 3vw, 2.5rem)',
              alignItems: 'center',
              maxWidth: '1000px',
              margin: '0 auto',
              padding: '2rem 0'
            }}
            className="luxury-car-info-grid"
            >
              {/* Left Column - Brand & Price */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                alignItems: 'flex-start',
                textAlign: 'left'
              }}
              className="luxury-car-info-left"
              >
                <div>
                  <div style={{
                    fontSize: '0.7rem',
                    fontWeight: '500',
                    color: '#999',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    marginBottom: '0.35rem'
                  }}>
                    {cars[activeIndex].brand}
                  </div>
                  <div style={{
                    fontSize: '1.5rem',
                    fontWeight: '300',
                    color: '#0a0a0a',
                    letterSpacing: '-0.02em',
                    lineHeight: '1.1'
                  }}>
                    {cars[activeIndex].price}
                  </div>
                </div>
                <div style={{
                  width: '40px',
                  height: '1px',
                  background: 'linear-gradient(90deg, #0a0a0a 0%, transparent 100%)'
                }}></div>
              </div>

              {/* Center Column - Name & Description */}
              <div style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}>
                <div>
                  <h2 style={{
                    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                    fontWeight: '200',
                    color: '#0a0a0a',
                    margin: 0,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    lineHeight: '1.1',
                    fontFamily: 'inherit'
                  }}>
                    {cars[activeIndex].name.split(' ').slice(0, -1).join(' ')}
                  </h2>
                  <h3 style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: '700',
                    color: '#0a0a0a',
                    margin: '0.35rem 0 0 0',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    lineHeight: '1.1'
                  }}>
                    {cars[activeIndex].name.split(' ').slice(-1)[0]}
                  </h3>
                </div>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#666',
                  lineHeight: '1.7',
                  maxWidth: '500px',
                  margin: '0 auto',
                  fontWeight: '300',
                  fontStyle: 'italic'
                }}>
                  {cars[activeIndex].description}
                </p>
              </div>

              {/* Right Column - Performance Stats */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                alignItems: 'flex-end'
              }}
              className="luxury-car-info-right"
              >
                <div style={{ textAlign: 'right' }}>
                  <div style={{
                    fontSize: '0.7rem',
                    fontWeight: '500',
                    color: '#999',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    marginBottom: '0.35rem'
                  }}>
                    Power
                  </div>
                  <div style={{
                    fontSize: '1.5rem',
                    fontWeight: '300',
                    color: '#0a0a0a',
                    letterSpacing: '-0.02em',
                    lineHeight: '1.1'
                  }}>
                    {cars[activeIndex].horsepower}
                  </div>
                </div>
                <div style={{
                  width: '40px',
                  height: '1px',
                  background: 'linear-gradient(270deg, #0a0a0a 0%, transparent 100%)',
                  marginLeft: 'auto'
                }}></div>
              </div>
            </div>

            {/* Bottom Stats Bar */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'clamp(1.5rem, 5vw, 3.5rem)',
              marginTop: '2.5rem',
              paddingTop: '2.5rem',
              borderTop: '1px solid rgba(0, 0, 0, 0.08)',
              flexWrap: 'wrap'
            }}
            className="luxury-stats-bar"
            >
              {/* Acceleration */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '0.65rem',
                  fontWeight: '500',
                  color: '#999',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  marginBottom: '0.5rem'
                }}>
                  Acceleration
                </div>
                <div style={{
                  fontSize: '1.25rem',
                  fontWeight: '300',
                  color: '#0a0a0a',
                  letterSpacing: '-0.02em'
                }}>
                  {cars[activeIndex].acceleration}
                </div>
              </div>

              {/* Top Speed */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '0.65rem',
                  fontWeight: '500',
                  color: '#999',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  marginBottom: '0.5rem'
                }}>
                  Top Speed
                </div>
                <div style={{
                  fontSize: '1.25rem',
                  fontWeight: '300',
                  color: '#0a0a0a',
                  letterSpacing: '-0.02em'
                }}>
                  {cars[activeIndex].topSpeed}
                </div>
              </div>

              {/* Drivetrain */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '0.65rem',
                  fontWeight: '500',
                  color: '#999',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  marginBottom: '0.5rem'
                }}>
                  Drivetrain
                </div>
                <div style={{
                  fontSize: '1.25rem',
                  fontWeight: '300',
                  color: '#0a0a0a',
                  letterSpacing: '-0.02em'
                }}>
                  {cars[activeIndex].drivetrain}
                </div>
              </div>

              {/* Transmission */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '0.65rem',
                  fontWeight: '500',
                  color: '#999',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  marginBottom: '0.5rem'
                }}>
                  Transmission
                </div>
                <div style={{
                  fontSize: '1.25rem',
                  fontWeight: '300',
                  color: '#0a0a0a',
                  letterSpacing: '-0.02em'
                }}>
                  {cars[activeIndex].transmission}
                </div>
              </div>
            </div>

            {/* View Details Button */}
            <div style={{
              textAlign: 'center',
              marginTop: '2.5rem'
            }}>
              <button 
                onClick={() => handleCarClick(cars[activeIndex].id)}
                style={{
                  padding: '0.9rem 2rem',
                  background: 'transparent',
                  color: '#0a0a0a',
                  border: '1px solid #0a0a0a',
                  borderRadius: '0',
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#0a0a0a';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#0a0a0a';
                }}
              >
                Explore Details
              </button>
            </div>
          </div>

        <div className="container" style={{ maxWidth: '1400px' }}>

          {/* Divider Line */}
          <div style={{
            width: '100%',
            height: '1px',
            background: 'rgba(0, 0, 0, 0.1)',
            margin: '6rem 0 4rem'
          }}></div>

          {/* Popular Brands Section */}
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#0a0a0a',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              POPULAR EXOTIC & LUXURY RENTAL MAKES
            </h3>
            <p style={{
              fontSize: '1rem',
              color: '#666',
              marginBottom: '3rem'
            }}>
              The finest purveyors of supercars, sports cars, and limos.
            </p>

            {/* Brand Logos Grid - Center Selected */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '3rem',
              flexWrap: 'nowrap',
              position: 'relative',
              overflow: 'hidden',
              padding: '0 2rem'
            }}>
              {(() => {
                const prevIndex = activeIndex === 0 ? cars.length - 1 : activeIndex - 1;
                const nextIndex = activeIndex === cars.length - 1 ? 0 : activeIndex + 1;
                const brandsToShow = [
                  { car: cars[prevIndex], index: prevIndex, isActive: false },
                  { car: cars[activeIndex], index: activeIndex, isActive: true },
                  { car: cars[nextIndex], index: nextIndex, isActive: false }
                ];
                
                return brandsToShow.map(({ car, index, isActive }) => (
                  <div
                    key={car.id}
                    onClick={() => {
                      if (mainSwiper) {
                        mainSwiper.slideTo(index);
                      }
                    }}
                    style={{
                      padding: isActive ? '2.5rem 2rem' : '2rem 1.5rem',
                      background: isActive ? '#f8f9fa' : '#ffffff',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      border: isActive ? '2px solid #0a0a0a' : '2px solid #e5e5e5',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: isActive ? '200px' : '160px',
                      width: isActive ? '200px' : '160px',
                      boxShadow: isActive ? '0 8px 24px rgba(0,0,0,0.15)' : '0 4px 12px rgba(0,0,0,0.05)',
                      zIndex: isActive ? 10 : 2
                    }}
                    onMouseOver={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = '#f8f9fa';
                        e.currentTarget.style.borderColor = '#0a0a0a';
                      }
                    }}
                    onMouseOut={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = '#ffffff';
                        e.currentTarget.style.borderColor = '#e5e5e5';
                      }
                    }}
                  >
                    <Image 
                      src={car.logo} 
                      alt={car.brand}
                      width={isActive ? 150 : 120}
                      height={isActive ? 100 : 80}
                      style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }}
                    />
                  </div>
                ));
              })()}
            </div>

            {/* Brand Description */}
            <div style={{
              marginTop: '3rem',
              paddingLeft: '0',
              borderLeft: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <p style={{
                fontSize: '1.1rem',
                color: '#666',
                lineHeight: '1.8',
                marginBottom: '2rem',
                maxWidth: '700px',
                textAlign: 'center'
              }}>
                {cars[activeIndex].brandDescription}
              </p>
              <button 
                onClick={() => router.push(`/brands/${cars[activeIndex].brand.toLowerCase().replace(/\s+/g, '-')}`)}
                style={{
                  padding: '1rem 2.5rem',
                  background: '#0a0a0a',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = '#333'}
                onMouseOut={(e) => e.currentTarget.style.background = '#0a0a0a'}
              >
                Buy a {cars[activeIndex].brand}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

