"use client";
import ProcessSteps from "@/components/careers/ProcessSteps";
import { motion } from "framer-motion";
// import image from "@/constant/Images/image";
// import { ComputerDesktopIcon } from "@heroicons/react/20/solid";
// import {
//   ArrowPathIcon,
//   ArrowTrendingUpIcon,
// } from "@heroicons/react/24/outline";
// import Image from "next/image";

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
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const Careers = () => {
  return (
    <div className="">
      <div className="app__container py-16 sm:py-20">
        <div className="flex flex-col">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="show"
            className="my-auto"
          >
            <div className="">
              <h2 className="about_heading text-4xl lg:text-6xl font-semibold mb-4 capitalize text-center text-gray-900">
                Jobs @ <span className="highlight">Intelgency</span>
              </h2>
            </div>
            <div className="text-center text-md mt-6 max-w-[75%] m-auto leading-8 text-gray-800">
              <p className="">
                Our tech company is a great place to work because we offer a
                challenging and stimulating work environment, a competitive
                salary and benefits package, and the opportunity to work with
                some of the most talented people in the industry. We are
                committed to our employees professional development and provide
                opportunities for them to grow and advance in their careers. We
                also offer a flexible work schedule that allows our employees to
                balance their work and personal commitments.
              </p>
            </div>
          </motion.div>
        </div>
        <ProcessSteps />
      </div>
    </div>
  );
};

export default Careers;
