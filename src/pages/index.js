import React from "react";

import { container, contentWrapper } from "../styles/index.module.css";

import Wrapper from "../components/layout/Wrapper";
import Header from "../components/layout/Header";

const IndexPage = () => {
  return (
    <div className={container}>
      <Header />
      <Wrapper>
        <div className={contentWrapper}>
          <h5>So, you want to travel to</h5>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default IndexPage;
