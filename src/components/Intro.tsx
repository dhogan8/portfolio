import classNames from 'classnames';
import React, { useEffect } from 'react';
import { FiChevronsDown } from 'react-icons/fi';

import styles from './Intro.module.scss';

const Intro = () => {
  const [
    showBtn,
    setShowBtn,
  ] = React.useState(false);
  useEffect(()=>{
    setTimeout(function() {
      setShowBtn(true);
    }, 2500);
  },
  []);

  return (
    <>
      <section
        className={styles.intro}
        id='intro'
      >
        <div
          className={styles.container}
        >
          <div
            className={styles.heroWrapper}
          >
            <div
              className={styles.hero}
            >
              <div
                className={styles.heroName}
              >
                Hi, I&apos;m Dallas.
              </div>
              <div
                className={styles.heroTitle}
              >
                Frontend Engineer
              </div>
            </div>
          </div>
          <div
            className={classNames(
              styles.down,
              {
                [styles['down__show']]: showBtn,
              },
            )}
            id='down'
          >
            <a
              href='#about'
            >
              <FiChevronsDown />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
