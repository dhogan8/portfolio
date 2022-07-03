import React, { useState } from 'react';
import classNames from 'classnames';
import { FiChevronUp } from 'react-icons/fi';
  
import styles from './ScrollButton.module.scss';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false)
  const [color, setColor] = useState(false);
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } else if (scrolled <= 300){
      setVisible(false)
    }
    
    if (scrolled >= 1636) {
      setColor(true)
    } else {
      setColor(false);
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
          <FiChevronUp 
            className={classNames(
              {
                [styles['item__invert']]: color,
              },
            )}
          />
        </a>
      </div>
  );
}
  
export default ScrollButton;
