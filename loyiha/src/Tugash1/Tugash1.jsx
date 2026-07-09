import React from 'react';
import './Tugash1.css';
import Rasm1 from "../Img/1.png"
import Rasm2 from "../Img/14.jpg"

const Tugash1 = () => {
  return (
    <div className="bashi">
      

      <section className="blog-section">
        <div className="cards-container">
          {[1, 2, 3].map((item) => (
            <div className="blog-card" key={item}>
              <div className="card-image">
                <img src={Rasm2} alt="Grill va go'sht" />
              </div>
              <div className="card-content">
                <h3>Tips for Preparing and Caring for Your Grill</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum quam.</p>
                <a href="#readmore" className="read-more-btn">Read More</a>
              </div>
            </div>
          ))}
        </div>
        <div className="view-more-container">
          <button className="view-more-btn">View More</button>
        </div>
      </section>

      {/* 2. Katta Restoran Ko'rinishi (Banner) */}
      <section className="interior-banner">
        <div className="banner-overlay">
          <button className="play-button">▶</button>
        </div>
      </section>

      {/* 3. Instagram Foto Galereya bo'limi */}
      <section className="gallery-section">
        <div className="gallery-info">
          <span>Instagram</span>
          <h2>Photo Gallery</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
          <button className="view-more-btn">View More</button>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=400&auto=format&fit=crop" alt="Pizza" /></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=400&auto=format&fit=crop" alt="Salat" /></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&auto=format&fit=crop" alt="Sog'lom taom" /></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop" alt="Burger va salat" /></div>
        </div>
      </section>

      {/* 4. Footer va Newsletter bo'limi */}
      <footer className="footer-section">
        <div className="newsletter-box">
          <span>Newsletter</span>
          <h2>Subscribe To Our Newsletter</h2>
          <p>And never miss latest updates!</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Email Address" />
            <button type="button">Subscribe</button>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-column">
            <h3>Contact Us</h3>
            <p>9 W 53rd St, New York, NY 10019, USA</p>
            <p>+1 212-344-1230</p>
          </div>

          <div className="footer-column brand-column">
            <img className="brand-logo"  src={Rasm1} alt="" />
            <p>"The best way to find yourself is to lose yourself in the service of others."</p>
            <div className="social-icons">
              <span className="icon"><i class="fa-brands fa-facebook-f"></i>    </span>
              <span className="icon"><i class="fa-brands fa-twitter"></i></span>
              <span className="icon"><i class="fa-brands fa-instagram"></i></span>
            </div>
          </div>

          <div className="footer-column">
            <h3>Working Hours</h3>
            <p>Monday - Friday: 08:00 AM - 12:00 AM</p>
            <p>Saturday - Sunday: 07:00 AM - 11:00 PM</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>2026 EatUrkish. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default Tugash1;