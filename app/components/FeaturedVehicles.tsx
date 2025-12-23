'use client';

import { useRouter } from 'next/navigation';

interface Vehicle {
  name: string;
  year: string;
  horsepower: string;
  acceleration: string;
  fuelType: string;
  price: string;
  image: string;
}

interface FeaturedVehiclesProps {
  vehicles: Vehicle[];
}

export default function FeaturedVehicles({ vehicles }: FeaturedVehiclesProps) {
  const router = useRouter();

  return (
    <section id="featured" className="featured-section">
      <div className="container">
        <h2 className="section-title">Featured Collection</h2>
        <div className="vehicles-grid">
          {vehicles.map((vehicle, index) => (
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
                <button className="btn-view-details" onClick={() => router.push(`/cars/${index + 1}`)}>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

