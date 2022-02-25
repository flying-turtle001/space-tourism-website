import React from "react";

import { Link } from "gatsby";

import {
  linkContainer,
  linkNrStyle,
  linkTextStyle,
} from "./NavItem.module.css";

const NavItem = ({ linkNr, linkText, linkPath }) => {
  return (
    <div className={linkContainer}>
      <Link to={linkPath}>
        <span className={linkNrStyle}>{linkNr}</span>
        <span className={linkTextStyle}>{linkText}</span>
      </Link>
    </div>
  );
};

export default NavItem;
