import React, { useState } from "react";

import {
  imgContainer,
  imgStyle,
  tabsLabelContainer,
  tabLabel,
  tabLabelActive,
} from "./Tabs.module.css";

const Tabs = ({ children }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <div>
      {/* Tab image */}
      <div className={imgContainer}>
        <img
          className={imgStyle}
          src={children[currentTabIndex].props.img}
          alt="Tab Image"
        />
      </div>

      {/* Render different tabs label */}
      <div className={tabsLabelContainer}>
        {children.map((tab, index) => {
          return (
            <div
              onClick={() => setCurrentTabIndex(index)}
              className={`${
                currentTabIndex === index ? tabLabelActive : tabLabel
              }`}
              key={tab.props.label}
            >
              {tab.props.label}
            </div>
          );
        })}
      </div>
      <div>{children[currentTabIndex]}</div>
    </div>
  );
};

export default Tabs;
