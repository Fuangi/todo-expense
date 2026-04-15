import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Home from "../components/homepage/Home";
import About from "../components/homepage/About";
import Services from "../components/homepage/Services";
import Contact from "../components/homepage/Contact";
import { Outlet } from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <Outlet />
      <Home />
      <Services />
      <About />
      <Contact />

      <Footer />
    </div>
  );
}

export default Homepage;
