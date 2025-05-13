import image from "@/constant/Images/image";
import Image from "next/image";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="app__about py-16 md:py-20">
      <div className="app__container flex items-center justify-center">
        <div className="">
          <div className="">
            <div className="">
              <h2 className="about_heading text-3xl lg:text-6xl font-bold md:font-semibold mb-4 capitalize text-gray-900 md:text-center">
                5 Years Of{" "}
                <span className="highlight">
                  Intelgency Success…
                  <br />{" "}
                </span>
                Began With A Single Click
              </h2>
            </div>
            <div className="text-base sm:text-xl text-gray-800 mt-6 w-full md:max-w-[85%] m-auto sm:leading-8 md:text-center">
              <p className="">
                In case you’re wondering, this is not your average story. It is
                a tale of transformation, resilience, busy days, and long
                nights. It is a fascinating story of how we started with one
                client, a few clicks, and a few hundred lines of code. We began
                slowly, gathered momentum, got bigger, and climbed uphill.
                Guiding and helping businesses around the world towards
                technologically advanced solutions.
              </p>
              <p className="mt-5">
                Unlike the longstanding tradition of a knock on the door,
                <sapn className="font-semibold text-red-500">
                  {" "}
                  our story begins with an email.
                </sapn>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
