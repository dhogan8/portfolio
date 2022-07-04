import React, { useEffect } from 'react';

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
        <a
          className={styles.logo}
          href='#'
        >
          D
        </a>
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
