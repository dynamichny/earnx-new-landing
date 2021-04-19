import Logo from '../assets/logo.svg';

export default function Nav() {
  return (
    <nav className='nav--wrapper'>
      <a href='/'>
        <Logo />
      </a>

      <div className='nav--list'>
        <a href=''>Where to buy</a>
        <a href=''>Road map</a>
        <a href=''>Nfts</a>
        <a href=''>Contact</a>
      </div>
    </nav>
  );
}
