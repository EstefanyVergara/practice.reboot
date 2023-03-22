import React from "react";
import "./styles.css";
import headerLogo from "../assets/logoheader.png";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="navBar">
          <img className="logo" src={headerLogo} alt="logo"></img>
          <ul className="list">
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
