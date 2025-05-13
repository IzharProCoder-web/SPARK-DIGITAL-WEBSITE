"use client";
import { motion } from "framer-motion";
import {
  PaintBrushIcon,
  IdentificationIcon,
  DevicePhoneMobileIcon,
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

const GraphicServices = () => {
 const services = [
   {
     heading: "Creative Visuals",
     desc: "We craft visually compelling graphics tailored to your brand, ensuring every design element communicates your message clearly and creatively.",
     imgUrl: PaintBrushIcon,
     hoverBg: "pink-hover",
     iconColor: "pink-text",
   },
   {
     heading: "Brand Identity Design",
     desc: "From logos to complete branding kits, we help build a consistent visual identity that leaves a lasting impression on your audience.",
     imgUrl: IdentificationIcon,
     hoverBg: "paste-hover",
     iconColor: "paste-text",
   },
   {
     heading: "UI/UX Design",
     desc: "We design intuitive and aesthetically pleasing user interfaces that enhance the digital experience across web and mobile platforms.",
     imgUrl: DevicePhoneMobileIcon,
     hoverBg: "yellow-hover",
     iconColor: "yellow-text",
   },
 ];


  return (
    <section className="py-16 md:py-32 bg-slate-50">
      <div className="app__container">
        <div className="row">
          <div className="pb-12 text-center">
            <h2 className="primary-heading mb-4">
              Graphic Design Services <br />
              We Provide
              <span className="highlight"> Special For You</span>
            </h2>
            <p className="app__text">
              Visual strategy: A strong visual identity reinforces your brand
              across all platforms.
              <br />
              From print to digital, we ensure every design element speaks
              consistently.
            </p>
          </div>
        </div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((index, key) => {
            return (
              <motion.div variants={items} key={key}>
                <div
                  className={`common-single-card flex flex-col py-12 px-8 ${index.hoverBg}`}
                >
                  <div
                    className={`common-card-icon mx-auto ${index.iconColor}`}
                  >
                    <index.imgUrl className="shadow-lg rounded-full h-16 w-16 p-4 bg-white" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold mt-8 mb-4">
                      {index.heading}
                    </h3>
                    <p className="text-base app__text">{index.desc}</p>
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

export default GraphicServices;
