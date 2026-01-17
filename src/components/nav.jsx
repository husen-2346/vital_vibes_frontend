import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from "../assets/vv_logo.png";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container navbar-grid">

        <div className="logo">
          <img src={logo} alt="Vital Vibes Logo" />
        </div>

        <nav className={open ? "nav-menu active" : "nav-menu"}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#appointment">Appointment</a></li>
            <li><a href="#location">Location</a></li>
            <li>
              <Link to="/admin" className="login-btn">
                Login
              </Link>

            </li>
          </ul>
        </nav>

        <div className="ham-menu">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <GiHamburgerMenu />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Nav;
