import React, { useState } from 'react';
import classNames from 'classnames';
import { FiChevronUp } from 'react-icons/fi';

import styles from './ScrollButton.module.scss';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } else if (scrolled <= 300){
      setVisible(false)
    }
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div
      id='up'
      className={classNames(
        styles.up,
        {
          [styles['item__visible']]: visible,
        },
      )}
    >
      <a href='#'>
        <FiChevronUp />
      </a>
    </div>
  );
}

export default ScrollButton;
