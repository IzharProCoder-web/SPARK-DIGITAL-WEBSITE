import image from "@/constant/Images/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const NeedService = () => {
  return (
    <section className="we-are-area py-16 md:py-20 flex items-center">
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        <div className="we-are-img">
          <div className="we-are-banner-img">
            <Image src={image.mobiledev1} alt="SEM Marketing" />
          </div>
        </div>
        <div className="my-auto">
          <div className="we-are-content">
            <div className="section-title">
              <h2 className="pb-12 primary-heading">
                NEED OF MOBILE APP DEVELOPMENT FOR{" "}
                <span className="highlight">YOUR BUSINESS</span>
              </h2>
            </div>

            <p className="app__text">
              In today&apos;s digital era, mobile apps are not just
              optional—they&apos;re essential. Whether you&apos;re a startup or
              an established enterprise, mobile applications help drive
              engagement, streamline operations, and unlock new revenue streams.
            </p>

            <ul role="list" className="mt-8 space-y-8 app__text">
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Enhance Customer Engagement:
                  </strong>{" "}
                  Mobile apps provide a direct and personalized channel to
                  engage with your customers—anytime, anywhere.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Boost Brand Visibility:
                  </strong>{" "}
                  A well-designed app puts your brand in your customers’ pockets
                  and increases your daily exposure dramatically.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Streamline Business Processes:
                  </strong>{" "}
                  From booking systems to eCommerce and internal tools, custom
                  mobile apps can automate and simplify business workflows.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Data-Driven Insights:
                  </strong>{" "}
                  Mobile apps allow you to collect valuable user data, track
                  behavior, and make smarter, data-backed decisions for your
                  business.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeedService;
