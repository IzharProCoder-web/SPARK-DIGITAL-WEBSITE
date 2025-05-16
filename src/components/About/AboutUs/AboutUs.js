import Image from "next/image";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="app__about py-16 md:py-20 " style={{ backgroundColor: "#1E3A8A" }}>
      <div className="app__container flex items-center justify-center">
        <div className="text-center">
          <h2 className="about_heading text-3xl lg:text-6xl font-bold md:font-semibold mb-4 capitalize text-[#FFFFFF]">
            A Decade of{" "}
            <span className="text-[#D4A017]">
              Digital Excellence…
              <br />
            </span>
            Sparked by a Vision
          </h2>
          <div className="text-base sm:text-xl text-[#FFFFFF] mt-6 max-w-[85%] mx-auto sm:leading-8">
            <p>
              Our journey isn’t just a story—it’s a legacy of innovation, grit, and relentless pursuit of progress. From a single bold idea, a handful of code, and one determined client, we’ve grown into a global force, empowering businesses with cutting-edge solutions. Every challenge faced, every late night spent, has fueled our mission to redefine what’s possible.
            </p>
            <p className="mt-5">
              Forget the old-school handshake—{" "}
              <span className="font-semibold text-red-500">our legacy began with a single, game-changing email.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;