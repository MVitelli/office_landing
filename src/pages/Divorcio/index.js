import { lazy } from "react";
import FAQCollapse from "../../components/FAQCollapse";

import DivorcioContent from "../../content/DivorcePage.json";
import ContactContent from "../../content/ContactContent.json";

const ContactFrom = lazy(() => import("../../components/ContactForm"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Divorcio = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={DivorcioContent.title}
        content={DivorcioContent.content}
        icon="divorce-image.png"
        id="job_law"
      />

      <FAQCollapse data={DivorcioContent}/>
    
      <ContactFrom
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Divorcio;
