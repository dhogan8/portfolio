import React from 'react';

import About from '../pages/About';
import Contact from '../pages/Contact';
import Footer from '../components/Footer';
import Intro from '../pages/Intro';
import Navbar from '../components/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default Layout;
