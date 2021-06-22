import { lazy } from "react";

import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import JobLawContent from "../../content/JobLawContent.json";
import AccidentsContent from "../../content/AccidentsContent.json";
import SuccessionsContent from "../../content/SuccessionsContent.json"
import DivorceContent from "../../content/DivorceContent.json";
import ContactContent from "../../content/ContactContent.json";

const TopicContainer = lazy(() => import("../../components/TopicBlock"));
const ContactFrom = lazy(() => import("../../components/ContactForm"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        first="true"
        title={IntroContent.title}
        content={IntroContent.text}
        section={IntroContent.section}
        button={IntroContent.button}
        icon="main-image.png"
        id="about"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
        id="services"
      />
      <TopicContainer
        content={JobLawContent}
      />
      <TopicContainer
        content={SuccessionsContent}
      />
      <TopicContainer
        content={DivorceContent}
      />
      <TopicContainer
        content={AccidentsContent}
      />

      <ContactFrom
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
