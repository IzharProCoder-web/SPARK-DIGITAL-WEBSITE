import image from "@/constant/Images/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const GameDevHero = () => {
  return (
    <section className="we-are-area py-16 md:py-20 flex items-center">
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        <div className="my-auto order-2 md:order-1">
          <div className="we-are-content">
            <div className="section-title">
              <h2 className="pb-4 sm:pb-12 primary-heading">
                What is <span className="highlight">Game Development?</span>
              </h2>
            </div>

            <p className="app__text">
              Game Development is the process of designing, developing, and
              deploying interactive digital games for various platforms. Key
              aspects of Game Development include: -
            </p>

            <ul role="list" className="mt-8 space-y-4 sm:space-y-8 app__text">
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>Designing engaging gameplay mechanics</span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>Creating immersive storylines and characters</span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>Developing cross-platform compatibility</span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>Ensuring smooth user experience and performance</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="we-are-img order-1 md:order-2">
          <div className="we-are-banner-img">
            <Image src={image.gamedev3} alt="SEM Marketing" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameDevHero;
