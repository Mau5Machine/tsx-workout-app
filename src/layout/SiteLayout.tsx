import { Layout, Row, Col } from 'antd';
import React from 'react';
import NavigationMenu from './NavigationMenu';
import { Link } from "react-router-dom"
import styled from "styled-components"
import moment from "moment"

const { Header, Content, Footer } = Layout;

const Container = styled.div`
  min-height: 280px;
  background: #fff;
`

const HeaderLogo = styled.div`
  float: left;
  width: 100px;
  height: 31px;

  img {
    width: 40px;
  }
`

const Banner = styled.div`
  min-height: 200px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("images/header-wallpaper.jpeg");
  background-size: cover;
  background-position: center;

  h1 {
    color: #000;
    font-family: 'Metal Mania', cursive;
    font-size: 55px;
    letter-spacing: 4px;
  }
`

interface Props {
  children: React.ReactNode;
  title: string
}

const SiteLayout:React.FC<Props> = ({children, title}) => (
  <Layout className="layout">
    <Header>
      <HeaderLogo className="header-logo">
        <Link to="/">
          <img src="images/fit-logo.png" alt="logo" />
        </Link>
      </HeaderLogo>
      <NavigationMenu/>
    </Header>
    <Content>
      <Row>
        <Col span={24}>
          <Banner>
            <div>
              <h1>{title}</h1>
            </div>
          </Banner>
        </Col>
      </Row>
      <Container>{children}</Container>
    </Content>
    <Footer style={{ textAlign: 'center' }}>RockStar Fitness ©{moment().format('YYYY')} Created by Christian Martins</Footer>
  </Layout>
)

export default SiteLayout;