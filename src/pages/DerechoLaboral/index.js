import { lazy } from "react";
import FAQCollapse from "../../components/FAQCollapse";

import DerechoLaboralContent from "../../content/JobLawPage.json";
import ContactContent from "../../content/ContactContent.json";

const ContactFrom = lazy(() => import("../../components/ContactForm"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const DerechoLaboral = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={DerechoLaboralContent.title}
        content={DerechoLaboralContent.content}
        icon="product-launch.svg"
        id="job_law"
      />

      <FAQCollapse data={DerechoLaboralContent}/>
    
      <ContactFrom
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default DerechoLaboral;
