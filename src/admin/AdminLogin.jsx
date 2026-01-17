import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    console.log("🔥 LOGIN CLICKED");
    console.log("SENDING:", { username, password });

    try {
      const res = await fetch("https://vital-vibes-backend.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      console.log("🔥 RESPONSE STATUS:", res.status);

      const data = await res.json();
      console.log("🔥 RESPONSE DATA:", data);

      if (!res.ok) {
        setError(data.message || "Invalid username or password");
        return;
      }

      // ✅ SUCCESS
      navigate("/admin/dashboard");
    } catch (err) {
      console.error("❌ NETWORK ERROR:", err);
      setError("Backend server is down");
    }
  };

  return (
  <div className="admin-login-page">
    <form className="admin-login-form" onSubmit={handleLogin}>
      <h2>Admin Login</h2>

      {error && <p className="login-error">{error}</p>}

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  </div>
);
};

export default AdminLogin;
