import React from "react";

import {
  container,
  contentContainer,
  contentWrapper,
  textWrapper,
  btnWrapper,
} from "../styles/page-styles/index.module.css";

import Wrapper from "../components/layout/wrapper/Wrapper";
import Header from "../components/layout/header/Header";
import BaseButton from "../components/ui/button/BaseButton";

const IndexPage = () => {
  return (
    <div className={container}>
      <Header />
      <Wrapper>
        <div className={contentContainer}>
          <div className={contentWrapper}>
            <div className={textWrapper}>
              <h5>So, you want to travel to</h5>
              <h1>Space</h1>
              <p>
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>
            <div className={btnWrapper}>
              <BaseButton btnLink="/destination">Explore</BaseButton>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default IndexPage;
