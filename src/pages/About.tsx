import * as React from 'react';

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
          I'm Dallas Hogan and I'm a frontend engineer. I graduated from Harvard College where I studied Neuroscience and Psychology. I enjoy learning about the brain and what makes us who we are, but I wanted to try something new once I graduated.
        </p>
        <p>Currently, I'm mostly working with:</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>HTML</li>
        </ul>
        <p>And also dabbling in...</p>
        <ul>
          <li>Perl</li>
          <li>Go</li>
        </ul>
        <p>
          When I'm not at my screen coding or learning how to code, I enjoy traveling, watching a softball game, eating pizza, exploring the city or quite simply, decompressing from any of the former.
        </p>
        <p>
          I'm still a newbie to the programming world. I don't have much work to show yet. I've made some contributions to MaxMind's sites:
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
            . Nonetheless I'm highly motivated, eager and excited to continue learning what the field of front end development has to offer. Drop a message below!
        </p>
      </div>
    </section>
  )
};

export default About;
