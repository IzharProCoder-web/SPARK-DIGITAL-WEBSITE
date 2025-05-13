"use client";
import { motion } from "framer-motion";
import {
  UserGroupIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  ChartBarSquareIcon,
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
const Marketing = () => {
  return (
    <section className="app__feature py-6 md:py-20 bg-slate-50">
      <div className="app__container">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="primary-heading text-center">
            We help you increase sales by improving SEO / PPC / SMO of{" "}
            <span className="highlight">your brand</span>
          </h2>
        </div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <motion.div variants={items}>
            <div className="single-feature-two sky-shape group hover:text-white">
              <div className="h2-feature-icon shadow-lg sky-shadow bg-sky">
                <UserGroupIcon className="h-12 w-12 text-white" />
              </div>
              <div className="card-two-content">
                <div>
                  <div className="card-title">
                    <h3 className="text-2xl text-center font-bold py-7">
                      Social Media Campaign
                    </h3>
                  </div>
                  <p className="">
                    According to statistics, at least 2.6 billion people around
                    the world are actively using social media. With the growing
                    number of users on social media, you can reach most people
                    to promote your product.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={items}>
            <div className="single-feature-two red-shape group hover:text-white">
              <div className="h2-feature-icon red-shadow bg-red shadow-lg">
                <DocumentTextIcon className="h-12 w-12 text-white" />
              </div>
              <div className="card-two-content">
                <div>
                  <div className="card-title">
                    <h3 className="text-2xl text-center font-bold py-7">
                      Content Marketing
                    </h3>
                  </div>
                  <p className="">
                    70% of consumers would learn about products through content
                    rather than traditional advertising. It is not easy to get
                    people to spend money on something they have never heard of
                    before. So, you will need content that will educate your
                    audience about your product. Use infographics and maps to
                    talk about your product.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={items}>
            <div className="single-feature-two blue-shape group hover:text-white">
              <div className="h2-feature-icon shadow-lg blue-shadow bg-blue">
                <EnvelopeIcon className="h-12 w-12 text-white" />
              </div>
              <div className="card-two-content animate get-bottom ">
                <div>
                  <div className="card-title">
                    <h3 className="text-2xl text-center font-bold py-7">
                      Email Marketing
                    </h3>
                  </div>
                  <p className="">
                    66% of consumers have made a purchase as a direct result of
                    an email marketing message. Sending newsletters through
                    email is a great idea. It allows you to easily share news
                    and the latest product photos and information with your
                    customers. You can also send exclusive discounts, offers,
                    and promotional deals to your audience.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={items}>
            <div className="single-feature-two indigo-shape group hover:text-white">
              <div className="h2-feature-icon indigo-shadow bg-indigo shadow-lg">
                <ChartBarSquareIcon className="h-12 w-12 text-white" />
              </div>
              <div className="card-two-content">
                <div>
                  <div className="card-title">
                    <h3 className="text-2xl text-center font-bold py-7">
                      Digital Marketing
                    </h3>
                  </div>
                  <p className="">
                    Digital marketing is one of the best techniques for product
                    and business promotion. Use the above-mentioned ways to
                    promote your product to help you succeed in converting your
                    audience into sales.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Marketing;
