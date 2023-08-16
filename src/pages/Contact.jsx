import React from 'react'
import {BsTelephoneOutbound} from "react-icons/bs"
import { GiEarthAmerica } from "react-icons/gi";
import { LiaTelegram } from "react-icons/lia";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact">
      <a href="tel:+998911612501">
        <h4>
          <BsTelephoneOutbound /> +998 91 161 25 01
        </h4>
      </a>
      <a href="https://t.me/abbosbek_qodirovv">
        <h4>
          <LiaTelegram /> abbosbek_qodirovv
        </h4>
      </a>
      <a href="https://www.instagram.com/abbosbek_qodirovv/">
        <h4>
          <FaInstagram /> abbosbek_qodirovv
        </h4>
      </a>
      <a href="https://github.com/AbbosbekQodirov">
        <h4>
          <FaGithub /> github.com/AbbosbekQodirov
        </h4>
      </a>
      <a href="https://www.linkedin.com/in/abbosbekqodirov/">
        <h4>
          <FaLinkedin /> abbosbekqodirov
        </h4>
      </a>
      <a href="https://abbosbek-creative-portfolio.netlify.app/">
        <h4>
          <GiEarthAmerica /> https://abbosbek-creative-portfolio.uz
        </h4>
      </a>
    </div>
  );
}

export default Contact