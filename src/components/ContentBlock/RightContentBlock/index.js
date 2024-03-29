import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";

import SvgIcon from "../../../common/SvgIcon";
import Button from "../../../common/Button";

import * as S from "./styles";
import { Link } from "react-router-dom";

const RightBlock = ({ title, content, button, icon, t, id, style, link }) => {
  // const scrollTo = (id) => {
  //   const element = document.getElementById(id);
  //   element.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };
  return (
    <S.RightBlockContainer style={style}>
      <Row type="flex" justify="space-between" align="middle" id={id}>
        <Col lg={11} md={11} sm={11} xs={24}>
          <Slide left>
            <S.ContentWrapper>
              <h6>{t(title)}</h6>
              <S.Content>{t(content)}</S.Content>
              {link &&
                <Link to={link}>
                  <S.ButtonWrapper>
                    {button &&
                      typeof button === "object" &&
                      button.map((item, id) => {
                        return (
                          <Button
                            key={id}
                            color={item.color}
                            width="true"
                          >
                            {t(item.title)}
                          </Button>
                        );
                      })}
                  </S.ButtonWrapper>
                </Link>
              }
            </S.ContentWrapper>
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide right>
            <SvgIcon
              src={icon}
              className="about-block-image"
              width="100%"
              height="100%"
            />
          </Slide>
        </Col>
      </Row>
    </S.RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
