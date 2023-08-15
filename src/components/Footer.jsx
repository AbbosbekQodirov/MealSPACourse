import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          © 16/08/2023 Abbosbek Qodirov 
          <Link className="grey-text text-lighten-4 right" to="/">
            Meal
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
