import { Routes, Route } from "react-router-dom";

// public components
import Nav from "./components/nav.jsx";
import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";
import Treatments from "./components/treatments.jsx";
import Appointment from "./components/Appointments.jsx";
import Testimonials from "./components/testimonials.jsx";
import Location from "./components/location.jsx";
import Footer from "./components/footer.jsx";

// admin pages
import AdminLogin from "./admin/AdminLogin.jsx";
import AdminDashboard from "./admin/AdminDashboard.jsx";

// css
import "./App.css";

const App = () => {
  return (
    <Routes>

      {/* PUBLIC WEBSITE */}
      <Route
        path="/"
        element={
          <>
            <Nav />
            <Hero />
            <About />
            <Treatments />
            <Appointment />
            <Testimonials />
            <Location />
            <Footer />
          </>
        }
      />

      {/* ADMIN */}
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />

    </Routes>
  );
};

export default App;
