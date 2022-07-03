import * as React from 'react';
import { FiChevronsDown } from 'react-icons/fi';

import styles from './Intro.module.scss';

const Intro = () => (
  <>
    <section id='intro' className={styles.intro}>
      <div className={styles.container}>
        <div className={styles.heroWrapper}>
          <div className={styles.hero}>
            <div className={styles.heroName}>Hi, I'm Dallas.</div>
            <div className={styles.heroTitle}>Frontend Engineer</div>
          </div>
          <div className={styles.down}>
            <a href='#about'>
              <FiChevronsDown />
            </a>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Intro;
