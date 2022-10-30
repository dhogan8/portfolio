import React from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import useLocalStorage from 'use-local-storage';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollButton from '../components/ScrollButton';
import Home from '../pages/Home';
import Work from '../pages/Work';

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
    <BrowserRouter>
      <div
        className={styles.base}
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
        <div
          className={styles.content}
        >
          <Routes>
            <Route
              element={<Home />}
              path="/"
            />
            <Route
              element={<Work />}
              path="work"
            />
          </Routes>
        </div>
        <ScrollButton />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Layout;
