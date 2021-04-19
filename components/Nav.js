import { useState } from 'react';
import Logo from '../assets/logo.svg';

export default function Nav() {
  const [opened, setOpened] = useState(false);

  return (
    <nav className='nav--wrapper'>
      <a href='/'>
        <Logo />
      </a>

      <div className='nav--list'>
        <a href='/where-to-buy'>Where to buy</a>
        <a href=''>Road map</a>
        <a href=''>NFTS</a>
        <a href='/#contact'>Contact</a>
      </div>
      <div
        className={`nav--hamburger-icon ${opened ? 'nav--hamburger-icon-opened' : ''}`}
        onClick={() => setOpened(!opened)}></div>
      <div className={`nav--hamburger-menu ${opened ? 'nav--hamburger-menu-opened' : ''}`}>
        <a href='/where-to-buy'>Where to buy</a>
        <a href=''>Road map</a>
        <a href=''>NFTS</a>
        <a href='/#contact'>Contact</a>
      </div>
    </nav>
  );
}
