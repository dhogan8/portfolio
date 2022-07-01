import * as React from 'react';
import {
  FaEnvelopeSquare,
  FaGithubSquare,
  FaLinkedin,
} from 'react-icons/fa';

import styles from './Intro.module.scss';

const Intro = () => (
  <>
    <section id='intro' className={styles.intro}>
      <div className={styles.heroWrapper}>
        <div className={styles.hero}>
          <div className={styles.heroName}>Hi, I'm Dallas.</div>
          <div className={styles.heroTitle}>Frontend Engineer</div>
          <p className={styles.heroDescription}>
            I'm a frontend software engineer with an interest in web development. I'm still new to this. I currently work at
            {' '}
            <a
              href="https://www.maxmind.com/en/home"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              MaxMind
            </a>
            {' '}
            where I help maintain their websites.
          </p>
          <div className={styles.icons}>
            <div className={styles.icon}>
              <a
                href='https://www.linkedin.com/in/dallas-hogan-654825126/'
                rel="nofollow noopener noreferrer"
                target="_blank"
                >
                <FaLinkedin />
              </a>
            </div>
            <div className={styles.icon}>
              <a
                href='https://github.com/dhogan8'
                rel="nofollow noopener noreferrer"
                target="_blank"
                >
                <FaGithubSquare />
              </a>
            </div>
            <div className={styles.icon}>
              <a href='#contact'>
                <FaEnvelopeSquare />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Intro;
