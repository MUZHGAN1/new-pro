import { Link } from "react-router-dom";
// export const Navbar = () => {
//   return (
//     <div>
//       <Link to="/"> Home </Link>
//       <Link to="/menu"> Menu </Link>
//       <Link to="/contact"> Contact </Link>
//     </div>
//   );
// };

import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-menu">
    
      <Link to="/"> Home </Link>
      {/* <Link to="/menu"> Menu </Link> */}
      <Link to="/service"> Service </Link>
      <Link to="/kontạkt"> Kontakt </Link>
      <Link to="/news"> News </Link>
      <Link to="/about"> Überuns </Link>
      <Link to="/tarife"> Tarife </Link>
    
     
    </div>




  );
}



export default Navbar;
