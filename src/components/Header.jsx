import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="meal-logo">
          delicious food
        </Link>
        <ul id="" className="right ">
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
