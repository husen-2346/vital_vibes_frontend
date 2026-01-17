import Nav from "../components/nav";
import Hero from "../components/hero";
import Treatments from "../components/treatments";
import About from "../components/about";
import Location from "../components/location";
import Testimonials from "../components/testimonials";
import Appointments from "../components/Appointments";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Treatments />
      <About />
      <Appointments />
      <Testimonials />
      <Location />
      <Footer />
    </>
  );
};

export default Home;
