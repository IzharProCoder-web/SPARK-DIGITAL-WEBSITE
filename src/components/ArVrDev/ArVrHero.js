import image from "@/constant/Images/image";
import Image from "next/image";

const ARVRDevHero = () => {
  return (
    <section className="we-are-area py-16 md:py-4 flex items-center">
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        <div className="my-auto order-2 md:order-1">
          <div className="we-are-content">
            <div className="section-title">
              <h2 className="pb-4 sm:pb-12 primary-heading">
                What is <span className="highlight">AR/VR Development?</span>
              </h2>
            </div>

            <p className="app__text">
              AR/VR Development involves creating immersive augmented and
              virtual reality experiences that blend the physical and digital
              worlds. Key aspects of AR/VR Development include:
            </p>
            <br />
            <p className="app__text">
              Our AR/VR development process focuses on crafting immersive and
              interactive experiences by designing detailed 3D environments that
              captivate users. We prioritize real-time user interaction to
              create dynamic and responsive applications that feel truly
              engaging. With an emphasis on cross-device compatibility, our
              solutions are optimized for a variety of platforms including VR
              headsets, mobile devices, and web browsers. Additionally, we
              ensure seamless performance and high realism, delivering a fluid
              and lifelike user experience across all supported devices.
            </p>
          </div>
        </div>

        <div className="we-are-img order-1 md:order-2">
          <div className="we-are-banner-img">
            <Image src={image.ArVr2} alt="AR/VR Development" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ARVRDevHero;
