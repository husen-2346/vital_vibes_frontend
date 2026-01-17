import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Appointments from "./components/Appointments";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* User */}
        <Route path="/" element={<Appointments />} />

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
