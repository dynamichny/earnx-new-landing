import React from 'react';
import FormInput from './FormInput';

export default function Contact() {
  return (
    <div className='contact--wrapper'>
      <h2>Contact</h2>
      <p>Need to speak to us? We are here for you!</p>
      <form>
        <FormInput label='Your name' type='text' placeholder='Please ender your name' id='name' />
        <FormInput label='Email' type='email' placeholder='Please ender your email' id='email' />
        <FormInput label='Subject' type='text' placeholder='Please ender subject' id='subject' />
        <FormInput label='Message' type='textarea' placeholder='Ender your message here' id='email' />
      </form>
    </div>
  );
}
