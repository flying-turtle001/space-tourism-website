import React from "react";

import { container, btnStyle } from "./BaseButton.module.css";

import { Link } from "gatsby";

const BaseButton = ({ btnLink, children }) => {
  return (
    <div className={container}>
      <Link to={btnLink}>
        <div className={btnStyle}>{children}</div>
      </Link>
    </div>
  );
};

export default BaseButton;
