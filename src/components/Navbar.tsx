import React, { useEffect } from 'react';

import styles from './Navbar.module.scss';

const Navbar = () => {

  useEffect(() => {
    const logo = document.getElementById('logo') as HTMLElement;
    const goToTop = () => {
      window.scrollTo(0, 0);
    };

    logo.addEventListener('click', goToTop);

    return () => {
      logo.removeEventListener('click', goToTop);
    };
  }, []);

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
      <div id='bar' className={styles.bar} />
      <nav id='nav' className={styles.nav}>
        <div id='logo' className={styles.logoWrapper}>
          <div className={styles.logo}>d</div>
        </div>
        <div className={styles.list}>
          <span className={styles.item}>
            <a
              href='#about'>
                About
            </a>
          </span>
          <span className={styles.item}>
            <a
              href='#contact'>
                Contact
            </a>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
