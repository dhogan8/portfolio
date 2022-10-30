import React from 'react';

import About from '../components/About';
import Contact from '../components/Contact';
import Intro from '../components/Intro';

const Home = () => {
  return (
    <div>
      <Intro />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
