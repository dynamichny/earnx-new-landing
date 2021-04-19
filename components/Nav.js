import { useState } from 'react';
import { useRouter } from 'next/router';
import Logo from '../assets/logo.svg';

export default function Nav() {
  const [opened, setOpened] = useState(false);
  const router = useRouter();
  return (
    <nav className='nav--wrapper'>
      <a href='/'>
        <Logo />
      </a>

      <div className='nav--list'>
        <a
          href='/where-to-buy'
          className={router.pathname == '/where-to-buy' ? 'active-route' : ''}>
          Where to buy
        </a>
        <a href='/road-map' className={router.pathname == '/road-map' ? 'active-route' : ''}>
          Road map
        </a>
        <a href='/nfts' className={router.pathname == '/nfts' ? 'active-route' : ''}>
          NFTS
        </a>
        <a href='/#contact'>Contact</a>
      </div>
      <div className='nav--hamburger-icon--wrapper' onClick={() => setOpened(!opened)}>
        <div className={`nav--hamburger-icon ${opened ? 'nav--hamburger-icon-opened' : ''}`}></div>
      </div>
      <div className={`nav--hamburger-menu ${opened ? 'nav--hamburger-menu-opened' : ''}`}>
        <a
          href='/where-to-buy'
          className={router.pathname == '/where-to-buy' ? 'active-route' : ''}>
          Where to buy
        </a>
        <a href='/road-map' className={router.pathname == '/road-map' ? 'active-route' : ''}>
          Road map
        </a>
        <a href='/nfts' className={router.pathname == '/nfts' ? 'active-route' : ''}>
          NFTS
        </a>
        <a href='/#contact'>Contact</a>
      </div>
    </nav>
  );
}
