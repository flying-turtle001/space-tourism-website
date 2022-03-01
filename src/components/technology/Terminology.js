import React from "react";

import {
  contentWrapper,
  imgWrapper,
  imgStyleMob,
  imgStyleDesk,
  textWrapper,
  preTermStyle,
  termNameStyle,
} from "./Terminology.module.css";

const Terminology = ({ termImg, termName, children }) => {
  return (
    <div className={contentWrapper}>
      <div className={imgWrapper}>
        <img className={imgStyleMob} src={termImg[0]} alt={termName} />
        <img className={imgStyleDesk} src={termImg[1]} alt={termName} />
      </div>

      <div className={textWrapper}>
        <div className={preTermStyle}>The Terminology...</div>
        <h3 className={termNameStyle}>{termName}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Terminology;
