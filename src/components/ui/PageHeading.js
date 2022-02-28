import React from "react";

import { headingStyle, preHeadingStyle } from "./PageHeading.module.css";

const PageHeading = ({ preHeadingText, children }) => {
  return (
    <h1 className={headingStyle}>
      <span className={preHeadingStyle}>{preHeadingText}</span>
      {children}
    </h1>
  );
};

export default PageHeading;
