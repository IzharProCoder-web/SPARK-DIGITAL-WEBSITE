"use client";
import React from "react";
// Import Swiper React components
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./MeetOurTeam.css";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";

import fahadImage from "@/assets/team/fahad.jpeg";
import sarmadImage from "@/assets/team/sarmad.jpeg";
import hassanImage from "@/assets/team/hassan.jpeg";
import ahmedMustafaImage from "@/assets/team/ahmedMustafa.jpeg";
import asimImage from "@/assets/team/asim.jpeg";
import aizaz2Image from "@/assets/team/aizaz2.jpg";
import PMImage from "@/assets/team/PM.jpg";

const teamData = [
  {
    id: 1,
    img: fahadImage,
    name: "Fahad Ahmed",
    role: "Full Stack Developer",
  },
  {
    id: 2,
    img: aizaz2Image,
    name: "Aizaz Khan",
    role: "Full Stack Developer",
  },
  {
    id: 3,
    img: hassanImage,
    name: "Muhammad Hassan",
    role: "UI/UX Designer",
  },
  {
    id: 4,
    img: sarmadImage,
    name: "Sarmad Ahmad",
    role: "Full Stack Developer",
  },
  {
    id: 5,
    img: asimImage,
    name: "Asim Raja",
    role: "Game Developer",
  },
  {
    id: 6,
    img: ahmedMustafaImage,
    name: "Ahmed Mustafa",
    role: "QA Engineer",
  },
  {
    id: 7,
    img: PMImage,
    name: "Maria Bilal",
    role: "HR",
  },

  {
    id: 8,
    img: PMImage,
    name: "Quratulain Bajwa",
    role: "Project Manager",
  },
];

const MeetOurTeam = () => {
  return (
    <div className="meet-our-team-container mt-16">
      <div className="app__container">
        <div className="flex justify-center items-center text-center">
          <div>
            <h1 className="primary-heading mb-3">
              Meet our
              <span className="highlight"> Team</span>
            </h1>
            <p className="text-gray-600 w-full sm:max-w-[60%] mx-auto">
              Get to know the talented professionals behind our success. Our
              dedicated team brings expertise and passion to every project,
              delivering exceptional results you can trust.
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false, // ensures it keeps autoplaying even after user interaction
          }}
          modules={[EffectCoverflow, Navigation, Autoplay]}
          className="mySwiper"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 1,
                slideShadows: false,
              },
            },
            768: {
              slidesPerView: 3,
              coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              },
              navigation: false, // Disable navigation on desktop
            },
          }}
        >
          {teamData.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="team-card flex flex-col items-center p-6 border border-gray-200 mt-8 shadow drop-shadow-xl mx-4 md:mx-0">
                <div className="team-image mb-4">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={112}
                    height={112}
                    className="rounded-full w-28 h-28 object-cover"
                  />
                </div>
                <div className="team-info text-center">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile Navigation Arrows (only visible on mobile) */}
        <div className="md:hidden">
          <div className="swiper-button-prev after:text-primary after:text-sm text-red-400"></div>
          <div className="swiper-button-next after:text-primary after:text-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
