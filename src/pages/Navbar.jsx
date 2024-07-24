import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="navbar-menu">
      <img src={logo} alt="" className="logo1" />
      <ul>
      <li><Link to="/"> Home </Link></li>
      <li><Link to="/service">Service</Link></li>
      <li><Link to="/kontạkt"> Kontakt </Link></li>
      <li><Link to="/belege"> Belege </Link></li>
    
      <li><Link to="/tarife"> Tarife </Link></li>
      </ul>
    </div>

  );
}



export default Navbar;
