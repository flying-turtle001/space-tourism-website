import React from "react";

import {
  contentWrapper,
  imgWrapper,
  imgStyle,
  textWrapper,
  roleStyle,
  crewNameStyle,
} from "./Crew.module.css";

const Crew = ({ crewImg, role, crewName, children }) => {
  return (
    <div className={contentWrapper}>
      <div className={imgWrapper}>
        <img className={imgStyle} src={crewImg} alt={crewName} />
      </div>

      <div className={textWrapper}>
        <div className={roleStyle}>{role}</div>
        <h3 className={crewNameStyle}>{crewName}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Crew;
