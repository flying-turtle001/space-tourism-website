import React from "react";

import { container, heading } from "./Tab.module.css";

const Tab = ({ label, children }) => {
  return (
    <div className={container}>
      <h2 className={heading}>{label}</h2>
      {children}
    </div>
  );
};

export default Tab;
