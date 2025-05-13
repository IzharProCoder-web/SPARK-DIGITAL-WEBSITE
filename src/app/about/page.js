import AboutUs from "@/components/About/AboutUs/AboutUs";
import AboutWorking from "@/components/About/AboutWorking/AboutWorking";
import Award from "@/components/About/Award/Award";
import BestFeature from "@/components/About/BestFeature/BestFeature";
import { PageWrapper } from "../page-wrapper";
import ContactForm from "@/components/ContactPage/ContactForm";
import WhoWeAreTabs from "@/components/About/WhoWeAreTabs/WhoWeAreTabs";
import MeetOurTeam from "@/components/About/MeetOurTeam/MeetOurTeam";

export const metadata = {
  title: "About - Digital Marketing Agency / Expert at SEO, SMO",
  description:
    "All digital marketing services, seo, smo, PPC, web development.",
};
const aboutSections = [
  {
    section: <AboutUs />,
  },
  {
    section: <WhoWeAreTabs />,
  },
  {
    section: <BestFeature />,
  },
  {
    section: <MeetOurTeam />,
  },
  {
    section: <Award />,
  },
  {
    section: <AboutWorking />,
  },
  {
    section: (
      <ContactForm
        heading={`Get in <span class="highlight">Touch</span>`}
        color={"bg-white"}
      />
    ),
  },
];
const About = () => {
  return (
    <>
      {aboutSections.map((i) => {
        return <PageWrapper key={i}>{i.section}</PageWrapper>;
      })}
    </>
  );
};

export default About;
