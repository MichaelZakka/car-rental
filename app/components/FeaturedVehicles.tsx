'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import type { StaticImageData } from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import bmwLogo from '../assets/logos/BMW LOGO.png';
import mercedesLogo from '../assets/logos/Mercedes-logo.png';
import jaguarLogo from '../assets/logos/Jaguar_Logo.png';
import lamboLogo from '../assets/logos/Lambo_Logo.png';

interface Vehicle {
  name: string;
  year: string;
  horsepower: string;
  acceleration: string;
  fuelType: string;
  price: string;
  image: string | StaticImageData;
}

interface FeaturedVehiclesProps {
  vehicles: Vehicle[];
}

// Extended vehicle data with additional details
const extendedVehicleData: any = {
  '2024 BMW M5': {
    brand: 'BMW',
    logo: bmwLogo,
    topSpeed: '189 mph',
    drivetrain: 'AWD',
    transmission: 'Automatic',
    description: 'Every tap of the accelerator is a gut punch. It\'s a special engine, a true talisman against boredom and the indignities of daily life.'
  },
  '2024 Mercedes-AMG GT': {
    brand: 'Mercedes-Benz',
    logo: mercedesLogo,
    topSpeed: '195 mph',
    drivetrain: 'RWD',
    transmission: 'Automatic',
    description: 'A masterpiece of engineering and design. The Mercedes-AMG GT delivers breathtaking performance wrapped in elegant sophistication.'
  },
  '2024 Jaguar F-Type R': {
    brand: 'Jaguar',
    logo: jaguarLogo,
    topSpeed: '177 mph',
    drivetrain: 'RWD',
    transmission: 'Automatic',
    description: 'Every tap of the accelerator is a gut punch. It\'s a special engine, a true talisman against boredom and the indignities of daily life.'
  },
  '2024 Lamborghini Huracán': {
    brand: 'Lamborghini',
    logo: lamboLogo,
    topSpeed: '202 mph',
    drivetrain: 'AWD',
    transmission: 'Automatic',
    description: 'No automotive brand is so alluring as Lamborghini. Scissor doors, V10 and V12 engines, howling exhaust notes - their exotic models are the very definition of ostentatious.'
  }
};

export default function FeaturedVehicles({ vehicles }: FeaturedVehiclesProps) {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);

  // Extend vehicles with additional data
  const extendedVehicles = vehicles.map((vehicle, idx) => ({
    ...vehicle,
    id: `${idx + 1}`,
    ...(extendedVehicleData[vehicle.name] || {
      brand: vehicle.name.split(' ')[1] || 'Brand',
      logo: bmwLogo,
      topSpeed: '130 mph',
      drivetrain: 'AWD',
      transmission: 'Automatic',
      description: 'Experience luxury and performance in perfect harmony.'
    })
  }));

  return (
    <section id="featured" className="featured-section" style={{ padding: '2rem 0' }}>
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 'clamp(0.67rem, 2vw, 1.33rem)' }}>Featured Collection</h2>
      </div>

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
          {extendedVehicles.map((vehicle, index) => {
            const isActive = activeIndex === index;
            return (
              <SwiperSlide key={vehicle.id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                    {typeof vehicle.image === 'string' ? (
                      <img 
                        src={vehicle.image} 
                        alt={vehicle.name}
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
                    ) : (
                      <Image 
                        src={vehicle.image} 
                        alt={vehicle.name}
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
                    )}
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
        {/* Main Info Grid */}
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
                {extendedVehicles[activeIndex].brand}
              </div>
              <div style={{
                fontSize: '1rem',
                fontWeight: '300',
                color: '#ffffff',
                letterSpacing: '-0.02em',
                lineHeight: '1.1'
              }}>
                {extendedVehicles[activeIndex].price}
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
                {extendedVehicles[activeIndex].name.split(' ').slice(0, -1).join(' ')}
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
                {extendedVehicles[activeIndex].name.split(' ').slice(-1)[0]}
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
              {extendedVehicles[activeIndex].description}
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
                {extendedVehicles[activeIndex].horsepower}
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
              {extendedVehicles[activeIndex].acceleration}
            </div>
          </div>

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
              {extendedVehicles[activeIndex].topSpeed}
            </div>
          </div>

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
              {extendedVehicles[activeIndex].drivetrain}
            </div>
          </div>

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
              {extendedVehicles[activeIndex].transmission}
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
            onClick={() => router.push(`/cars/${extendedVehicles[activeIndex].id}`)}
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

      {/* Divider Line */}
      <div className="container" style={{ maxWidth: '1400px' }}>
        <div style={{
          width: '100%',
          height: '1px',
          background: 'rgba(255, 255, 255, 0.1)',
          margin: 'clamp(0.67rem, 1.33vw, 1rem) 0 clamp(0.67rem, 1.33vw, 1.33rem)'
        }}></div>
      </div>

      {/* Brand Logos Grid - Full Width */}
      <div style={{
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        padding: '0 clamp(1rem, 4vw, 2rem)',
        textAlign: 'center'
      }}>
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
              const prevIndex = activeIndex === 0 ? extendedVehicles.length - 1 : activeIndex - 1;
              const nextIndex = activeIndex === extendedVehicles.length - 1 ? 0 : activeIndex + 1;
              const brandsToShow = [
                { vehicle: extendedVehicles[prevIndex], index: prevIndex, isActive: false },
                { vehicle: extendedVehicles[activeIndex], index: activeIndex, isActive: true },
                { vehicle: extendedVehicles[nextIndex], index: nextIndex, isActive: false }
              ];
              
              return brandsToShow.map(({ vehicle, index, isActive }) => (
                <div
                  key={vehicle.id}
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
                    src={vehicle.logo} 
                    alt={vehicle.brand}
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
        </div>
    </section>
  );
}

