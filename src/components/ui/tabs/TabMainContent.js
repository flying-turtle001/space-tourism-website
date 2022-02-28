import React from "react";

import { divider } from "./TabMainContent.module.css";

const TabMainContent = ({ children }) => {
  return (
    <div>
      <p>{children}</p>
      <div className={divider}></div>
    </div>
  );
};

export default TabMainContent;
