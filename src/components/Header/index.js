import { useState, Fragment, lazy } from "react";
import { Row, Col, Drawer, Dropdown, Menu } from "antd";
import { CSSTransition } from "react-transition-group";
import { withTranslation } from "react-i18next";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Button = lazy(() => import("../../common/Button"));

const Header = ({ t }) => {
  const [isNavVisible] = useState(false);
  const [isSmallScreen] = useState(false);
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {


    const scrollTo = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };

    const dropdown = (
      <Menu>
        <Menu.Item>
          <S.CustomNavLinkSmall onClick={() => scrollTo("")}>
            <S.Span>{t("Job law")}</S.Span>
          </S.CustomNavLinkSmall>
        </Menu.Item>
        <Menu.Item>
          <S.CustomNavLinkSmall onClick={() => scrollTo("")}>
            <S.Span>{t("Successions")}</S.Span>
          </S.CustomNavLinkSmall>
        </Menu.Item>
        <Menu.Item>
          <S.CustomNavLinkSmall onClick={() => scrollTo("")}>
            <S.Span>{t("Divorce")}</S.Span>
          </S.CustomNavLinkSmall>
        </Menu.Item>
        <Menu.Item>
          <S.CustomNavLinkSmall onClick={() => scrollTo("")}>
            <S.Span>{t("Traffic accidents")}</S.Span>
          </S.CustomNavLinkSmall>
        </Menu.Item>
      </Menu>
    );

    return (
      <Fragment>
        <S.CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <S.Span>{t("About")}</S.Span>
        </S.CustomNavLinkSmall>
        <Dropdown overlay={dropdown}>
        <S.CustomNavLinkSmall onClick={() => scrollTo("")}>
          <S.Span>{t("Laws")}</S.Span>
        </S.CustomNavLinkSmall>
        </Dropdown>
        <S.CustomNavLinkSmall onClick={() => scrollTo("")}>
          <S.Span>{t("FAQ")}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall
          style={{ width: "150px" }}
          onClick={() => scrollTo("contact")}
        >
          <S.Span>
            <Button>{t("Contact")}</Button>
          </S.Span>
        </S.CustomNavLinkSmall>
      </Fragment>
    );
  };

  return (
    <S.Header>
      <S.Container>
        <Row type="flex" justify="space-between" gutter={20}>
          <S.LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" />
          </S.LogoContainer>
          <S.NotHidden>
            <MenuItem />
          </S.NotHidden>
          <S.Burger onClick={showDrawer}>
            <S.Outline />
          </S.Burger>
        </Row>
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <Drawer closable={false} visible={visible} onClose={onClose}>
            <Col style={{ marginBottom: "2.5rem" }}>
              <S.Label onClick={onClose}>
                <Col span={12}>
                  <S.Menu>Menu</S.Menu>
                </Col>
                <Col span={12}>
                  <S.Outline padding="true" />
                </Col>
              </S.Label>
            </Col>
            <MenuItem />
          </Drawer>
        </CSSTransition>
      </S.Container>
    </S.Header>
  );
};

export default withTranslation()(Header);
