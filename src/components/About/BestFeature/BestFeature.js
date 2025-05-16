"use client";
import { motion } from "framer-motion";
import image from "@/constant/Images/image";
import { ComputerDesktopIcon } from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

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

const BestFeature = () => {
  return (
    <div className=" bg-gray-50 mt-5">
      <div className="app__container py-16 sm:py-20">
        <div className="flex flex-col">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="show"
            className="my-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 capitalize text-center text-[#1E3A8A]">
              Our <span className="text-[#D4A017]">Values</span>
            </h1>
            <div className="text-center text-md mt-3 w-full sm:max-w-[75%] m-auto leading-8">
              <p className="">
                At Genetech, we believe in creating an environment where
                individuals thrive together. Our Core Values make us who we are
                and help us bring out the best of ourselves.
              </p>
            </div>
          </motion.div>
          <div className="m-auto mt-10">
            <Image src={image.aboutAni} alt="about" />
          </div>
        </div>
        <div className="text-center text-xl md:text-2xl text-[#1E3A8A] mt-16 w-full sm:max-w-[85%] m-auto font-bold">
          <p className="">
           Living by these core values creates a welcoming and diverse workplace where everyone feels valued and free to share their unique skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestFeature;
