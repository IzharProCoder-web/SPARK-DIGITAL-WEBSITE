"use client";
import Stats from "@/components/Home/Stats/Stats";
import {
  ClipboardDocumentListIcon,
  CodeBracketIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Award = () => {
  const [countingOn, setCountingOn] = useState(false);
  const stats = [
    {
      id: 1,
      name: "Satisfied customer",
      value: <CountUp start={0} end={800} duration={2} />,
      icon: UserGroupIcon,
    },
    {
      id: 2,
      name: "Business owners are happy with us",
      value: <CountUp start={0} end={380} duration={2} />,
      icon: UserIcon,
    },
    {
      id: 3,
      name: "Expert Instructors",
      value: <CountUp start={0} end={187} duration={2} />,
      icon: ClipboardDocumentListIcon,
    },
    {
      id: 4,
      name: "Project with web/Apps",
      value: <CountUp start={0} end={548} duration={2} />,
      icon: CodeBracketIcon,
    },
  ];
  return (
    <section className="bg-gray-50 mt-20">
      <div className="app__container py-16 sm:py-32">
        <div className="">
          <div className="flex justify-center items-center sm:text-center">
            <div>
              <h1 className="primary-heading mb-4">
                Why
                <span className="highlight"> Choose Us?</span>
              </h1>
              <p className="app__text">
                With over 5 years of providing high-yielding solutions in
                digital marketing, graphic design, content writing, and mobile,
                and app development, we stand as a formidable agency in this
                market. We have delivered 1000+ projects with local and global
                levels of projected scope. This is backed by the masterful
                execution of several development strategies, collaboration,
                research, and innovation. WebDigitalSphere harbors over 200
                in-house experts to cater to your project needs at all times. We
                eliminate the risk of hiring third parties for outsourcing.
                Providing you real-time information, value deliverance, and
                peace of mind by staying in touch with us.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col gap-y-12 pt-12">
                  <div className="mx-auto w-full sm:max-w-7xl px-0 lg:px-8">
                    <ScrollTrigger
                      onEnter={() => setCountingOn(true)}
                      onExit={() => setCountingOn(false)}
                    >
                      <dl className="grid gap-x-3 sm:gap-x-8 gap-y-3 sm:gap-y-5 text-center grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, k) => {
                          return (
                            <div
                              key={k}
                              className="single-counter-two mx-auto flex w-full flex-col gap-y-4 py-5 md:py-10 px-2 sm:px-5"
                            >
                              <div className="flex justify-center items-center text-[#f32208]">
                                <stat.icon
                                  className="h-8 w-8 sm:h-12 sm:w-12"
                                  aria-hidden="true"
                                />
                              </div>
                              <dd className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                {countingOn && <>{stat.value}+</>}
                              </dd>
                              <dt className="text-base tracking-tight text-gray-700">
                                {stat.name}
                              </dt>
                            </div>
                          );
                        })}
                      </dl>
                    </ScrollTrigger>
                  </div>
                </div>
      </div>
    </section>
  );
};

export default Award;
