import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/vv_logo.png";

const AdminNavbar = () => {
  const navigate = useNavigate();

  return (
    <header className="admin-navbar">
       <img src={logo} alt="Vital Vibes Logo" className="admin-logo" />
      <button onClick={() => navigate("/")}>Logout</button>
    </header>
  );
};

export default AdminNavbar;
