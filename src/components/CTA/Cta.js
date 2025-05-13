"use client";
import Link from "next/link";
import ScrollTrigger from "react-scroll-trigger";
// import stats from "../Home/Stats/Stats";
import CountUp from "react-countup";
import { useState } from "react";

export default function Cta({ heading, para }) {
  const [countingOn, setCountingOn] = useState(false);

  const stats = [
    {
      id: 1,
      name: "Projects Delivered",
      value: <CountUp start={0} end={1000} duration={2} />,
    },
    {
      id: 2,
      name: "Clients Satisfied",
      value: <CountUp start={0} end={850} duration={2} />,
    },
    {
      id: 3,
      name: "Years Experience",
      value: <CountUp start={0} end={5} duration={2} />,
    },
    {
      id: 4,
      name: "Countries Served",
      value: <CountUp start={0} end={28} duration={2} />,
    },
  ];
  return (
    <div className="app__container">
      <div className="relative isolate overflow-hidden bg-[#ff4027] px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex-col lg:gap-x-20 lg:px-24 lg:pt-0">
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#ee0979" />
              <stop offset={1} stopColor="#ff6a00" />
            </radialGradient>
          </defs>
        </svg>
        <div className="mx-auto max-w-full text-center lg:mx-0 lg:flex-auto py-12 lg:py-20 lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white text-center sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-50 text-center">
            {para}
          </p>
        </div>

        {/* Count up */}
        <div className="pb-20">
          <ScrollTrigger
            onEnter={() => setCountingOn(true)}
            onExit={() => setCountingOn(false)}
          >
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, k) => {
                return (
                  <div
                    key={k}
                    className="single-counter-two mx-auto flex w-full flex-col gap-y-4 py-10 px-5"
                  >
                    {/* <div className="flex justify-center items-center text-[#ff6a00]">
                      <stat.icon className="h-12 w-12 " aria-hidden="true" />
                    </div> */}
                    <dd className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      {countingOn && <>{stat.value}+</>}
                    </dd>
                    <dt className="text-base leading-7 text-white">
                      {stat.name}
                    </dt>
                  </div>
                );
              })}
            </dl>

            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-center">
              <Link href="/contact" className="secondary-btn shadow-lg">
                Connect With Us
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold leading-6 text-white"
              >
                Know more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </ScrollTrigger>
        </div>
      </div>
    </div>
  );
}
