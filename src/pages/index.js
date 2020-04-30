import React from 'react';
import { graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import { Flex, Box } from 'rebass';
import ScrollAnimation from 'react-animate-on-scroll';
import Technologies from '../components/Technologies';
import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import HeroText from '../components/HeroText';
import Social from '../components/Social';
import Portfolio from '../components/Portfolio';
import 'animate.css/animate.min.css';

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

// const LazyCoverflow = () => {
//   if (typeof window === 'undefined') return <span>loading...</span>;
//   const Component = React.lazy(() => import('../components/PortfolioText'));
//   return (
//     <>
//       <Suspense fallback={<span>loading...</span>}>
//         <Component />
//       </Suspense>
//     </>
//   );
// };

const IndexPage = ({ data }) => (
  <Layout>
    <Hero fluid={data.hero.edges[0].node.fluid}>
      <HeroText />
      <Social edges={data.allSocialJson.edges} />
    </Hero>
    <Section id="about-me">
      <ScrollAnimation
        animateIn="bounceInDown"
        animateOnce={true}
        initiallyVisible={false}
      >
        <h1>About Me</h1>
      </ScrollAnimation>
      <Flex alignItems="center" flexDirection="column">
        <Box px={2} width={[1, 1 / 2]}>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce={true}
            delay={1000}
            initiallyVisible={false}
          >
            <h3>
              My name is
              <br /> <strong>Richard Germaine</strong>.
            </h3>
            <h4>I'm a Web Developer from Denver.</h4>
          </ScrollAnimation>
          <ScrollAnimation
            delay={2000}
            animateIn="fadeIn"
            animateOnce={true}
            initiallyVisible={false}
          >
            <h4>Whether you need minor styling on your page,</h4>
          </ScrollAnimation>
          <ScrollAnimation
            delay={3000}
            animateIn="fadeIn"
            animateOnce={true}
            initiallyVisible={false}
          >
            <h4>or a fully functional web app,</h4>
          </ScrollAnimation>
          <ScrollAnimation
            delay={4000}
            animateIn="fadeIn"
            animateOnce={true}
            initiallyVisible={false}
          >
            <h4>
              I can help you with your project using modern developing
              technologies and design.
            </h4>
          </ScrollAnimation>
        </Box>
      </Flex>
    </Section>
    <Section id="portfolio" dark>
      <ScrollAnimation
        duration={2}
        animateIn="bounceInLeft"
        animateOnce={true}
        offset={200}
        initiallyVisible={false}
      >
        <SectionTitle>My Work</SectionTitle>
        <Portfolio edges={data.allPortfolioJson.edges} />
      </ScrollAnimation>
    </Section>
    <Section id="technologies">
      <SectionTitle>
        <ScrollAnimation
          animateIn="bounceInDown"
          animateOnce={true}
          offset={200}
          initiallyVisible={false}
        >
          Technologies
        </ScrollAnimation>
      </SectionTitle>
      <ScrollAnimation
        animateIn="bounceInUp"
        animateOnce={true}
        offset={200}
        initiallyVisible={false}
      >
        <Technologies edges={data.allLogos.edges} />
      </ScrollAnimation>
    </Section>
    <Section id="contact" dark>
      <SectionTitle>
        <ScrollAnimation
          duration={1}
          animateIn="bounceInDown"
          animateOut="bounceOutUp"
          initiallyVisible={false}
        >
          Contact Me
        </ScrollAnimation>
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
          about
          image
          id
          title
          url
          tech
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
