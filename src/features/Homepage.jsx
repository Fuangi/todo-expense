import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Home from '../components/homepage/Home';

function Homepage () {
  return (
    <div className='homepage'>
      <Header />
      <Home />

      <Footer />
    </div>
  );
};

export default Homepage;