
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xlealypo");
  if (state.succeeded) {
    return <p style={{
      marginRight: 'auto',
      marginLeft: 'auto',
      textAlign: 'center',
      fontSize: '26px',
      color: 'white'
    }}>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} style={{
      marginRight: 'auto',
      marginLeft: 'auto',
      width: '500px',
      padding: '1.2em',
      backgroundColor: 'white',
      borderRadius: '6px'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'auto',
        marginTop: '1.2em'
      }}>
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          style={{
            padding: '0.6em',
            border: '0.6px solid gray',
            borderRadius: '6px'
          }}
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'auto',
        marginTop: '1.2em'
      }}>
        <label htmlFor="message">
          Any Message for us
        </label>
        <input
          type="text"
          id="message"
          name="message"
          style={{
            padding: '0.6em',
            border: '0.6px solid gray',
            borderRadius: '6px'
          }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'auto'
      }}>
        <button type="submit" disabled={state.submitting}
          className="solid-button"
          style={{
            marginTop: '1.2em'
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
}