import React  from 'react';

import { ReactComponent as Bootstrap } from '../assets/images/bootstrap.svg';
import { ReactComponent as Css } from '../assets/images/css.svg';
import { ReactComponent as Html } from '../assets/images/html.svg';
import { ReactComponent as Javascript } from '../assets/images/javascript.svg';
import { ReactComponent as ReactJs } from '../assets/images/react.svg';
import { ReactComponent as Typescript } from '../assets/images/typescript.svg';

import styles from './About.module.scss';

const About = () => {
  return (
    <section
      className={styles.container}
      id='about'
    >
      <h1
        className='heading'
      >
        About Me
      </h1>
      <div
        className='description'
      >
        <p>
          I&apos;m Dallas and I&apos;m a frontend software engineer. I
          graduated from Harvard College where I studied Neuroscience and
          Psychology. Learning about the brain and what makes us who we are,
          really intrigued me, but I wanted to try something new once I
          graduated. Right out of undergrad, I started working for a tech
          company,
          {' '}
          <a
            href="https://www.maxmind.com/"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            MaxMind
          </a>
          , with zero coding experience. I quickly noticed there were
          opportunities to learn how to code in my workplace, so I took
          advantage of them. Once I discovered that there was a field that
          could join together problem solving and design, I was enamored.
        </p>
        <p>
          I&apos;m still a newbie to the coding world. I don&apos;t have much
          work to show yet, but I&apos;m constantly trying to learn and enhance
          my skills. In collaboration with my skilled colleagues, you can find
          some of my contributions to MaxMind&apos;s sites:
          {' '}
          <a
            href="https://blog.maxmind.com/"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            Blog
          </a>
          ,
          {' '}
          <a
            href="https://dev.maxmind.com/?lang=en"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            Developer Portal
          </a>
          , and
          {' '}
          {' '}
          <a
            href="https://support.maxmind.com/hc/en-us"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            Support Center
          </a>
          . Nonetheless, I&apos;m highly motivated and eager to continue
          learning what the fields of both frontend and web development have
          to offer. Below are the technologies I&apos;ve mostly been working
          with lately:
        </p>
        <div
          className={styles.icons}
        >
          <div
            className={styles.group}
          >
            <Html />
            <strong
              className={styles.html}
            >
              HTML
            </strong>
          </div>
          <div
            className={styles.group}
          >
            <Css />
            <strong
              className={styles.css}
            >
              CSS
            </strong>
          </div>
          <div
            className={styles.group}
          >
            <Javascript />
            <strong
              className={styles.javascript}
            >
              JavaScript
            </strong>
          </div>
          <div
            className={styles.group}
          >
            <Typescript />
            <strong
              className={styles.typescript}
            >
              TypeScript
            </strong>
          </div>
          <div
            className={styles.group}
          >
            <Bootstrap />
            <strong
              className={styles.bootstrap}
            >
              Bootstrap
            </strong>
          </div>
          <div
            className={styles.group}
          >
            <ReactJs />
            <strong
              className={styles.react}
            >
              React
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
