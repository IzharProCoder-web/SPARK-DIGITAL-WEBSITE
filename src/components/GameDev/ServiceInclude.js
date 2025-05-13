"use client";
import { motion } from "framer-motion";
import {
  CpuChipIcon,
  PuzzlePieceIcon,
  CubeIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const items = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const ServiceInclude = () => {
 const services = [
   {
     heading: "Game Design",
     desc: "Craft immersive game worlds and mechanics tailored to captivate your target audience and enhance gameplay.",
     imgUrl: PuzzlePieceIcon,
     hoverBg: "pink-hover",
     iconColor: "pink-text",
   },
   {
     heading: "Game Development",
     desc: "From prototypes to full-scale production, we develop games with robust performance and scalable architecture.",
     imgUrl: CpuChipIcon,
     hoverBg: "paste-hover",
     iconColor: "paste-text",
   },
   {
     heading: "3D Modeling & Animation",
     desc: "Build visually stunning assets and animations that bring your game environments and characters to life.",
     imgUrl: CubeIcon,
     hoverBg: "yellow-hover",
     iconColor: "yellow-text",
   },
   {
     heading: "Analytics & Optimization",
     desc: "Leverage in-game data insights to improve performance, balance gameplay, and boost user engagement.",
     imgUrl: PresentationChartLineIcon,
     hoverBg: "purple-hover",
     iconColor: "purple-text",
   },
 ];
  return (
    <section className="py-16 md:py-20">
      <div className="app__container">
        <div className="row">
          <div className="primary-heading pb-12 text-center">
            <h2>
              What Do Our <br />
              <span className="highlight">Game Development Services</span>{" "}
              Include
            </h2>
          </div>
        </div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((index, key) => {
            return (
              <motion.div variants={items} key={key}>
                <div
                  className={`common-single-card px-6 py-12 ${index.hoverBg}`}
                >
                  <div
                    className={`common-card-icon mx-auto w-[4.5rem] bg-white p-4 shadow-lg rounded-full ${index.iconColor}`}
                  >
                    <index.imgUrl />
                  </div>
                  <div className=" text-center">
                    <div className="card-title">
                      <h3 className="text-xl font-bold mt-6 mb-3">
                        {index.heading}
                      </h3>
                    </div>
                    <p className="app__text">{index.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceInclude;
