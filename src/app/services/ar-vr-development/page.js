import { PageWrapper } from "@/app/page-wrapper";
import ContactForm from "@/components/ContactPage/ContactForm";
import ArVrService from "@/components/ArVrDev/ArVrService";
import ArVrServiceInclude from "@/components/ArVrDev/ArVrServiceInclude";
import ArVrHero from "@/components/ArVrDev/ArVrHero";

export const metadata = {
  title:
    "AR/VR Development Services - Immersive Solutions for Web, Mobile & XR",
  description:
    "Explore cutting-edge AR/VR development services to build immersive, interactive experiences across mobile, web, and extended reality platforms.",
};

const sections = [
  {
    section: <ArVrHero />,
  },
  {
    section: <ArVrServiceInclude />,
  },
  {
    section: <ArVrService />,
  },
  {
    section: (
      <ContactForm
        heading={`Get in <span class="highlight">Touch</span>`}
        color={"bg-slate-50"}
      />
    ),
  },
];
const SmoService = () => {
  return (
    <>
      {/* <Breadcrumbs name={"SMO Services"}/> */}
      {sections.map((i, k) => {
        return <PageWrapper key={k}>{i.section}</PageWrapper>;
      })}
    </>
  );
};

export default SmoService;
