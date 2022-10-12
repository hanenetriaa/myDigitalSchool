import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="logo">
      <img 
      src="https://tocwebproject.fr/_nuxt/img/mydigitalschool-logo-white.f8fb2e3.png"
      alt="new"
      className="logo"
      />
      </div>
    
    <nav className="nav">
      <NavLink exact activeClassName="active" to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/connexion" className="nav-link">
        Mon profile
      </NavLink>
    </nav>
    </div>
  );
}
export default Header;