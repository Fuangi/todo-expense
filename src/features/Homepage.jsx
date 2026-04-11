import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Home from '../components/homepage/Home';
import About from '../components/homepage/About';

function Homepage () {
  return (
    <div className='homepage'>
      <Header />
      <Home />
      <About />

      <Footer />
    </div>
  );
};

export default Homepage;