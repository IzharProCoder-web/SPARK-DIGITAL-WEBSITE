import { PageWrapper } from "@/app/page-wrapper";
import ContactForm from "@/components/ContactPage/ContactForm";
import DigitalMarketing from "@/components/DigitalMarketing/DigitalMarketing";
import Marketing from "@/components/DigitalMarketing/Marketing";
import HomeStats from "@/components/Home/Stats/HomeStats";

export const metadata = {
  title: "Digital Marketing - Digital Marketing Agency / Expert at SEO, SMO",
  description:
    "All digital marketing services, seo, smo, PPC, web development.",
};
const sections = [
  {
    section: <DigitalMarketing />,
  },
  {
    section: <Marketing />,
  },
  {
    section: <HomeStats />,
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
const DigitalM = () => {
  return (
    <>
      {sections.map((i, k) => {
        return <PageWrapper key={k}>{i.section}</PageWrapper>;
      })}
    </>
  );
};

export default DigitalM;
