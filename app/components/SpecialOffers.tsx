'use client';

export default function SpecialOffers() {
  return (
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
  );
}

