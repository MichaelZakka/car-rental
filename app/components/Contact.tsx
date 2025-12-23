'use client';

export default function Contact() {
  return (
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
  );
}

