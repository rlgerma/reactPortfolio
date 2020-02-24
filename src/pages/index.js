import React from 'react';
import { graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import { Flex, Box } from 'rebass';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import Portfolio from '../components/Portfolio';
import Technologies from '../components/Technologies';
import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import HeroText from '../components/HeroText';
import PortfolioText from '../components/PortfolioText';
import Social from '../components/Social';

import media from '../utils/style';

const Section = styled.div`
  text-align: center;
  padding-top: 45px;
  padding-bottom: 40px;
  ${props =>
    props.dark &&
    css`
      background: #292929;
      h2 {
        color: #fff;
      }
      h3 {
        color: #fff;
      }
      div {
        color: #979797;
      }
    `}
`;

const SectionTitle = styled.h2`
  font-size: 2em;
  margin: 0.67em 0;
  align-content: left;
  ${media.xs`
    font-size:1.5em;
  `}
`;
const ImgWrapper = styled.div`
  float: left;
  display: inline-block;
  align-content: left;
  width: 40%;
  ${media.xs`
    display: block;
    font-size:1.5em;
    align-self: center;
    width:40%;
  `}
`;
const TextWrapper = styled.div`
  float: right;
  align-content: right;
  display: inline-block;
  width: 40%;
  font-size: flex;
  padding: 8px;
  ${media.xs`
    display: inline-block;
    font-size:1.5em;
    width:40%;
  `}
`;

const IndexPage = ({ data }) => (
  <Layout>
    <Hero fluid={data.hero.edges[0].node.fluid}>
      <HeroText />
      <Social edges={data.allSocialJson.edges} />
    </Hero>
    <Section id="about-me">
      <ScrollAnimation
        animateIn="bounceInRight"
        animateOut="bounceOutLeft"
        animateOnce={true}
      >
        <h1>About Me</h1>
      </ScrollAnimation>
      <Flex alignItems="center" flexDirection="column">
        <Box px={2} width={[1, 1 / 2]}>
          <ScrollAnimation animateIn="fadeIn" delay={1000} animateOnce={true}>
            <h3>
              My name is <strong>Richard Germaine</strong>.
            </h3>
            <h4>I'm a Web Developer from Denver, CO.</h4>
          </ScrollAnimation>
          <ScrollAnimation delay={2000} animateIn="fadeIn" animateOnce={true}>
            <h4>Whether you need minor styling on your page,</h4>
          </ScrollAnimation>
          <ScrollAnimation delay={3000} animateIn="fadeIn" animateOnce={true}>
            <h4>or a fully functional web app,</h4>
          </ScrollAnimation>
          <ScrollAnimation delay={4000} animateIn="fadeIn" animateOnce={true}>
            <h4>
              I can help you with your project using modern developing
              technologies and design.
            </h4>
          </ScrollAnimation>
        </Box>
      </Flex>
    </Section>
    <Section id="portfolio" dark>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <SectionTitle>My Work</SectionTitle>
      </ScrollAnimation>
      <ImgWrapper>
        <ScrollAnimation
          offset={500}
          animateIn="rotateInUpLeft"
          animateOut="rotateOutDownRight"
          animateOnce={false}
        >
          <Portfolio edges={data.allPortfolio.edges} />
        </ScrollAnimation>
      </ImgWrapper>
      <TextWrapper>
        <ScrollAnimation
          offset={500}
          animateIn="rotateInUpRight"
          animateOut="rotateOutDownLeft"
          animateOnce={false}
        >
          <PortfolioText edges={data.allPortfolioJson.edges} />
        </ScrollAnimation>
      </TextWrapper>
    </Section>
    <Section id="technologies">
      <SectionTitle>
        <ScrollAnimation
          duration={2}
          animateIn="bounceInLeft"
          initiallyVisible={true}
          animateOnce={true}
        >
          Stuff
        </ScrollAnimation>
        <ScrollAnimation
          duration={3}
          animateIn="bounceInRight"
          initiallyVisible={true}
          animateOnce={true}
        >
          I
        </ScrollAnimation>
        <ScrollAnimation
          duration={4}
          animateIn="bounceInDown"
          initiallyVisible={false}
          animateOnce={true}
        >
          Use
        </ScrollAnimation>
      </SectionTitle>
      <ScrollAnimation
        duration={4}
        animateIn="flipInX"
        initiallyVisible={false}
        animateOnce={true}
      >
        <Technologies edges={data.allLogos.edges} />
      </ScrollAnimation>
    </Section>
    <Section id="contact" dark>
      <SectionTitle>
        <ScrollAnimation animateIn="fadeIn">Contact Me</ScrollAnimation>
      </SectionTitle>
      <Flex alignItems="center" flexDirection="column">
        <Box px={2} width={[1, 1 / 2]}>
          <ContactForm />
        </Box>
      </Flex>
    </Section>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query indexQuery {
    allSocialJson {
      edges {
        node {
          url
          type
        }
      }
    }
    allPortfolioJson {
      edges {
        node {
          title
          about
          url
        }
      }
    }

    allPortfolio: allImageSharp(
      filter: { original: { src: { regex: "/port/" } } }
      sort: { fields: original___src }
    ) {
      edges {
        node {
          id
          fixed(grayscale: false) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }

    allLogos: allImageSharp(
      filter: { original: { src: { regex: "/logo/" } } }
      sort: { fields: original___src }
    ) {
      edges {
        node {
          id
          fixed(height: 80, grayscale: false) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
    hero: allImageSharp(
      filter: { original: { src: { regex: "/background/" } } }
    ) {
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
