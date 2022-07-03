
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
      className='footer'
      id="footer"
    >
      <div
        className={styles.icons}
      >
        <div
          className='icon'
        >
          <a
            href='https://www.linkedin.com/in/dallas-hogan-654825126/'
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
        <div
          className='icon'
        >
          <a
            href='https://github.com/dhogan8'
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
        <div
          className='icon'
        >
          <a
            href='#contact'
          >
            <FaEnvelopeSquare />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
