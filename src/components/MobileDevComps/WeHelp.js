'use client'
import { motion } from 'framer-motion'

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

import {
  AdjustmentsHorizontalIcon,
  ArrowTrendingUpIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const WeHelp = ({ name }) => {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="app__container">
        <div className="mx-auto mb-12">
          <div className="degital-marketing-heading text-center">
            <div className="section-sub-title pb-4">
              <h4 className="primary-heading">
                WHAT WE <span className="highlight">DO</span>
              </h4>
            </div>
            <div>
              <h2>How We Help Your {name}</h2>
            </div>
          </div>
        </div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div variants={items}>
            <div className="service-card-five text-center">
              <div className="flex items-center justify-center mb-6">
                <AdjustmentsHorizontalIcon className="w-24 h-24" />
              </div>
              <div className="card-title">
                <h3 className="pb-6 text-xl font-bold">
                  Custom App Development
                </h3>
              </div>
              <p className="app__text">
                We build tailored mobile applications that meet your specific
                business goals and offer a seamless user experience.
              </p>
            </div>
          </motion.div>

          <motion.div variants={items}>
            <div className="service-card-five text-center">
              <div className="flex items-center justify-center mb-6">
                <ArrowTrendingUpIcon className="w-24 h-24" />
              </div>
              <div className="card-title">
                <h3 className="pb-6 text-xl font-bold">
                  Cross-Platform Solutions
                </h3>
              </div>
              <p className="app__text">
                Develop once and deploy across iOS and Android with our
                efficient cross-platform development expertise.
              </p>
            </div>
          </motion.div>

          <motion.div variants={items}>
            <div className="service-card-five text-center">
              <div className="flex items-center justify-center mb-6">
                <MagnifyingGlassIcon className="w-24 h-24" />
              </div>
              <div className="card-title">
                <h3 className="pb-6 text-xl font-bold">
                  App Store Optimization
                </h3>
              </div>
              <p className="app__text">
                We ensure your app gets noticed with strategies that improve
                visibility and drive downloads on app stores.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeHelp;
