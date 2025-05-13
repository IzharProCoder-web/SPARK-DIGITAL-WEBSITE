import image from "@/constant/Images/image";
import Image from "next/image";

const GameDevService = () => {
  return (
    <section className="we-are-area py-2 md:py-20 flex items-center bg-slate-50">
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="we-are-img order-1">
          <div className="we-are-banner-img">
            <Image src={image.gamedev2} alt="SEM Marketing" />
          </div>
        </div>

        <div className="my-auto order-2">
          <div className="we-are-content">
            <div className="section-title">
              <h2 className="pb-4 sm:pb-12 primary-heading mt-4 sm:mt-0">
                Why Choose Our{" "}
                <span className="highlight">Game Development Services</span>
              </h2>
            </div>

            <p className="app__text">
              Our Game Development services are designed to bring your creative
              visions to life, combining technical expertise with imaginative
              storytelling. Whether you&apos;re targeting mobile, console, or
              web platforms, our team ensures a seamless blend of gameplay,
              graphics, and performance. We focus on delivering captivating user
              experiences that engage and retain players, helping you stand out
              in the competitive gaming industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameDevService;
