import { lazy } from "react";
import FAQCollapse from "../../components/FAQCollapse";

import SucesionesContent from "../../content/SuccessionsPage.json";
import ContactContent from "../../content/ContactContent.json";

const ContactFrom = lazy(() => import("../../components/ContactForm"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Sucesiones = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={SucesionesContent.title}
        content={SucesionesContent.content}
        icon="product-launch.svg"
        id="job_law"
      />

      <FAQCollapse data={SucesionesContent}/>
    
      <ContactFrom
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Sucesiones;
