import image from "@/constant/Images/image"
import Image from "next/image"

const MobileDevHero = () => {
  return (
    <section className="we-are-area py-4 md:py-20 flex items-center">
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        <div className="my-auto order-2 md:order-1">
          <div className="we-are-content">
            <div className="section-title">
              <h2 className="pb-4 sm:pb-12 primary-heading">
                MOBILE <span className="highlight">DEVELOPMENT</span>
              </h2>
            </div>

            <p className="app__text">
              Mobile app development has become a key part of digital strategy.
              In today’s fast-paced, mobile-first world, businesses must create
              apps that are functional, user-friendly, and tailored to their
              audience’s needs. Mobile apps can increase customer engagement,
              enhance user experience, and provide new avenues for business
              growth.
              <br />
              <br />
              We specialize in developing high-performance mobile apps for both
              iOS and Android platforms. Our goal is to create seamless,
              intuitive, and scalable mobile solutions that meet your business
              goals and drive success.
            </p>
          </div>
        </div>

        <div className="we-are-img order-1 md:order-2">
          <div className="we-are-banner-img">
            <Image src={image.mobiledev3} alt="SEM Marketing" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileDevHero