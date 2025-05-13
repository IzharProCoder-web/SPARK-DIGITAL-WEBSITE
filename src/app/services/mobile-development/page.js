import { PageWrapper } from "@/app/page-wrapper";
import ContactForm from "@/components/ContactPage/ContactForm";
import WeHelp from "@/components/MobileDevComps/WeHelp";
import NeedService from "@/components/MobileDevComps/NeedService";
import MobileDevHero from "@/components/MobileDevComps/MobileDevHero";

export const metadata = {
  title:
    "Mobile Development - Build High-Quality Mobile Apps for Your Business",
  description:
    "Custom mobile app development services for iOS and Android platforms, focusing on user experience, performance, and scalability.",
};

const sections = [
  {
    section: <MobileDevHero />,
  },
  {
    section: <WeHelp name={"Mobile Presence"} />,
  },
  {
    section: <NeedService />,
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
const SocialMarketing = () => {
  return (
    <>
      {/* <Breadcrumbs name={"Social Marketing"}/> */}
      {sections.map((i, k) => {
        return <PageWrapper key={k}>{i.section}</PageWrapper>;
      })}
    </>
  );
};

export default SocialMarketing;
