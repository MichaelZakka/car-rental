'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import '../../showroom.css';
import Footer from '../../components/Footer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import bmwCarImage from '../../assets/cars/bmw_Isolated.png';
import mercedesCarImage from '../../assets/cars/Mercedes_Isolated.png';
import jaguarCarImage from '../../assets/cars/Jaguar_Isolated2.png';
import lamboCarImage from '../../assets/cars/Lambo_Isolated.png';

export default function BrandDetailPage({ params }: { params: { brandId: string } }) {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);

  const brandData: { [key: string]: any } = {
    'bmw': {
      name: 'BMW',
      logo: '🚗',
      tagline: 'The Ultimate Driving Machine',
      description: 'BMW has been at the forefront of automotive innovation for decades, delivering vehicles that combine luxury, performance, and cutting-edge technology. From sporty sedans to powerful SUVs, BMW offers a driving experience like no other.',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80',
      founded: '1916',
      headquarters: 'Munich, Germany'
    },
    'mercedes-benz': {
      name: 'Mercedes-Benz',
      logo: '⭐',
      tagline: 'The Best or Nothing',
      description: 'Mercedes-Benz stands as a symbol of automotive excellence, crafting vehicles that epitomize luxury, sophistication, and engineering prowess. With a rich heritage dating back over a century, Mercedes-Benz continues to set the standard for premium automobiles.',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80',
      founded: '1926',
      headquarters: 'Stuttgart, Germany'
    },
    'audi': {
      name: 'Audi',
      logo: '🔷',
      tagline: 'Vorsprung durch Technik',
      description: 'Audi represents progressive design and advanced engineering. Known for their quattro all-wheel-drive system and sleek designs, Audi vehicles deliver a perfect blend of performance, luxury, and innovation.',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=80',
      founded: '1909',
      headquarters: 'Ingolstadt, Germany'
    },
    'tesla': {
      name: 'Tesla',
      logo: '⚡',
      tagline: 'Electric Performance',
      description: 'Tesla has revolutionized the automotive industry with their all-electric vehicles. Combining cutting-edge technology, impressive performance, and sustainable energy solutions, Tesla is leading the charge toward a cleaner, more efficient future.',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&q=80',
      founded: '2003',
      headquarters: 'Austin, Texas, USA'
    },
    'lexus': {
      name: 'Lexus',
      logo: '💎',
      tagline: 'Experience Amazing',
      description: 'Lexus delivers Japanese luxury with meticulous attention to detail and unparalleled refinement. Known for their reliability, comfort, and innovative hybrid technology, Lexus vehicles offer a serene and sophisticated driving experience.',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80',
      founded: '1989',
      headquarters: 'Nagoya, Japan'
    },
    'porsche': {
      name: 'Porsche',
      logo: '🏎️',
      tagline: 'There is No Substitute',
      description: 'Porsche is synonymous with high-performance sports cars and legendary driving dynamics. With a rich motorsport heritage and iconic designs, Porsche continues to produce vehicles that thrill enthusiasts and collectors worldwide.',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
      founded: '1931',
      headquarters: 'Stuttgart, Germany'
    },
    'genesis': {
      name: 'Genesis',
      logo: '✨',
      tagline: 'Redefining Luxury',
      description: 'Genesis brings a fresh perspective to luxury automobiles with bold designs, advanced technology, and exceptional value. As Hyundai\'s luxury division, Genesis is quickly establishing itself as a formidable competitor in the premium segment.',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80',
      founded: '2015',
      headquarters: 'Seoul, South Korea'
    },
    'cadillac': {
      name: 'Cadillac',
      logo: '👑',
      tagline: 'Dare Greatly',
      description: 'Cadillac represents American luxury at its finest. With a storied history of innovation and style, Cadillac continues to create vehicles that blend bold design, advanced technology, and powerful performance.',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
      founded: '1902',
      headquarters: 'Detroit, Michigan, USA'
    },
    'jaguar': {
      name: 'Jaguar',
      logo: '🐆',
      tagline: 'Grace, Space, Pace',
      description: 'Jaguar embodies British elegance and sporting performance. Known for their graceful designs and exhilarating driving dynamics, Jaguar vehicles deliver a unique blend of luxury, style, and power.',
      image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=80',
      founded: '1922',
      headquarters: 'Whitley, England'
    },
    'land-rover': {
      name: 'Land Rover',
      logo: '🏔️',
      tagline: 'Above and Beyond',
      description: 'Land Rover is renowned for creating luxury SUVs with unmatched off-road capability. Combining refinement with ruggedness, Land Rover vehicles are built for adventure while providing premium comfort and style.',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&q=80',
      founded: '1948',
      headquarters: 'Gaydon, England'
    }
  };

  const brand = brandData[params.brandId] || brandData['bmw'];

  const scrollToSection = (id: string) => {
    // For brand detail page, redirect to home page with hash
    if (typeof window !== 'undefined') {
      window.location.href = `/#${id}`;
    }
  };

  // Map brand to car image
  const getBrandCarImage = (brandName: string) => {
    const brandImageMap: { [key: string]: any } = {
      'BMW': bmwCarImage,
      'Mercedes-Benz': mercedesCarImage,
      'Jaguar': jaguarCarImage,
      'Lamborghini': lamboCarImage,
      'Porsche': lamboCarImage,
      'Audi': bmwCarImage,
      'Tesla': bmwCarImage,
      'Lexus': bmwCarImage,
      'Genesis': bmwCarImage,
      'Cadillac': bmwCarImage,
      'Land Rover': bmwCarImage
    };
    return brandImageMap[brandName] || bmwCarImage;
  };

  const brandCarImage = getBrandCarImage(brand.name);

  // Sample cars - extended with additional details for carousel
  const cars = [
    {
      id: '1',
      name: `2024 ${brand.name} 5 Series`,
      year: '2024',
      horsepower: '335 HP',
      acceleration: '5.1s',
      fuelType: 'Hybrid',
      price: '$58,900',
      image: brandCarImage,
      transmission: 'Automatic',
      seats: 5,
      mileage: '12,000 mi',
      topSpeed: '155 mph',
      drivetrain: 'AWD',
      description: 'Experience the perfect blend of luxury and performance. This exceptional vehicle delivers unmatched driving dynamics and sophisticated elegance.'
    },
    {
      id: '2',
      name: `2024 ${brand.name} X5`,
      year: '2024',
      horsepower: '362 HP',
      acceleration: '4.9s',
      fuelType: 'Gasoline',
      price: '$61,500',
      image: brandCarImage,
      transmission: 'Automatic',
      seats: 5,
      mileage: '8,500 mi',
      topSpeed: '155 mph',
      drivetrain: 'AWD',
      description: 'A masterpiece of engineering and design. This vehicle delivers breathtaking performance wrapped in elegant sophistication.'
    },
    {
      id: '3',
      name: `2024 ${brand.name} Sedan`,
      year: '2024',
      horsepower: '335 HP',
      acceleration: '5.1s',
      fuelType: 'Gasoline',
      price: '$56,500',
      image: brandCarImage,
      transmission: 'Automatic',
      seats: 5,
      mileage: '10,200 mi',
      topSpeed: '155 mph',
      drivetrain: 'RWD',
      description: 'Every tap of the accelerator is a gut punch. It\'s a special engine, a true talisman against boredom and the indignities of daily life.'
    },
    {
      id: '4',
      name: `2024 ${brand.name} Coupe`,
      year: '2024',
      horsepower: '402 HP',
      acceleration: '4.2s',
      fuelType: 'Gasoline',
      price: '$72,000',
      image: brandCarImage,
      transmission: 'Automatic',
      seats: 4,
      mileage: '5,800 mi',
      topSpeed: '177 mph',
      drivetrain: 'RWD',
      description: 'High-performance engineering meets refined luxury. This coupe delivers exhilarating power with uncompromising style.'
    },
    {
      id: '5',
      name: `2024 ${brand.name} SUV`,
      year: '2024',
      horsepower: '375 HP',
      acceleration: '5.5s',
      fuelType: 'Hybrid',
      price: '$68,900',
      image: brandCarImage,
      transmission: 'Automatic',
      seats: 7,
      mileage: '9,200 mi',
      topSpeed: '155 mph',
      drivetrain: 'AWD',
      description: 'Combining refinement with ruggedness, this SUV is built for adventure while providing premium comfort and style.'
    },
    {
      id: '6',
      name: `2023 ${brand.name} Sport`,
      year: '2023',
      horsepower: '450 HP',
      acceleration: '3.8s',
      fuelType: 'Gasoline',
      price: '$85,000',
      image: brandCarImage,
      transmission: 'Automatic',
      seats: 4,
      mileage: '15,500 mi',
      topSpeed: '189 mph',
      drivetrain: 'AWD',
      description: 'The ultimate expression of performance. This sport model thrills enthusiasts with legendary driving dynamics.'
    }
  ];

  return (
    <div className="showroom-page">
      {/* Brand Hero */}
      <section className="brands-page-hero">
        <div className="brands-hero-content">
          <h1 className="brands-hero-title">{brand.name}</h1>
          <p className="brands-hero-subtitle">
            {brand.tagline}
          </p>
          <p className="brands-hero-description" style={{ 
            marginTop: '2rem', 
            fontSize: '1.125rem', 
            lineHeight: '1.8', 
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            {brand.description}
          </p>
        </div>
      </section>

      {/* Available Vehicles - FeaturedVehicles Style */}
      <section className="brand-vehicles-section" style={{ padding: '2rem 0' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 'clamp(0.67rem, 2vw, 1.33rem)' }}>Available {brand.name} Vehicles</h2>
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
                      <img 
                        src={typeof car.image === 'string' ? car.image : car.image.src} 
                        alt={car.name}
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
          padding: 'clamp(0.5rem, 2vw, 1.5rem) clamp(0.67rem, 2vw, 1.33rem) clamp(0.5rem, 2vw, 1rem) clamp(0.67rem, 2vw, 1.33rem)'
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
                  {brand.name}
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
            marginBottom: 0,
            paddingBottom: 0
          }}>
            <button 
              className="btn-view-all-collections"
              onClick={() => router.push(`/cars/${cars[activeIndex].id}`)}
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

      </section>

      {/* CTA Section */}
      {/* <section className="brand-cta-section">
        <div className="container">
          <div className="brand-cta-content">
            <h2 className="brand-cta-title">Interested in a {brand.name}?</h2>
            <p className="brand-cta-text">
              Schedule a test drive or contact our sales team to learn more about these exceptional vehicles
            </p>
            <div className="brand-cta-buttons">
              <button 
                className="brand-cta-btn-primary"
                onClick={() => router.push('/#contact')}
              >
                Schedule Test Drive
              </button>
              <button 
                className="brand-cta-btn-secondary"
                onClick={() => router.push('/brands')}
              >
                View All Brands
              </button>
            </div>
          </div>
        </div>
      </section> */}

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

