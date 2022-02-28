import React from "react";

import { container, headingStyle, textStyle } from "./TabSubContent.module.css";

const TabSubContent = ({ heading, children }) => {
  return (
    <div className={container}>
      <div className={headingStyle}>{heading}</div>
      <div className={textStyle}>{children}</div>
    </div>
  );
};

export default TabSubContent;
