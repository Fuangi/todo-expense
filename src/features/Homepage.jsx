import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Home from "../components/homepage/Home";
import About from "../components/homepage/About";
import Services from "../components/homepage/Services";
import Contact from "../components/homepage/Contact";

function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <Home />
      <Services />
      <About />
      <Contact />

      <Footer />
    </div>
  );
}

export default Homepage;
