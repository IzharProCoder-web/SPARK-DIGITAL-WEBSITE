import { PageWrapper } from "@/app/page-wrapper";
import ContactForm from "@/components/ContactPage/ContactForm";
import GameDevService from "@/components/GameDev/GameDevService";
import ServiceInclude from "@/components/GameDev/ServiceInclude";
import GameDevHero from "@/components/GameDev/GameDevHero";

export const metadata = {
  title: "SMO Service - Digital Marketing Agency / Expert at SEO, SMO",
  description:
    "All digital marketing services, seo, smo, PPC, web development.",
};
const sections = [
  {
    section: <GameDevHero />,
  },
  {
    section: <GameDevService />,
  },
  {
    section: <ServiceInclude />,
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
      {sections.map((i, k) => {
        return <PageWrapper key={k}>{i.section}</PageWrapper>;
      })}
    </>
  );
};

export default SmoService;
