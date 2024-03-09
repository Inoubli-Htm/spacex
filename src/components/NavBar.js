import React from "react";
import "./css/NavBar.css";

function Navbar() {
  return (
    <nav className="nav">
      hello
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">Your Logo</div>
      </div>
      <div className="nav-links">
        <a href="#" className="link">
          Home
        </a>
        <a href="#" className="link">
          About
        </a>
        <a href="#" className="link">
          Services
        </a>
        <a href="#" className="link">
          Contact
        </a>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
