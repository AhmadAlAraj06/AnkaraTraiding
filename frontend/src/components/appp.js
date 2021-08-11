
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xnqlgwny");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
             <label htmlFor="email">
        name Address
      </label>
      <input
        id="name"
        type="name" 
        name="name"
      />
      
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      

      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      




      <label htmlFor="email">
        phone Address
      </label>
      <input
        id="phone"
        type="phone" 
        name="phone"
      />
      
      <ValidationError 
        prefix="Phone" 
        field="phone"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

function App() {
  return (
    <ContactForm />
  );
}
export default App;
