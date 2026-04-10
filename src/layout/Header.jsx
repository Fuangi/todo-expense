import React from 'react';

function Header () {
  return (
    <header className='homepage-header homepage-layout'>
      <section className="logo">V'sTE</section>
      <div className="header-nav">
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Join Us</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;