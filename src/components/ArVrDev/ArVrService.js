import image from "@/constant/Images/image";
import Image from "next/image";

const ArVrService = () => {
  return (
    <section className="we-are-area py-2 md:py-20 flex items-center bg-slate-50">
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="we-are-img order-1">
          <div className="we-are-banner-img">
            <Image src={image.ArVr1} alt="AR/VR Development" />
          </div>
        </div>

        <div className="my-auto order-2">
          <div className="we-are-content">
            <div className="section-title">
              <h2 className="pb-4 sm:pb-12 primary-heading mt-4 sm:mt-0">
                Why Choose Our{" "}
                <span className="highlight">AR/VR Development Services</span>
              </h2>
            </div>

            <p className="app__text">
              Our AR/VR development services empower businesses and creators to
              craft immersive, interactive, and future-forward experiences. From
              virtual training environments to augmented retail experiences, we
              blend creativity with cutting-edge technology. Whether you&apos;re
              targeting mobile AR, VR headsets, or web-based simulations, our
              team ensures exceptional performance, realism, and user engagement
              tailored to your goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArVrService;
