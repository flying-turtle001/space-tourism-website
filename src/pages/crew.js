import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import Wrapper from "../components/layout/Wrapper";
import Header from "../components/layout/Header";
import PageHeading from "../components/ui/PageHeading";
import CrewMember from "../components/crew/CrewMember";

import DouglasHurley from "../assets/images/image-douglas-hurley.png";
import MarkShuttleworth from "../assets/images/image-mark-shuttleworth.png";
import VictorGlover from "../assets/images/image-victor-glover.png";
import AnoushehAnsari from "../assets/images/image-anousheh-ansari.png";

import "swiper/css";
import "swiper/css/bundle";

// Custom styles for slider on this page
import "../styles/crew-slider.css";

import { container } from "../styles/crew.module.css";

const CrewPage = () => {
  const paginationOptions = {
    el: ".crew-pagination-wrapper",
    type: "bullets",
    clickable: true,
    bulletClass: "crew-bullet",
    bulletActiveClass: "crew-bullet-active",
  };

  return (
    <div className={container}>
      <Header />
      <Wrapper>
        <PageHeading preHeadingText="02">Meet your crew</PageHeading>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={32}
          pagination={paginationOptions}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="crew-swiper"
        >
          {/* Custom Pagination */}
          <div className="crew-pagination-wrapper"></div>

          <SwiperSlide>
            <CrewMember
              crewImg={DouglasHurley}
              role="Commander"
              crewName="Douglas Hurley"
            >
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </CrewMember>
          </SwiperSlide>

          <SwiperSlide>
            <CrewMember
              crewImg={MarkShuttleworth}
              role="Mission Specialist"
              crewName="Mark Shuttleworth"
            >
              Mark Richard Shuttleworth is the founder and CEO of Canonical, the
              company behind the Linux-based Ubuntu operating system.
              Shuttleworth became the first South African to travel to space as
              a space tourist.
            </CrewMember>
          </SwiperSlide>

          <SwiperSlide>
            <CrewMember
              crewImg={VictorGlover}
              role="PILOT"
              crewName="Victor Glover"
            >
              Pilot on the first operational flight of the SpaceX Crew Dragon to
              the International Space Station. Glover is a commander in the U.S.
              Navy where he pilots an F/A-18.He was a crew member of Expedition
              64, and served as a station systems flight engineer.
            </CrewMember>
          </SwiperSlide>

          <SwiperSlide>
            <CrewMember
              crewImg={AnoushehAnsari}
              role="Flight Engineer"
              crewName="Anousheh Ansari"
            >
              Anousheh Ansari is an Iranian American engineer and co-founder of
              Prodea Systems. Ansari was the fourth self-funded space tourist,
              the first self-funded woman to fly to the ISS, and the first
              Iranian in space.
            </CrewMember>
          </SwiperSlide>
        </Swiper>
      </Wrapper>
    </div>
  );
};

export default CrewPage;
