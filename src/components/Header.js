import React from "react";

import logo from "../assets/icons/logo.svg";

import { container, websiteLogo } from "./Header.module.css";

import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className={container}>
      <img className={websiteLogo} src={logo} alt="Logo" />
      <Navbar />
    </div>
  );
};

export default Header;
