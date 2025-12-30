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
import Footer from '../../components/Footer';
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

  const scrollToSection = (id: string) => {
    // For category detail page, redirect to home page with hash
    if (typeof window !== 'undefined') {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <div className="showroom-page" style={{ background: '#0a0a0a' }}>
      {/* Hero Section */}
      <section className="brands-page-hero">
        <div className="brands-hero-content">
          <Link href="/categories" style={{ 
            display: 'inline-block', 
            marginBottom: '2rem', 
            color: 'rgba(255, 255, 255, 0.8)',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: '500',
            transition: 'color 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'}
          onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
          >
            ← Back to Collections
          </Link>
          <h1 className="brands-hero-title">{category.name}</h1>
          <p className="brands-hero-subtitle">
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
      </section>

      {/* Cars Swiper Section */}
      <section className="category-cars-section" style={{ padding: '2rem 0', background: 'linear-gradient(180deg, #000000 0%, #1A4D2E 100%)' }}>
        {/* Main Car Image Swiper - Full Width */}
        <div style={{ 
          width: '100vw', 
          marginLeft: 'calc(-50vw + 50%)', 
          marginBottom: 'clamp(0.67rem, 1.33vw, 1.33rem)',
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
            slidesPerView={1.2}
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
              480: {
                slidesPerView: 1.3,
                spaceBetween: 20,
                centeredSlides: true,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 25,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 1.8,
                spaceBetween: 30,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 2.2,
                spaceBetween: 40,
                centeredSlides: true,
              },
              1280: {
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
                      padding: 'clamp(0.67rem, 1.33vw, 1.67rem) clamp(0.33rem, 1.33vw, 0.67rem)',
                      minHeight: 'clamp(133px, 23.3vh, 233px)',
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      margin: '0 auto',
                      opacity: isActive ? 1 : 0.6,
                      transform: isActive ? 'scale(1)' : 'scale(0.88)',
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
                          width={1000}
                          height={563}
                          style={{ 
                            objectFit: 'contain',
                            maxWidth: '100%',
                            height: 'auto',
                            filter: isActive 
                              ? 'drop-shadow(0 20px 60px rgba(26, 77, 46, 0.8)) drop-shadow(0 10px 30px rgba(26, 77, 46, 0.6)) drop-shadow(0 5px 15px rgba(0, 0, 0, 0.4))'
                              : 'drop-shadow(0 10px 30px rgba(26, 77, 46, 0.5))',
                            display: 'block',
                            margin: '0 auto',
                            transition: 'all 0.3s ease',
                            width: 'clamp(133px, 46.7vw, 400px)'
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
            /* Swiper Navigation Arrows */
            .car-main-swiper-full .swiper-button-next,
            .car-main-swiper-full .swiper-button-prev {
              width: 32px !important;
              height: 32px !important;
              margin-top: -16px !important;
              color: #ffffff;
            }
            
            .car-main-swiper-full .swiper-button-next:after,
            .car-main-swiper-full .swiper-button-prev:after {
              font-size: 14px !important;
              font-weight: 700 !important;
            }
            
            .car-main-swiper-full .swiper-button-next {
              right: 8px !important;
            }
            
            .car-main-swiper-full .swiper-button-prev {
              left: 8px !important;
            }

            .car-main-swiper-full .swiper-pagination-bullet {
              background: #ffffff;
              opacity: 0.5;
            }

            .car-main-swiper-full .swiper-pagination-bullet-active {
              opacity: 1;
              background: var(--primary-green, #2d6b5b);
            }
            
            @media (max-width: 768px) {
              .car-main-swiper-full .swiper-button-next,
              .car-main-swiper-full .swiper-button-prev {
                display: none !important;
              }
            }
          `}} />

          {/* Car Information Section - Luxurious Layout */}
          <div style={{
            position: 'relative',
            width: '100%',
            marginBottom: 0,
            padding: 'clamp(0.5rem, 2vw, 1.5rem) clamp(0.67rem, 2vw, 1.33rem)'
          }}>
            {/* Main Info Grid - Elegant Layout */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr 1fr',
              gap: 'clamp(0.75rem, 2vw, 1.5rem)',
              alignItems: 'center',
              maxWidth: '1000px',
              margin: '0 auto',
              padding: '1rem 0'
            }}
            className="luxury-car-info-grid"
            >
              {/* Left Column - Brand & Price */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                alignItems: 'flex-start',
                textAlign: 'left'
              }}
              className="luxury-car-info-left"
              >
                <div>
                  <div style={{
                    fontSize: '0.55rem',
                    fontWeight: '500',
                    color: '#999',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    marginBottom: '0.25rem'
                  }}>
                    {cars[activeIndex].brand}
                  </div>
                  <div style={{
                    fontSize: '1rem',
                    fontWeight: '300',
                    color: '#ffffff',
                    letterSpacing: '-0.02em',
                    lineHeight: '1.1'
                  }}>
                    {cars[activeIndex].price}
                  </div>
                </div>
                <div style={{
                  width: '30px',
                  height: '1px',
                  background: 'linear-gradient(90deg, #ffffff 0%, transparent 100%)'
                }}></div>
              </div>

              {/* Center Column - Name & Description */}
              <div style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                <div>
                  <h2 style={{
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
                    fontWeight: '200',
                    color: '#ffffff',
                    margin: 0,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    lineHeight: '1.1',
                    fontFamily: 'inherit'
                  }}>
                    {cars[activeIndex].name.split(' ').slice(0, -1).join(' ')}
                  </h2>
                  <h3 style={{
                    fontSize: 'clamp(0.9rem, 2vw, 1.3rem)',
                    fontWeight: '700',
                    color: '#ffffff',
                    margin: '0.25rem 0 0 0',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    lineHeight: '1.1'
                  }}>
                    {cars[activeIndex].name.split(' ').slice(-1)[0]}
                  </h3>
                </div>
                <p style={{
                  fontSize: '0.7rem',
                  color: '#999',
                  lineHeight: '1.5',
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
                gap: '0.75rem',
                alignItems: 'flex-end'
              }}
              className="luxury-car-info-right"
              >
                <div style={{ textAlign: 'right' }}>
                  <div style={{
                    fontSize: '0.55rem',
                    fontWeight: '500',
                    color: '#999',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    marginBottom: '0.25rem'
                  }}>
                    Power
                  </div>
                  <div style={{
                    fontSize: '1rem',
                    fontWeight: '300',
                    color: '#ffffff',
                    letterSpacing: '-0.02em',
                    lineHeight: '1.1'
                  }}>
                    {cars[activeIndex].horsepower}
                  </div>
                </div>
                <div style={{
                  width: '30px',
                  height: '1px',
                  background: 'linear-gradient(270deg, #ffffff 0%, transparent 100%)',
                  marginLeft: 'auto'
                }}></div>
              </div>
            </div>

            {/* Bottom Stats Bar */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'clamp(0.75rem, 2.5vw, 2rem)',
              marginTop: 'clamp(0.75rem, 2vw, 1.5rem)',
              paddingTop: 'clamp(0.75rem, 2vw, 1.5rem)',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              flexWrap: 'wrap'
            }}
            className="luxury-stats-bar"
            >
              {/* Acceleration */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '0.5rem',
                  fontWeight: '500',
                  color: '#999',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  marginBottom: '0.35rem'
                }}>
                  Acceleration
                </div>
                <div style={{
                  fontSize: '0.85rem',
                  fontWeight: '300',
                  color: '#ffffff',
                  letterSpacing: '-0.02em'
                }}>
                  {cars[activeIndex].acceleration}
                </div>
              </div>

              {/* Top Speed */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '0.5rem',
                  fontWeight: '500',
                  color: '#999',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  marginBottom: '0.35rem'
                }}>
                  Top Speed
                </div>
                <div style={{
                  fontSize: '0.85rem',
                  fontWeight: '300',
                  color: '#ffffff',
                  letterSpacing: '-0.02em'
                }}>
                  {cars[activeIndex].topSpeed}
                </div>
              </div>

              {/* Drivetrain */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '0.5rem',
                  fontWeight: '500',
                  color: '#999',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  marginBottom: '0.35rem'
                }}>
                  Drivetrain
                </div>
                <div style={{
                  fontSize: '0.85rem',
                  fontWeight: '300',
                  color: '#ffffff',
                  letterSpacing: '-0.02em'
                }}>
                  {cars[activeIndex].drivetrain}
                </div>
              </div>

              {/* Transmission */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '0.5rem',
                  fontWeight: '500',
                  color: '#999',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  marginBottom: '0.35rem'
                }}>
                  Transmission
                </div>
                <div style={{
                  fontSize: '0.85rem',
                  fontWeight: '300',
                  color: '#ffffff',
                  letterSpacing: '-0.02em'
                }}>
                  {cars[activeIndex].transmission}
                </div>
              </div>
            </div>

            {/* View Details Button */}
            <div style={{
              textAlign: 'center',
              marginTop: 'clamp(0.5rem, 1.33vw, 1rem)',
              marginBottom: 0
            }}>
              <button 
                className="btn-view-all-collections"
                onClick={() => handleCarClick(cars[activeIndex].id)}
                style={{
                  padding: '10px 28px',
                  fontSize: '0.75rem',
                  borderRadius: '30px'
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
            background: 'rgba(255, 255, 255, 0.1)',
            margin: 'clamp(0.67rem, 1.33vw, 1rem) 0 clamp(0.67rem, 1.33vw, 1.33rem)'
          }}></div>

          {/* Popular Brands Section - Full Width */}
          <div style={{
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
            padding: '0 clamp(1rem, 4vw, 2rem)',
            textAlign: 'center'
          }}
          className="category-brands-container"
          >
            <div style={{
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
            <h3 style={{
              fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              lineHeight: '1.3'
            }}>
              POPULAR EXOTIC & LUXURY RENTAL MAKES
            </h3>
            <p style={{
              fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
              color: '#999',
              marginBottom: 'clamp(2rem, 5vw, 3rem)',
              lineHeight: '1.6'
            }}>
              The finest purveyors of supercars, sports cars, and limos.
            </p>

            {/* Brand Logos Grid - Center Selected */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 'clamp(0.33rem, 1vw, 0.5rem)',
              marginBottom: 'clamp(0.67rem, 1.33vw, 1rem)',
              flexWrap: 'nowrap',
              position: 'relative',
              overflow: 'hidden',
              padding: '0 clamp(0.5rem, 2vw, 2rem)',
              maxWidth: '1400px',
              margin: '0 auto'
            }}
            className="category-brands-grid"
            >
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
                      padding: isActive ? 'clamp(0.5rem, 1.33vw, 1rem) clamp(0.5rem, 1.33vw, 0.83rem)' : 'clamp(0.4rem, 1vw, 0.83rem) clamp(0.4rem, 1vw, 0.67rem)',
                      background: isActive ? '#1a1a1a' : '#0f0f0f',
                      borderRadius: 'clamp(4px, 1vw, 6.67px)',
                      transition: 'all 0.3s ease',
                      border: isActive ? '2px solid #ffffff' : '2px solid #2a2a2a',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: isActive ? 'clamp(67px, 12vw, 93px)' : 'clamp(60px, 10.67vw, 80px)',
                      width: isActive ? 'clamp(67px, 12vw, 93px)' : 'clamp(60px, 10.67vw, 80px)',
                      boxShadow: isActive ? '0 4px 12px rgba(0,0,0,0.5)' : '0 2px 6px rgba(0,0,0,0.3)',
                      zIndex: isActive ? 10 : 2,
                      minWidth: '53px'
                    }}
                    onMouseOver={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = '#1a1a1a';
                        e.currentTarget.style.borderColor = '#3a3a3a';
                      }
                    }}
                    onMouseOut={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = '#0f0f0f';
                        e.currentTarget.style.borderColor = '#2a2a2a';
                      }
                    }}
                  >
                    <Image 
                      src={car.logo} 
                      alt={car.brand}
                      width={isActive ? 67 : 53}
                      height={isActive ? 47 : 37}
                      style={{ 
                        objectFit: 'contain', 
                        maxWidth: '100%', 
                        height: 'auto',
                        width: isActive ? 'clamp(47px, 10vw, 67px)' : 'clamp(40px, 8.67vw, 53px)'
                      }}
                    />
                  </div>
                ));
              })()}
            </div>

            {/* Brand Description */}
            <div style={{
              marginTop: 'clamp(1rem, 2vw, 1.5rem)',
              paddingLeft: '0',
              borderLeft: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <p style={{
                fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                color: '#999',
                lineHeight: '1.8',
                marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
                maxWidth: '700px',
                textAlign: 'center',
                padding: '0 clamp(0.5rem, 2vw, 1rem)'
              }}>
                {cars[activeIndex].brandDescription}
              </p>
              <button 
                onClick={() => router.push(`/brands/${cars[activeIndex].brand.toLowerCase().replace(/\s+/g, '-')}`)}
                style={{
                  padding: 'clamp(0.875rem, 2vw, 1rem) clamp(1.75rem, 4vw, 2.5rem)',
                  background: '#ffffff',
                  color: '#0a0a0a',
                  border: 'none',
                  borderRadius: 'clamp(6px, 1.5vw, 8px)',
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: 'clamp(200px, 80%, 300px)'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = '#e5e5e5'}
                onMouseOut={(e) => e.currentTarget.style.background = '#ffffff'}
              >
                Buy a {cars[activeIndex].brand}
              </button>
            </div>
            </div>
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

