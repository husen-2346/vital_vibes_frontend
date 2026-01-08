import React from "react";
import { IoLocationSharp } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-grid">

        {/* Left Content */}
        <div className="hero-text">
          <h1>VITAL VIBES</h1>
          <p className="subtitle">HOMEO CLINIC</p>

          <div className="address">
            <span className="location-icon"><IoLocationSharp /></span>
            <p>
              20/6, 10th Cross Rd, Govindaraja Nagar Ward,<br />
              Amarajyothi Nagar, Vijayanagar, Bengaluru,<br />
              Karnataka 560040
            </p>
          </div>

          <a href="#appointment" className="hero-btn">
            BOOK APPOINTMENT
          </a>

        </div>

        {/* Right Image Placeholder */}
        <div className="hero-image">

        </div>

      </div>
    </section>
  );
};

export default Hero;

