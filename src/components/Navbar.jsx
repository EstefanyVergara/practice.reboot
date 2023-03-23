import React from "react";
import "./styles.css";
import headerLogo from "../assets/logoheader.png";

const Navbar = () => {
  return (
    <>
      <nav className="container">
      <img className="logo" src={headerLogo} alt="logo"></img>
          <ul className="nav_links">
            <li className="lixkito">
              <a href="index.html">INICIO</a>
            </li>
            <li className="lixkito">
              <a href="productos.html">PRODUCTOS</a>
            </li>
            <li className="lixkito">
              <a href="/contacto">CONTACTO</a>
            </li>
          </ul>
      </nav>
    </>
  );
};

export default Navbar;
