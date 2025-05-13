import image from "@/constant/Images/image";
import Image from "next/image";

const GraphicDesHero = () => {
  return (
    <section>
      <div className="app__container relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden"></div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 highlight">
                  Graphic Designing
                </p>
                <h1 className="mt-2 primary-heading text-gray-900">
                  What is Graphic Designing?
                </h1>
                <p className="mt-6 app__text">
                  Graphic Designing is a creative process that combines art and
                  technology to communicate ideas visually. It plays a critical
                  role in brand identity, user experience, and marketing by
                  crafting compelling visual content across print and digital
                  media. Core elements of graphic designing include:
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 sm:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 ">
            <Image
              className="w-full max-w-none"
              src={image.graphicDes1}
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl lg:max-w-lg">
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">
                  Design solutions tailored for your brand
                </h2>
                <p className="mt-8 app__text">
                  Graphic Designing involves creating visually striking designs
                  that align with your brand identity and message. From logos
                  and social media creatives to UI/UX design and marketing
                  materials, our services aim to make your business stand out
                  with professional and cohesive visuals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesHero;
