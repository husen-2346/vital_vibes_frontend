import React from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css";
import logo from "../assets/vv_logo.png";

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // 🔐 Later: verify credentials from backend
    navigate("/admin/dashboard");
  };

  return (
    <div className="admin-login-page">
      <img src={logo} alt="Vital Vibes Logo" className="admin-logo" />

      <h2>ADMIN LOGIN</h2>

      <form className="admin-login-form" onSubmit={handleLogin}>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
