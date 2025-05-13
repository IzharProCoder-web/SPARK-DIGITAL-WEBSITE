import { PageWrapper } from "@/app/page-wrapper"
import ContactForm from "@/components/ContactPage/ContactForm"
import WebOptimization from "@/components/WebOptimization/WebOptimization"

export const metadata = {
  title: 'Website Optimization - Digital Marketing Agency / Expert at SEO, SMO',
  description: 'All digital marketing services, seo, smo, PPC, web development.',
}
const WebsiteOptimization = () => {
  return (
    <>
    <PageWrapper>
     <WebOptimization/>
     </PageWrapper>

     <PageWrapper>
     <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-slate-50"}/>
     </PageWrapper>
    </>
  )
}

export default WebsiteOptimization