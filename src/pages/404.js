import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import HeroText from "../components/HeroText";

const StyledHero = styled(Hero)`
  margin-top: -52px;
`;

const NotFoundPage = ({ data }) => (
  <Layout noMenu>
    <StyledHero>
      <HeroText text='404 Not Found' />
    </StyledHero>
  </Layout>
);

export default NotFoundPage;
