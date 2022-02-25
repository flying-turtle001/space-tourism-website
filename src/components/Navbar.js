import React, { useState } from "react";

import iconHamburger from "../assets/icons/icon-hamburger.svg";
import iconClose from "../assets/icons/icon-close.svg";

import {
  navContainer,
  navHamIcon,
  navCloseIcon,
  deskNavWrapper,
  deskNavList,
} from "./Navbar.module.css";

import NavItem from "./NavItem";

const Navbar = () => {
  const [isMobNavActive, setIsMobNavActive] = useState(false);

  const handleMobNav = () => {
    setIsMobNavActive((prev) => !prev);
  };

  const markupNavOpen = (
    <div className={navContainer}>
      <img
        onClick={handleMobNav}
        className={navCloseIcon}
        src={iconClose}
        alt="Close Icon"
      />
      <ul>
        <li>
          <NavItem linkNr="00" linkText="Home" linkPath="/" />
        </li>
        <li>
          <NavItem linkNr="01" linkText="Destination" linkPath="/destination" />
        </li>
        <li>
          <NavItem linkNr="02" linkText="Crew" linkPath="/crew" />
        </li>
        <li>
          <NavItem linkNr="03" linkText="Technology" linkPath="/technology" />
        </li>
      </ul>
    </div>
  );

  const markupDeskNav = (
    <div className={deskNavWrapper}>
      <ul className={deskNavList}>
        <li>
          <NavItem linkNr="00" linkText="Home" linkPath="/" />
        </li>
        <li>
          <NavItem linkNr="01" linkText="Destination" linkPath="/destination" />
        </li>
        <li>
          <NavItem linkNr="02" linkText="Crew" linkPath="/crew" />
        </li>
        <li>
          <NavItem linkNr="03" linkText="Technology" linkPath="/technology" />
        </li>
      </ul>
    </div>
  );

  return (
    <div>
      {/* Icon and navigation for mobile devices */}
      <img
        className={navHamIcon}
        onClick={handleMobNav}
        src={iconHamburger}
        alt="Hamburger Icon"
      />
      {isMobNavActive && markupNavOpen}

      {/* navigation for tablet and desktop devices */}
      {markupDeskNav}
    </div>
  );
};

export default Navbar;
