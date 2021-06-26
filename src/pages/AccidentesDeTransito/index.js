import { lazy } from "react";
import FAQCollapse from "../../components/FAQCollapse";

import AccidentesDeTransitoContent from "../../content/AccidentsPage.json";
import ContactContent from "../../content/ContactContent.json";

const ContactFrom = lazy(() => import("../../components/ContactForm"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const AccidentesDeTransito = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={AccidentesDeTransitoContent.title}
        content={AccidentesDeTransitoContent.content}
        icon="accidents-image.png"
        id="job_law"
      />

      <FAQCollapse data={AccidentesDeTransitoContent}/>
    
      <ContactFrom
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default AccidentesDeTransito;
