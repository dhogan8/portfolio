import React from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollButton from '../components/ScrollButton';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Intro from '../pages/Intro';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Contact />
      <ScrollButton />
      <Footer />
    </>
  );
};

export default Layout;
