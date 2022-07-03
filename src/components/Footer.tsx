
import React from 'react';
import {
  FaEnvelopeSquare,
  FaGithubSquare,
  FaLinkedin,
} from 'react-icons/fa';

import styles from './Footer.module.scss';

const Footer = () => {

  return (
    <footer 
      id="footer"
      className={styles.footer}
    >
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
      <div className={styles.copyright}>
        © 2022 Dallas Hogan
      </div>
    </footer>
  )
}

export default Footer;
