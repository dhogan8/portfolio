import React, { useState } from 'react';

import { ReactComponent as Bootstrap } from '../assets/svg/bootstrap.svg';
import { ReactComponent as Css } from '../assets/svg/css.svg';
import { ReactComponent as GoLang } from '../assets/svg/golang.svg';
import { ReactComponent as Html } from '../assets/svg/html.svg';
import { ReactComponent as Javascript } from '../assets/svg/javascript.svg';
import { ReactComponent as Npm } from '../assets/svg/npm.svg';
import { ReactComponent as Perl } from '../assets/svg/perl.svg';
import { ReactComponent as ReactJs } from '../assets/svg/react.svg';
import { ReactComponent as Typescript } from '../assets/svg/typescript.svg';

import styles from './About.module.scss';

const About = () => {
  return (
    <section
      id='about'
      className={styles.container}
    >
      <h1
        className={styles.heading}
      >
        About Me
      </h1>
      <div className={styles.description}>
        <p>
          I'm Dallas and I'm a frontend software engineer. I graduated from Harvard College where I studied Neuroscience and Psychology. Learning about the brain and what makes us who we are, really intrigued me, but I wanted to try something new once I graduated. Right out of undergrad, I started working for a tech company,
          {' '}
          <a
            href="https://www.maxmind.com/"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            MaxMind
          </a>
          , with zero coding experience. I quickly noticed there were opportunities to learn how to code in my workplace, so I took advantage of them. Once I discovered that there was a field that could join together problem solving and design, I was enamored.
        </p>        
        <p>
          I'm still a newbie to the coding world. I don't have much work to show yet, but I'm constantly trying to learn and enhance my skills. In collaboration with some skilled colleagues, you can find some of my contributions to MaxMind's sites:
          {' '}
          <a
            href="https://blog.maxmind.com/"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            Blog
          </a>
          ,{' '}
          <a
            href="https://dev.maxmind.com/?lang=en"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            Developer Portal
          </a>
          , and {' '}
          <a
            href="https://support.maxmind.com/hc/en-us"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            Support Center
          </a>
            . Nonetheless, I'm highly motivated and eager to continue learning what the fields of both frontend and web development have to offer. Below are the technologies I've mostly been working with lately:
        </p>
        <div className={styles.icons}>
          <div className={styles.group}>
            <Html />
            <strong className={styles.html}>HTML</strong>
          </div>
          <div className={styles.group}>
            <Css />
            <strong className={styles.css}>CSS</strong>
          </div>
          <div className={styles.group}>
            <Javascript />
            <strong className={styles.javascript}>JavaScript</strong>
          </div>
          <div className={styles.group}>
            <Typescript />
            <strong className={styles.typescript}>TypeScript</strong>
          </div>
          <div className={styles.group}>
            <Bootstrap />
            <strong className={styles.bootstrap}>Bootstrap</strong>
          </div>
          <div className={styles.group}>
            <ReactJs />
            <strong className={styles.react}>React</strong>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;
