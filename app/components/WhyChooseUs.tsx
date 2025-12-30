'use client';

import { FaTrophy, FaCheckCircle, FaDollarSign, FaWrench, FaExchangeAlt, FaStar } from 'react-icons/fa';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  benefits: Benefit[];
}

// Map emoji icons to Font Awesome icons
const iconMap: { [key: string]: React.ReactNode } = {
  '🏆': <FaTrophy />,
  '✓': <FaCheckCircle />,
  '💰': <FaDollarSign />,
  '🔧': <FaWrench />,
  '🔄': <FaExchangeAlt />,
  '⭐': <FaStar />,
};

export default function WhyChooseUs({ benefits }: WhyChooseUsProps) {
  return (
    <section id="why-choose-us" className="why-choose-section">
      <div className="container">
        <h2 className="section-title">Why Drive With Us</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">
                {iconMap[benefit.icon] || <FaStar />}
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

