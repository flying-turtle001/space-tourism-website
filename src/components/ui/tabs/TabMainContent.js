import React from "react";

import { textStyle, divider } from "./TabMainContent.module.css";

const TabMainContent = ({ children }) => {
  return (
    <div>
      <p className={textStyle}>{children}</p>
      <div className={divider}></div>
    </div>
  );
};

export default TabMainContent;
