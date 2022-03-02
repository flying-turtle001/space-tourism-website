import React from "react";

import Moon from "../assets/images/destination/image-moon.png";
import Mars from "../assets/images/destination/image-mars.png";
import Europa from "../assets/images/destination/image-europa.png";
import Titan from "../assets/images/destination/image-titan.png";

import { container } from "../styles/page-styles/destination.module.css";

import Wrapper from "../components/layout/wrapper/Wrapper";
import Header from "../components/layout/header/Header";
import PageHeading from "../components/ui/heading/PageHeading";
import Tabs from "../components/ui/tabs/Tabs";
import Tab from "../components/ui/tabs/Tab";
import TabMainContent from "../components/ui/tabs/TabMainContent";
import TabSubContent from "../components/ui/tabs/TabSubContent";

const DestinationPage = () => {
  return (
    <div className={container}>
      <Header />
      <Wrapper>
        {/* Page heading */}
        <PageHeading preHeadingText="01">Pick your destination</PageHeading>

        {/* Tabs component to render different tabs */}
        <Tabs>
          <Tab label="Moon" img={Moon}>
            <TabMainContent>
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </TabMainContent>
            <TabSubContent heading="Avg. Distance">384,400 km</TabSubContent>
            <TabSubContent heading="Est. Travel Time">3 days</TabSubContent>
          </Tab>

          <Tab label="Mars" img={Mars}>
            <TabMainContent>
              Don’t forget to pack your hiking boots. You’ll need them to tackle
              Olympus Mons, the tallest planetary mountain in our solar system.
              It’s two and a half times the size of Everest!
            </TabMainContent>
            <TabSubContent heading="Avg. Distance">225 MIL. km</TabSubContent>
            <TabSubContent heading="Est. Travel Time">9 months</TabSubContent>
          </Tab>

          <Tab label="Europa" img={Europa}>
            <TabMainContent>
              The smallest of the four Galilean moons orbiting Jupiter, Europa
              is a winter lover’s dream. With an icy surface, it’s perfect for a
              bit of ice skating, curling, hockey, or simple relaxation in your
              snug wintery cabin.
            </TabMainContent>
            <TabSubContent heading="Avg. Distance">628 MIL. km</TabSubContent>
            <TabSubContent heading="Est. Travel Time">3 years</TabSubContent>
          </Tab>

          <Tab label="Titan" img={Titan}>
            <TabMainContent>
              The only moon known to have a dense atmosphere other than Earth,
              Titan is a home away from home (just a few hundred degrees
              colder!). As a bonus, you get striking views of the Rings of
              Saturn.
            </TabMainContent>
            <TabSubContent heading="Avg. Distance">1.6 BIL. km</TabSubContent>
            <TabSubContent heading="Est. Travel Time">7 years</TabSubContent>
          </Tab>
        </Tabs>
      </Wrapper>
    </div>
  );
};

export default DestinationPage;
