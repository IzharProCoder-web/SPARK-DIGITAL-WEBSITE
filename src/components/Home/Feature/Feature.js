"use client";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const Feature = ({ content }) => {
  return (
    <section className="app__feature py-6 md:py-20">
      <div className="app__container">
        <div className="max-w-3xl mx-auto mb-16 text-center text-[30px] font-bold">
          <h2 className="text-[#1E3A8A]"> Industries <span className=" text-[#D4A017]"> We Work In color</span></h2>
        </div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {content.map((item, index) => {
            return (
              <motion.div key={index} variants={items}>
                <div
                  className={`flex flex-col items-center bg-white drop-shadow-md h-40 w-full p-2 rounded-md`}
                >
                  <div className={`h2-feature-icon`} >
                    {item.icon} 
                  </div>
                  <div className="card-two-content">
                    <div>
                      <div className="card-title text-center">
                        <h3 className="w-24 mt-4 font-medium text-gray-600 leading-tight text-base">
                          {item.heading}
                        </h3>
                      </div>
                      {/* <p className="pb-6 app__text">{item.description}</p> */}
                    </div>
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

export default Feature;
