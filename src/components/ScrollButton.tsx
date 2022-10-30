import classNames from 'classnames';
import React, { useState } from 'react';
import { BiChevronUpCircle } from 'react-icons/bi';
import { NavHashLink } from 'react-router-hash-link';

import styles from './ScrollButton.module.scss';

const ScrollButton = () => {
  const [
    visible,
    setVisible,
  ] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true);
    } else if (scrolled <= 300){
      setVisible(false);
    }
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div
      className={classNames(
        styles.up,
        {
          [styles['item__visible']]: visible,
        },
      )}
      id='up'
    >
      <NavHashLink
        to="/#"
      >
        <BiChevronUpCircle />
      </NavHashLink>
    </div>
  );
};

export default ScrollButton;
