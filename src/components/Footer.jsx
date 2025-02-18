import React from "react";
import Logo from "../assets/images/LogoWhite.png";

function Footer() {
  return (
    <footer className="footer">
      <section>
        <img src={Logo} alt="Logo" />
        <p>© 2020 Kasa - All rigths reserved</p>
      </section>
    </footer>
  );
}

export default Footer;
