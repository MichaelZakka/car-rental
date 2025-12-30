'use client';

import './showroom.css';
import HeroSection from './components/HeroSection';
import FeaturedVehicles from './components/FeaturedVehicles';
import ExploreBrands from './components/ExploreBrands';
import WhyChooseUs from './components/WhyChooseUs';
import InventoryCategories from './components/InventoryCategories';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import SpecialOffers from './components/SpecialOffers';
import ShowroomGallery from './components/ShowroomGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import bmwCar from './assets/cars/bmw_Isolated.png';
import mercedesCar from './assets/cars/Mercedes_Isolated.png';
import jaguarCar from './assets/cars/Jaguar_Isolated2.png';
import lamboCar from './assets/cars/Lambo_Isolated.png';

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      name: '2024 BMW M5',
      year: '2024',
      horsepower: '617 HP',
      acceleration: '3.3s',
      fuelType: 'Hybrid',
      price: '$114,500',
      image: bmwCar
    },
    {
      name: '2024 Mercedes-AMG GT',
      year: '2024',
      horsepower: '523 HP',
      acceleration: '3.7s',
      fuelType: 'Gasoline',
      price: '$139,900',
      image: mercedesCar
    },
    {
      name: '2024 Jaguar F-Type R',
      year: '2024',
      horsepower: '444 HP',
      acceleration: '4.4s',
      fuelType: 'Gasoline',
      price: '$73,900',
      image: jaguarCar
    },
    {
      name: '2024 Lamborghini Huracán',
      year: '2024',
      horsepower: '631 HP',
      acceleration: '2.9s',
      fuelType: 'Gasoline',
      price: '$274,390',
      image: lamboCar
    }
  ];

  const benefits = [
    {
      icon: '🏆',
      title: '20+ Years of Excellence',
      description: 'Two decades of trusted service and customer satisfaction'
    },
    {
      icon: '✓',
      title: 'Certified Pre-Owned Program',
      description: 'Rigorous inspection and warranty on every pre-owned vehicle'
    },
    {
      icon: '💰',
      title: 'Flexible Financing Options',
      description: 'Competitive rates and terms to fit your budget'
    },
    {
      icon: '🔧',
      title: 'Full-Service Maintenance',
      description: 'Expert technicians and genuine parts for all your needs'
    },
    {
      icon: '🔄',
      title: 'Trade-In Assistance',
      description: 'Fair appraisals and seamless trade-in process'
    },
    {
      icon: '⭐',
      title: '5-Star Customer Reviews',
      description: 'Rated excellent by thousands of satisfied customers'
    }
  ];

  const services = [
    {
      icon: '🚗',
      title: 'New & Pre-Owned Sales',
      description: 'Extensive inventory of new and certified pre-owned vehicles'
    },
    {
      icon: '📋',
      title: 'Trade-In Appraisals',
      description: 'Fair and transparent vehicle valuations'
    },
    {
      icon: '💳',
      title: 'Auto Financing',
      description: 'Competitive rates with flexible payment options'
    },
    {
      icon: '⚙️',
      title: 'Service & Maintenance',
      description: 'Expert technicians using genuine parts'
    },
    {
      icon: '🛡️',
      title: 'Extended Warranties',
      description: 'Comprehensive coverage plans for peace of mind'
    },
    {
      icon: '🚚',
      title: 'Home Delivery Available',
      description: 'Convenient delivery service to your location'
    }
  ];

  return (
    <div className="showroom-page">
      <HeroSection scrollToSection={scrollToSection} />
      <ExploreBrands />
      <FeaturedVehicles vehicles={featuredVehicles} />
      <WhyChooseUs benefits={benefits} />
      <InventoryCategories />
      <Services services={services} />
      <Testimonials testimonials={testimonials} />
      <SpecialOffers />
      <ShowroomGallery />
      <Contact />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
