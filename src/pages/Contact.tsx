import React, { useState } from 'react';
import axios from 'axios'

import styles from './Contact.module.scss';

const Contact = () => {

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleServerResponse = (ok: boolean, msg: any) => {
    if (ok) {
      setStatus({
        info: { error: false, msg: msg },
        submitted: true,
        submitting: false,
      })
      setInputs({
        name: '',
        email: '',
        message: ''
      })
    } else {
      setStatus({
        info: { error: true, msg: msg },
        submitted: false,
        submitting: false,
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/xnqwykdo',
      data: inputs
    })
      .then(response => {
        handleServerResponse(true, response.data)
      })
      .catch(error => {
        handleServerResponse(false, error.response.data.error)
      })
  }

  return (
    <section id='contact' className={styles.container}>
      <h1 className={styles.heading}>
        Get in touch
      </h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          id='name'
          type='text'
          name='_name'
          placeholder='Name'
          onChange={handleChange}
          required
          value={inputs.name}
        />
        <input
          id='email'
          type='email'
          placeholder='Email'
          onChange={handleChange}
          required
          value={inputs.email}
        />
        <textarea
          id='message'
          placeholder="What's on your mind?"
          onChange={handleChange}
          required
          rows={8}
          value={inputs.message}
        />
        <button
          id='submit'
          className={styles.button}
          disabled={!inputs.email || !inputs.message || !inputs.name}
          type='submit'
        >
          {status.submitting ? 'Sending...' : 'Send message'}
        </button>

        {status.submitted  && (
          <div className={styles.thanks}>
            😁 Thanks for your message, I'll get back to you soon.
          </div>
        )}

        {status.info.error && (
          <div className={styles.error}>
            😔 Your message was not sent. Please try again at a later time.
          </div>
        )}

      </form>
    </section>
  )
};

export default Contact;
