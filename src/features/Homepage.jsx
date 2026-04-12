import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Home from "../components/homepage/Home";
import About from "../components/homepage/About";
import Services from "../components/homepage/Services";

function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <Home />
      <Services />
      <About />

      <Footer />
    </div>
  );
}

export default Homepage;
