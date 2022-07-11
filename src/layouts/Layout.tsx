import React from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import useLocalStorage from 'use-local-storage';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollButton from '../components/ScrollButton';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Intro from '../pages/Intro';

import styles from './Layout.module.scss';

const Layout = () => {
  const [
    theme,
    setTheme,
  ] = useLocalStorage('theme', 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div
      data-theme={theme}
    >
      <input
        checked={theme === 'dark'}
        className={styles.toggleWrapper}
        id='toggleWrapper'
        onClick={toggleTheme}
        type='checkbox'
      />
      <label
        className={styles.toggleLabel}
        htmlFor='toggleWrapper'
      >
        <div
          className={styles.toggle}
        >
          <BsFillSunFill
            className={styles.sun}
          />
          <BsFillMoonFill
            className={styles.moon}
          />
        </div>
      </label>
      <Navbar />
      <Intro />
      <About />
      <Contact />
      <ScrollButton />
      <Footer />
    </div>
  );
};

export default Layout;
