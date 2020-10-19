import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import HeroText from '../components/HeroText';

const StyledHero = styled(Hero)`
  margin-top: -62px;
`;

const NotFoundPage = ({ data }) => (
  <Layout noMenu>
    <StyledHero fluid={data.hero.edges[0].node.fluid}>
      <HeroText text="*quack* 404 Not Found" />
    </StyledHero>
  </Layout>
);

export default NotFoundPage;

export const pageQuery = graphql`
  query notFoundQuery {
    hero: allImageSharp(filter: { original: { src: { regex: "/duck/" } } }) {
      edges {
        node {
          id
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
