"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const headingText = "Crafting meaningful digital experiences.".split(" ");

const Home = () => {
  return (
    <>
      <style jsx>{`
        .app__hero {
          position: relative;
          overflow: hidden;
        }
        .primary-btn {
          background-color: #1E3A8A; /* Navy for trust */
          color: #FFFFFF; /* White for calmness */
          border-radius: 0.375rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .primary-btn:hover {
          background-color: #D4A017; /* Gold for power */
          color: #1E3A8A; /* Navy for contrast */
        }
        .secondary-btn {
          background-color: #D4A017; /* Gold for power */
          color: #1E3A8A; /* Navy for trust */
          border-radius: 0.375rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .secondary-btn:hover {
          background-color: #F5F7FA; /* Light Gray-Blue for calmness */
          color: #1E3A8A; /* Navy for consistency */
        }
      `}</style>
      <section
        className="app__hero"
        style={{ backgroundColor: "#1E3A8A" }} // Navy for trust
      >
        <div
          style={{
            margin: "0 auto",
            maxWidth: "64rem",
            padding: "1.5rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            zIndex: 2,
            paddingTop: "7rem",
            paddingBottom: "7rem",
            textAlign: "center",
          }}
          className="mx-auto max-w-4xl p-6 lg:px-8 z-2 py-28 md:py-44 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.25 }}
            style={{ flex: 1 }}
            className="flex-1"
          >
            <h1
              style={{
                fontSize: "2.25rem",
                lineHeight: "2.5rem",
                fontWeight: "700",
                marginBottom: "1rem",
                textTransform: "capitalize",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "0.5rem 0.5rem",
                color: "#FFFFFF", // White for calmness
              }}
              className="text-4xl lg:text-7xl font-bold md:font-semibold mb-4 capitalize flex flex-wrap justify-center gap-x-2 gap-y-4"
            >
              {headingText.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3, duration: 0.6 }}
                  style={{
                    color: word === "digital" ? "#D4A017" : "#FFFFFF", // Gold for power, White for calmness
                    fontWeight: word === "digital" ? "700" : "inherit",
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
                margin: "1.5rem 0",
                color: "#FFFFFF", // White for calmness
              }}
              className="text-lg my-6"
            >
              Transforming ideas into exceptional digital solutions that drive results
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
                gap: "1.25rem",
              }}
              className="flex items-center justify-center mx-auto gap-5"
            >
              <Link
                href="/contact"
                className="primary-btn  px-4 py-2 text-sm font-semibold"
              >
                Get Started
              </Link>
              <Link
                href="/about"
                className="secondary-btn px-4 py-2 text-sm font-semibold"
              >
                Know More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;