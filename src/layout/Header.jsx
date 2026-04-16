import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

function Header() {
  const location = useLocation();
  const navRef = useRef();

  const toggleMenu = () => {
    navRef.current.classList.toggle("responsiveNav");
  };

  return (
    <header className="homepage-header homepage-layout">
      <div className="logo">V'sTE</div>

      <nav className="header-nav" ref={navRef}>
        <NavHashLink smooth to="/" end>
          Home
        </NavHashLink>
        <NavHashLink smooth to="#services" end>
          Services
        </NavHashLink>
        <NavHashLink smooth to="#about" end>
          About
        </NavHashLink>
        <NavHashLink smooth to="#contact" end>
          Contact Us
        </NavHashLink>
        <NavHashLink smooth to="auth">
          Join Us
        </NavHashLink>

        <button className="close-nav" onClick={toggleMenu}>
          <FaTimes />
        </button>
      </nav>

      <button className="mobile-nav" onClick={toggleMenu}>
        <FaBars />
      </button>
    </header>
  );
}

export default Header;
