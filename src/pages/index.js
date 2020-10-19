import React, { useState } from 'react';
import { graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import { Flex, Box } from 'rebass';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import ScrollAnimation from 'react-animate-on-scroll';
import Technologies from '../components/Technologies';
import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import HeroText from '../components/HeroText';
import Portfolio from '../components/Portfolio';

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

const IndexPage = ({ data }) => {
  const [activeTab, setActiveTab] = useState('2');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <Layout>
      <Hero fluid={data.hero.edges[0].node.fluid}>
        <HeroText />
      </Hero>
      {/* <MyComponent /> */}
      <Section id="about-me">
        <ScrollAnimation
          animateIn="bounceInDown"
          animateOnce
          initiallyVisible={false}
        >
          <h2>About Me</h2>
        </ScrollAnimation>
        <Flex alignItems="center" flexDirection="column">
          <Box px={2} width={[1, 1 / 2]}>
            <ScrollAnimation
              animateIn="fadeIn"
              animateOnce
              delay={1000}
              initiallyVisible={false}
            >
              <h4>
                My name is
                <br /> <strong>Richard Germaine</strong>.
              </h4>
              <h5>I'm a Developer from Denver.</h5>
            </ScrollAnimation>
            <ScrollAnimation
              delay={2000}
              animateIn="fadeIn"
              animateOnce
              initiallyVisible={false}
            >
              <h5>Whether you need minor styling on a web page,</h5>
            </ScrollAnimation>
            <ScrollAnimation
              delay={3000}
              animateIn="fadeIn"
              animateOnce
              initiallyVisible={false}
            >
              <h5>or the next breakout app,</h5>
            </ScrollAnimation>
            <ScrollAnimation
              delay={4000}
              animateIn="fadeIn"
              animateOnce
              initiallyVisible={false}
            >
              <h5>
                I can help you with your project using modern developing
                technologies and design.
              </h5>
            </ScrollAnimation>
          </Box>
        </Flex>
      </Section>
      <Section id="portfolio" dark>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce
          delay={1000}
          initiallyVisible={false}
        >
          <SectionTitle>My Work</SectionTitle>
        </ScrollAnimation>
        <ScrollAnimation
          duration={2}
          animateIn="bounceInUp"
          animateOnce
          offset={200}
          initiallyVisible={false}
        >
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => {
                  toggle('1');
                }}
              >
                Client Work
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => {
                  toggle('2');
                }}
              >
                Web Apps
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '3' })}
                onClick={() => {
                  toggle('3');
                }}
              >
                Mobile Apps
              </NavLink>
            </NavItem>
          </Nav>
        </ScrollAnimation>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <ScrollAnimation
              duration={2}
              animateIn="bounceInLeft"
              animateOnce
              offset={100}
              initiallyVisible={false}
            >
              <Portfolio edges={data.allClientJson.edges} />
            </ScrollAnimation>
          </TabPane>
          <TabPane tabId="2">
            <ScrollAnimation
              duration={2}
              animateIn="bounceInUp"
              animateOnce
              offset={100}
              initiallyVisible={false}
            >
              <Portfolio edges={data.allPortfolioJson.edges} />
            </ScrollAnimation>
          </TabPane>
          <TabPane tabId="3">
            <ScrollAnimation
              duration={2}
              animateIn="bounceInRight"
              animateOnce
              offset={100}
              initiallyVisible={false}
            >
              <Portfolio edges={data.allMobileJson.edges} />
            </ScrollAnimation>
          </TabPane>
        </TabContent>
      </Section>

      <Section id="technologies">
        <SectionTitle>
          <ScrollAnimation
            animateIn="bounceInDown"
            animateOnce
            offset={200}
            initiallyVisible={false}
          >
            Technologies
          </ScrollAnimation>
        </SectionTitle>
        <ScrollAnimation
          animateIn="bounceInUp"
          animateOnce
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
            animateOnce
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
};

export default IndexPage;

export const pageQuery = graphql`
  query indexQuery {
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
    allMobileJson {
      edges {
        node {
          about
          image
          id
          title
          tech
          url
        }
      }
    }

    allClientJson {
      edges {
        node {
          about
          image
          id
          title
          tech
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
          fixed(height: 90, grayscale: false) {
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
