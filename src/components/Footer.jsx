import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        <div className="container footer-container">
          © 16/08/2023 Abbosbek Qodirov
          <Link className="grey-text text-lighten-4 right brand-logo" to="/">
            <h5> delicious food</h5>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
