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

const ArVrServiceInclude = () => {
  const services = [
    {
      heading: "AR/VR Experience Design",
      desc: "Design immersive AR and VR environments focused on usability, interactivity, and user immersion.",
      imgUrl: PuzzlePieceIcon,
      hoverBg: "pink-hover",
      iconColor: "pink-text",
    },
    {
      heading: "AR/VR App Development",
      desc: "Develop responsive and scalable applications for AR glasses, VR headsets, and mobile devices.",
      imgUrl: CpuChipIcon,
      hoverBg: "paste-hover",
      iconColor: "paste-text",
    },
    {
      heading: "3D Modeling & Simulation",
      desc: "Create detailed 3D assets and simulations for training, education, gaming, or marketing purposes.",
      imgUrl: CubeIcon,
      hoverBg: "yellow-hover",
      iconColor: "yellow-text",
    },
    {
      heading: "Performance Optimization",
      desc: "Analyze and optimize rendering, latency, and responsiveness to ensure a seamless immersive experience.",
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
              <span className="highlight">AR/VR Development Services</span>{" "}
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
          {services.map((service, key) => (
            <motion.div variants={items} key={key}>
              <div
                className={`common-single-card px-6 py-12 ${service.hoverBg}`}
              >
                <div
                  className={`common-card-icon mx-auto w-[4.5rem] bg-white p-4 shadow-lg rounded-full ${service.iconColor}`}
                >
                  <service.imgUrl />
                </div>
                <div className="text-center">
                  <div className="card-title">
                    <h3 className="text-xl font-bold mt-6 mb-3">
                      {service.heading}
                    </h3>
                  </div>
                  <p className="app__text">{service.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ArVrServiceInclude;
