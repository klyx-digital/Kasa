import React from "react";
import { NavLink } from "react-router";
import Logo from "../assets/images/LOGO.png";

function Header() {
  return (
    <header>
      <section className="header">
        <img src={Logo} alt="Logo" />
        <nav>
          <ul className="navigation">
            <li>
              <NavLink to="/" end>
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" end>
                A propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Header;
