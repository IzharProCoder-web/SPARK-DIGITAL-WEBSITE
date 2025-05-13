"use client";
import "./Hero.css";
import Link from "next/link";
import { motion } from "framer-motion";

const headingText = "Crafting meaningful digital experiences.".split(" ");

const Home = () => {
  return (
    <section className="app__hero relative">
      <div className="mx-auto max-w-4xl p-6 lg:px-8 z-2 py-28 md:py-44 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.25 }}
          className="flex-1"
        >
          <h1 className="text-4xl lg:text-7xl font-bold md:font-semibold mb-4 capitalize flex flex-wrap justify-center gap-x-2 gap-y-4">
            {headingText.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
                className={word === "digital" ? "text-[#f32208]" : ""}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <p className="text-lg my-6">
            Transforming ideas into exceptional digital solutions that drive results
          </p>
          <div className="flex items-center justify-center mx-auto gap-5">
            <Link href="/contact" className="primary-btn shadow-lg">
              Get Started
            </Link>
            <Link href="/about" className="secondary-btn shadow-lg">
              Know More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
