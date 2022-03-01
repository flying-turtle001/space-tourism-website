import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import Wrapper from "../components/layout/Wrapper";
import Header from "../components/layout/Header";
import PageHeading from "../components/ui/PageHeading";
import Terminology from "../components/technology/Terminology";

import LaunchVehicleLandscape from "../assets/images/image-launch-vehicle-landscape.jpg";
import LaunchVehiclePortrait from "../assets/images/image-launch-vehicle-portrait.jpg";
import SpaceportLandscape from "../assets/images/image-spaceport-landscape.jpg";
import SpaceportPortrait from "../assets/images/image-spaceport-portrait.jpg";
import SpaceCapsuleLandscape from "../assets/images/image-space-capsule-landscape.jpg";
import SpaceCapsulePortrait from "../assets/images/image-space-capsule-portrait.jpg";

import "swiper/css";
import "swiper/css/bundle";

import "../styles/technology-slider.css";

import { container } from "../styles/technology.module.css";

const TechnologyPage = () => {
  const paginationOptions = {
    el: ".technology-pagination-wrapper",
    type: "bullets",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
    bulletClass: "technology-bullet",
    bulletActiveClass: "technology-bullet-active",
  };

  return (
    <div className={container}>
      <Header />
      <Wrapper>
        <PageHeading preHeadingText="03">Space Launch 101</PageHeading>
      </Wrapper>

      {/* Slider */}
      <Swiper
        modules={[Pagination]}
        pagination={paginationOptions}
        className="technology-swiper"
      >
        {/* Custom Pagination */}
        <div className="technology-pagination-wrapper"></div>

        <SwiperSlide>
          <Terminology
            termImg={[LaunchVehicleLandscape, LaunchVehiclePortrait]}
            termName="Launch Vehicle"
          >
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </Terminology>
        </SwiperSlide>

        <SwiperSlide>
          <Terminology
            termImg={[SpaceportLandscape, SpaceportPortrait]}
            termName="Spaceport"
          >
            A spaceport or cosmodrome is a site for launching (or receiving)
            spacecraft, by analogy to the seaport for ships or airport for
            aircraft. Based in the famous Cape Canaveral, our spaceport is
            ideally situated to take advantage of the Earth’s rotation for
            launch.
          </Terminology>
        </SwiperSlide>

        <SwiperSlide>
          <Terminology
            termImg={[SpaceCapsuleLandscape, SpaceCapsulePortrait]}
            termName="Space Capsule"
          >
            A space capsule is an often-crewed spacecraft that uses a blunt-body
            reentry capsule to reenter the Earth's atmosphere without wings. Our
            capsule is where you'll spend your time during the flight. It
            includes a space gym, cinema, and plenty of other activities to keep
            you entertained.
          </Terminology>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TechnologyPage;
