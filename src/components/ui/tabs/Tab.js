import React from "react";

import { container, heading, subContentWrapper } from "./Tab.module.css";

const Tab = ({ label, children }) => {
  return (
    <div className={container}>
      <h2 className={heading}>{label}</h2>

      {/* TabMainContent */}
      <div>{children[0]}</div>

      {/* TabSubConent */}
      <div className={subContentWrapper}>
        {children
          .filter((tabContent, i) => i > 0)
          .map((tabSubContent) => (
            <div key={Math.random().toString()}>{tabSubContent}</div>
          ))}
      </div>
    </div>
  );
};

export default Tab;
