import React  from 'react';
import { FaTools } from 'react-icons/fa';

import styles from './Work.module.scss';

const Work = () => {
  return (
    <div
      className={styles.container}
    >
      <div
        className={styles.construction}
      >
        <div
          className={styles.tools}
        >
          <FaTools />
        </div>
        <div
          className={styles.description}
        >
          Coming soon!
        </div>
      </div>
    </div>

  );
};

export default Work;
