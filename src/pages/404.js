import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import HeroText from "../components/HeroText";

const StyledHero = styled(Hero)`
  margin-top: -52px;
`;

const NotFoundPage = ({ data }) => (
  <Layout noMenu>
    <StyledHero fluid={data.hero?.edges?.[0].node?.fluid ?? null}>
      <HeroText text='404 Not Found' />
    </StyledHero>
  </Layout>
);

export default NotFoundPage;
