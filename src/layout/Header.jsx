import { useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

function Header() {
  const location = useLocation();

  return (
    <header className="homepage-header homepage-layout">
      <section className="logo">V'sTE</section>

      <nav className="header-nav">
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
      </nav>
    </header>
  );
}

export default Header;
