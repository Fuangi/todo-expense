import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="homepage-header homepage-layout">
      <section className="logo">V'sTE</section>

      <nav className="header-nav">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/#services" end>
          Services
        </NavLink>
        <NavLink to="/#about" end>
          About
        </NavLink>
        <NavLink to="/#contact" end>
          Contact Us
        </NavLink>
        <NavLink to="">Join Us</NavLink>
      </nav>
    </header>
  );
}

export default Header;
