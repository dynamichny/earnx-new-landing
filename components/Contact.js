import React from 'react';
import FormInput from './FormInput';

export default function Contact() {
  return (
    <div className='contact--wrapper' id='contact'>
      <h2>Contact</h2>
      <p>Need to speak to us? We are here for you!</p>
      <div className='contact--form-socials-grid'>
        <form>
          <h3>Drop us a line</h3>
          <FormInput label='Your name' type='text' placeholder='Please enter your name' id='name' />
          <FormInput label='Email' type='email' placeholder='Please enter your email' id='email' />
          <FormInput label='Subject' type='text' placeholder='Please enter subject' id='subject' />
          <FormInput
            label='Message'
            type='textarea'
            placeholder='Enter your message here'
            id='email'
          />
          <button>Send</button>
        </form>
        <div className='contract--socials'>
          <h3>Or check out these resources</h3>
          <a
            className='contract--socials__item-wrapper'
            href='https://twitter.com/earn_finance'
            target='_blank'>
            <img src='/socialsColored/twitter.png' />
            <div>
              <p>Follow us on twitter</p>
              <p>Follow our profile to stay up to date with the latest news!</p>
            </div>
          </a>
          <a className='contract--socials__item-wrapper' href='https://t.me/yearnX' target='_blank'>
            <img src='/socialsColored/telegram.png' />
            <div>
              <p>Join our community on Telegram</p>
              <p>
                Our community already has over 6000 members, become one of them and discuss with
                others!
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
