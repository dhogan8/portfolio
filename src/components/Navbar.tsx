import React, { useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';

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
        <NavHashLink
          className={styles.logo}
          to="/#"
        >
          D
        </NavHashLink>
        <div
          className={styles.list}
        >
          <span
            className={styles.item}
          >
            <NavHashLink
              to="/#about"
            >
              About
            </NavHashLink>
          </span>
          <span
            className={styles.item}
          >
            <a
              href='/work'
            >
              Work
            </a>
          </span>
          <span
            className={styles.item}
          >
            <NavHashLink
              to="/#contact"
            >
              Contact
            </NavHashLink>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
