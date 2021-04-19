import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="layout--wrapper">
      <Nav />
      <div className="content--wrapper">
        {children}
      </div>
      <Footer />
    </div>
  );
}
