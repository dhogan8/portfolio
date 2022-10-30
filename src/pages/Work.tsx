import React  from 'react';

import Laptop from '../assets/images/laptop.png';
import Phone from '../assets/images/phone2.png';

import styles from './Work.module.scss';

const Work = () => {
  return (
    <div
      className={styles.container}
    >
      <div
        className={styles.title}
      >
        My Work
      </div>
      <img
        className={styles.laptop}
        src={Laptop}
      />
      <img
        className={styles.phone}
        src={Phone}
      />
    </div>

  );
};

export default Work;
