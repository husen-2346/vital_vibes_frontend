import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        <div className="footer-brand">
          <img src="src\assets\vv_logo.png" alt="logo"/>
          <p>
            20/6, 10th Cross Rd,<br />
            Govindaraja Nagar Ward,<br />
            Vijayanagar, Bengaluru,<br />
            Karnataka 560040
          </p>
        </div>

        <div className="footer-links">
          <h4>About</h4>
          <a href="#">About Clinic</a>
          <a href="#">Treatments</a>
          <a href="#">Doctors</a>
        </div>

        <div className="footer-links">
          <h4>Community</h4>
          <a href="#">Testimonials</a>
          <a href="#">Appointments</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-links">
          <h4>Socials</h4>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Vital Vibes. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
