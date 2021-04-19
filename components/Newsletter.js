import React, { useState } from 'react';

export default function Newsletter() {
  return (
    <div className='newsletter--wrapper'>
      <input type='email' placeholder='name@company.com' />
      <button>Subscribe to newsletter</button>
    </div>
  );
}
