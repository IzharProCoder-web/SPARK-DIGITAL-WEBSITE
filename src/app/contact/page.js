import ContactAddress from "@/components/ContactPage/ContactAddress";
import ContactForm from "@/components/ContactPage/ContactForm";
import MapLocation from "@/components/MapLocation/MapLocation";
import { PageWrapper } from "../page-wrapper";

export const metadata = {
  title: "Contact - Digital Marketing Agency / Expert at SEO, SMO",
  description:
    "All digital marketing services, seo, smo, PPC, web development.",
};
const Contact = () => {
  return (
    <>
      <PageWrapper>
        <ContactAddress />
      </PageWrapper>
      <PageWrapper>
        <ContactForm
          heading={`Contact Us <span class="highlight">Today</span>`}
          paragraph={`We help you turn your ideas into practicable and result driven to help you thrive in the
                                competitive market. Let’s brainstorm your Million-dollar idea and together make it
                                happen.`}
          color={"bg-white"}
        />
      </PageWrapper>
      <div className="app__container">
        <MapLocation />
      </div>
    </>
  );
};

export default Contact;
