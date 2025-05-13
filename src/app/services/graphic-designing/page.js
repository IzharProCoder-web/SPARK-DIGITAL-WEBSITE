import { PageWrapper } from "@/app/page-wrapper"
import ContactForm from "@/components/ContactPage/ContactForm"
import GraphicDesHero from "@/components/GraphicDes/GraphicDesHero";
import GraphicServices from "@/components/GraphicDes/GraphicServices"

export const metadata = {
  title:
    "Graphic Designing - Creative Design Agency / Expert in Branding & Visuals",
  description:
    "Professional graphic design services including branding, UI/UX, logo design, and marketing creatives.",
};

const SeoService = () => {
  return (
    <>
      <PageWrapper>
        <GraphicDesHero />
      </PageWrapper>

      <PageWrapper>
        <GraphicServices />
      </PageWrapper>

      <PageWrapper>
        <ContactForm
          heading={`Get in <span class="highlight">Touch</span>`}
          color={"bg-white"}
        />
      </PageWrapper>
    </>
  );
}

export default SeoService