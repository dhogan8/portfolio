import axios from 'axios';
import React, { useState } from 'react';

import styles from './Contact.module.scss';

const Contact = () => {

  const [
    status,
    setStatus,
  ] = useState({
    info: {
      error: false,
      msg: null,
    },
    submitted: false,
    submitting: false,
  });

  const [
    inputs,
    setInputs,
  ] = useState({
    email: '',
    message: '',
    name: '',
  });

  const handleServerResponse = (ok: boolean, msg: null) => {
    if (ok) {
      setStatus({
        info: {
          error: false,
          msg: msg,
        },
        submitted: true,
        submitting: false,
      });
      setInputs({
        email: '',
        message: '',
        name: '',
      });
    } else {
      setStatus({
        info: {
          error: true,
          msg: msg,
        },
        submitted: false,
        submitting: false,
      });
    }
  };

  const handleChange =
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.persist();
      setInputs(prev => ({
        ...prev,
        [e.target.id]: e.target.value,
      }));
      setStatus({
        info: {
          error: false,
          msg: null,
        },
        submitted: false,
        submitting: false,
      });
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(prevStatus => ({
      ...prevStatus,
      submitting: true,
    }));
    axios({
      data: inputs,
      method: 'POST',
      url: 'https://formspree.io/xnqwykdo',
    })
      .then(response => {
        handleServerResponse(true, response.data);
      })
      .catch(error => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <section
      className={styles.contact}
      id='contact'
    >
      <div
        className={styles.container}
      >
        <h1
          className={styles.heading}
        >
          Get in touch
        </h1>
        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <input
            className={styles.name}
            id='name'
            name='_name'
            onChange={handleChange}
            placeholder='Name'
            required
            type='text'
            value={inputs.name}
          />
          <input
            className={styles.email}
            id='email'
            onChange={handleChange}
            placeholder='Email'
            required
            type='email'
            value={inputs.email}
          />
          <textarea
            className={styles.message}
            id='message'
            onChange={handleChange}
            placeholder="What's on your mind?"
            required
            rows={8}
            value={inputs.message}
          />
          <button
            className={styles.button}
            disabled={!inputs.email || !inputs.message || !inputs.name}
            id='submit'
            type='submit'
          >
            {status.submitting ? 'Sending...' : 'Send message'}
          </button>

          {status.submitted  && (
            <div
              className={styles.thanks}
            >
              😁 Thanks for your message, I will get back to you soon.
            </div>
          )}

          {status.info.error && (
            <div
              className={styles.error}
            >
              😔 Your message was not sent. Please try again at a later time.
            </div>
          )}

        </form>
      </div>
    </section>
  );
};

export default Contact;
