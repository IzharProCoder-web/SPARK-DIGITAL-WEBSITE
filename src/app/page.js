import Hero from "@/components/Home/Hero/Hero";
import Feature from "@/components/Home/Feature/Feature";
import Prefer from "@/components/Home/Prefer/Prefer";
import { PageWrapper } from "./page-wrapper";
import HomeStats from "@/components/Home/Stats/HomeStats";
import Test from "@/components/Testimonials/Test";
import ContactForm from "@/components/ContactPage/ContactForm";
import image from "@/constant/Images/image";
import Image from "next/image";

export default function Home() {
  const content = [
    {
      heading: "Retail / Ecommerce",
      description: "",
      icon: (
        <Image
          src={image.ECommerce}
          width={50}
          height={50}
          alt="Picture of the author"
        />
      ),
    },
    {
      heading: "Education & e-learning",
      description: "",
      icon: (
        <Image
          src={image.EducationElearning}
          width={50}
          height={50}
          alt="Picture of the author"
        />
      ),
    },
    {
      heading: "Health & Fitness",
      description: "",
      icon: (
        <Image
          src={image.HealthFitness}
          width={50}
          height={50}
          alt="Picture of the author"
        />
      ),
    },
    {
      heading: "Logistics & Distribution",
      description: "",
      icon: (
        <Image
          src={image.LogisticsDistribution}
          width={50}
          height={50}
          alt="Picture of the author"
        />
      ),
    },
    {
      heading: "Blockchain App Development",
      description: "",
      icon: (
        <Image
          src={image.BlockchainAppDevelopment}
          width={50}
          height={50}
          alt="Picture of the author"
        />
      ),
    },
    {
      heading: "Augmented Reality",
      description: "",
      icon: (
        <Image
          src={image.AugmentedReality}
          width={50}
          height={50}
          alt="Picture of the author"
        />
      ),
    },
    {
      heading: "Gaming",
      description: "",
      icon: (
        <Image
          src={image.Gaming}
          width={50}
          height={50}
          alt="Picture of the author"
        />
      ),
    },
    {
      heading: "Social Networking",
      description: "",
      icon: (
        <Image
          src={image.SocialNetworking}
          width={50}
          height={50}
          alt="Picture of the author"
        />
      ),
    },
    {
      heading: "Real Estate",
      description: "",
      icon: (
        <Image
          src={image.RealEstate}
          width={50}
          height={50}
          alt="Picture of the author"
        />
      ),
    },
    {
      heading: "Travel & Hospitality",
      description: "",
      icon: (
        <Image
          src={image.TravelHospitality}
          width={50}
          height={50}
          alt="Picture of the author"
        />
      ),
    },
    {
      heading: "Food & Restaurant",
      description: "",
      icon: (
        <Image
          src={image.FoodRestaurant}
          width={50}
          height={50}
          alt="Picture of the author"
        />
      ),
    },
    {
      heading: "On Demand Solutions",
      description: "",
      icon: (
        <Image
          src={image.DemandSolutions}
          width={50}
          height={50}
          alt="Picture of the author"
        />
      ),
    },
  ];

  const homeSections = [
    {
      page: (
        <Feature
          content={content}
          mainHeading={`Industries <span class="highlight">We Work In</span>`}
        />
      ),
    },
    {
      page: (
        <Prefer
          mainHeading={`Technologies <span class="highlight">We Use</span>`}
        />
      ),
    },
    { page: <HomeStats /> },
    {
      page: (
        <Test
          mainHeading={`The Choice of <span class="highlight">Successful</span> Brands`}
        />
      ),
    },
    {
      page: (
        <ContactForm
          heading={`Get in <span class="highlight">Touch</span>`}
          color={"bg-white"}
        />
      ),
    },
  ];

  return (
    <>
      <Hero />
      {homeSections.map((i, k) => (
        <PageWrapper key={k}>{i.page}</PageWrapper>
      ))}
    </>
  );
}
