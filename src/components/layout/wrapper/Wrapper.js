import React from "react";

import { container } from "./Wrapper.module.css";

const Wrapper = ({ children }) => {
  return <div className={container}>{children}</div>;
};

export default Wrapper;
