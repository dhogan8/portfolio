import React, { useEffect } from 'react';

import logo from './logo512.png';

import styles from './Navbar.module.scss';

const Navbar = () => {

  useEffect(() => {
    const progressBar = document.getElementById('bar') as HTMLDivElement;

    const scrollContainer = () => {
      return document.documentElement || document.body;
    };

    const scroll = () => {
      const scrolledPercentage =
        (scrollContainer().scrollTop /
          (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
        100;

      progressBar.style.width = `${scrolledPercentage}%`;
    };

    window.addEventListener('scroll', scroll);

    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, []);

  return (
    <>
      <div
        className={styles.bar}
        id='bar'
      />
      <nav
        className={styles.nav}
        id='nav'
      >
        <div
          className='logoWrapper'
          id='logo'
        >
          <a
            href='#'
          >
            <img
              className={styles.logo}
              src={logo}
            />
          </a>
        </div>
        <div
          className={styles.list}
        >
          <span
            className={styles.item}
          >
            <a
              href='#about'
            >
              About
            </a>
          </span>
          <span
            className={styles.item}
          >
            <a
              href='#contact'
            >
              Contact
            </a>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
