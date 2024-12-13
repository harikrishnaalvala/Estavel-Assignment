import React from 'react';
import CustomNavbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import FeaturedProducts from './components/FeaturedProducts';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <CustomNavbar />
      <HeroSection />
      <AboutUs />
      <FeaturedProducts />
      <Testimonials />
      <ContactSection />
      <Footer />
    </>
  );
};

export default App;
