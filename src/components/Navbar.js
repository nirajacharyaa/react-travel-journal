import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <FaGlobeAmericas style={{fontSize: "2.75rem",margin:"0.5rem"}} />
      <div style={{fontSize:"2.5rem", fontWeight: 600}}>my travel journal.</div>
    </div>
  );
};

export default Navbar;
