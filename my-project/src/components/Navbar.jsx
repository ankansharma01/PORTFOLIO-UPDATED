import React from "react";
import logo from "../assets/Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const iconStyle = {
  fontSize: "24px",
  margin: "0 10px",
  color: "white",
};

const Navbar = () => {
  return (
    <nav className="mb-1 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 item-center">
        <img className="mx-2 w-20" src={logo} alt="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/ankan-sharma-797a9b265/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={iconStyle} />
        </a>
        <a
          href="https://github.com/ankansharma01"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub style={iconStyle} />
        </a>
        <a
          href="https://www.instagram.com/am_ankan01?igsh=b3prbG1zd3k5dnBo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram style={iconStyle} />
        </a>
        <a
          href="https://www.facebook.com/sayan.sharma.359?mibextid=LQQJ4d"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook style={iconStyle} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
