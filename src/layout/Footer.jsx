import React from 'react';

function Footer () {
    const date =  new Date()
  return (
    <footer className='homepage-footer homepage-layout'>
      <p>Copyright {date.getFullYear()} by Vanessa Fuangi. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;